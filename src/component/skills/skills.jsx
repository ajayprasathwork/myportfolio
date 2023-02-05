import React from 'react';
import './skills.css'
import Fade from 'react-reveal/Fade';
import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import {IoLogoCss3,IoLogoJavascript} from "react-icons/io";
import {DiReact,DiJava,DiVisualstudio,DiAngularSimple} from "react-icons/di";
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
                <IoLogoCss3 className='box-icon css'/>

                </div>
                <div className='box item-3'>
                <IoLogoJavascript className='box-icon js'/>

                </div>
                <div className='box item-4'>
                <DiReact className='box-icon react'/>

                </div>
                </Fade>

            </div>
            <div className='row'>
            <Fade right>

                <div className='box item-1'>
                <DiJava className='box-icon java'/>
                </div>
                <div className='box item-2'>
                <DiAngularSimple className='box-icon ag'/>
                </div>
                <div className='box item-3'>
                <TbBrandReactNative className='box-icon react'/>
                </div>
                <div className='box item-4'>
                <AiFillGithub className='box-icon github'/>
                </div>
                <div className='box item-5'>
                <DiVisualstudio className='box-icon vs'/>
                </div>
                </Fade>

            </div>
        </div>
    );
};

export default skills;