import React from 'react'
import '../pages/Home.css'

function Login() {
  return (
    <div className='headers'>
         <div className='container-fluid w-100 bg-transparent d-flex justify-content-between align-item-center p-3' style={{height:'80px'
 }}>
   <img src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="" height='120%' />

   <div>
   {/* empty */}
   </div>

 </div>
 {/* ----------------------------------------------- */}
<div className='d-flex align-items-center justify-content-center pt-3 mt-2 '>
    <div style={{width:'450px',height:'100%'}} className='p-5 coloring rounded-4' >
         <h3 style={{fontWeight:'600'}}>Sign in</h3>
         <input type="text" className='form-control bg-transparent my-3 p-3 border' placeholder='Email or Number' />
         <input type="text" className='form-control bg-transparent my-3 p-3 border' placeholder='Password' />
         <button className='btn btn-danger mt-2 px-5 py-2' style={{width:'100%',fontWeight:'600'}}>sign in</button>
         <p className='text-center mt-2'>OR</p>
         <button  className='btn px-5 py-2 btn-secondary' id=' greying' style={{width:'100%',fontWeight:'600'}}>use a sign-in code</button>

         <p className='text-center text-white my-3'>Forgot Password?</p>
      <div className='d-flex '>
      <input type="checkbox" /><p className='pt-3 ms-2 text-white'>remember me</p>
      </div>
      <p style={{fontSize:'18px'}}>New to Netflix?<span className='text-white ms-2' style={{fontWeight:'600'}}>sign up now</span></p>

      <p style={{fontSize:'12px'}}>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <a style={{textDecoration:'none'}} href="">Learn more.</a></p>


    </div>
</div>

    </div>
  )
}

export default Login