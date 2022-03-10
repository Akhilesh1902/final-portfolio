import "./App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
// import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="App__background"></div>
      {/* <h1>hello App</h1> */}
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
