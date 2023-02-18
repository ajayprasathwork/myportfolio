import React, { useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Table, Alert, List, Dropdown, Calendar, Row, Space, Avatar,Tabs } from 'antd';
import './style.css'

const Message = () => {
    
   
   
    const data = [
        {
            title: "Picture Day Reminder",
            body: "Tomorrow is school picture day! Please remember to dress nicely and bring your best smile.",
            date: "07/02/2023",

        
        },
        {
            title: "Parent-Teacher Conferences Reminder",
            body: "Just a friendly reminder that parent-teacher conferences are scheduled for next week. Please make sure to sign up for a time slot if you haven't already done so.",
            date: "07/02/2023",

        },
        {
            title: "School Fundraiser Event",
             body: "Our school is hosting a fundraising event next week to support a local charity. Please come out and show your support!",
             date: "07/02/2023",

        },
        {
            title: "School Play Announcement",
            body: "Our school's drama club will be performing 'The Wizard of Oz' next month. Don't miss out on this amazing production!",
            date: "07/02/2023",

        },

        {
            title: "Reminder: Math Exam Tomorrow",
            body: "Just a reminder that your math exam is tomorrow. Make sure to get plenty of rest and review your notes before the exam.",
            date: "07/02/2023",

        },
        {
            title: "Picture Day Reminder",
            body: "Tomorrow is school picture day! Please remember to dress nicely and bring your best smile.",
            date: "07/02/2023",

        
        },
        {
            title: "Parent-Teacher Conferences Reminder",
            body: "Just a friendly reminder that parent-teacher conferences are scheduled for next week. Please make sure to sign up for a time slot if you haven't already done so.",
            date: "07/02/2023",

        },
        {
            title: "School Fundraiser Event",
             body: "Our school is hosting a fundraising event next week to support a local charity. Please come out and show your support!",
             date: "07/02/2023",

        },
        {
            title: "School Play Announcement",
            body: "Our school's drama club will be performing 'The Wizard of Oz' next month. Don't miss out on this amazing production!",
            date: "07/02/2023",

        },

        {
            title: "Reminder: Math Exam Tomorrow",
            body: "Just a reminder that your math exam is tomorrow. Make sure to get plenty of rest and review your notes before the exam.",
            date: "07/02/2023",

        }, {
            title: "Picture Day Reminder",
            body: "Tomorrow is school picture day! Please remember to dress nicely and bring your best smile.",
            date: "07/02/2023",

        
        },
        {
            title: "Parent-Teacher Conferences Reminder",
            body: "Just a friendly reminder that parent-teacher conferences are scheduled for next week. Please make sure to sign up for a time slot if you haven't already done so.",
            date: "07/02/2023",

        },
        {
            title: "School Fundraiser Event",
             body: "Our school is hosting a fundraising event next week to support a local charity. Please come out and show your support!",
             date: "07/02/2023",

        },
        {
            title: "School Play Announcement",
            body: "Our school's drama club will be performing 'The Wizard of Oz' next month. Don't miss out on this amazing production!",
            date: "2023-02-19",

        },

        {
            title: "Reminder: Math Exam Tomorrow",
            body: "Just a reminder that your math exam is tomorrow. Make sure to get plenty of rest and review your notes before the exam.",
            date: "2023-02-19",

        },

    ];

    const getRandomColor=() =>{
       let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        return color;
      }


    const TabList=()=>{
        return(
            <div className='tab-list-continer'>
                 {data.map((item)=>{
               return(
                   <div className='msg-list'>
                       <Avatar className='avt' style={{ backgroundColor: getRandomColor(), color: '#fff' }}>{item.title[0]}</Avatar>
                       <p className='msg-list-titel'>{item.title}<span>-{item.body}</span></p>
                       <p className='msg-list-data'>{item.date}</p>

                    </div>
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
                        children: <TabList/>,
                        key: '2',
                    },
                    {
                        label: 'Send',
                        children: <TabList/>,
                        key: '3',
                    },
                    {
                        label: 'Announcements',
                        children: <TabList/>,
                        key: '4',
                    },
                ]}
                    
                />




            </div>
            <div className='msg-side-box'>
            <div className='contact-items'>
                <h4>Compose</h4>
                <div className='contactfrom'>
                    <input disabled className='custom-input' placeholder='' value={"ajay prasath"} type={"text"}/>
                     <input className='custom-input' placeholder='Subject'  type={"text"}/>
                   
                     <select className='custom-input'
        id="department"
        required
      >
        <option value="">Select a department</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Biology">Biology</option>
      </select>
      <select className='custom-input'
        id="department"
        required
      >
        <option value="">Select a Issue Type</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Biology">Biology</option>
      </select>
                    <textarea className='custom-input'  rows="10" cols="100" placeholder='write about issue ......'></textarea>
                        
                                            <button>Send Message</button>



                </div>

            </div>
            </div>


        </div>
    );
};

export default Message;