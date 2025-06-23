import React, { useEffect, useState } from 'react';
import './Info.css';

const images = [
    '/personal/me1.jpg',
    '/personal/me2.jpg',
    //   '/personal/me1.jpg'
];

const Info = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="info" className="info-section">
            <div className="navigator">&gt; Home / Info</div>
            <div className="info-box">

                <div className="info-content">
                    <div className="info-text">
                        <div className='info-header'>What I Do ?</div>
                        <p>
                            I’m a Software Developer who loves building solid backend systems — where logic and performance matter.
                            I handle the frontend too… because someone’s got to make sure the buttons show up.
                        </p>
                        <p>
                            I enjoy blending design and development to create experiences that look great and run smoothly.
                            Clean, purposeful code is what I strive for — from backend logic to polished UI.
                        </p>
                    </div>

                    <div className="info-img">
                        <img
                            src={images[currentIndex]}
                            alt={`me${currentIndex + 1}`}
                            className="slider-image"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Info;
