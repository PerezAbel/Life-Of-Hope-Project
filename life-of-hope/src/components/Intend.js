import React from 'react';


const Impact = () => {
  return (
    <div className="techx-about-container" style={{
      backgroundImage: 'url(https://media.istockphoto.com/id/1126678409/photo/3d-render-technology-store.jpg?s=612x612&w=0&k=20&c=0ng-qwJXKIqmK46JWAsqGEVMcaZfhSL1WcLLozNYuBU=)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      {/* Dark overlay to dull the background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity (0.5) to make it darker/lighter
        zIndex: 0,
      }}></div>

      {/* Services - content needs to be positioned above the overlay */}
      <section className="services-section" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          color: "white", // Changed to white for better contrast
          fontSize: '40px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://images.pexels.com/photos/8939564/pexels-photo-8939564.jpeg?cs=srgb&dl=pexels-n-voitkevich-8939564.jpg&fm=jpg" alt="Delivery" />
            <div className="overlay">
              <h3>Express Nationwide Delivery</h3>
            </div>
          </div>  
          <div className="service-card">
            <img src="https://imageio.forbes.com/specials-images/imageserve/65282b8ed61a31651ccb438e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Drones" />
            <div className="overlay">
              <h3>Drones & Accessories</h3>
            </div>
          </div>
          <div className="service-card">
            <img src="https://t3.ftcdn.net/jpg/02/44/67/96/360_F_244679651_1ZFNvsYDKuTOlgSBFasEF2CguYFVAvQ1.jpg" alt="Repairs" />
            <div className="overlay">
              <h3>Gadget Repairs & Support</h3>
            </div>
          </div>          
          <div className="service-card">
            <img src="https://www.popsci.com/wp-content/uploads/2023/09/15/how-to-buy-second-hand-tech.jpg?quality=85" alt="Bundles" />
            <div className="overlay">
              <h3>Tech Bundles & Offers</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;