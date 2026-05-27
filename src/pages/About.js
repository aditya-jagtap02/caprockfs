import React from 'react';
import {
  Handshake,
  Search,
  Zap,
  Trophy,
  Building2,
  FileText,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: <Handshake size={36} />,
    title: 'Client-First',
    desc: 'Every decision we make centres on what is best for you — not us.'
  },

  {
    icon: <Search size={36} />,
    title: 'Transparency',
    desc: 'No hidden fees, no surprises. Full clarity on every step of your loan journey.'
  },

  {
    icon: <Zap size={36} />,
    title: 'Speed',
    desc: 'We work fast so you do not miss opportunities. Approvals at record speed.'
  },

  {
    icon: <Trophy size={36} />,
    title: 'Excellence',
    desc: '18+ years of consistent, high-quality service you can count on.'
  },
];

// const team = [
//   { name: 'Founder & Lead Advisor', role: 'CAPROCK Financial Services', since: '2006', icon: '👤' },
// ];

const milestones = [
  { year: '2006', title: 'Founded', desc: 'CAPROCK Financial Services established in Pune.' },
  { year: '2010', title: 'Expanded', desc: 'Tied up with 10+ leading banks and NBFCs.' },
  { year: '2015', title: 'Diversified', desc: 'Added insurance, plotting & Vastu consultancy services.' },
  { year: '2020', title: 'Scaled Up', desc: 'Crossed ₹200 Cr in total loan disbursals.' },
  { year: '2024', title: 'Today', desc: '20+ bank partners, 5000+ happy clients, ₹500 Cr+ disbursed.' },
];

export default function About() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-label">About Us</p>
          <h1>Built on <span>Trust.</span><br />Driven by Results.</h1>
          <p>For over 18 years, CAPROCK Financial Services has been Pune's trusted partner for home loans, business loans, insurance and smart financial planning.</p>
        </div>
      </div>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-left">
              <p className="section-label">Our Story</p>
              <h2 className="section-title">From a Vision to <span>500 Crore+</span></h2>
              <div className="gold-divider" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 20 }}>
                CAPROCK Financial Services was founded in 2006 with a singular vision — to make quality financial services accessible to every Indian family and business owner. What began as a boutique loan consultancy in Pune has grown into a full-spectrum financial solutions provider, trusted by thousands.
              </p>
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 32 }}>
                Our strength lies in our network. With tie-ups across 20+ banks and NBFCs, we match every client to the lender best suited to their profile — be it salaried professionals, self-employed individuals, or complex business entities. We do not just file applications; we advocate for you.
              </p>
              <div className="about-story-stats">
                {[['18+','Years'], ['5000+','Clients'], ['₹500Cr+','Disbursed'], ['20+','Partners']].map(([v,l]) => (
                  <div key={l} className="about-stat">
                    <div className="about-stat-val">{v}</div>
                    <div className="about-stat-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-story-right">
              <div className="about-visual">
                <div className="about-big-card">
                  <div className="abc-header">
                    <div className="abc-logo">
                      <svg viewBox="0 0 44 44" fill="none" width="36" height="36">
                        <polygon points="22,3 41,14 41,30 22,41 3,30 3,14" fill="#1B3A6B" stroke="#C9A84C" strokeWidth="2"/>
                        <text x="22" y="26" textAnchor="middle" fill="#C9A84C" fontSize="11" fontWeight="bold" fontFamily="serif">C</text>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>CAPROCK</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>Financial Services</div>
                    </div>
                  </div>
                  <div className="abc-body">
                    <div className="abc-metric"><span>94%</span><small>Approval Rate</small></div>
                    <div className="abc-metric"><span>20+</span><small>Bank Partners</small></div>
                  </div>
                  <div className="abc-footer">Your Trusted DSA Partner since 2006</div>
                </div>
<div className="about-float-tag at1">
  <Building2 size={16} /> 20+ Banks</div>
<div className="about-float-tag at2">
  <FileText size={16} /> All Profiles</div>
<div className="about-float-tag at3">
  <Star size={16} /> 18+ Years
</div>             
 </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Our Values</p>
            <h2 className="section-title">What Drives <span>Everything We Do</span></h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div className="value-icon">{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">18 Years of <span>Milestones</span></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-year">{m.year}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Get In Touch</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Ready to Work With <span>CAPROCK?</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 36px' }}>
            Let us understand your financial needs and find the perfect solution for you.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Contact Us Today</Link>
            <Link to="/products" className="btn-outline btn-outline-gold">View Our Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
