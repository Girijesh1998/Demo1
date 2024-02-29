import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/pages/Home/Home';
import Blog from './Component/pages/Blog/Blog';
import Contact from './Component/pages/Contact/Contact';
import Footer from './Component/pages/Footer/Footer';
import About from './Component/pages/About/About';
import Course from './Component/pages/Course/Course';


export default function App() {
  return (
    //https://academist.qodeinteractive.com/childrens-school/
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='About' element={<About />} />
            <Route path='Course' element={<Course />} />
            <Route path='Contact' element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

