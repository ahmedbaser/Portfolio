import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import ProjectNew from "./components/projects/ProjectNew";
import "./App.css";
import "./index.css";
import Honor from "./components/honor/Honor";
import Course from "./components/course/Course";
import Internship from "./components/internship/Internship";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <ProjectNew />
        <Education />
        <Honor />
        <Course />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
