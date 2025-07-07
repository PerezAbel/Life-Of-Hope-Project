import React, { useState } from 'react';
import { FaHeart, FaHandsHelping, FaUsers, FaLightbulb, FaBullseye, FaLeaf } from 'react-icons/fa';
import '../css/AboutUs.css';
import founder1 from '../Photos/founder1.png';
import founder2 from '../Photos/founder2.png'; 
import photo2 from '../Photos/photo2.png';

const AboutUs = () => {
  const founders = [
    {
      name: "Henry Makori",
      title: "Founder",
      bio: "Visionary leader focused on driving meaningful change through innovative strategies and compassionate leadership. With 14 years in community development, Alex brings passion and expertise to every initiative.",
      email: "alex@communityhope.org",
      phone: "07222693520",
      image: founder1
    },
    {
      name: "Eady William Hyman",
      title: "Co-Founder",
      bio: "Technology expert with a deep understanding of systems and scalability, leading our tech evolution. Eady combines technical prowess with a heart for service to create impactful digital solutions.",
      email: "eady@communityhope.org",
      phone: "0715841502",
      image: founder2
    }
  ];

  const causes = [
    {
      title: "Family Support Programs",
      description: "Providing essential resources and counseling to strengthen families in need.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5JTIwdG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Youth Education Initiative",
      description: "After-school programs and scholarships to help children reach their potential.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Community Empowerment",
      description: "Workshops and resources to help communities become self-sufficient.",
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tbXVuaXR5JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const [showContacts, setShowContacts] = useState(null);

  const toggleContacts = (index) => {
    setShowContacts(showContacts === index ? null : index);
  };

  return (
    <div className="about-us-container">
      {/* Hero Section with About Text and Image */}
      <section className="about-hero">
        <div className="about-image-container">
          <div className="image-decoration blue"></div>
          <div className="image-decoration yellow"></div>
          <img 
            src={photo2}
            alt="Community Hope" 
            className="about-main-image"
          />
        </div>
        <div className="about-text">
          <h1>About Community Hope Project</h1>
          <p>
            Community Hope Project was founded in 2010 with a simple belief: <span className="highlight-yellow">every family deserves support, resources, and opportunities to thrive</span>. 
            What began as a local initiative has grown into a movement that touches thousands of lives annually through our various programs.
          </p>
          <p>
            We work directly with communities to identify their unique needs and develop tailored solutions that create lasting change. 
            Our approach combines <span className="highlight-blue">grassroots wisdom with evidence-based practices</span> to build stronger families and more resilient communities.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="vision-mission">
        <h2>Our Vision & Mission</h2>
        <div className="cards-container">
          <div className="vision-card">
            <FaBullseye className="card-icon" />
            <h3>Our Vision</h3>
            <p>
              A world where every family has the resources, support, and opportunities they need to thrive. 
              We envision communities where hope is abundant and every individual can reach their full potential.
            </p>
          </div>
          <div className="mission-card">
            <FaHandsHelping className="card-icon" />
            <h3>Our Mission</h3>
            <p>
              To empower families and strengthen communities through comprehensive support programs, 
              education initiatives, and advocacy efforts that address both immediate needs and systemic challenges.
            </p>
          </div>
          <div className="approach-card">
            <FaUsers className="card-icon" />
            <h3>Our Approach</h3>
            <p>
              Community-led solutions, evidence-based practices, and collaborative partnerships form the foundation 
              of our work. We listen first, then act with compassion and innovation.
            </p>
          </div>
          <div className="values-card">
            <FaLeaf className="card-icon" />
            <h3>Our Values</h3>
            <p>
              Compassion, Integrity, Innovation, and Community. These core values guide every decision we make 
              and every program we develop.
            </p>
          </div>
        </div>
      </section>

      {/* Current Causes */}
      <section className="current-causes">
        <h2>Our Current Causes</h2>
        <div className="causes-grid">
          {causes.map((cause, index) => (
            <div key={index} className="cause-card">
              <img src={cause.image} alt={cause.title} />
              <div className="cause-info">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <h2>Meet Our Founders</h2>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-image-container">
                <img src={founder.image} alt={founder.name} />
                <div className="founder-icon">
                  {index === 0 ? <FaHeart /> : <FaLightbulb />}
                </div>
              </div>
              <h3>{founder.name}</h3>
              <p className="founder-title">{founder.title}</p>
              <p className="founder-bio">{founder.bio}</p>
              <button
                onClick={() => toggleContacts(index)}
                className="contact-button"
              >
                {showContacts === index ? 'Hide Contact' : 'Contact'}
              </button>

              {showContacts === index && (
                <div className="contact-info">
                  <p><span>Email:</span> {founder.email}</p>
                  <p><span>Phone:</span> {founder.phone}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;