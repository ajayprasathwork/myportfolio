import './App.css';
import Header from './component/nav/nav.jsx';
import Hero from './component/hero/hero.jsx';
import Contact from './component/contect/contact.jsx'
function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Contact/>
    </div>
  );
}

export default App;
