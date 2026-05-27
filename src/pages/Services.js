import React from 'react';
import {
  Landmark,
  ShieldCheck,
  Leaf,
  Map,
  FileText,
  ChartColumn,
  Building2,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: <Landmark size={36} />,
    title: 'Loan Consultancy',
    tag: 'Core Service',
    desc: 'End-to-end loan advisory — from eligibility check to disbursement. We handle every step, every document, every follow-up.',
    points: [
      'Profile assessment & CIBIL review',
      'Bank matching from 20+ lenders',
      'Document checklist & guidance',
      'Application filing & follow-up',
      'Negotiation for best rates'
    ],
  },

  {
    icon: <ShieldCheck size={36} />,
    title: 'Insurance Services',
    tag: 'Protection',
    desc: 'Comprehensive insurance solutions from leading providers. We help you protect what matters most.',
    points: [
      'Life Insurance',
      'Health Insurance',
      'Motor Insurance',
      'General Insurance',
      'Group Insurance policies'
    ],
  },

  {
    icon: <Leaf size={36} />,
    title: 'Vastu Consultancy',
    tag: 'Wellness',
    desc: 'Expert Vastu Shastra guidance for your home, office or commercial space to ensure harmony and prosperity.',
    points: [
      'Residential Vastu analysis',
      'Commercial space Vastu',
      'Pre-purchase Vastu check',
      'Remedies & corrections',
      'New construction guidance'
    ],
  },

  {
    icon: <Map size={36} />,
    title: 'Branded Plotting',
    tag: 'Real Estate',
    desc: 'Premium plotted development solutions. We connect you with quality residential and commercial plots.',
    points: [
      'RERA-approved projects',
      'Residential plots',
      'Commercial land',
      'Township projects',
      'Investment-grade plots'
    ],
  },

  {
    icon: <FileText size={36} />,
    title: 'Document Assistance',
    tag: 'Support',
    desc: 'Complete document preparation and verification assistance to ensure your loan application is error-free.',
    points: [
      'Document checklist creation',
      'Verification & review',
      'Missing document guidance',
      'Property document check',
      'Legal clarity support'
    ],
  },

  {
    icon: <ChartColumn size={36} />,
    title: 'Financial Planning',
    tag: 'Advisory',
    desc: 'Holistic financial advisory to help you make informed decisions about loans, investments and insurance.',
    points: [
      'Loan vs investment analysis',
      'EMI optimization',
      'Insurance needs assessment',
      'Debt restructuring advice',
      'Wealth preservation guidance'
    ],
  },
];

const insurancePartners = [
  'LIC', 'SBI Life', 'HDFC Life', 'ICICI Prudential', 'Bajaj Allianz',
  'Star Health', 'New India Assurance', 'United India', 'National Insurance', 'Oriental Insurance',
];

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-label">Our Services</p>
          <h1>Comprehensive <span>Financial Services</span></h1>
          <p>Beyond loans — we offer insurance, Vastu consultancy, branded plotting and complete financial advisory under one roof.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Services Tailored for <span>Your Life</span></h2>
            <p className="section-subtitle">Every service we offer is designed to support your financial journey — from the first step to the final goal.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="sc-top">
                  <div className="sc-icon">{s.icon}</div>
                  <span className="badge badge-navy">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sc-points">
                  {s.points.map((p, pi) => <li key={pi}><span>→</span>{p}</li>)}
                </ul>
                <Link to="/contact" className="sc-link">Enquire Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Insurance Partners</p>
            <h2 className="section-title">Leading Insurance <span>Providers</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>We are tied up with India's most trusted insurance companies to bring you the best coverage options.</p>
          </div>
          <div className="ins-grid">
            {insurancePartners.map((p, i) => (
              <div key={i} className="ins-chip">
                <div className="ins-icon"><Building2 size={20} /></div>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">How We <span>Help You</span></h2>
          </div>
          <div className="help-grid">
            {[
              { num: '01', title: 'Understand Your Need', desc: 'Free consultation to understand your financial situation, goals and what solution fits best.' },
              { num: '02', title: 'Customise a Plan', desc: 'We tailor a specific roadmap — best lender, best product, right documents, exact timeline.' },
              { num: '03', title: 'Execute with Precision', desc: 'We file your application, follow up with the bank/insurer and keep you informed at every stage.' },
              { num: '04', title: 'Deliver the Outcome', desc: 'Loan disbursed, policy issued, plot registered — your goal achieved with zero stress.' },
            ].map((h, i) => (
              <div key={i} className="help-card">
                <div className="help-num">{h.num}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Start Your Journey Today</h2>
            <p>One call — unlimited possibilities. Our advisors are ready.</p>
          </div>
          <div className="cta-banner-actions">
            <a href="tel:+919421308851" className="btn-primary"><Phone size={18}/>+91 94213 08851</a>
            <Link to="/contact" className="btn-outline btn-outline-gold">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
