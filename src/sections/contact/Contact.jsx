import React, { useState } from 'react';
import './Contact.css';
import { FiMail } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleEmailCopy = () => {
        navigator.clipboard.writeText("vandan8154@gmail.com")
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Copy failed:', err);
            });
    };


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            serviceId,
            templateId,
            {
                name: formData.name,
                message: formData.message,
                time: new Date().toLocaleString(),
                email: formData.email,
            },
            publicKey
        )
            .then(() => {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <section className="contact-wrapper" id="contact">
            <div className="breadcrumb-row">
                <div className="contact-navigator">&gt; Home / Contact me</div>
                <div className="email-box-wrapper">
                    <div
                        className="copy-button-container"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <button className="copy-button" onClick={handleEmailCopy}>
                            <div className="email-box">
                                <FiMail style={{ marginRight: '8px', scale: 1.2 }} />
                                vandan8154@gmail.com
                            </div>
                        </button>
                        {hovered && (
                            <span className="hover-message">
                                {copied ? "COPIED" : "CLICK TO COPY MY EMAIL"}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="contact-box">
                <div className="contact-left">
                    <img src="/robot_wave.png" alt="Bot" className="contact-avatar" />
                </div>
                <div className="contact-right">
                    <div className="bot-bubble">
                        <div className="bot-name">VANDAN BOT</div>
                        <div className="bot-message">
                            {isSubmitted ? (
                                "Thank you! I received your message. We’ll connect soon."
                            ) : (
                                "Interested in working together? We should queue up a time to chat ↓"
                            )}
                        </div>
                    </div>

                    {!isSubmitted && (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name?"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email?"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    )}

                </div>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Vandan Patel. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
