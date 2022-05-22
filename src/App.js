import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import MovieDetail from "./component/MovieDetail";
import PageNotFound from "./component/PageNotFound";
import OrderPage from './component/OrderPage';
import Payment from './component/Payment';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:keyword' exact element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
        <Route path='/order/:imdbID' element={<OrderPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/payment' element={<Payment/>}/>
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
