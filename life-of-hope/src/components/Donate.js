import React, { useState } from "react";
import "../css/Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    message: ""
  });
  
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentOptions(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    if (method === "mpesa") {
      // Simulate M-Pesa payment prompt
      setTimeout(() => {
        setPaymentSuccess(true);
      }, 2000);
    }
  };

  const handleCardPayment = (e) => {
    e.preventDefault();
    // Simulate card payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      country: "",
      message: ""
    });
    setShowPaymentOptions(false);
    setPaymentMethod("");
    setCardDetails({
      cardNumber: "",
      expiry: "",
      cvv: ""
    });
    setPaymentSuccess(false);
  };

  return (
    <div className="donate-container">
      {/* Header with text overlay */}
      <div className="header-image">
        <img src='https://c1.wallpaperflare.com/preview/268/992/992/child-children-girl-happy.jpg' alt="Donate For Humanity" />
        <h1 className="image-text">Donate For Humanity</h1>
      </div>
      
      {!paymentSuccess ? (
        <>
          {!showPaymentOptions ? (
            <form className="donation-form" onSubmit={handleSubmit}>
              <div className="form-fields">
                <div className="form-row">
                  <label>First Name:</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Last Name:</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Email Address:</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>City:</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Country:</label>
                  <input 
                    type="text" 
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Message (Optional):</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="donate-button">
                  Donate Now
                </button>
              </div>
            </form>
          ) : (
            <div className="payment-options">
              {!paymentMethod ? (
                <>
                  <h2>Select Payment Method</h2>
                  <div className="payment-methods">
                    <button 
                      className="payment-method" 
                      onClick={() => handlePaymentMethodSelect("mpesa")}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/M-PESA_LOGO-01.svg" alt="M-Pesa" />
                      <span>M-Pesa</span>
                    </button>
                    <button 
                      className="payment-method" 
                      onClick={() => handlePaymentMethodSelect("paypal")}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                      <span>PayPal</span>
                    </button>
                    <button 
                      className="payment-method" 
                      onClick={() => handlePaymentMethodSelect("card")}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Credit Card" />
                      <span>Credit/Debit Card</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {paymentMethod === "mpesa" ? (
                    <div className="mpesa-prompt">
                      <h3>M-Pesa Payment</h3>
                      <p>Check your phone for an M-Pesa prompt to complete the payment.</p>
                      <div className="processing">
                        <div className="spinner"></div>
                        <p>Processing payment...</p>
                      </div>
                    </div>
                  ) : (
                    <form className="card-payment-form" onSubmit={handleCardPayment}>
                      <h3>Enter Card Details</h3>
                      <div className="form-row">
                        <label>Card Number:</label>
                        <input 
                          type="text" 
                          name="cardNumber"
                          value={cardDetails.cardNumber}
                          onChange={handleCardInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="form-row">
                        <label>Expiry Date:</label>
                        <input 
                          type="text" 
                          name="expiry"
                          value={cardDetails.expiry}
                          onChange={handleCardInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="form-row">
                        <label>CVV:</label>
                        <input 
                          type="text" 
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                      <button type="submit" className="pay-button">
                        Pay Now
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="thank-you-message">
          <div className="checkmark">✓</div>
          <h2>Thank You for Your Donation!</h2>
          <p>Your generous contribution will help make a difference in people's lives.</p>
          <p>We've sent a receipt to {formData.email}</p>
          <button onClick={resetForm} className="back-button">
            Make Another Donation
          </button>
        </div>
      )}

     
    </div>
  );
};

export default Donate;