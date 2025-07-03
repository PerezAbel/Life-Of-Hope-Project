import React from 'react';
import '../css/AboutUs.css'; // You'll need to create this CSS file

const AboutUs = () => {
  const founders = [
    {
      name: "Alex Bohm",
      title: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamque consequat enim nonummy nibh euismod tincidunt ut labore et dolore magna aliquip ex ea commodo consequat.",
      email: "alex@example.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Eady William Hyman",
      title: "CTO",
      bio: "Technology visionary with 15 years of experience in building scalable solutions.",
      email: "eady@example.com",
      phone: "+1 (555) 987-6543"
    },
    {
      name: "J.A.S. Berman Hyman",
      title: "COO",
      bio: "Operations expert specializing in process optimization and team leadership.",
      email: "berman@example.com",
      phone: "+1 (555) 456-7890"
    }
  ];

  const [showContacts, setShowContacts] = React.useState(null);

  const toggleContacts = (index) => {
    setShowContacts(showContacts === index ? null : index);
  };

  return (
    <div className="about-page">
      {/* Section 1: Header with image and mission statements */}
      <section className="mission-section">
        <div className="mission-image">
          <img src="https://images.unsplash.com/photo-1502781252888-9143ba7f074e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" />
        </div>
        
        <div className="mission-content">
          <h1>Office Voice Editor & Leader</h1>
          <h2>Foster Care – Fostering Hope</h2>
          
          <div className="mission-statement">
            <h3>We Believe in the Wisdom of Mothers</h3>
            <p>
              Mothers are often frequently equipped with the wisdom that families need to succeed. 
              Our programs are designed in partnership with mothers, encouraging them to participate 
              in defining benefits and services for their children.
            </p>
            <div className="tag">THE WOMAN</div>
          </div>
          
          <div className="mission-statement">
            <h3>We Believe in Strong Families</h3>
            <p>
              Families thrive when provided with the right resources and support. 
              We build a simple, supportive community that helps parents and guardians 
              create stable environments for their children.
            </p>
            <div className="tag">GREATNESS</div>
          </div>
          
          <p className="mission-footer">
            The website was selected to represent our experience. This is extremely important 
            as it helps communicate our values and results.
          </p>
        </div>
      </section>

      {/* Section 2: Info with paragraph and image beside it */}
      <section className="info-section">
        <div className="info-content">
          <h2>Were Building Strong Reputation</h2>
          <p>
            One of the greatest consequences in these global developments is the need 
            for strong reputation management. We play a key role in helping organizations 
            navigate these challenges and build trust with their stakeholders.
          </p>
        </div>
        <div className="info-image">
          <img src="/path-to-your-side-image.jpg" alt="Building Strong Reputation" />
        </div>
      </section>

      {/* Section 3: Founders cards with contact info */}
      <section className="founders-section">
        <h2>Leadership Team</h2>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div className="founder-card" key={index}>
              <div className="founder-image">
                <img src={`/path-to-founder-${index+1}-image.jpg`} alt={founder.name} />
              </div>
              <h3>{founder.name}</h3>
              <p className="title">{founder.title}</p>
              <p className="bio">{founder.bio}</p>
              
              <button 
                className="contact-button"
                onClick={() => toggleContacts(index)}
              >
                Contact
              </button>
              
              {showContacts === index && (
                <div className="contact-info">
                  <p>Email: {founder.email}</p>
                  <p>Phone: {founder.phone}</p>
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