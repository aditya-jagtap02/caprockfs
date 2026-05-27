import React, { useEffect, useRef } from 'react';
import {
  Home as HomeIcon,
  Briefcase,
  ShieldCheck,
  Leaf,
  Landmark,
  FileText,
  Zap,
  Building2,
  // RefreshCcw,
  BadgeCheck,
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '18+', label: 'Years of Experience' },
  { value: '5000+', label: 'Loans Processed' },
  { value: '20+', label: 'Bank Tie-Ups' },
  { value: '₹500Cr+', label: 'Disbursed Amount' },
];

const highlights = [
  {
    icon: <HomeIcon size={32} />,
    title: 'Home Loans',
    desc: 'Residential, under-construction, self-construction & all zone types supported.'
  },

  {
    icon: <Briefcase size={32} />,
    title: 'Business Loans',
    desc: 'Business funding, machinery loans, godown, hotel & hospitality.'
  },

  {
    icon: <ShieldCheck size={32} />,
    title: 'Insurance',
    desc: 'Life, health, motor & general insurance from leading providers.'
  },

  {
    icon: <Leaf size={32} />,
    title: 'Vastu Consultancy',
    desc: 'Expert Vastu guidance for your home and commercial spaces.'
  },
];

const process = [
  { step: '01', title: 'Book Consultation', desc: 'Discuss your needs. We assess your profile, CIBIL & loan eligibility.' },
  { step: '02', title: 'Document Collection', desc: 'We guide you through the exact document checklist — no guesswork.' },
  { step: '03', title: 'Bank Matching', desc: 'We match you to the best bank/NBFC from our 20+ partner network.' },
  { step: '04', title: 'Loan Disbursement', desc: 'Smooth processing and fast disbursement directly into your account.' },
];

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(target.replace(/\D/g, ''));
    const prefix = target.replace(/[\d+]/g, '').replace(suffix, '');
    // let start = 0;
    const duration = 1800;
    // const step = duration / num;
    let frame;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const val = Math.floor(progress * num);
        el.textContent = prefix + val + (progress >= 1 ? target.replace(/\d+/, '').replace(prefix, '') : '+');
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(frame); };
  }, [target, suffix]);
  return <span ref={ref}>{target}</span>;
}

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern" />
          <div className="hero-glow" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Trusted Since 2006 · Pune & Beyond
            </div>
            <h1 className="hero-title">
              Your Financial<br />
              <span className="hero-title-gold">Goals, Unlocked.</span>
            </h1>
            <p className="hero-subtitle">
              CAPROCK Financial Services connects you with 20+ banks and NBFCs to bring you the best loan deals — home, business, mortgage, personal & more.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Apply for a Loan ↗</Link>
              <Link to="/products" className="btn-outline btn-outline-hero">Explore Products</Link>
            </div>
            <div className="hero-tags">
              {['Home Loan', 'Business Loan', 'Mortgage', 'Insurance', 'Balance Transfer'].map(t => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hcard hcard-back">
                <div className="hcard-label">Loan Approved</div>
                <div className="hcard-amount">₹45,00,000</div>
                <div className="hcard-meta">Home Loan · SBI · 8.4% p.a.</div>
              </div>
              <div className="hcard hcard-front">
                <div className="hcard-top">
                  <div>
                    <div className="hcard-label">Total Disbursed</div>
                    <div className="hcard-amount">₹500 Cr+</div>
                  </div>
                  <div className="hcard-icon">
                   <Building2 size={36} />
                  </div>
                  </div>
                <div className="hcard-stats">
                  <div><span>5000+</span><small>Clients</small></div>
                  <div><span>20+</span><small>Partners</small></div>
                  <div><span>18+</span><small>Years</small></div>
                </div>
                <div className="hcard-bar">
                  <div className="hcard-bar-fill" />
                </div>
                <div className="hcard-bar-label">Approval Rate · 94%</div>
              </div>
<div className="hcard-float hcard-float-1">
  <BadgeCheck size={16} />
  Quick Approval
</div><div className="hcard-float hcard-float-2">
  <Trophy size={16} />
  Best Rates
</div>            </div>
          </div>
        </div>
        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-value"><CountUp target={s.value} /></div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        
      </section>

      {/* HIGHLIGHTS */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Complete Financial <span>Solutions</span></h2>
            <p className="section-subtitle">From home loans to insurance, we are your one-stop financial partner with personalized solutions.</p>
          </div>
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div className="highlight-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <Link to="/products" className="highlight-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CAPROCK */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">The CAPROCK <span>Advantage</span></h2>
              <div className="gold-divider" />
              <p className="section-subtitle" style={{ marginBottom: 36 }}>
                We do more than process loans. We advocate for you — understanding your unique financial profile and placing your application with the lender most likely to approve it at the best rate.
              </p>
              <div className="why-bullets">
                {[
                  'Access to 20+ banks and NBFCs',
                  'Expert guidance for all property zones — Red Zone, MIDC, Gunthewari & more',
                  'Salaried and business profile specialists',
                  'Insurance tie-ups for complete financial protection',
                  'Trusted Vastu consultation service',
                  'Transparent process, no hidden charges',
                ].map((b, i) => (
                  <div key={i} className="why-bullet">
                    <div className="why-check">✓</div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary" style={{ marginTop: 32 }}>About Us</Link>
            </div>
            <div className="why-right">
              <div className="why-img-block">
                <div className="why-img-card why-img-card-1">
<div className="why-img-icon">
  <Landmark size={34} />
</div>                  <div>
                    <div className="why-img-title">Licensed DSA</div>
                    <div className="why-img-sub">All major banks & NBFCs</div>
                  </div>
                </div>
                <div className="why-img-card why-img-card-2">
<div className="why-img-icon">
  <FileText size={34} />
</div>                  <div>
                    <div className="why-img-title">Document Guidance</div>
                    <div className="why-img-sub">Step-by-step checklist</div>
                  </div>
                </div>
                <div className="why-img-card why-img-card-3">
<div className="why-img-icon">
  <Zap size={34} />
</div>                  <div>
                    <div className="why-img-title">Fast Processing</div>
                    <div className="why-img-sub">Minimal turnaround time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple 4-Step <span>Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Getting your loan approved has never been this smooth. Here is how we work for you.</p>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-card">
                <div className="process-step">{p.step}</div>
                <div className="process-connector" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2>Ready to Get Your Loan Approved?</h2>
            <p>Talk to our experts today. Free consultation, no obligations.</p>
          </div>
          <div className="cta-banner-actions">
            <a href="tel:+919421308851" className="btn-primary">Call Now: +91 94213 08851</a>
            <Link to="/contact" className="btn-outline btn-outline-gold">Send Enquiry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
