import React from 'react'
import './Advert.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane ,faShield ,faLock} from '@fortawesome/free-solid-svg-icons'


function Advert() {
    
   
  return (
    <div className='main-disp d-flex justify-content-around'>
      <div className='main-cont'>
        <div  >
        <span  className='TextLogo'><FontAwesomeIcon icon={faPaperPlane} /></span>
            </div>
            <div>
            <h5>Find Your  Dream Home</h5>
            </div>
            <div className='lastText'>
            <p>We provide variious types of houses from the cheapest to premium</p>
            </div>
            
            
            

        </div>

        <div className='main-cont'>
        <div  >
        <span  className='TextLogo'><FontAwesomeIcon icon={faShield} /></span>
            </div>
            <div>
            <h5>Best Quality Guarantee</h5>
            </div>
            <div className='lastText'>
            <p>if you buy or rent a house with us you are guaranteed with the best quality</p>
            </div>
            
            
            

        </div>

        <div className='main-cont'>
        <div  >
        <span  className='TextLogo'><FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div>
            <h5>100% safe transactions</h5>
            </div>
            <div className='lastText'>
            <p>Your transactions will be always kept safe and conditional no matter</p>
            </div>
            
            
            

        </div>

        <div className='main-cont'>
        <div  >
        <span  className='TextLogo'><FontAwesomeIcon icon={faLock} /></span>
            </div>
            <div>
            <h5>Low Cost on Taxes</h5>
            </div>
            <div className='lastText'>
            <p>Buying or renting a house through our company you get discount on taxes</p>
            </div>
            
            
            

        </div>
    </div>
    
        
      


   
  )
}

export default Advert