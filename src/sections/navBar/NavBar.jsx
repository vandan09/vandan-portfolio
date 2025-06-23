import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src="/robot_wave.png" alt="Bot" className="brand-avatar" />
          <div className="name">
            Vandan Patel <span className="dot">•</span>
            <span className="role">Software Developer</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#work">WORK</a></li>
          <li><a href="#info">INFO</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
