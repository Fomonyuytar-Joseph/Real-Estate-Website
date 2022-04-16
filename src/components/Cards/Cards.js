import React from 'react'
import './Cards.css'
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import p4 from './images/p4.jpg'
import im1 from  './images/im1.jpg'
import im3 from  './images/im3.jpg'
import im2 from  './images/im2.jpg'
import im4 from  './images/im4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faBed ,faBath, faWarehouse , faSignal} from '@fortawesome/free-solid-svg-icons'

function Cards() {
  const style={ fontWeight:'bold' , color:'#6e8892'}
  const iconStyle ={  color:'#bdbdbd' , paddingLeft:'15px'}
  const TextStyle={ fontWeight:'bolder' , color:'#546e79'}
  const CardTextStyle ={fontSize:'13px'}
  const ButtonStyle ={ backgroundColor:' #5e8ea2' ,  color:'white' ,  }
  const ButtonStyle2 ={ backgroundColor:' #1a3d4b' ,  color:'white' ,  }
  const ImageStyle={ marginTop:'-30px' ,height:'70px',width:'70px' , marginRight:'30px'  }
 
  
  
  return (
    <div class='d-flex flex-row justify-content-center flex-wrap'>
    <div class='row'>
      <div class='col-md-3'>

      <div class="card" style={{width: '20rem' }}>
  <img src={im1} class="card-img-top" alt="..."/>
  <div class="card-img-overlay d-flex flex-row justify-content-between z-index-1">
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle}>FEATURING</button>
    </div>
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle2}>FOR SALE</button>

    </div>
   
    
  </div>
  <div class='d-flex flex-row justify-content-end z-index-2 ' style={{marginBottom:'1px'}}>
  <img src={p1}  alt="........." class='rounded-circle img-thumbnail' style={ImageStyle} />
  </div>
  <div class="card-body">
    <p class="card-text" style={TextStyle}>Lily Apartment</p>
    <p class="card-text" >120m² Chavachavdae , Ave 21</p>


    <div class='d-flex flex-row justify-content-between align-items-center ' >
      <div >
      <span  style={iconStyle }><FontAwesomeIcon icon={faBed} /></span>
      <p style={CardTextStyle}>3 beds</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBath} /></span>
      <p style={CardTextStyle}>2 Baths</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faWarehouse} /></span>
      <p style={CardTextStyle}>1 Garage</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faSignal} /></span>
      <p style={CardTextStyle} >12th floor</p>
      </div>








    </div>
  </div>

  <div class="card-footer d-flex  flex-row justify-content-between bg-transparent">
  <div><h5 style={style}>$100.000</h5></div>  

    <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faHeart} /></span>
      

     </div>

  </div>
</div>
      </div>

      <div class='col-md-3'>

      <div class="card" style={{width: '20rem' , marginTop:'20px'}}>
  <img src={im2} class="card-img-top" alt="..."/>
  <div class="card-img-overlay d-flex flex-row justify-content-between z-index-1">
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle}>FEATURING</button>
    </div>
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle2}>FOR SALE</button>

    </div>
   
    
  </div>
  <div class='d-flex flex-row justify-content-end z-index-2 ' style={{marginBottom:'1px'}}>
  <img src={p2}  alt="........." class='rounded-circle img-thumbnail' style={ImageStyle} />
  </div>
  <div class="card-body">
    <p class="card-text" style={TextStyle}>Your Lux House</p>
    <p class="card-text" >120m² Chavachavdae , Ave 21</p>


    <div class='d-flex flex-row justify-content-between align-items-center ' >
      <div >
      <span  style={iconStyle }><FontAwesomeIcon icon={faBed} /></span>
      <p style={CardTextStyle}>4 beds</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBath} /></span>
      <p style={CardTextStyle}>4 Baths</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faWarehouse} /></span>
      <p style={CardTextStyle}>1 Garage</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faSignal} /></span>
      <p style={CardTextStyle} >19th floor</p>
      </div>








    </div>
  </div>

  <div class="card-footer d-flex  flex-row justify-content-between bg-transparent">
  <div><h5 style={style}>$180.000</h5></div>  

    <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faHeart} /></span>
      

     </div>

  </div>
</div>
      </div>



  
      <div class='col-md-3'>

      <div class="card" style={{width: '20rem' , marginTop:'20px'}}>
  <img src={im3} class="card-img-top" alt="..."/>
  <div class="card-img-overlay d-flex flex-row justify-content-between z-index-1">
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle}>FEATURING</button>
    </div>
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle2}>FOR RENT</button>

    </div>
   
    
  </div>
  <div class='d-flex flex-row justify-content-end z-index-2 ' style={{marginBottom:'1px'}}>
  <img src={p3}  alt="........." class='rounded-circle img-thumbnail' style={ImageStyle} />
  </div>
  <div class="card-body">
    <p class="card-text" style={TextStyle}>Apartment At The Heart Of The City </p>
    <p class="card-text" >90m² Rustaveli , Ave 2</p>


    <div class='d-flex flex-row justify-content-between align-items-center ' >
      <div >
      <span  style={iconStyle }><FontAwesomeIcon icon={faBed} /></span>
      <p style={CardTextStyle}>1 beds</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBath} /></span>
      <p style={CardTextStyle}>1 Baths</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faWarehouse} /></span>
      <p style={CardTextStyle}>1 Garage</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faSignal} /></span>
      <p style={CardTextStyle} >2th floor</p>
      </div>








    </div>
  </div>

  <div class="card-footer d-flex  flex-row justify-content-between bg-transparent">
  <div><h5 style={style}>$70.000</h5></div>  

    <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faHeart} /></span>
      

     </div>

  </div>
</div>
      </div>

   <div class='col-md-3'>

      <div class="card" style={{width: '20rem' , marginTop:'20px'}}>
  <img src={im4} class="card-img-top" alt="..."/>
  <div class="card-img-overlay d-flex flex-row justify-content-between z-index-1">
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle}>FEATURING</button>
    </div>
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle2}>FOR Rent</button>

    </div>
   
    
  </div>
  <div class='d-flex flex-row justify-content-end z-index-2 ' style={{marginBottom:'1px'}}>
  <img src={p4}  alt="........." class='rounded-circle img-thumbnail' style={ImageStyle} />
  </div>
  <div class="card-body">
    <p class="card-text" style={TextStyle}> Apartment At The Heart Of The City</p>
    <p class="card-text" >50m² Rustavele , Ave 2</p>


    <div class='d-flex flex-row justify-content-between align-items-center ' >
      <div >
      <span  style={iconStyle }><FontAwesomeIcon icon={faBed} /></span>
      <p style={CardTextStyle}>2 beds</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBath} /></span>
      <p style={CardTextStyle}>1 Baths</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faWarehouse} /></span>
      <p style={CardTextStyle}>1 Garage</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faSignal} /></span>
      <p style={CardTextStyle} >2th floor</p>
      </div>








    </div>
  </div>

  <div class="card-footer d-flex  flex-row justify-content-between bg-transparent">
  <div><h5 style={style}>$70.000</h5></div>  

    <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faHeart} /></span>
      

     </div>

  </div>
</div>
      </div>
      

        
    </div>
    </div>

  )
}

export default Cards