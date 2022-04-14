import React from 'react';
import './Showcase.css'
import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'

function Showcase() {
    const style={ fontWeight:'bold' , color:'#6e8892'}
    const showCaseStyle ={ marginTop:'50px'}
  return (
    <div className='showcase'>
        <h1>Find your next <span style={{color:'#5e8ea2'}}>perfect</span>  <br/> place with ease</h1>
        <p> Estately will help you find your home fast , easy and comfortable.</p>
        <p> Our expert support are always available Let's start now</p>

        <div className='showcaseText' style={showCaseStyle}>
        <p><span style={style}><HiHome color='#5e8ea2' size={'1.4em'}/>$20.5M</span> Earned through property transactions</p>
        <p><span style={style}><RiMoneyDollarBoxFill color='#5e8ea2' size={'1.4em'} />19k +</span> Properties in the system to buy and sell</p>
        </div>

    </div>
  )
}

export default Showcase