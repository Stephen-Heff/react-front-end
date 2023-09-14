import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Main /> */}
        <Project />
        <Skill />
        {/* <Education /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
