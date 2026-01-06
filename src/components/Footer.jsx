
import { MessageCircle, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <h3>OMAN ROOFING</h3>
                        <p className="subtitle">24/7 ENTERPRISE</p>
                        <p className="mission-text">
                            Providing top-tier roofing solutions and professional installation across the Western North Region. Quality you can trust, available anytime.
                        </p>
                    </div>

                    <div className="footer-col links-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4>Contact Info</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} />
                                <span>Nantwikumye, Opposite Melcom, Bibiani, Western North Region</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:0551733524">0551733524</a>
                            </li>
                            <li>
                                <Clock size={18} />
                                <span>Always Open (24/7)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col social-col">
                        <h4>Connect With Us</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Facebook /></a>
                            <a href="#" className="social-icon"><Instagram /></a>
                            <a href="https://wa.me/23355173524" className="social-icon whatsapp"><MessageCircle /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Oman Roofing 24/7 Enterprise. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
