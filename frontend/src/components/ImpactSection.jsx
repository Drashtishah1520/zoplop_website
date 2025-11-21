import React from 'react';
import './ImpactSection.css';

const ImpactSection = () => {
  const impacts = [
    {
      title: 'By the Numbers',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwwfHx8fDE3NjM3MjYwOTJ8MA&ixlib=rb-4.1.0&q=85',
      items: [
        '100% Canadian-Owned',
        '500+ Vetted Drivers',
        '5,000+ Happy Riders',
        '24/7 Support Available',
        '25% EV/Hybrid Fleet'
      ]
    },
    {
      title: 'Community Impact',
      image: 'https://images.unsplash.com/photo-1762158008280-3dcb1d1cbd99?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0ZWFtd29ya3xlbnwwfHx8fDE3NjM3MjYwOTd8MA&ixlib=rb-4.1.0&q=85',
      items: [
        '$10.8M in driver income generation',
        '15+ community organization partnerships',
        'Economic value retained in Canadian communities'
      ]
    },
    {
      title: "Women's Empowerment",
      image: 'https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtpbmd8ZW58MHx8fHwxNzYzNzI2MTA0fDA&ixlib=rb-4.1.0&q=85',
      items: [
        '200+ women drivers earning flexible income',
        '40+ business skills workshops completed',
        '18% to 40% increase in women\'s transportation sector participation'
      ]
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Impact</h2>
        </div>
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <div key={index} className="impact-card">
              <div className="impact-image-wrapper">
                <img src={impact.image} alt={impact.title} className="impact-image" />
              </div>
              <div className="impact-content">
                <h3 className="impact-title">{impact.title}</h3>
                <ul className="impact-list">
                  {impact.items.map((item, idx) => (
                    <li key={idx} className="impact-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;