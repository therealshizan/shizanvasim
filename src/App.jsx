import Header from "./components/header/Header";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Loader from "components/Loader";
import { customLenis } from "modules/lenis";
import { useEffect } from "react"; 


const App = () => {
  useEffect(()=>{
    customLenis()
  })
  return (
    <>
      <Loader />
      <Header logoText="shizan|vasim" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}


export default App;
