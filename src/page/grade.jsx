import React, { useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Table, Alert, List, Dropdown, Calendar, Row, Space, Avatar,Tabs } from 'antd';
import './style.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector,BarChart, Bar, Cell } from 'recharts';
import { FcLeave,FcAlarmClock } from 'react-icons/fc';

const grade = () => {
    
    const cdata = [
        {
          name: 'Tamil',
          Term_1: 40,
          Term_2: 30,
          amt: 24,
        },
        {
          name: 'English',
          Term_1: 90,
          Term_2: 60,
          amt: 24,
        },
        {
          name: 'Math',
          Term_1: 50,
          Term_2: 30,
          amt: 24,
        },
        {
          name: 'Science',
          Term_1: 30,
          Term_2: 70,
          amt: 24,
        }, {
          name: 'history',
          Term_1: 70,
          Term_2: 30,
          amt: 24,
        },
       
        
        
        
        
      ];
      const overdata = [
        { name: 'Exam', value: 70 },
        { name: 'Sports', value: 40 },
        { name: 'Group C', value: 30 },
        { name: 'Group D', value: 10 },
      ];
   
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
    const mdata = [
        {
          key: '1',
          SNo:"1",
          Subject: 'Tamil',
          MaxMark: 100,
          MarkObtained:60,
          Result:"Pass"
    
        },
        {
            key: '2',
            SNo:"2",
            Subject: 'English',
            MaxMark: 100,
            MarkObtained:40,
            Result:"Pass"
      
          },{
            key: '3',
            SNo:"3",
            Subject: 'Math',
            MaxMark: 100,
            MarkObtained:50,
            Result:"Pass"
      
          },{
            key: '4',
            SNo:"4",
            Subject: 'Science',
            MaxMark: 100,
            MarkObtained:45,
            Result:"Pass"
      
          },{
            key: '5',
            SNo:"5",
            Subject: 'History',
            MaxMark: 100,
            MarkObtained:60,
            Result:"Pass"
      
          },{
            key: '6',
            SNo:"",
            Subject: 'Totel',
            MaxMark: 500,
            MarkObtained:370,
            Result:"79%"
      
          },
       
    
    
      ];
    const getRandomColor=() =>{
       let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        return color;
      }


    const TabList=()=>{
        return(
            <div className='tab-list-continer'>
                <div className='par'>
        <div className='exam-p'>
          <p>Exam</p>
        <ResponsiveContainer>
        <BarChart
          data={cdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Term_1" fill={getRandomColor()} />
        </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='exam-o'>
          <p>Over all</p>
          <ResponsiveContainer >
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={overdata}
            cx="50%"
            cy="50%"
            innerRadius={39}
            outerRadius={80}
            fill={getRandomColor()}
            label
            
          />
                    <Tooltip />

        </PieChart>
      </ResponsiveContainer>
      </div>
        </div>
        <Table className='mark-list' columns={columns} dataSource={mdata} pagination={false}
          footer={() => <div className='table-fooder'>
            {/* <div className='table-header'>
              <p className='tb-titel'>Total</p>
              <p className='total'>6600</p>
            </div> */}
            <div className='table-header pay-continer'>
           
              <Button type="primary">Print</Button>
            </div>
          </div>} />
            </div>
        )
        
            
    
    }
   
    const alart=[
        {
         titel:"Second Semester Exam",
         date:"january 2023",
         day:"02",
      }, {
        titel:"Term 4 Result",
        date:"january 2023",
        day:"13",
     }, {
      titel:"Second Semester Exam",
      date:"january 2023",
      day:"20",
    },
    {
        titel:"Second Semester Exam",
        date:"january 2023",
        day:"02",
     },
    ]
    const columns = [
        {
            title: 'S.No.',
            dataIndex: 'SNo',
            key: 'S.No',
            
      
          },
        {
          title: 'Subject',
          dataIndex: 'Subject',
          key: 'Subject',
          render: (text) => <a>{text}</a>,
    
        },
        {
          title: 'Max Mark',
          dataIndex: 'MaxMark',
          key: 'MaxMark',
        },
        {
            title: 'Mark Obtained',
            dataIndex: 'MarkObtained',
            key: 'MarkObtained',
          },
          {
            title: 'Result',
            dataIndex: 'Result',
            key: 'Result',
          },
    
    
      ];
   

    
   
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className='page'>
            <div className='main-box'>
                <h3 className='page-titel'>Grade</h3>

                <Tabs
                    style={{backgroundColor:'#fff',borderRadius:'5px'}}
                    onChange={onChange}
                    type="card"
                    items={[{
                        label: 'Term-A',
                        children: <TabList/>,
                        key: '1',
                    },
                    {
                        label: 'Term-B',
                        children: <TabList/>,
                        key: '2',
                    },
                    {
                        label: 'Term-c',
                        children: <TabList/>,
                        key: '3',
                    },
                   
                ]}
                    
                />






            </div>
            <div className='side-box'>
            <div className='event-card' style={{marginTop:'33px'}} >
          <div className='header'>
            <FcAlarmClock className='e-icon'/>
            <h4>Alert</h4>
          </div>
          {alart.map((item)=>{
            return(
              <div className='event-list-card'>
                <p className='h-day' style={{ backgroundColor: getRandomColor(), color: '#fff' }}>{item.day}</p>
                <div>
                <h4>{item.titel}</h4> 
                <p>{item.date}</p> 
                </div>
                
                </div>
            )
          })}
        </div>
            </div>


        </div>
    );
};

export default grade;