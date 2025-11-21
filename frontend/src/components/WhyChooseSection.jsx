import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: '100% Canadian-Owned',
      content: 'Your rides support local communities. Unlike foreign-owned platforms, Zoplop keeps profits in Canada, creating jobs and economic opportunities right here at home.'
    },
    {
      title: 'Enhanced Safety',
      content: 'Comprehensive background checks, continuous driver monitoring, real-time GPS tracking, and 24/7 emergency support ensure your safety on every ride.'
    },
    {
      title: 'Community-Focused',
      content: 'We invest in local communities by partnering with organizations, supporting local businesses, and ensuring transportation dollars stay in Canadian neighborhoods.'
    },
    {
      title: 'Eco-Friendly Options',
      content: 'Choose from our growing fleet of electric and hybrid vehicles to reduce your carbon footprint while enjoying premium comfort and service.'
    }
  ];

  return (
    <section id="why-zoplop" className="why-choose-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Zoplop?</h2>
        </div>
        <div className="why-choose-grid">
          <div className="accordion-wrapper">
            {items.map((item, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                <button
                  className="accordion-trigger"
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <span className="accordion-title">{item.title}</span>
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="why-choose-visual">
            <div className="visual-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;