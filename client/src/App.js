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
import Ticket from './component/Ticket';
import AllMovie from './component/AllMovie/AllMovie';
import SignIn from './component/Auth/SignIn';
import SignUp from './component/Auth/SignUp';
import Recover from './component/Auth/Recover';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all/:category' element={<AllMovie/>}/>
        <Route path='/:keyword' exact element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/recover' element={<Recover/>}/>
        </Routes>
        </div>
        <Routes>
          
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
