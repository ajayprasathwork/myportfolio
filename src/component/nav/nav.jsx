import React,{useState} from 'react';
import './nav.css'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Nav = () => {
    
    return (
        <div className='nav' >
                <div className='search'>
                     <input placeholder='search' type={"text"}/>
                </div>
                <div className='user'>
                    <Avatar src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" shape="circle" size="default" icon={<UserOutlined />} /> 
                    <p>Ajay Prasath</p>

                </div>
            
            </div>
    );
};

export default Nav;