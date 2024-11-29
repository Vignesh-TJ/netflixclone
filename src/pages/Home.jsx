import React from 'react'
import '../pages/Home.css'
import Header from '../components/Header'
import Body from '../components/Body'

function Home() {
  return (
   <>
   <div className='header '>
    <Header/>
    <div className='d-flex  justify-content-center align-items-center mt-5' style={{height:'80vh'}}>
        <div>
            <h1 className='text-center' style={{fontWeight:'800'}}>Unlimited movies, TV </h1>
            <h1 className='text-center' style={{fontWeight:'800'}}>Shows and more</h1>
            <p className='text-center' >Starts at $149. Cancel at any time</p>
            <br />
            <h5 style={{fontStyle:'italic'}} >Ready to watch? Enter your Email to create or restart your membership.</h5>
            <div className='d-md-flex mt-md-3  '><input className='form-control bg-transparent border py-3 ms-5 me-3'  placeholder='Email Address' style={{width:'70%',fontWeight:'800'}} type="text" />
            <button className='btn btn-danger py-3 mt-md-0 mt-2 ms-md-0 ms-5' style={{fontSize:'20px',fontWeight:'600'}}>Get Started </button></div>
        </div>
    </div>

   </div>
   <Body/>
   
   </>
  )
}

export default Home