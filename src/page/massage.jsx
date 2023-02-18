import React, { useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Table, Alert, List, Dropdown, Calendar, Row, Space, Tabs } from 'antd';
import './style.css'

const Message = () => {
    
   
   
    const data = [
        {
            key: '1',
            Topic: 'English-Agreement of the Subject with the verb',
            RoomNo: "32-B",
            Time: "11:30 am",
            Teacher: 'Mr.Ajay prasath',
        },
        {
            key: '2',
            Topic: 'Mathematics-Powers of imaginary unit',
            RoomNo: "02-4",
            Time: "12:30 pm",
            Teacher: 'Mr.prasath',
        },
        {
            key: '3',
            Topic: 'Physics-Basic properties of magnets',
            RoomNo: "32-B",
            Time: "1:30 pm",
            Teacher: 'Mr.Elsin',
        },
        {
            key: '4',
            Topic: 'Chemistry-Occurrence of metals',
            RoomNo: "1-d",
            Time: "2:30 pm",
            Teacher: 'Mr.Arun Kumar',
        },
        {
            key: '5',
            Topic: 'Commerce-Meaning and Types of Organization',
            RoomNo: "12-B",
            Time: "3:30 pm",
            Teacher: 'Mr.Elsin',
        },

    ];


    const TabList=()=>{
        return(
            <div className='tab-list-continer'>
                 {data.map((item)=>{
               return(
             <div>{item.Topic}</div>
               )
             })}
            </div>
        )
        
            
    
    }
   
   
   

    
   
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className='page'>
            <div className='main-box'>
                <h3 className='page-titel'>Message Center</h3>

                <Tabs
                    style={{backgroundColor:'#fff',borderRadius:'5px'}}
                    onChange={onChange}
                    type="card"
                    items={[{
                        label: 'All',
                        children: <TabList/>,
                        key: '1',
                    },
                    {
                        label: 'Index',
                        children: 'Content of Tab 2',
                        key: '2',
                    },
                    {
                        label: 'Announcements',
                        children: 'Content of Tab 1',
                        key: '3',
                    },
                ]}
                    
                />




            </div>
            <div className='side-box'>
            </div>


        </div>
    );
};

export default Message;