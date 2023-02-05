import React from 'react';
import './about.css'
import heroimg from '../../img/hero.jpg'
import Fade from 'react-reveal/Fade';
import {FaMedal} from "react-icons/fa";

const about = () => {
    return (
        <div className='about'>
            <div className='about-header'>
            <h1 className='section-head'>About me</h1>
                 <p className='section-sub'>My introducatio</p>
            </div>
            <div className='about-section'>
            <div className='imagesection'>
            <div className='about-photo'>
                <Fade bottom>
                    <img className='about-img' src={heroimg} alt="ajayprasath" />
                    </Fade>
                </div>
            </div>
            <Fade top>
                <div className='aboutsection'>
                <div className='aboutme-card'>
                <div className='aboutme-box'>
                    <FaMedal className="contact-icon"/>
                <p className='contact-text'>Experience</p>
                <p className='withme'>1 + years</p>
                </div>
                <div className='aboutme-box'>
                <i class="fa fa-check contact-icon"></i>
                <p className='contact-text'>Completed</p>
                <p className='withme'>10 + projects</p>
                </div>
                <div className='aboutme-box'>
                <i class="fa fa-headphones contact-icon"></i>
                <p className='contact-text'>Supports</p>
                <p className='withme'>Online 24/7</p>
                </div>
                </div>
                <p>UI/UX designer , I create web pages UI /UX userinterface ,<br/>
                   Ihave years of experience and many clients are happy with <br/>
                   the projects carried out.</p>
                   <button>Download cv <i class="fa fa-file sendicon"></i></button>

                
            </div>
            </Fade>
            </div>

        </div>
    );
};

export default about;