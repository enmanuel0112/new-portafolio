import './scss/content/app.scss';
import background from './asset/img/background-header.png';
import { About } from './about';
import { Projects } from './projects';
function App() {
  return (
    <div className="App">
      <header>
        <img src={background} alt="header background" className="header-image" />
        <div className='hero'>
          <h1>Cesar Ogando Front-end Developer</h1>
          <a href="https://docs.google.com/document/d/19fDeQ1Iuj3TlLimoKBq0AjHlwb5vxVf1IFGbiGNnNJg/edit" target='blank' > resume</a>
        </div>
      </header>
      <div>
        <h2 className='about-title'>About Me</h2>
        <About />
      </div>


      <div>
        <h2 className='projects-title'>My Projects</h2>
        <Projects />
      </div>

      <footer className='footer'><h2 >@Cesar<span >Devs</span></h2></footer>
    </div>
  );
}

export default App;
