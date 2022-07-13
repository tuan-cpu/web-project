# Movie Ticket Booking Web Application

## Prerequisites
Before continuing, ensure you meet one of the two following sets of requirements:
### 1. Direct setup
* Node.js 16.13.1 or higher
* MongoDB 5.0 or higher
### 2. Through Docker
* Docker 18.04 or higher
* Docker-compose 3.0 or higher

## Installations
The following guides are expected to be done in terminal (Linux) or command prompt (Windows).
### 1. Direct setup
* Git clone the source code.
```bash
git clone https://github.com/tuan-cpu/web-project.git
```
* Go to the recipe-web-app directory.
* Start the client engine:
```bash
cd ./client
npm install 
npm start
```
* Start the server engine:
```bash
cd ./server
npm ci
npm run dev
```
* Now, you can use the web app at `localhost:3000`
### 2. Through Docker
* Git clone the source code.
* Go to the web-project directory.
* Pull images from Docker Hub
```bash
docker-compose pull
```
* Start containers:
```bash
docker-compose up
```
* Now, you can use the web app at `localhost:8080`

## Contributing
We are more than happy to receive your contribution to the project.
1. Git clone the source code.
2. Create and checkout to your own branch.
```bash
git checkout -b [your-branch]
```
3. Make your changes on the code.
4. Commit your changes.
```bash
git commit -m "[message]"
```
5. Push it.
```bash
git push
```
6. Create a [new pull request](https://github.com/tuan-cpu/web-project/pulls) in this repository.
