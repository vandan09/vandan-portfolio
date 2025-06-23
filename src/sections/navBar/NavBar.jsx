import { useEffect, useState } from "react";
import './NavBar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src="/robot_wave.png" alt="Bot" className="brand-avatar" />
          <div className="name-role-group">
            <div className="name">Vandan Patel <span className="dot">•</span></div>
            <div className="role">Software Developer</div>
          </div>
        </div>

        <div className="menu-wrapper">
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#info" onClick={() => setMenuOpen(false)}>INFO</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}>WORK</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
