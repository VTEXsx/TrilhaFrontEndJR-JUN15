import "./App.css";
import AboutMe from "./components/AboutMe";
import Curiosities from "./components/Curiosities";
import Header from "./components/Header";
import Home from "./components/Home";
import Motivation from "./components/Motivation";

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe/>
      <Curiosities/>
      <Motivation/>
    </>
  );
}

export default App;
