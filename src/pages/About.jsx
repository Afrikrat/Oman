
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
    useScrollReveal();

    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | Oman Roofing 24/7 Enterprise</title>
                <meta name="description" content="Learn about Oman Roofing 24/7 Enterprise - your trusted local partner for quality roofing sheets and professional installation in Western North Region." />
            </Helmet>
            <section className="page-hero">
                <div className="page-hero-bg" style={{ backgroundImage: "url('/images/about-hero.png')" }}></div>
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="animate-on-scroll fade-up">About Us</h1>
                    <p className="animate-on-scroll fade-up delay-1">Building Trust, One Roof at a Time in the Western North Region.</p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text animate-on-scroll fade-up">
                            <h2>Our Story</h2>
                            <p>
                                Oman Roofing 24/7 Enterprise was founded with a single mission: to bridge the gap between quality materials and professional installation in Bibiani and its environs.
                                Before we started, we noticed that many homeowners had to travel far to get premium roofing sheets, or struggled to find reliable artisans who understood modern installation techniques.
                            </p>
                            <p>
                                We changed that. By establishing our base in Nantwikumye, opposite Melcom, we brought world-class roofing solutions to your doorstep. We are more than just a shop; we are your local partners in building safe, beautiful homes.
                            </p>
                        </div>
                        <div className="about-stats animate-on-scroll fade-up delay-1">
                            <div className="stat-card">
                                <h3>5+</h3>
                                <p>Years of Service</p>
                            </div>
                            <div className="stat-card">
                                <h3>500+</h3>
                                <p>Roofs Installed</p>
                            </div>
                            <div className="stat-card">
                                <h3>100%</h3>
                                <p>Local Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container text-center">
                    <h2 className="animate-on-scroll fade-up">Our Mission</h2>
                    <p className="mission-statement animate-on-scroll fade-up">
                        "To provide every home and business in the Western North Region with a durable, beautiful roof built to last generations,
                        delivered with a commitment to speed, quality, and integrity."
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="why-247 animate-on-scroll fade-up">
                        <h2>Why "24/7 Enterprise"?</h2>
                        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
                            Construction doesn't always happen 9-to-5. We know that sometimes you need an estimate before you head to work,
                            or you discover a leak late in the evening. Our unique "24/7 Enterprise" commitment means we are available for
                            consultations, quotes, and emergency support whenever you need us. We work around <strong>your</strong> schedule.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
