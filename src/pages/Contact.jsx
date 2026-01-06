
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
    useScrollReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! your message has been sent. We will contact you shortly.");
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | Oman Roofing 24/7 Enterprise</title>
                <meta name="description" content="Get a free quote or contact us for emergency repairs. Located in Bibiani, available 24/7 via phone and WhatsApp. 0551733524." />
            </Helmet>
            <div className="contact-split">
                {/* Left Side: Info */}
                <div className="contact-info-side animate-on-scroll fade-up">
                    <div className="contact-content">
                        <h1>Contact Us</h1>
                        <p className="contact-intro">
                            Ready to start your project? We are always available.
                            Call us, message us, or visit our shop in Bibiani.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <div className="detail-icon"><Phone /></div>
                                <div>
                                    <h3>Phone / WhatsApp</h3>
                                    <a href="tel:0551733524" className="detail-link">0551733524</a>
                                    <a href="https://wa.me/233551733524" className="whatsapp-link">
                                        Chat on WhatsApp <MessageCircle size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><MapPin /></div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Nantwikumye, Opposite Melcom,<br />Bibiani, Western North Region, Ghana.</p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon"><Clock /></div>
                                <div>
                                    <h3>Working Hours</h3>
                                    <p>24/7 Enterprise - Always Open for Business</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31742.66874837887!2d-2.333!3d6.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMjEuNiJOIDLCsDIwJzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1634567890123!5m2!1sen!2sgh"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-side">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Get A Free Quote</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="055..." required />
                        </div>

                        <div className="form-group">
                            <label>Project Location</label>
                            <input type="text" placeholder="e.g. Sefwi Wiawso" required />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Tell us about your roofing needs..." required></textarea>
                        </div>

                        <button type="submit" className="btn btn-urgent btn-block">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
