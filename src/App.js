import './App.css';
import Header from './component/nav/nav.jsx';
import Sidebar from './component/nav/sidebar.jsx';

import Hero from './component/hero/hero.jsx';
import Contact from './component/contect/contact.jsx';
import About from './component/about/about.jsx';
import Skills from './component/skills/skills.jsx';
import Footer from './component/footer/footer.jsx';
import Qulification from './component/qualification/qualification.jsx';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='wrapper'>
        <Header/>
        <div className='box-1'>aj</div>
        <div className='box-2'></div>

      </div>
      
      
       
    </div>
  );
}

export default App;
