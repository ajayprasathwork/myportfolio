import './App.css';
import Header from './component/nav/nav.jsx';
import Sidebar from './component/nav/sidebar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
import Fees from './page/fees';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper'>
        <Header/>
        <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/fees" element={<Fees />}></Route>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      </div>
      
      
       
    </div>
  );
}

export default App;
