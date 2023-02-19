import React,{useState} from 'react'

import './App.css';
import Header from './component/nav/nav.jsx';
import Sidebar from './component/nav/sidebar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Fees from './page/fees';
import Login from './page/login';
import Message from './page/massage';
import Calender from './page/calender';
import Grade from './page/grade';

function App() {
  const [islogin,setislogin]=useState(false)
     const gohome=()=>setislogin(true)
     console.log(islogin)
  if(!islogin){
    return(
     
          
          <Login gohome={gohome} />

         
    

    )
  }
  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper'>
        <Header/>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/fees" element={<Fees />}></Route>
          <Route exact path="/messagecenter" element={<Message />}></Route>
          <Route exact path="/calender" element={<Calender />}></Route>
          <Route exact path="/grade" element={<Grade />}></Route>

         
      </Routes>
      </div>
      
      
       
    </div>
  );
}

export default App;
