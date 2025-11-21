import React from 'react';
import { Check } from 'lucide-react';
import './CanadianOwnershipSection.css';

const CanadianOwnershipSection = () => {
  const benefits = [
    'Keep transportation profits in Canadian communities',
    'Create jobs for Canadian workers',
    'Support Canadian technology innovation',
    'Build stronger local economies',
    "Invest in your neighbors' success"
  ];

  return (
    <section className="canadian-ownership-section">
      <div className="section-container">
        <div className="ownership-grid">
          <div className="ownership-content">
            <h2 className="ownership-title">Why Canadian Ownership Matters</h2>
            <p className="ownership-intro">When you choose Zoplop, you're choosing to:</p>
            <ul className="ownership-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="ownership-item">
                  <Check className="check-icon" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="ownership-stat">
              <p className="stat-text">
                <strong>73% of Canadians</strong> prefer to support locally-owned businesses when quality and pricing are comparable. With Zoplop, you get <strong>superior service AND community impact</strong>.
              </p>
            </div>
          </div>
          <div className="ownership-visual">
            <div className="visual-block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanadianOwnershipSection;