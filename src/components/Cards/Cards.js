import React from 'react'
import im1 from  './images/im1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faBed ,faBath, faWarehouse , faSignal} from '@fortawesome/free-solid-svg-icons'

function Cards() {
  const style={ fontWeight:'bold' , color:'#6e8892'}
  const iconStyle ={  color:'#bdbdbd' , paddingLeft:'15px'}
  const TextStyle={ fontWeight:'bolder' , color:'#546e79'}
  const CardTextStyle ={fontSize:'13px'}
  const ButtonStyle ={ backgroundColor:' #5e8ea2' ,  color:'white' ,  }
  const ButtonStyle2 ={ backgroundColor:' #1a3d4b' ,  color:'white' ,  }
  
  return (
    <div class='row'>
      <div class='col-md-5'>

      <div class="card" style={{width: '20rem'}}>
  <img src={im1} class="card-img-top" alt="..."/>
  <div class="card-img-overlay d-flex flex-row justify-content-between">
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle}>FEATURING</button>
    </div>
    <div>
    <button type='button' class="btn card-title " style={ButtonStyle2}>FOR SALE</button>

    </div>
    
    
  </div>
  <div>
    
  </div>
  <div class="card-body">
    <p class="card-text" style={TextStyle}>Lily Apartment</p>
    <p class="card-text" >120m² Chavachavdae , Ave 21</p>


    <div class='d-flex flex-row justify-content-between align-items-center '>
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

      

        
    </div>
  )
}

export default Cards