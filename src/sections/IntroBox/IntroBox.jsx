import React, { useState } from 'react';
import './IntroBox.css';
import { FiDownload } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineMailOpen } from 'react-icons/hi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const IntroBox = () => {
  const [hovered, setHovered] = useState("");
  const [copied, setCopied] = useState(false);
  const email = 'vandan8154@email.com';
  const driveLink = 'https://drive.google.com/file/d/1HBXYq87JI5IR-Z9q1Ls4hpDmaIk35tnX/view?usp=sharing';
  const whatsappLink = 'https://wa.me/8154935889';
  const linkedInLink = 'https://www.linkedin.com/in/patel-vandan/';

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  const handleCVClick = () => {
    window.open(driveLink, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="intro-box">
      <div className="intro-content">
        <div className="intro-icons">

          <div
            className="button-container"
            onMouseEnter={() => setHovered("linkedin")}
            onMouseLeave={() => setHovered("")}
          >
            <button
              className="elevated-button"
              onClick={() => window.open(linkedInLink, '_blank')}
            >
              <FaLinkedinIn
                size={20}
                className={`icon ${hovered === "linkedin" ? "whatsapp-anim" : ""}`}
              />
            </button>
            <span className={`hover-label ${hovered === "linkedin" ? "visible" : ""}`}>
              VISIT MY LINKEDIN
            </span>
          </div>

          <div
            className="button-container"
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered("")}
          >
            <button className="elevated-button email-button" onClick={handleCopy}>
              <HiOutlineMail
                size={20}
                className={`icon email-icon ${hovered === "email" ? "hidden-icon" : "visible-icon"}`}
              />
              <HiOutlineMailOpen
                size={20}
                className={`icon email-icon ${hovered === "email" ? "visible-icon" : "hidden-icon"}`}
              />
            </button>
            <span className={`hover-label ${hovered === "email" || copied ? "visible" : ""}`}>
              {copied ? "COPIED" : "CLICK TO COPY MY EMAIL"}
            </span>
          </div>

          {/* WhatsApp Button */}
          <div
            className="button-container"
            onMouseEnter={() => setHovered("whatsapp")}
            onMouseLeave={() => setHovered("")}
          >
            <button className="elevated-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp
                size={20}
                className={`icon ${hovered === "whatsapp" ? "whatsapp-anim" : ""}`}
              />
            </button>
            <span className={`hover-label ${hovered === "whatsapp" ? "visible" : ""}`}>
              CHAT WITH ME ON WHATSAPP
            </span>
          </div>

          {/* CV Button */}
          <div
            className="button-container"
            onMouseEnter={() => setHovered("cv")}
            onMouseLeave={() => setHovered("")}
          >
            <button className="elevated-button cv-button" onClick={handleCVClick}>
              <span className={`cv-label ${hovered === "cv" ? "cv-label-up" : ""}`}>
                CV
              </span>
              <FiDownload
                size={18}
                className={`cv-download-icon ${hovered === "cv" ? "bounce-down" : ""}`}
              />
            </button>
            <span className={`hover-label ${hovered === "cv" ? "visible" : ""}`}>
              DRIVE LINK
            </span>
          </div>

        </div>

        {/* Intro Text */}
        <div className="intro-main">
          <div className="intro-text">
            <h1>
              A highly adaptive software developer crafting robust, scalable applications that don’t just solve problems — they feel intuitively
              <i className={'right'}> right</i>.
            </h1>
            <p>
              I have 1.2 years of full-time experience and have successfully delivered multiple projects for various clients.
            </p>
          </div>

          <img src="/robot_idle.png" alt="robot" className="robot-img" />
        </div>
      </div>
    </div>
  );
};

export default IntroBox;
