import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
    useScrollReveal();
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        { id: 1, src: '/images/project-church.png', title: 'Modern Church Roofing', location: 'Bibiani' },
        { id: 2, src: '/images/project-residential.png', title: 'Luxury Residence', location: 'Sefwi Wiawso' },
        { id: 3, src: '/images/project-warehouse.png', title: 'Industrial Warehouse', location: 'Bibiani Industrial Area' },
        // Duplicates for demonstration since generation limit reached
        { id: 4, src: '/images/project-residential.png', title: 'Private Villa', location: 'Nantwikumye' },
        { id: 6, src: '/images/project-church.png', title: 'Community Chapel', location: 'Western North' },
        { id: 5, src: '/images/project-warehouse.png', title: 'Storage Facility', location: 'Bibiani' },
    ];

    return (
        <div className="projects-page">
            <Helmet>
                <title>Our Projects | Oman Roofing 24/7 Enterprise</title>
                <meta name="description" content="View our portfolio of residential, commercial, and religious roofing projects across Bibiani, Sefwi Wiawso, and beyond." />
            </Helmet>
            <section className="page-hero small-hero">
                <div className="page-hero-bg" style={{ backgroundImage: "url('/images/project-church.png')" }}></div>
                <div className="page-hero-overlay"></div>
                <div className="container page-hero-content">
                    <h1 className="animate-on-scroll fade-up">Our Projects</h1>
                    <p className="animate-on-scroll fade-up delay-1">A gallery of our recent roofing installations.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="gallery-grid">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="gallery-item animate-on-scroll fade-up"
                                onClick={() => setSelectedImage(project)}
                            >
                                <img src={project.src} alt={project.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <div className="gallery-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close"><X size={32} /></button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="lightbox-caption">
                        <h3>{selectedImage.title}</h3>
                        <p>{selectedImage.location}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
