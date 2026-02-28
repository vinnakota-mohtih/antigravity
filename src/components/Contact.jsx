import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-header text-center">
                    <h2 className="heading section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="contact-text">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-methods">
                        <div className="method-item glass">
                            <span className="method-label">Email</span>
                            <a href="mailto:mohithvinnakota008@gmail.com" className="method-link">mohithvinnakota008@gmail.com</a>
                        </div>

                        <div className="method-item glass">
                            <span className="method-label">LinkedIn</span>
                            <a href="https://www.linkedin.com/in/mohith-vinnakota-153b28300" target="_blank" rel="noopener noreferrer" className="method-link">mohith-vinnakota-153b28300</a>
                        </div>
                        <div className="method-item glass">
                            <span className="method-label">GitHub</span>
                            <a href="https://github.com/vinnakota-mohtih" target="_blank" rel="noopener noreferrer" className="method-link">vinnakota-mohtih</a>
                        </div>
                    </div>

                    <div className="contact-form-container glass">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Your Message" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn-primary" onClick={(e) => e.preventDefault()}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
