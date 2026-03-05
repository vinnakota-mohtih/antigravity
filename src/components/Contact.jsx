import React, { useState } from 'react';
import './Contact.css';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        console.log('Submitting form with data:', formData);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Server response status:', response.status);

            if (response.ok) {
                console.log('Message sent successfully');
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            } else {
                const data = await response.json().catch(() => ({}));
                console.error('Server error response:', data);
                throw new Error(data.error || `Server error: ${response.status}`);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            // Provide a more user-friendly error message
            let errorMessage = 'Something went wrong. Please try again.';
            if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
                errorMessage = 'Connection error. Please check your internet or try again later.';
            } else if (err.message) {
                errorMessage = err.message;
            }
            setStatus({ loading: false, success: false, error: errorMessage });
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <ScrollReveal className="contact-header text-center">
                    <h2 className="heading section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="contact-text">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </ScrollReveal>

                <div className="contact-grid">
                    <div className="contact-methods">
                        <ScrollReveal direction="right" delay={0.2} distance={30}>
                            <div className="method-item glass">
                                <span className="method-label">Email</span>
                                <a href="mailto:mohithvinnakota008@gmail.com" className="method-link">mohithvinnakota008@gmail.com</a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.3} distance={30}>
                            <div className="method-item glass">
                                <span className="method-label">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/mohith-vinnakota-153b28300" target="_blank" rel="noopener noreferrer" className="method-link">mohith-vinnakota-153b28300</a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.4} distance={30}>
                            <div className="method-item glass">
                                <span className="method-label">GitHub</span>
                                <a href="https://github.com/vinnakota-mohtih" target="_blank" rel="noopener noreferrer" className="method-link">vinnakota-mohtih</a>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal direction="left" delay={0.3} className="contact-form-container glass">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary"
                                disabled={status.loading}
                            >
                                {status.loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status.success && (
                                <p className="status-message success">Message sent successfully!</p>
                            )}
                            {status.error && (
                                <p className="status-message error">{status.error}</p>
                            )}
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
