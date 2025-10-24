import React, { useState } from "react";
// import "./Alibhai.css"; // optional for styling

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div>
      <header>
        <img src="image/icon_01.png" className="logo" alt="Logo" />
        <button className="menu-btn" onClick={openSidebar}>
          ☰
        </button>

        <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
          <button className="close-btn" onClick={closeSidebar}>
            ✖
          </button>
          <a href="#home" onClick={closeSidebar}>Home</a>
          <a href="#about" onClick={closeSidebar}>About</a>
          <a href="#skills" onClick={closeSidebar}>Skills</a>
          <a href="#projects" onClick={closeSidebar}>Projects</a>
          <a href="#contact" onClick={closeSidebar}>Contact</a>
          <a href="#resume" onClick={closeSidebar}>Resume</a>
        </nav>
      </header>

      {isSidebarOpen && <div className="overlay active" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar;
