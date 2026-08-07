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

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { Products } from "./pages/Products.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import { Page404 } from "./components/Page404.jsx";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
