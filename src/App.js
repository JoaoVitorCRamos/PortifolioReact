// imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// imports nativos
import Sites from "./components/Sites";
import Jobs from "./components/Jobs";
import NavigationBar from "./components/NavigationBar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import FooterPage from "./components/FooterPage";
import "./App.css";
import { Certifications } from "./components/Certifications/Certifications";

function App() {
  return (
    <div>
      <NavigationBar /> 
      <Presentation />
      <Skills /> 
      <AboutMe /> 
      <Sites /> 
      <Certifications /> 
      <Jobs /> 
      <FooterPage /> 
    </div>
  );
}

export default App;
