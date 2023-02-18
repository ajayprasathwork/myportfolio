import React from 'react';
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Space } from 'antd';

import './nav.css'
import { AiFillHome,AiFillCalendar } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";
import { MdViewArray,MdAssignmentInd ,MdPayments} from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

const Sidebar = () => {
    let usenavigate = useNavigate();

    const NaviTems=()=>{
        return(
            <>
             <a  onClick={()=>usenavigate("/")}> <AiFillHome className='nav-icon'/>Dashboard</a>
             <a> <HiAcademicCap className='nav-icon'/>Grades</a>
             <a onClick={()=>usenavigate("/calender")}> <AiFillCalendar className='nav-icon'/>Calendar</a>
             <a> <MdViewArray className='nav-icon'/>Weekly View</a>
             <a > <MdAssignmentInd className='nav-icon'/>Assignments</a>
             <a > <AiFillHome className='nav-icon'/>Attendance</a>
             <a onClick={()=>usenavigate("/messagecenter")}> <RiMessage2Fill className='nav-icon'/>MessageCenter(18)  </a>
             <a onClick={()=>usenavigate("/fees")}> <MdPayments className='nav-icon'/>Fees</a>
             
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