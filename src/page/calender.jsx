import React,{useState} from 'react';
import './style.css'
import {  UserOutlined } from '@ant-design/icons';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { IoIosArrowBack,IoIosArrowForward } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import { FcLeave } from 'react-icons/fc';


import { Badge, Calendar, Table, Alert, List, Dropdown, Row,Space,Tag } from 'antd';
const Calender = () => {
  const [activeIndex,setactiveIndex]=useState(0)
  
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event.',
          },
          {
            type: 'success',
            content: 'This is usual event.',
          },
          {
            type: 'error',
            content: 'This is error event.',
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: 'warning',
            content: 'This is warning event',
          },
          {
            type: 'success',
            content: 'This is very long usual event。。....',
          },
          {
            type: 'error',
            content: 'This is error event 1.',
          },
          {
            type: 'error',
            content: 'This is error event 2.',
          },
          {
            type: 'error',
            content: 'This is error event 3.',
          },
          {
            type: 'error',
            content: 'This is error event 4.',
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
 
  const event=[
    {
     titel:"Library book return",
     date:"02 january 2023",
     time:"10:00 AM",
     venu:"Library",
  }, {
    titel:"Seminar",
    date:"13 january 2023",
    time:"11:15 AM",
    venu:"Arts Auditorium,k Block",
 }, {
  titel:"Library book return",
  date:"02 january 2023",
  time:"10:00 AM",
  venu:"Library",
},
]
const holliday=[
    {
     titel:"Library book return",
     date:"02 january 2023",
     day:"02",
  }, {
    titel:"Seminar",
    date:"13 january 2023",
    day:"13",
 }, {
  titel:"Library book return",
  date:"20 january 2023",
  day:"20",
},
]
const assignment=[{
    topic:"Agreement of the Subject with the verb.",
    sub:"English",
    th:"Mr.ArunKumar"
 },
 {
   topic:"Powers of imaginary unit.",
   sub:"Mathematics",
   th:"Mr.Elsin"
}
]
const getRandomColor=() =>{
    let color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
     return color;
   }
   const columns = [
    {
      title: 'Subject',
      dataIndex: 'Subject',
      key: 'Subject',
      render: (text) => <a>{text}</a>,

    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
        title: 'Time',
        dataIndex: 'Time',
        key: 'Time',
      },


  ];
  const data = [
    {
      key: '1',
      Subject: 'Math',
      Date: "12-03-2023",
      Time:"01:00 PM"

    },
    {
      key: '1',
      Subject: 'English',
      Date: "12-03-2023",
      Time:"01:00 PM"


    },


  ];

 
  return (
    <div className='page'>
      <div className='main-box'>
        <h3 className='page-titel'>Calender</h3>
        
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
   

      </div>
      <div className='side-box'>
      
         <div className='event-card' style={{marginTop:'33px'}}>
          <div className='header'>
            <FcLeave className='e-icon'/>
            <h4>Holidays</h4>
          </div>
          {holliday.map((item)=>{
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
        <Table className='exam-tb' columns={columns} dataSource={data} pagination={false} title={() => <div className='table-header'>
          <h4 className='tb-titel'>Term:B Exam </h4>
          <Alert className='due-date' style={{fontSize:"15px"}} message="Start-Date: 01-04-2023" type="info" showIcon />

        </div>}
           />
       
        <div className='event-card'>
          <div className='header'>
            <BsFillCalendarEventFill className='e-icon'/>
            <h4>Event</h4>
            <div className='ev-date'><IoIosArrowBack className='ev-arrow'/><p>3 January 2023<span>monday</span></p><IoIosArrowForward className='ev-arrow'/></div>
          </div>
          {event.map((item)=>{
            return(
              <div className='event-list-card'>
                <GoPrimitiveDot className='icon'/>
                <div>
                <h4>{item.titel}</h4> 
                <p>{item.date}</p> 
                <p>{item.time}</p> 
                <p>Venue:{item.venu}</p> 
                </div>
                
                </div>
            )
          })}
        </div>
       
      </div>

    </div>
  );
};

export default Calender;