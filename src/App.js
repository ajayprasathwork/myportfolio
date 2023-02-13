import './App.css';
import Header from './component/nav/nav.jsx';
import Sidebar from './component/nav/sidebar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper'>
        <Header/>
        <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
      
      
       
    </div>
  );
}

export default App;
