import React from 'react';
import './nav.css'
import { AiFillHome,AiFillCalendar } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";
import { MdViewArray,MdAssignmentInd ,MdPayments} from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

const Sidebar = () => {
    const NaviTems=()=>{
        return(
            <>
             <a href="/"> <AiFillHome className='nav-icon'/>Home</a>
             <a href="/Grades"> <HiAcademicCap className='nav-icon'/>Grades</a>
             <a href="/Calendar"> <AiFillCalendar className='nav-icon'/>Calendar</a>
             <a href="/weeklyview"> <MdViewArray className='nav-icon'/>Weekly View</a>
             <a href="/assignments"> <MdAssignmentInd className='nav-icon'/>Assignments</a>
             <a href="/attendance"> <AiFillHome className='nav-icon'/>Attendance</a>
             <a href="/messageCenter"> <RiMessage2Fill className='nav-icon'/>MessageCenter</a>
             <a href="/fees"> <MdPayments className='nav-icon'/>Fees</a>
             
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