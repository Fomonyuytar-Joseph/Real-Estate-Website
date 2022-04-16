import React from 'react';
import './info.css'
import b1 from './images/b1.jpg';
import b3 from './images/b3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck ,faClock ,faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Info() {
    const imageSizeStyle={ width:'400px' , height:'240px' , borderRadius:'5px'}
    const TextStyle={  fontWeight:'bolder'}
    const minimizeText={fontSize:'12px'}
    const topPad={marginTop:'60px'}
    const marginPad={marginTop:'80px'}
    
  return (
    <>
    <div className='d-flex flex-row justify-content-around flex-wrap' style={topPad}>
        <div>
        <div className='first-image '>
            <img src={b1}  alt="......"  style={{...imageSizeStyle ,zIndex:'1'}}/>
             
        </div>

        <div className='second-image '>
            <img src={b3}  alt="......" style={{...imageSizeStyle , zIndex:'2', marginLeft:'60px', marginTop:'-150px'}} />
             
        </div>
        </div>
        <div style={marginPad}>
            <p><span style={TextStyle} >About</span> Our Company</p>
            <h3  >We are Offering the Best Real Estate Deals</h3>
            <p  style={minimizeText} >We are already more than 7,000 homes and we are still going at very good pace</p>
            <div className='d-flex flex-row justify-content-start justify-content-around'>
            <p className='logo'><FontAwesomeIcon icon={faCircleCheck}/></p>
           <p className='Consultant-logo'><FontAwesomeIcon icon={faClock} /> 24H consultant</p> 
           <p className='logo'><FontAwesomeIcon icon={faBriefcase}/></p> 

        </div>
        </div>
        
    </div>
    </>
  )
}

export default Info