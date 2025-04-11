import "./App.css";
import Education from "./components/education/Education";
import Home from "./components/home/home";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import "./index.css";

function App() {
  return (
    <>
      <main className="main">
        <Home />
        <Skills />
        <Project />
        <Education />
      </main>
    </>
  );
}

export default App;
