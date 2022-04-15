import React from 'react';
import './Showcase.css'
import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'

function Showcase() {
    const style={ fontWeight:'bold' , color:'#6e8892'}
    const TextStyle={ fontWeight:'bolder' , color:'#546e79'}
    const showCaseStyle ={ marginTop:'50px'}
    const TabtextStyle={  color: '#5e8ea2' , fontWeight: 'bold' }
   const ButtonStyle ={ backgroundColor:' #5e8ea2' ,  color:'white' , width:'160px' , height:'60px'}
  return (
      <>
    <div className='showcase d-flex flex-column justify-content-center  '>
        <div  className='showcaseText adjust'>
        <h1>Find your next <span style={{color:'#5e8ea2'}}>perfect</span>  <br/> place with ease</h1>
        <p> Estately will help you find your home fast , easy and comfortable.</p>
        <p> Our expert support are always available Let's start now</p>
        </div>

        <div className='showcaseText' style={showCaseStyle}>
        <p><span style={style}><HiHome color='#5e8ea2' size={'1.4em'}/>$20.5M</span> Earned through property transactions</p>
        <p><span style={style}><RiMoneyDollarBoxFill color='#5e8ea2' size={'1.4em'} />19k +</span> Properties in the system to buy and sell</p>
        </div>

       
        <div class="container my-5 tab rounded "  >
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist" >

        <button class="nav-link active  "  style={TabtextStyle} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Rent</button>

        <button class="nav-link" style={TabtextStyle}  id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Buy</button>

        <button class="nav-link" style={TabtextStyle}  id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Co-Living</button>

      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">

      <div class="tab-pane fade show active p-3 rounded-bottom  Small shadow" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
        <div className='main-container'>
          <div className='element1'>
            <p>location</p>
            <p style={TextStyle}>Tibilisi</p>
          </div>

          <div className='element2'>
            <p>Property Type</p>
            <p style={TextStyle}>Private House</p>
          </div>

          <div className='element3'>
            <p>Property Size</p>
            <p style={TextStyle}>120m² - 150m²</p>
          </div>

          <div className='element4'>
            <p>Property Price Range</p>
            <p style={TextStyle}>$85000 - $95000m²</p>
          </div>

           <div className='element5'>
           <button type="button" class="btn  btn-lg " style={ButtonStyle}>Search</button>
           </div>

        </div>
      </div>

      <div class="tab-pane fade p-3 rounded-bottom Small shadow" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <div className='main-container'>
          <div className='element1'>
            <p>location</p>
            <p style={TextStyle}>Tibilisi</p>
          </div>

          <div className='element2'>
            <p>Property Type</p>
            <p style={TextStyle}>Private House</p>
          </div>

          <div className='element3'>
            <p>Property Size</p>
            <p style={TextStyle}>120m² - 150m²</p>
          </div>

          <div className='element4'>
            <p>Property Price Range</p>
            <p style={TextStyle}>$85000 - $95000m²</p>
          </div>

           <div className='element5'>
           <button type="button" class="btn  btn-lg " style={ButtonStyle}>Search</button>
           </div>

        </div>
        
      </div>

      <div class="tab-pane fade p-3  rounded-bottom  Small shadow " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <div className='main-container'>
          <div className='element1'>
            <p>location</p>
            <p style={TextStyle}>Tibilisi</p>
          </div>

          <div className='element2'>
            <p>Property Type</p>
            <p style={TextStyle}>Private House</p>
          </div>

          <div className='element3'>
            <p>Property Size</p>
            <p style={TextStyle}>120m² - 150m²</p>
          </div>

          <div className='element4'>
            <p>Property Price Range</p>
            <p style={TextStyle}>$85000 - $95000m²</p>
          </div>

           <div className='element5'>
           <button type="button" class="btn  btn-lg " style={ButtonStyle}>Search</button>
           </div>

        </div>
        
      </div>
      
    </div>
  </div>

    </div>
 
    </>
  )
}

export default Showcase