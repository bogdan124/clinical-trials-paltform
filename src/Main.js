
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/notfound';
import Login from './components/Login/login';
import Profile from './components/Profile/profile';
import HeaderProfile from './components/Profile/components/HeaderProfile/HeaderProfile.js';
import ProfHome from './components/Profile/components/ProfHome/ProfHome.js';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const Main = () => {
    return (
        <Router>
            
            <Routes >
                <Route exact path="/" element={
                  <><Header /> 
                  <Home/>
                 <Footer /></> 
                } />
                <Route path="/about" element={
                      <>
                        <Header /> 
                        <About/>
                        <Footer />
                      </> } />
                <Route path="/contact" element={ 
                    <>
                        <Header />
                        <Contact/>
                        <Footer />
                    </> } />
                <Route path="/login" element={    
                    <>
                        <Header/>
                        <Login/>
                        <Footer />
                    </>
                } />
                <Route path="/notfound" element={
                       <>
                            <Header/>
                            <NotFound/>
                            <Footer />
                        </>
                        } />
                <Route path="/profile" element={
                        <>
                            <HeaderProfile/>
                            <ProfHome/>
                        </>
                        } />
            </Routes >
           
        </Router>
    );
}

export default Main;