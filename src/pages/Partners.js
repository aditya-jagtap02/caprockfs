import React from 'react';
import {
  Target,
  Zap,
  FileText,
  RefreshCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Partners.css';

const banks = [
  { name: 'State Bank of India', domain: 'sbi.co.in', type: 'PSU Bank', color: '#22409A' },
  { name: 'Bank of Baroda', domain: 'bankofbaroda.in', type: 'PSU Bank', color: '#F07A28' },
  { name: 'Bank of Maharashtra', domain: 'bankofmaharashtra.in', type: 'PSU Bank', color: '#004C98' },
  { name: 'Union Bank of India', domain: 'UBI', type: 'PSU Bank', color: '#C41E3A' },
  { name: 'Canara Bank', domain: 'canarabank.com', type: 'PSU Bank', color: '#003087' },
  { name: 'hdfcbank.com Bank', domain: 'hdfcbank.com', type: 'Private Bank', color: '#004C8A' },
  { name: 'ICICI Bank', domain: 'icicibank.com', type: 'Private Bank', color: '#F58220' },
  { name: 'Axis Bank', domain: 'axisbank.com', type: 'Private Bank', color: '#800020' },
  { name: 'Kotak Mahindra Bank', domain: 'kotak811.com', type: 'Private Bank', color: '#EF3C2D' },
  { name: 'YES Bank', domain: 'yesbank.in', type: 'Private Bank', color: '#0057A8' },
  { name: 'IndusInd Bank', domain: 'indusind.com', type: 'Private Bank', color: '#4B0082' },
  { name: 'Federal Bank', domain: 'federalbank.com', type: 'Private Bank', color: '#003366' },
  { name: 'Saraswat Bank', domain: 'saraswatbank.com', type: 'Co-op Bank', color: '#2E8B57' },
  { name: 'Cosmos Bank', domain: 'cosmosbank.in', type: 'Co-op Bank', color: '#8B4513' },
  { name: 'Bajaj Finance', domain: 'bajajfinserv.in', type: 'NBFC', color: '#003087' },
  { name: 'Aditya Birla Finance', domain: 'adityabirlacapital.com', type: 'NBFC', color: '#E31837' },
  { name: 'Tata Capital', domain: 'tata.com', type: 'NBFC', color: '#00518A' },
  { name: 'L&T Finance', domain: 'ltfinance.com', type: 'NBFC', color: '#005EB8' },
  { name: 'PNB Housing Finance', domain: 'pnbhousing.com', type: 'HFC', color: '#003087' },
  { name: 'DHFL', domain: 'dhflinsurance.com', type: 'HFC', color: '#E31837' },
];

const types = ['All', 'PSU Bank', 'Private Bank', 'Co-op Bank', 'NBFC', 'HFC'];

export default function Partners() {
  const [active, setActive] = React.useState('All');
  const filtered = active === 'All' ? banks : banks.filter(b => b.type === active);

  return (
    <div className="partners-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-label">Our Partners</p>
          <h1>20+ Banking <span>Partners</span></h1>
          <p>We are an authorised DSA (Direct Selling Agent) for India's leading banks, NBFCs and housing finance companies — giving you maximum choice.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Bank & NBFC Network</p>
            <h2 className="section-title">Our Trusted <span>Lending Partners</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>We work with PSU banks, private banks, cooperative banks, NBFCs and housing finance companies.</p>
          </div>
          <div className="partner-filters">
            {types.map(t => (
              <button key={t} className={`prod-filter-btn${active === t ? ' active' : ''}`} onClick={() => setActive(t)}>{t}</button>
            ))}
          </div>
          <div className="partner-grid">
            {filtered.map((b, i) => (
              <div key={i} className="partner-card">
                <div
  className="partner-avatar"
  style={{
    background: '#fff',
    borderColor: b.color + '22'
  }}
>
  <img
    src={`https://img.logo.dev/${b.domain}?token=pk_XlbSZmeMTa6nHMSAUJBgiA&size=120&retina=true`}
    alt={b.name}
  />
</div>
                <div className="partner-info">
                  <div className="partner-name">{b.name}</div>
                  <div className="partner-type">{b.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="partner-advantage-grid">
            {[
              {icon: <Target size={36} />, title: 'Best Rate Guarantee', desc: 'We compare all our partners and place your application where you get the lowest interest rate.' },
              { icon: <Zap size={36} />, title: 'Faster Approvals', desc: 'Our relationships with bank officials mean your file gets priority attention and faster processing.' },
              { icon: <FileText size={36} />, title: 'All Profiles Welcome', desc: 'Salaried, self-employed, business owners, NRIs — we have a partner for every financial profile.' },
              { icon: <RefreshCcw size={36} />, title: 'Multiple Applications', desc: 'We can submit to multiple banks simultaneously to maximise your chances of approval.' },
            ].map((a, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
               <div className="partner-adv-icon">{a.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginBottom: 10 }}>{a.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.65 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Get Started</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Let Us Find the <span>Right Partner for You</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto 36px' }}>Tell us your needs and we will match you to the best bank from our network — completely free.</p>
          <Link to="/contact" className="btn-primary">Get Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
