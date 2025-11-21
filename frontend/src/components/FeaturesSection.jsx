import React from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      title: '100% Canadian-Owned',
      description: 'Your rides support local communities. Unlike foreign-owned platforms, Zoplop keeps profits in Canada, creating jobs and economic opportunities right here at home.'
    },
    {
      title: "Women's Empowerment",
      description: 'Dedicated programs supporting women drivers with flexible earning opportunities, professional development, and a safe working environment.'
    },
    {
      title: 'Enhanced Safety',
      description: 'Comprehensive background checks, continuous driver monitoring, real-time tracking, and 24/7 support ensure your safety every ride.'
    },
    {
      title: 'Community-Focused',
      description: 'Building stronger neighborhoods by keeping transportation dollars local and supporting community initiatives across the GTA.'
    },
    {
      title: 'Eco-Friendly Options',
      description: 'Choose hybrid or electric vehicles for your rides and help reduce carbon emissions while supporting sustainable transportation.'
    },
    {
      title: 'Environmental Impact',
      description: 'Our commitment to growing our EV fleet and reducing environmental footprint makes every ride a step toward a greener future.'
    }
  ];

  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Best Features</h2>
          <p className="section-subtitle">We're committed to providing the best ride experience while supporting our community</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <CardContent className="feature-content">
                <div className="feature-icon-wrapper">
                  <Heart className="feature-icon" size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;