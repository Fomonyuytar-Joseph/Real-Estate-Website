import React from 'react'
import './Advert.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


function Advert() {
    
   
  return (
    <div className='main-container'>
        <div  >
        <span ><FontAwesomeIcon icon={faPaperPlane} /></span>
            </div>
            <div>
            <h5>Find Your  Dream Home</h5>
            </div>
            <div>
            <p>We provide variious types of houses from the cheapest to premium</p>
            </div>
            
            
            

        </div>
        
      


   
  )
}

export default Advert