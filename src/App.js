import './App.css';
import Header from './component/nav/nav.jsx';
import Hero from './component/hero/hero.jsx';
import Contact from './component/contect/contact.jsx';
import About from './component/about/about.jsx';
function App() {
  return (
    <div className="App">
       <Header/>
       <section id="hero">
       <Hero/>
       </section>
       <section id="about">
       <About/>
       </section>
       <section id="contact">
       <Contact/>
       </section>
    </div>
  );
}

export default App;
