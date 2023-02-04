import React,{useState} from 'react';
import { AiOutlineClose } from "react-icons/ai";
import './nav.css'
const Nav = () => {
     const [changecolor,setchangecolor]=useState(false)
     const [showMobileMenu,setshowMobileMenu]=useState(false)
    const navColor=()=>{
        if(window.scrollY >= 70){
            setchangecolor(true)
        }else{
            setchangecolor(false)

        }
    }
    window.addEventListener('scroll',navColor)

    
    const NaviTems=()=>{
        return(
            <>
            <a  href="/#hero">Home</a>
             <a href="/#about">About</a>
             <a href="https://www.w3schools.com/">Service</a>
             <a href="/#skills">Skills</a>
             <a href="https://www.w3schools.com/">Blog</a>
             <a href="/#contact">Contact</a>
            </>
        )
    }
    const showMenu=()=>{
        setshowMobileMenu(true)
    }
    const hideMenu=()=>{
        setshowMobileMenu(false)
    }
    return (
        <div className={changecolor?'nav nav-black':'nav nav-light'} >
             <h1 className={changecolor?"nav-black":"nav-light"}>Ajay<span>Prasath</span></h1>
             <div className={changecolor?'navitems-light':'navitems-black'}>
                <NaviTems/>
             </div>
             {!showMobileMenu?<div className="mobile-menu" onClick={showMenu} ><i class="fa fa-bars"></i></div>:<div className="mobile-menu" onClick={hideMenu} ><AiOutlineClose/></div>}
             {showMobileMenu?<div className= {changecolor?'mobile-menu-continer-black':'mobile-menu-continer-light'}>
             <NaviTems/>
             </div>:null}
            </div>
    );
};

export default Nav;