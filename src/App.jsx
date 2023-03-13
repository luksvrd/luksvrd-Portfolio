import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <NavBar />
      {/* About Me */}
      <Intro />
      {/* Portfolio */}
      <Portfolio />
      {/* Contact */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
