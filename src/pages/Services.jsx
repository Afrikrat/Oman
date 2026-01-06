
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Hammer, Home } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const Services = () => {
    useScrollReveal();

    return (
        <div className="services-page">
            <Helmet>
                <title>Our Services | Oman Roofing 24/7 Enterprise</title>
                <meta name="description" content="Quality roofing sheet sales, expert installation, and 24/7 repair services in Ghana's Western North Region. Aluzinc, Aluminium, and more." />
            </Helmet>
            <section className="page-hero">
                <div className="page-hero-bg" style={{ backgroundImage: "url('/images/services-hero.png')" }}></div>
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="animate-on-scroll fade-up">Our Services</h1>
                    <p className="animate-on-scroll fade-up delay-1">Expert Solutions for Every Roof in Ghana.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    {/* Service 1 */}
                    <div className="service-detail animate-on-scroll fade-up">
                        <div className="service-info">
                            <div className="service-icon"><ShoppingCart size={40} /></div>
                            <h2>Roofing Sheet Sales</h2>
                            <p className="lead">Premium quality Aluzinc and Aluminium sheets tailored to your needs.</p>
                            <p>
                                We offer a wide range of roofing sheets perfect for the Ghanaian climate. Our sheets are rust-resistant, durable, and available in various gauges (thicknesses) and colors.
                            </p>
                            <ul className="service-list">
                                <li>Long-span Aluzinc Sheets</li>
                                <li>Modern Tile Profiles (ibr)</li>
                                <li>Traditional Corrugated Sheets</li>
                                <li>Custom Flashing & Ridges</li>
                            </ul>
                        </div>
                        <div className="service-image-placeholder sheet-img"></div>
                        {/* Note: I'm using css placeholder/gradient or I could reuse hero image if needed, but let's stick to simple layout */}
                    </div>

                    <hr className="divider" />

                    {/* Service 2 */}
                    <div className="service-detail reverse animate-on-scroll fade-up">
                        <div className="service-info">
                            <div className="service-icon"><Hammer size={40} /></div>
                            <h2>Professional Installation</h2>
                            <p className="lead">Skilled carpentry and precision installation guaranteed.</p>
                            <p>
                                A good sheet needs a good installer. Our team of trained professionals handles the entire process with safety and efficiency in mind.
                            </p>
                            <ul className="service-list">
                                <li>Full Site Inspection & Measurement</li>
                                <li>Wood Treatment (Carpentry Framework)</li>
                                <li>Precise Alignment & Overlapping</li>
                                <li>Use of High-Quality Nails/Screws with Washers</li>
                            </ul>
                        </div>
                        <div className="service-image-placeholder install-img"></div>
                    </div>

                    <hr className="divider" />

                    {/* Service 3 */}
                    <div className="service-detail animate-on-scroll fade-up">
                        <div className="service-info">
                            <div className="service-icon"><Home size={40} /></div>
                            <h2>Roof Replacement & Repairs</h2>
                            <p className="lead">Restoring leaks and replacing old roofs.</p>
                            <p>
                                Is your old roof leaking or rusted? We specialize in carefully removing old sheets and replacing them with modern, durable materials without damaging your structure.
                            </p>
                            <ul className="service-list">
                                <li>Leak Detection & Sealing</li>
                                <li>Rusted Sheet Replacement</li>
                                <li>Structural Reinforcement</li>
                                <li>Emergency Repair Services</li>
                            </ul>
                        </div>
                        <div className="service-image-placeholder repair-img"></div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Services;
