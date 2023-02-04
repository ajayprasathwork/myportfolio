import React from 'react';
import './footer.css'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillFacebook} from "react-icons/ai";

const Footer=()=>{
    return(
        <div className='footer'>
             <div><h1>Ajay<span>Prasath</span></h1></div>
             <div className='footerlink'>
                <h3>About </h3>
                <h3>projects </h3>
                <h3>Services </h3>
              </div>
             <div className='footersm'>
                <AiFillFacebook className='footer-icon fb'/>
                <AiFillTwitterCircle className='footer-icon tw'/>
                <AiFillLinkedin className='footer-icon ln'/>
                <AiFillInstagram className='footer-icon in'/>
             </div>
             <div className='rights'>@ajayprasath. All rights reserved</div>
        </div>
    )
}

export default Footer;