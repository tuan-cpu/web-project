const express = require('express')
const router = new express.Router()
const fetch = require('node-fetch')
const Movie = require('../models/movie')
const Cinema = require('../models/cinema')
const Genre = require('../models/genre')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')
const Schedule = require('../models/schedule')
const API_KEY = process.env.TMDB_API_KEY

router.get('/movies?', async (req, res) => {
    var query = req.query
    var sort = {}
    if (!query.limit) {
        query.limit = 10
    }
    if (query.title) {
        query.title = { "$regex": query.title }
        
    }
    if (query.genre) {
        const genresQuery = query.genre.split(',') 
        var genresObjId = await Genre.find({
            "name": { $in: genresQuery}
        }, '_id')

        var genresId = genresObjId.map(a => a._id)
        query["genre"] = {$all: genresId}
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]
    }
    const movies = await Movie.find(query).populate([
        {
            path: "genre",
            model: Genre
        },
        {
            path: "availableSchedule",
            model: Schedule
        }
    ]).sort(sort).limit(parseInt(query.limit))


    try {
        res.status(201).send(movies)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/movie/:id', async (req, res) => {
    const id = req.params.id
    
    let movieData = await Movie.findById(id).populate([
        {
            path: "genre",
            model: Genre
        },
        {
            path: "availableSchedule",
            model: Schedule
        }
    ])
    let i = 0;
    let movie = JSON.parse(JSON.stringify(movieData));
    for await (let schedule of movie.availableSchedule) {
        const cinemaName = await Cinema.findById(schedule.cinema)
        // console.log(cinemaName.name);
        movie.availableSchedule[i].cinemaName = cinemaName.name
        console.log(movie.availableSchedule[i]["cinemaName"]);
        i++
    }
    // console.log(movie.availableSchedule[1]);
    try {
        res.status(201).send(movie)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/upcoming?', async (req, res) => {
    var query = req.query
    var sort = {}
    if (!query.limit) {
        query.limit = 10
    }
    if (query.title) {
        query.title = { "$regex": query.title }
    }

    if (query.genre) {
        const genresQuery = query.genre.split(',') 
        var genresObjId = await Genre.find({
            "name": { $in: genresQuery}
        }, '_id')

        var genresId = genresObjId.map(a => a._id)
        query["genre"] = {$all: genresId}
    }
    query["released"] = {"$gt" : new Date()}

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]
    } else {
        sort["released"] = 'asc'
    }
    const movies = await Movie.find(query).populate([
        {
            path: "genre",
            model: Genre
        }
    ]).sort(sort).limit(parseInt(query.limit))


    try {
        res.status(201).send(movies)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.get('/nowplaying?', async (req, res) => {
    var query = req.query
    var sort = {}
    if (!query.limit) {
        query.limit = 10
    }
    if (query.title) {
        query.title = { "$regex": query.title }
        
    }

    if (query.genre) {
        const genresQuery = query.genre.split(',') 
        var genresObjId = await Genre.find({
            "name": { $in: genresQuery}
        }, '_id')

        var genresId = genresObjId.map(a => a._id)
        query["genre"] = {$all: genresId}
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1]
    } else {
        sort["released"] = 'asc'
    }

    const movieInSchedule = await Schedule.find().select('movie').distinct('movie')

    query['_id'] = {$in: movieInSchedule}

    const movies = await Movie.find(query).populate([
        {
            path: "genre",
            model: Genre
        },
        {
            path: "availableSchedule",
            model: Schedule
        }
    ]).sort(sort).limit(parseInt(query.limit))


    try {
        res.status(201).send(movies)

    } catch (error) {
        res.status(400).send(error)
    }
    
})

router.post('/movie', auth, async (req, res) => {
    if (req.user.role != 'admin') {
        res.status(401).send("No permission")
        return
    }
    let movieId = req.query.id
    const apiUrl =`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=release_dates,videos,credits`
    const imagePathPrefix = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
    const youtubePrefix = 'https://www.youtube.com/watch?v='

    let movieData = {}
    try {
        const response = await fetch(apiUrl);
        movieData = await response.json();
    } catch(error) {
        console.log(error);
    }

    release_dates = movieData.release_dates.results.filter(obj => obj.iso_3166_1 == 'US')
    certification = ""
    if (release_dates) {
        for (const loc of release_dates[0].release_dates) {
            if (loc.certification != "") {
                certification = loc.certification
            }
        }
    } 

    release_date = movieData.release_date

    let genres = []
    for await (const genre of movieData.genres) {
    
        const genreQuery = await Genre.findOne({name: genre.name})
        if (!genreQuery) {
            const newGenreId = new mongoose.Types.ObjectId()
            const newGenre = new Genre({
                _id: newGenreId,
                name: genre.name
            })

            await newGenre.save()
            genres.push(newGenreId)
        } else {
            genres.push(genreQuery._id)
        }
        
    }

    const actors = movieData.credits.cast.map(item => item.name).slice(0, 5)
    const director = movieData.credits.crew.filter(item => item.job == 'Director')[0].name
    
    const movieObj = Movie({
        title: movieData.title,
        certification: certification,
        released: release_date,
        runtime: movieData.runtime,
        genre: genres,
        director: director,
        actors: actors,
        description: movieData.overview,
        languages: movieData.spoken_languages.map(item => item.english_name),
        poster: imagePathPrefix + movieData.poster_path,
        trailer: youtubePrefix + movieData.videos.results[0].key,
        idbmRating: movieData.vote_average
    })

    try {
        await movieObj.save()
        res.status(201).send(movieObj)

    } catch (error) {
        res.status(400).send(error)
    }

})


function addDays(date, days) {
    return new Date(date.getTime() + days);
}

module.exports = router