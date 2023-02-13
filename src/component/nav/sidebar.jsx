import React from 'react';
import './nav.css'
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
    const NaviTems=()=>{
        return(
            <>
             <a href="/#hero"> <AiFillHome className='nav-icon'/>Home</a>
            
            </>
        )
    }
    return (
        <div className='sidebar'>
            <div className='logo'>
                <p>MAA.<span>LY</span></p>
            </div>
            <div className='nav-link'>
            <NaviTems/>

            </div>

            
        </div>
    );
};

export default Sidebar;