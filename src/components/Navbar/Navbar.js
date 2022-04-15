import React from 'react'
import './Navbar.css'
import { ImHome } from 'react-icons/im';

function Navbar() {
  const ButtonStyle ={ backgroundColor:' #5e8ea2' ,  color:'white' }
  return (
    
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    
    <a className="navbar-brand " href="#">
    <ImHome color='#5e8ea2' size={"1.5em"} style={{marginBottom:'12px'}}/><b style={{ color: '#5e8ea2'} }> Estately</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className=' d-flex justify-content-evenly'>
      <div className='p-2 test'>Home</div>
      <div className='p-2 test'>Our Properties</div>
      <div className='p-2 test'>Agents</div>
      <div className='p-2 test'>Blogs</div>
      <div className='p-2 test'>Login/signup</div>
       <button type="button" class="btn  test" style={ButtonStyle}>Contact Us</button>
     
    

    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar