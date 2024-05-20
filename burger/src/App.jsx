import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./companents/Home";
import { About } from "./companents/About";
import { Contact } from "./companents/Contact";
import { Menu } from "./companents/Menu";
import { Navbar } from "./companents/Navbar";
import Footer from "./companents/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
