import React,{useState} from 'react';
import './style.css'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';

import { Button, Table, Alert, List, Dropdown, Calendar, Row,Space,Tag } from 'antd';
const Home = () => {
  const [activeIndex,setactiveIndex]=useState(0)
  const items = [
    {
      label: 'Credit Card',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Debit Card',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'Net Banking',
      key: '3',
      icon: <UserOutlined />,
    },
    {
      label: 'UPI',
      key: '4',
      icon: <UserOutlined />,
    },
  ];
  const handleButtonClick = (e) => {
    console.log('click left button', e);
  };
  const handleMenuClick = (e) => {
    console.log('click', e);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const columns = [
    {
      title: 'Topic',
      dataIndex: 'Topic',
      key: 'Topic',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Room No',
      dataIndex: 'RoomNo',
      key: 'RoomNo',
    },
    {
      title: 'Time',
      dataIndex: 'Time',
      key: 'Time',
    },
    {
      title: 'Teacher',
      key: 'Teacher',
      dataIndex: 'Teacher',
    
    },
    
  ];
  const data = [
    {
      key: '1',
      Topic: 'English-Agreement of the Subject with the verb',
      RoomNo: "32-B",
      Time:"11:30 am",
      Teacher: 'Mr.Ajay prasath',
    },
    {
      key: '2',
      Topic: 'Mathematics-Powers of imaginary unit',
      RoomNo: "02-4",
      Time:"12:30 pm",
      Teacher: 'Mr.prasath',
    },
    {
      key: '3',
      Topic: 'Physics-Basic properties of magnets',
      RoomNo: "32-B",
      Time:"1:30 pm",
      Teacher: 'Mr.Elsin',
    },
    {
      key: '4',
      Topic: 'Chemistry-Occurrence of metals',
      RoomNo: "1-d",
      Time:"2:30 pm",
      Teacher: 'Mr.Arun Kumar',
    },
    {
      key: '5',
      Topic: 'Commerce-Meaning and Types of Organization',
      RoomNo: "12-B",
      Time:"3:30 pm",
      Teacher: 'Mr.Elsin',
    },
  
  ];
  const history = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
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

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const overdata = [
    { name: 'Exam', value: 70 },
    { name: 'Sports', value: 40 },
    { name: 'Group C', value: 30 },
    { name: 'Group D', value: 10 },
  ];
 
  return (
    <div className='page'>
      <div className='main-box'>
        <h3 className='page-titel'>Dashboard</h3>
        <div className='par'>
        <div className='exam-p'>
          <p>Exam</p>
        <ResponsiveContainer>
         <LineChart data={cdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Term_1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Term_2" stroke="#82ca9d" />
        </LineChart>
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
            fill="#8884d8"
            label
            
          />
                    <Tooltip />

        </PieChart>
      </ResponsiveContainer>
      </div>
        </div>
       
   
        <Table columns={columns} dataSource={data} pagination={false} title={() => <div className='table-header'>
          <p className='tb-titel'>Today<span>Saturday 18 February 2023</span></p>

        </div>}
           />

      </div>
      <div className='side-box'>
        <List
          className='paymenthistory'
          size="small"
          header={<div className='hi-list-header'><p className='titel'>Assigment <span className='today-tag'>Due Today</span></p><p className='viewall'></p></div>}
          dataSource={assignment}
          renderItem={(item) => (
            <List.Item key={item}>
              <List.Item.Meta
                title={<a>{item.topic}</a>}
                description={<p>{item.sub}{"-"+item.th}</p>}

              />
              <div>

              </div>

            </List.Item>
          )}
        />

        <List
          className='normalcard'
          size="small"
          header={<div className='hi-list-header'><p className='titel'>Assigment<span>Upcoming</span></p><p className='viewall'></p></div>}
          dataSource={assignment}
          renderItem={(item) => (
            <List.Item key={item}>
              <List.Item.Meta
                title={<a>{item.topic}</a>}
                description={<p>{item.sub}{"-"+item.th}</p>}

              />
              <div>

              </div>

            </List.Item>
          )}
        />
       
      </div>

    </div>
  );
};

export default Home;