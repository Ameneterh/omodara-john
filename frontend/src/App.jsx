import { useState } from "react";
import { Button } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import AwardsPage from "./pages/AwardsPage";
import NewsAndEvents from "./pages/NewsAndEvents";
import BlogsPage from "./pages/BlogsPage";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-omodara" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/news-events" element={<NewsAndEvents />} />
        <Route path="/blog-posts" element={<BlogsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
