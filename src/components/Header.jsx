import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
 <>
 <div className='container w-100 bg-transparent d-flex justify-content-md-between justify-content-evenly align-item-center p-3' style={{height:'80px'
 }}>
   <img src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="" height='120%'  />

   <div>
    <select className='bg-transparent text-white border py-2 px-3 d-md-inline d-none ' name="" id="">
         <option value="">English</option>
         <option value="">tamil</option>
         <option value="">malayalam</option>
         
         </select>
   <Link to={'/login'}> <button className='btn btn-danger py-md-2 px-3 ms-0 ms-md-2'>sign in</button></Link>
   </div>

 </div>
 </>
  )
}

export default Header