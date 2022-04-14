import React from 'react';
import './Showcase.css'
import {RiMoneyDollarBoxFill} from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'

function Showcase() {
    const style={ fontWeight:'bold' , color:'#6e8892'}
    const showCaseStyle ={ marginTop:'50px'}
  return (
      <>
    <div className='showcase d-flex flex-column justify-content-center  '>
        <div  className='showcaseText'>
        <h1>Find your next <span style={{color:'#5e8ea2'}}>perfect</span>  <br/> place with ease</h1>
        <p> Estately will help you find your home fast , easy and comfortable.</p>
        <p> Our expert support are always available Let's start now</p>
        </div>

        <div className='showcaseText' style={showCaseStyle}>
        <p><span style={style}><HiHome color='#5e8ea2' size={'1.4em'}/>$20.5M</span> Earned through property transactions</p>
        <p><span style={style}><RiMoneyDollarBoxFill color='#5e8ea2' size={'1.4em'} />19k +</span> Properties in the system to buy and sell</p>
        </div>



    </div>
    <div class="container my-5">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">

        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>

        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>

        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>

      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">

      <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <h2>Home</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio provident corporis aut, ipsa tenetur vel illo excepturi voluptate molestiae magnam, totam est id alias dicta a assumenda corrupti et repellat.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio provident corporis aut, ipsa tenetur vel illo excepturi voluptate molestiae magnam, totam est id alias dicta a assumenda corrupti et repellat.</p>
      </div>

      <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <h2>Profile</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate nam aperiam possimus, ratione modi enim inventore reiciendis ipsum mollitia, adipisci accusamus! Dolorem omnis illo incidunt ex, sit minus numquam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate nam aperiam possimus, ratione modi enim inventore reiciendis ipsum mollitia, adipisci accusamus! Dolorem omnis illo incidunt ex, sit minus numquam.</p>
      </div>

      <div class="tab-pane fade p-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates nostrum vel officiis! Magni animi assumenda numquam exercitationem facilis! Excepturi, doloremque illo. Voluptate, natus molestias? Enim repellendus earum ad sunt!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates nostrum vel officiis! Magni animi assumenda numquam exercitationem facilis! Excepturi, doloremque illo. Voluptate, natus molestias? Enim repellendus earum ad sunt!</p>
      </div>
      
    </div>
  </div>
    </>
  )
}

export default Showcase