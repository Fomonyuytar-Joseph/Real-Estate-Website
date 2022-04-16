import React from 'react'
import im1 from  './images/im1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faBed ,faBath, faWarehouse} from '@fortawesome/free-solid-svg-icons'

function Cards() {
  const style={ fontWeight:'bold' , color:'#6e8892'}
  const iconStyle ={  color:'#bdbdbd'}
  const TextStyle={ fontWeight:'bolder' , color:'#546e79'}
  return (
    <div class='row'>
      <div class='col-md-5'>

      <div class="card" style={{width: '25rem'}}>
  <img src={im1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text" style={TextStyle}>Lily Apartment</p>
    <p class="card-text" >120m² Chavachavdae , Ave 21</p>


    <div>
      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBed} /></span>
      <p>3 beds</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faBath} /></span>
      <p>2 Baths</p>
      </div>

      <div>
      <span style={iconStyle}><FontAwesomeIcon icon={faWarehouse} /></span>
      <p>1 Garage</p>
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