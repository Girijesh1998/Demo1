import React from 'react'
import Slid from './Slid/Slid';
import Contact from '../Contact/Contact';
import Myteam from '../Myteam/Myteam';
import Teamslid from '../team-slid/Teamslid';
import Sdule from '../Sdule_slid/Sdule';
import './Home.css'

const Home = () => {
  return (
    <div className="container-fluid">
      <Slid/>
      <div className='mt-5'>
      <Myteam /> 
      </div>
      <div className='mt-5'>
      <Teamslid/> 
      </div>
      <Sdule />
      <div className='mt-5'>
      <Contact/> 
      </div>  
    </div>
  )
}

export default Home;