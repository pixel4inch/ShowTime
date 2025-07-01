import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

{/*=== COMPONENTS & PAGES=== */}
import {Header, Footer, AdminHeader, AdminFooter} from './Components';
import {Home, Favorite, Movies, MovieDetails, SeatLayout, MyBookings, Admin, ContactUs, Aboutus, PrivacyPolicy } from './Pages';

{/*=== DEPENDENCES = */}

import {Toaster} from 'react-hot-toast'


function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
    {isAdminRoute ? <AdminHeader/> : <Header/>}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/mybookings' element={<MyBookings/>}/>
        <Route path='/admin' element={<Admin/>}/>
         <Route path='/contactus' element={<ContactUs/>}/>
         <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
       </Routes>
      {isAdminRoute ?<AdminFooter/> : <Footer/> } 
    </>
  );
}

export default App;
