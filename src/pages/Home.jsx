import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers, Hammer, Clock, Phone, ArrowRight, Star, ShieldCheck, Zap, Plus, Minus, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';

const Home = () => {
    useScrollReveal();
    const [openFaq, setOpenFaq] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const slides = [
        {
            image: "/images/slide_1.jpg",
            caption: "Expert Installation",
            sub: "Precision in every sheet"
        },
        {
            image: "/images/hero.png",
            caption: "Premium Materials",
            sub: "Long-lasting Aluzinc"
        },

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const faqs = [
        { q: "Do you offer warranties on your roofing sheets?", a: "Yes, all our Aluzinc and Aluminium sheets come with a manufacturer's warranty against rust and fading, typically ranging from 10 to 20 years depending on the grade." },
        { q: "How quickly can you start installation?", a: "We pride ourselves on our '24/7' readiness. Once materials are selected and the deposit is made, we can often mobilize our installation team within 24-48 hours." },
        { q: "Do you service areas outside Bibiani?", a: "Absolutely. We cover the entire Western North Region including Sefwi Wiawso, Enchi, and Juaboso. Delivery charges may vary based on distance." },
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>Oman Roofing 24/7 Enterprise | Ghana's Premier Roofing Solution</title>
                <meta name="description" content="Top-tier roofing sheets and expert installation in Bibiani and Western North Region. Available 24/7 for all your roofing needs." />
            </Helmet>

            {/* Hero Section */}
            {/* Hero Section - Split Layout */}
            {/* Hero Section - Full Width Carousel */}
            <section className="hero">
                {/* Background Carousel */}
                <div className="hero-carousel-background">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`bg-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img src={slide.image} alt={slide.caption} />
                            <div className="bg-overlay"></div>
                        </div>
                    ))}
                </div>

                <div className="container hero-content">
                    {/* Glass Card Content */}
                    <div className="hero-glass-card animate-on-scroll fade-up">
                        <div className="intro-badge">
                            <Zap size={14} fill="currentColor" />
                            Premium Roofing Solutions
                        </div>
                        <h1>
                            Quality Roofing.<br />
                            <span className="text-primary">Lifetime Protection.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Bibiani's trusted source for Aluzinc sheets and expert installation.
                            We deliver aesthetic beauty and structural integrity to your home.
                        </p>
                        <div className="hero-cta">
                            <a href="tel:0551733524" className="btn btn-urgent btn-lg">
                                <Phone size={20} /> Get Free Estimate
                            </a>
                            <Link to="/projects" className="btn btn-outline btn-lg">
                                View Our Work
                            </Link>
                        </div>

                        {/* Slide Progress / Indicators integrated in card */}
                        <div className="slide-info">
                            <div className="slide-dots">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                            <div className="current-caption">
                                <span className="caption-label">Featured Project:</span>
                                <span className="caption-text">{slides[currentSlide].caption}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="trust-banner">
                <div className="container">
                    <div className="stat-row animate-on-scroll fade-up">
                        <div className="stat-item">
                            <h2>500+</h2>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h2>100%</h2>
                            <p>Leak-Free Guarantee</p>
                        </div>
                        <div className="stat-item">
                            <h2>24/7</h2>
                            <p>Support Availability</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us (Features) */}
            <section className="features-section section">
                <div className="container">
                    <div className="text-center animate-on-scroll fade-up">
                        <h2 style={{ color: 'var(--color-primary)' }}>Why Choose <span style={{ color: 'var(--color-accent)' }}>Oman Roofing</span>?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>We combine technical expertise with unparalleled customer availability.</p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature-card animate-on-scroll fade-up">
                            <div className="feature-icon">
                                <Layers />
                            </div>
                            <h3>Premium Materials</h3>
                            <p>We only stock high-grade Aluzinc and Aluminium profiles that are chemically treated to resist the harsh Ghanaian weather.</p>
                        </div>
                        <div className="feature-card animate-on-scroll fade-up delay-1">
                            <div className="feature-icon">
                                <Hammer />
                            </div>
                            <h3>Expert Installation</h3>
                            <p>Our artisans are trained in modern carpentry techniques, ensuring your roof structure is geometrically perfect before sheeting.</p>
                        </div>
                        <div className="feature-card animate-on-scroll fade-up delay-2">
                            <div className="feature-icon">
                                <Clock />
                            </div>
                            <h3>Always Available</h3>
                            <p>We live up to our name. Morning, noon, or night—if you have an emergency or need a quote, we answer the phone.</p>
                        </div>
                        <div className="feature-card animate-on-scroll fade-up">
                            <div className="feature-icon">
                                <ShieldCheck />
                            </div>
                            <h3>Warranty Assured</h3>
                            <p>Peace of mind comes standard. We stand behind every sheet sold and every nail driven with our service guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process - Added for Comprehensiveness */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center animate-on-scroll fade-up">
                        <h2>How We Work</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>From inquiry to installation in 3 simple steps.</p>
                    </div>
                    <div className="process-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div className="process-step animate-on-scroll fade-up delay-1">
                            <div className="step-number" style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(2, 18, 43, 0.1)', lineHeight: '1' }}>01</div>
                            <h3 style={{ color: 'var(--color-primary)', marginTop: '-1rem' }}>Consultation</h3>
                            <p>Call or visit us. We assess your needs, calculate estimates, and recommend the best materials.</p>
                        </div>
                        <div className="process-step animate-on-scroll fade-up delay-2">
                            <div className="step-number" style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(2, 18, 43, 0.1)', lineHeight: '1' }}>02</div>
                            <h3 style={{ color: 'var(--color-primary)', marginTop: '-1rem' }}>Delivery</h3>
                            <p>We deliver your Aluzinc sheets and accessories directly to your site, anywhere in the region.</p>
                        </div>
                        <div className="process-step animate-on-scroll fade-up delay-3">
                            <div className="step-number" style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(2, 18, 43, 0.1)', lineHeight: '1' }}>03</div>
                            <h3 style={{ color: 'var(--color-primary)', marginTop: '-1rem' }}>Installation</h3>
                            <p>Our expert team installs your roof with precision, ensuring a leak-proof and stunning finish.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section">
                <div className="container">
                    <h2 className="text-center animate-on-scroll fade-up">What Our Clients Say</h2>
                    <div className="grid-3" style={{ marginTop: '3rem' }}>
                        {/* 1 */}
                        <div className="testimonial-card animate-on-scroll fade-up">
                            <div className="stars">
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                            </div>
                            <p className="quote-text">"I was amazed by their speed. They measured my house in the morning and by evening the wood was being delivered. Highly recommended!"</p>
                            <div className="user-info">
                                <div className="user-avatar">MK</div>
                                <div>
                                    <h4>Michael K.</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem' }}>Sefwi Wiawso</p>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="testimonial-card animate-on-scroll fade-up delay-1">
                            <div className="stars">
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                            </div>
                            <p className="quote-text">"The quality of the Aluzinc sheets is top notch. It's been 2 years and it still shines like new. Oman Roofing is the real deal."</p>
                            <div className="user-info">
                                <div className="user-avatar">SA</div>
                                <div>
                                    <h4>Sarah A.</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem' }}>Bibiani</p>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="testimonial-card animate-on-scroll fade-up delay-2">
                            <div className="stars">
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                                <Star fill="#ffd700" size={16} />
                            </div>
                            <p className="quote-text">"Fixing my leak at 8 PM on a Sunday? I didn't think it was possible until I called them. True to their 24/7 name."</p>
                            <div className="user-info">
                                <div className="user-avatar">JA</div>
                                <div>
                                    <h4>James Appiah</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem' }}>Chirano</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container faq-section animate-on-scroll fade-up">
                    <h2 className="text-center">Frequently Asked Questions</h2>
                    <div style={{ marginTop: '2rem' }}>
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {faq.q}
                                    {openFaq === index ? <Minus size={20} color="var(--color-accent)" /> : <Plus size={20} />}
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section section">
                <div className="cta-overlay"></div>
                <div className="container cta-content animate-on-scroll fade-up">
                    <h2>Ready to Start Your Project?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e0' }}>Get a free estimate today and experience the difference.</p>
                    <a href="https://wa.me/233551733524" className="btn btn-urgent btn-lg">
                        <MessageSquare size={20} /> Chat on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
