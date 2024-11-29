import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Reasons from './Reasons';
import Frequent from './Frequent';
function Body() {
  return (
    <div className='container p-5' style={{height:'100%'}}>
        <h5>Trending Now</h5>
        <select className='bg-transparent text-white border py-2 px-3 d-block d-md-inline rounded ' name="" id="">
         <option value="">India</option>
         <option value="">America</option>
         <option value="">Antartica</option>

         <br />
         
         </select>
         <select className='bg-transparent text-white border py-2 px-3  mt-3  ms-2 rounded' name="" id="">
         <option value="">Movies</option>
         <option value="">Series</option>
         <option value="">Anime</option>
         
         </select>
         <div className='container 'style={{height:'100%'}}>
          <div className="row  my-5 "style={{height:'100%'}}>
            <div className="col-md-2">   <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/mSzSIygYwt690vvlE4qkLv2N3RQ.jpg" />
      
    </Card></div>
            <div className="col-md-2">    <Card style={{ width: '100%',height:'50%' }}>
            <Card.Img className='img-fluid' variant="top" src="https://th.bing.com/th/id/OIP.duDS3LgxOrblv7KQ7S9ZgQHaLj?rs=1&pid=ImgDetMain" />   
            </Card></div> 
            <div className="col-md-2">  <Card style={{ width: '100%',height:'80%' }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.iiTEAcy3RNnWogfjuGd7JQHaK-?rs=1&pid=ImgDetMain" />
            </Card></div>
            <div className="col-md-2">    <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aea32f95081205.5e8edb40465ea.jpg" />
      
    </Card></div>
            <div className="col-md-2">
              
    <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.S9lxno9cwRng3ggpogQKDAHaLk?rs=1&pid=ImgDetMain" />
      
    </Card>
            </div>
            <div className="col-md-2">   <Card style={{ width: '100%',height:'90%' }}>
      <Card.Img variant="top" src="https://cdn.traileraddict.com/content/marvel-studios/thor_dark_world-3.jpg" />
      
    </Card></div>
          
          
          </div>
          {/* second part */}

          <div className="row  my-5 "style={{height:'100%'}}>
            <div className="col-md-2">   <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/mSzSIygYwt690vvlE4qkLv2N3RQ.jpg" />
      
    </Card></div>
            <div className="col-md-2">    <Card style={{ width: '100%',height:'50%' }}>
            <Card.Img className='img-fluid' variant="top" src="https://th.bing.com/th/id/OIP.duDS3LgxOrblv7KQ7S9ZgQHaLj?rs=1&pid=ImgDetMain" />   
            </Card></div> 
            <div className="col-md-2">  <Card style={{ width: '100%',height:'80%' }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.iiTEAcy3RNnWogfjuGd7JQHaK-?rs=1&pid=ImgDetMain" />
            </Card></div>
            <div className="col-md-2">    <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aea32f95081205.5e8edb40465ea.jpg" />
      
    </Card></div>
            <div className="col-md-2">
              
    <Card style={{ width: '100%',height:'80%' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.S9lxno9cwRng3ggpogQKDAHaLk?rs=1&pid=ImgDetMain" />
      
    </Card>
            </div>
            <div className="col-md-2">   <Card style={{ width: '100%',height:'90%' }}>
      <Card.Img variant="top" src="https://cdn.traileraddict.com/content/marvel-studios/thor_dark_world-3.jpg" />
      
    </Card></div>
          
          
          </div>

 
      
   


         </div>
             
        

        <Reasons/>
        <Frequent/>
        <div className='mt-5'>
         <h5 className='mt-5 text-center' style={{fontStyle:'italic'}} >Ready to watch? Enter your Email to create or restart your membership.</h5>
            <div className='d-md-flex mt-md-3  '><input className='form-control bg-transparent border py-3 ms-5 me-3'  placeholder='Email Address' style={{width:'70%',fontWeight:'800'}} type="text" />
            <button className='btn btn-danger py-3 mt-md-0 mt-2 ms-md-0 ms-5' style={{fontSize:'20px',fontWeight:'600'}}>Get Started </button></div>
        </div>
         </div>



  )
}

export default Body