import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../styleElements/contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullName === '') {
      toast.error("Full name cannot be empty");
    } else if (email === '') {
      toast.error("Email cannot be empty");
    } else if (message === '') {
      toast.error("Message cannot be empty");
    } else {
      const user = { fullName, email, message };
      console.log(user);
      fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(() => {
        console.log("Information sent");
        toast.success("Response sent");
        navigate("/");
      });
    }
  };

  return (
    <div id="saiContact">
      <section>
    
        <div className="section-header">
          <div className="contactcontainer">
            <h2>Contact Us</h2>
            <p>We are committed to providing fast, reliable, and accessible healthcare solutions to ensure you and your loved ones receive the best possible care when you need it the most.please send us a message if you have any queries</p>
          </div>
        </div>
    
        <div className="container">
          <div className="row">
            
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-home"></i>
                </div>
                
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>Chak Ganjaria, C, G. City, ,<br/>  Lucknow, Ahmamau, Uttar Pradesh <br/>226002</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+919346270346</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>testuser11228@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div className="input-box">
                  <input 
                    type="text" 
                    onChange={(e) => setFullName(e.target.value)}
                    required="true" 
                    name="full-name"
                  />
                  <span>Full Name</span>
                </div>
                
                <div className="input-box">
                  <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required="true" 
                    name="email"
                  />
                  <span>Email</span>
                </div>
                
                <div className="input-box">
                  <textarea 
                    required="true" 
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                  ></textarea>
                  <span>Type your Message...</span>
                </div>
                
                <div className="input-box">
                  <input 
                    type="submit" 
                    value="Send" 
                    onClick={handleSubmit}
                    name="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
