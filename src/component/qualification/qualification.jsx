import React from 'react';
import './qualification.css'
import {FaGraduationCap,FaSuitcase} from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const qualification =()=>{
    return(
        <div className='qualification'>
             <div className='qualification-header'>
                <h1 className='qu-head'>Qualification</h1>
                 <p className='qu-sub'>My Personal journey</p>
             </div>
             <div className='qualification-header2'>
                  <p><FaGraduationCap/><span>Education</span> </p>
                  <p><FaSuitcase/><span>Experience</span> </p>
             </div>
             <div className='qualification-section'>
                 <div className='education'>
                    <Fade left>
                    <div className='schoole'>
                        <h4>Higher Education</h4>
                        <h7>St. Ann's Higher Secondary School<br/>Tindivanam, Tamil Nadu<br/>2006-2012</h7>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className='bsc'>
                        <h4>Bachelor degree in computer science</h4>
                        <h7>Loyola College<br/>chennai, Tamil Nadu<br/>2012-2014</h7>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className='mca'>
                        <h4>Master of computer application</h4>
                        <h7>St.joseph college<br/>trichy, Tamil Nadu<br/>2016-2019</h7>
                    </div>
                    </Fade>
                 <div className='dot-1'></div>
                 <div className='dot-2'></div>
                 <div className='dot-3'></div>
                 <div className='dot-4'></div>
                 <div className='dot-5'></div>

                 </div>
                 <div className='experience'>
                 <Fade right>
                    <div className='isthara'>
                        <h4>Mobile app developer </h4>
                        <h7>Isthara<br/>hyderabad, India<br/>2019-2021</h7>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className='newgen'>
                        <h4>Front end developer</h4>
                        <h7>Newgen knowledgeworks<br/>chennai, Tamil Nadu<br/>2021 - Present </h7>
                    </div>
                    </Fade>
                 </div>
             </div>

        </div>
    )
}

export default qualification;