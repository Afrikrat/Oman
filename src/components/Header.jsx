import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo-container">
                    <img src="/images/logo.png" alt="Oman Roofing 24/7" className="logo-img" />
                </Link>

                <nav className="desktop-nav">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
                </nav>

                <div className="header-actions">
                    <a href="https://wa.me/233551733524" className="btn-whatsapp" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={24} />
                    </a>
                    <a href="tel:0551733524" className="btn btn-primary btn-call">
                        <Phone size={18} style={{ marginRight: '0.5rem' }} />
                        <span className="hide-mobile">0551733524</span>
                    </a>
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
                <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>

                <div style={{ marginTop: 'auto' }}>
                    <a href="tel:0551733524" className="btn btn-primary btn-block">
                        Call Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
