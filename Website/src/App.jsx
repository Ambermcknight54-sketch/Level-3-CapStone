// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";
// import { Header } from "./components/Header";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { WebClient } from "./pages/WebClient.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Products } from "./pages/Products.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webclient" element={<WebClient />} />
            <Route path="/products" element={<Products />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
