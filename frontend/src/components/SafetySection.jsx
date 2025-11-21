import React, { useState } from 'react';
import { GraduationCap, Check } from 'lucide-react';
import './SafetySection.css';

const SafetySection = () => {
  const [activeTab, setActiveTab] = useState('driver');

  const driverSafety = [
    {
      title: 'Driver Screening',
      description: 'All drivers undergo comprehensive screening:',
      items: [
        'Criminal record checks',
        'Driving record reviews (minimum 3-year history)',
        'Annual re-certification',
        'Continuous monitoring',
        '100% completion rate maintained'
      ]
    },
    {
      title: 'Driver Training',
      description: 'Rigorous training program covering:',
      items: [
        'Safe driving practices',
        'Customer service excellence',
        'Emergency response protocols',
        'Cultural sensitivity training',
        'Ongoing professional development'
      ]
    },
    {
      title: 'Vehicle Standards',
      description: 'Strict vehicle requirements ensure passenger safety:',
      items: [
        'Vehicle age restrictions (max 8 years)',
        'Regular safety inspections',
        'Commercial auto insurance',
        'Cleanliness standards',
        'GPS tracking enabled'
      ]
    }
  ];

  const riderSafety = [
    {
      title: 'Ride Safety Features',
      description: 'Advanced safety features for every ride:',
      items: [
        'Real-time GPS tracking',
        'Share trip details with friends/family',
        'Emergency assistance button',
        'Driver photo & vehicle verification',
        'Ride history and receipts'
      ]
    },
    {
      title: 'Support & Assistance',
      description: '24/7 support always available:',
      items: [
        'In-app emergency contact',
        'Dedicated safety team',
        'Two-way rating system',
        'Incident reporting',
        'Follow-up and resolution'
      ]
    },
    {
      title: 'Trust & Verification',
      description: 'Building trust through transparency:',
      items: [
        'Driver identity verification',
        'Background check transparency',
        'Community feedback system',
        'Safety incident disclosure',
        'Continuous improvement'
      ]
    }
  ];

  const currentSafety = activeTab === 'driver' ? driverSafety : riderSafety;

  return (
    <section id="safety" className="safety-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Safety Standards</h2>
        </div>
        <div className="safety-tabs">
          <button
            className={`tab-button ${activeTab === 'driver' ? 'active' : ''}`}
            onClick={() => setActiveTab('driver')}
          >
            Driver Safety
          </button>
          <button
            className={`tab-button ${activeTab === 'rider' ? 'active' : ''}`}
            onClick={() => setActiveTab('rider')}
          >
            Rider Safety
          </button>
        </div>
        <div className="safety-content">
          <div className="safety-grid">
            {currentSafety.map((item, index) => (
              <div key={index} className="safety-card">
                <div className="safety-icon-wrapper">
                  <GraduationCap className="safety-icon" size={32} />
                </div>
                <h3 className="safety-card-title">{item.title}</h3>
                <p className="safety-card-description">{item.description}</p>
                <ul className="safety-checklist">
                  {item.items.map((checkItem, idx) => (
                    <li key={idx} className="checklist-item">
                      <Check className="check-icon" size={18} />
                      <span>{checkItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;