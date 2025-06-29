import { useEffect, useRef, useState } from "react";
import IntroBox from "./sections/IntroBox/IntroBox";
import Navbar from "./sections/navBar/NavBar";
import SkillsSlider from "./sections/skillsSlider/SkillsSlider";
import Contact from "./sections/contact/Contact";
import Info from "./sections/info/Info";
import Experience from "./sections/experience/Experience";
import './App.css';
import Work from "./sections/work/Work";

const App = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const size = 14;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
    };

    setCanvasSize(); // initial size

    const drawPixelBlock = (x, y) => {
      const gridX = Math.floor(x / size) * size;
      const gridY = Math.floor(y / size) * size;
      ctx.fillStyle = "#343434";
      ctx.fillRect(gridX, gridY, size, size);
    };

    let isDrawing = false;

    const handleMouseDown = () => {
      isDrawing = true;
      setIsDrawing(true);
    };

    const handleMouseUp = () => {
      isDrawing = false;
      setIsDrawing(false);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const isOutsideMain =
        x < window.innerWidth / 2 - 400 || x > window.innerWidth / 2 + 400;

      setShowCursor(isOutsideMain);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
        cursorRef.current.style.display = isOutsideMain ? "block" : "none";
      }

      if (isDrawing) {
        drawPixelBlock(x, y);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize); // update on resize

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);



  return (
    <div className={`body-container ${showCursor ? "hide-system-cursor" : ""} ${isDrawing ? "no-select" : ""}`}>
      <canvas ref={canvasRef} className="background-canvas" />
      <div ref={cursorRef} className="custom-cursor" />
      <div className="main-area">
        <Navbar />
        <IntroBox />
        <SkillsSlider />
        <Info />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default App;
