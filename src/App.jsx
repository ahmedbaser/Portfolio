import "./App.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
