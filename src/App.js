import "./App.css";
import Navabar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutme/AboutMe";

function App() {
  return (
    <div className="App">
      <Navabar />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default App;
