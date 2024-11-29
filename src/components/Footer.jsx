import React from 'react'

function Footer() {
  return (
    <div className='bg-black p-5' style={{height:'100%'}}>
        <div>
      
         <div className="row bg-black m-5 ">
         <h6 className='ms-5 '>Questions? call 000-800-919-1696</h6>
            <div className="col-md-3 d-md-flex align-items-center justify-content-center mt-3">
               <div>
               <a className='text-white  ' href=""><p>FAQ</p></a>
               <a className='text-white ' href=""> <p>invester relation</p></a>
               <a className='text-white ' href=""><p>privacy</p></a>
               <a className='text-white ' href=""> <p>speed test</p></a>
               <select  className='bg-transparent text-white border py-2 px-3 text-white mt-2' name="" id="">
         <option value="">English</option>
         <option value="">tamil</option>
         <option value="">malayalam</option>
         
         </select>
        
               </div>

            </div>
            <div className="col-md-3 mt-3  d-md-flex align-items-center justify-content-center">
              <div>  <p className='text-white '><a className='text-white m-2' href="">help center</a></p>
              <a className='text-white ' href=""><p className='text-white '>jobs</p></a>
              <p className='text-white '><a className='text-white ' href="">cookie preference</a></p>
              <a className='text-white ' href=""><p className='text-white '>Legal Notices</p></a>
              </div>
            </div>
            <div className="col-md-3 mt-3 d-md-flex align-items-center justify-content-center">
              <div> <a className='text-white' href=""> <p>Account</p></a>
              <a className='text-white ' href=""> <p>Ways to watch</p></a>
              <a className='text-white ' href=""> <p>Coporate information </p></a>
              <a className='text-white ' href=""> <p>only on Netflix</p></a>
              </div>
            </div>
            <div className="col-md-3 mt-3  d-md-flex align-items-center justify-content-center">
      <div>      <a className='text-white' href=""> <p>media center</p></a>
      <a className='text-white ' href=""> <p>Terms of use</p></a>
      <a className='text-white' href=""> <p>Contact us</p></a>
  
      
      
      
      
      </div>
            </div>
         </div>

        </div>

        <p className='text-danger mt-5'>netflix india</p>
    </div>
  )
}

export default Footer

