import { Header } from "./componentes/Header";
import { About } from "./componentes/About";
import { Project } from "./componentes/Project";
import { Experience } from "./componentes/Experience";

import "./scss/content/app.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <aside className="aside-sticky">
          <Header />
        </aside>

        <div className="content">
          <About />
          <Project />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
