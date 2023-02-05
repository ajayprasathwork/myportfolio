import './App.css';
import Header from './component/nav/nav.jsx';
import Hero from './component/hero/hero.jsx';
import Contact from './component/contect/contact.jsx';
import About from './component/about/about.jsx';
import Skills from './component/skills/skills.jsx';
import Footer from './component/footer/footer.jsx';
import Qulification from './component/qualification/qualification.jsx';
function App() {
  return (
    <div className="App">
       <Header/>
       <section id="hero">
       <Hero/>
       </section>
       <section id="about">
       <About/>
       <section id='skills'>
        <Skills/>
       </section>
       <section id='qulification'>
        <Qulification/>
       </section>
       </section>
       <section id="contact">
       <Contact/>
       </section>
       <section id="footer">
       <Footer/>
       </section>
    </div>
  );
}

export default App;
