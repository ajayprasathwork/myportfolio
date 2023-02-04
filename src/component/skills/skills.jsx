import React from 'react';
import './skills.css'
import Fade from 'react-reveal/Fade';
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import {IoLogoCss3,IoLogoJavascript} from "react-icons/io";
import {DiReact,DiJava,DiVisualstudio} from "react-icons/di";
import {TbBrandReactNative} from "react-icons/tb";

const skills = () => {
    return (
        <div  className='skills'>
           <div className='contact-header'>
                 <h1 className='section-head'>Skills</h1>
                 <p className='section-sub'>My  technical level</p>
            </div> 
            <div className='row'>
                <Fade left>
                <div className='box item-1'>
                  <AiFillHtml5 className='box-icon htmlcolor'/>
                </div>
                <div className='box item-2'>
                <IoLogoCss3 className='box-icon'/>

                </div>
                <div className='box item-3'>
                <IoLogoJavascript className='box-icon htmlcolor'/>

                </div>
                <div className='box item-4'>
                <DiReact className='box-icon htmlcolor'/>

                </div>
                </Fade>

            </div>
            <div className='row'>
            <Fade right>

                <div className='box item-1'>
                <DiJava className='box-icon htmlcolor'/>
                </div>
                <div className='box item-2'>
                <AiFillHtml5 className='box-icon htmlcolor'/>
                </div>
                <div className='box item-3'>
                <TbBrandReactNative className='box-icon htmlcolor'/>
                </div>
                <div className='box item-4'>
                <AiFillGithub className='box-icon htmlcolor'/>
                </div>
                <div className='box item-5'>
                <DiVisualstudio className='box-icon htmlcolor'/>
                </div>
                </Fade>

            </div>
        </div>
    );
};

export default skills;