import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Mobileapp from "./Pages/Mobileapp";
import Portfolio from "./Pages/Portfolio";
import Games from "./Pages/Games";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="mobileapp" element={<Mobileapp />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="games" element={<Games />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
