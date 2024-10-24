// components/Services.tsx
import React from 'react';
import '../styles/services.css'; // Import the custom CSS

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building responsive and modern web applications.',
    icon: '🌐',
  },
  {
    title: 'Mobile Application Development',
    description: 'Building responsive and high-performance mobile applications.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'Custom GPT Developer',
    description: 'Developing custom GPT models for tailored solutions.',
    icon: '🤖',
  },
  {
    title: 'Chatbots Developer',
    description: 'Creating intelligent chatbots for automated customer interactions.',
    icon: '💬',
  },
  {
    title: 'AI Agent Developer',
    description: 'Building AI agents for complex problem-solving tasks.',
    icon: '🧠',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
