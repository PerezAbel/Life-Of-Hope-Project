import React, { useState } from "react";
import { FaDonate, FaHandHoldingHeart } from "react-icons/fa";
import "../css/Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    amount: "",
    message: ""
  });
  
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

  const handleMpesaPayment = () => {
    // Simulate M-Pesa payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      amount: "",
      message: ""
    });
    setShowPaymentOptions(false);
    setPaymentSuccess(false);
  };

  return (
    <div className="donate-page">
      {/* Decorative elements */}
      <div className="decor-circle-blue"></div>
      <div className="decor-circle-yellow"></div>
      <div className="decor-wave-blue"></div>
      <div className="decor-wave-yellow"></div>
      
      <div className="donate-container">
        {/* Header section */}
        <div className="donate-header">
          <h1 className="donate-title">Make a Difference Today</h1>
          <p className="donate-subtitle">Donate towards our causes and help transform lives</p>
        </div>

        {!paymentSuccess ? (
          <>
            {!showPaymentOptions ? (
              <div className="form-container">
                <div className="form-logo">
                  <FaHandHoldingHeart className="logo-icon" />
                </div>
                
                <form className="donation-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Phone Number (for M-Pesa)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 254712345678"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Amount (KES)</label>
                    <input 
                      type="number" 
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                      min="10"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message of support..."
                    />
                  </div>
                  
                  <button type="submit" className="donate-button">
                    <FaDonate className="button-icon" />
                    Proceed to Donate
                  </button>
                </form>
                
                <div className="donate-icon">
                  <FaDonate className="floating-donate-icon" />
                </div>
              </div>
            ) : (
              <div className="payment-section">
                <div className="mpesa-payment">
                  <h3>Complete Your Donation via M-Pesa</h3>
                  <div className="payment-details">
                    <p><strong>Amount:</strong> KES {formData.amount}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                  </div>
                  
                  <div className="mpesa-instructions">
                    <p>You will receive an M-Pesa prompt on your phone to complete the payment.</p>
                    <button onClick={handleMpesaPayment} className="mpesa-button">
                      Initiate M-Pesa Payment
                    </button>
                  </div>
                  
                  <div className="processing" style={{ display: 'none' }}>
                    <div className="spinner"></div>
                    <p>Processing payment...</p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="thank-you-section">
            <div className="thank-you-card">
              <div className="checkmark-circle">
                <div className="checkmark">✓</div>
              </div>
              <h2>Thank You for Your Generosity!</h2>
              <p className="success-message">
                Your donation of KES {formData.amount} has been received successfully.
                A receipt has been sent to {formData.email}.
              </p>
              <p className="appreciation">
                Your support makes a real difference in people's lives.
              </p>
              <button onClick={resetForm} className="back-button">
                Make Another Donation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;