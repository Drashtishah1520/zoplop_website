import React from 'react';
import './HowToRideSection.css';

const HowToRideSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Download the App',
      description: 'Available on iOS and Android. Sign up in minutes using your phone number and email. Add your payment method securely.'
    },
    {
      number: '2',
      title: 'Choose Your Ride',
      description: 'Select from Standard Rides, Women-for-Women, or Group Rides. View pricing upfront with no surprises.'
    },
    {
      number: '3',
      title: 'Track in Real-Time',
      description: 'Watch your driver approach in real-time. Share your trip details with friends and family for added safety.'
    },
    {
      number: '4',
      title: 'Ride & Rate',
      description: 'Enjoy your safe ride. Rate your driver and provide feedback to help us maintain the highest standards.'
    }
  ];

  return (
    <section id="ride" className="how-to-ride-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">How to Ride</h2>
          <p className="section-badge">FOR RIDERS</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number-wrapper">
                <div className="step-number">{step.number}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRideSection;