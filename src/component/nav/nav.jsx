import React,{useState} from 'react';
import './nav.css'
const Nav = () => {
     const [changecolor,setchangecolor]=useState(false)
    const navColor=()=>{
        if(window.scrollY >= 70){
            setchangecolor(true)
        }else{
            setchangecolor(false)

        }
    }
    window.addEventListener('scroll',navColor)
    return (
        <div className={changecolor?'nav nav-black':'nav nav-light'} >
             <h1>Ajay<span>Prasath</span></h1>
             <div className={changecolor?'navitems-light':'navitems-black'}>
             <a href="https://www.w3schools.com/">Home</a>
             <a href="https://www.w3schools.com/">About</a>
             <a href="https://www.w3schools.com/">Service</a>
             <a href="https://www.w3schools.com/">Skills</a>
             <a href="https://www.w3schools.com/">Blog</a>
             <a href="https://www.w3schools.com/">Contact</a>
             </div>
        </div>
    );
};

export default Nav;