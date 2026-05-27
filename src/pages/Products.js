import React, { useState } from 'react';
import {
  House,
  Hammer,
  Trees,
  Building2,
  Factory,
  Scale,
  Briefcase,
  User,
  IndianRupee,
  Warehouse,
  Globe,
  TriangleAlert,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = ['All', 'Residential', 'Commercial', 'Business & Personal', 'Specialized'];

const products = [
  { cat: 'Residential', icon: <House size={36} />, title: 'Home Loan', badge: 'Most Popular', desc: 'Purchase your dream home with competitive rates. Covers all residential properties.', features: ['Up to 90% funding', 'All residential zones', 'Salaried & Self-employed', 'Flexible tenure up to 30 yrs'] },
  { cat: 'Residential', icon: <Hammer size={36} />, title: 'Self Construction Loan', desc: 'Build your dream home from the ground up with our construction financing.', features: ['Phased disbursement', 'Plan/estimate required', 'Zone certificate needed', 'Competitive rates'] },
  // { cat: 'Residential', icon: '📦', title: 'Balance Transfer + Top-up', badge: 'Save Money', desc: 'Switch your existing loan to a lower interest rate and get additional funds.', features: ['Reduce your EMI', 'Get extra top-up funds', 'Track record required', 'Foreclosure letter needed'] },
  { cat: 'Residential', icon: <Trees size={36} />, title: 'Agriculture Plot', desc: 'Finance for agriculture and development plots in eligible zones.', features: ['Agriculture zone eligible', 'Competitive rates', 'Special processing', 'Sheti-na-vikas zone'] },
  { cat: 'Commercial',icon: <Building2 size={36} />, title: 'Commercial Purchase Loan', desc: 'Acquire office spaces, shops, showrooms and commercial properties.', features: ['Offices & showrooms', 'High loan amounts', 'Flexible structures', 'Rental income considered'] },
  { cat: 'Commercial', icon: <Factory size={36} />, title: 'Industrial Property Loan', desc: 'Finance for industrial units, factories, warehouses and MIDC properties.', features: ['MIDC properties', 'Industrial zones', 'High loan values', 'Long tenure options'] },
  { cat: 'Commercial',icon: <Scale size={36} />, title: 'Mortgage Loan', desc: 'Leverage your existing property to unlock funds for business or personal needs.', features: ['Property as collateral', 'Any property type', 'LAP (Loan Against Property)', 'High LTV ratios'] },
  // { cat: 'Commercial', icon: '🏗️', title: 'Project Loan', desc: 'Large-scale funding for real-estate developers and construction projects.', features: ['Builder/developer loans', 'Master file required', 'Plan & cost sheet', 'DP receipts needed'] },
  { cat: 'Business & Personal', icon: <Briefcase size={36} />, title: 'Business Loan', badge: 'Unsecured', desc: 'Grow your business with quick, collateral-free funding options.', features: ['Unsecured options', 'Shop Act required', 'Udyam Aadhar', '3 yrs ITR needed'] },
  { cat: 'Business & Personal', icon: <User size={36} />, title: 'Personal Loan', desc: 'Quick personal funds for any requirement — medical, education, travel or more.', features: ['No collateral needed', 'Quick processing', 'Salary slip required', 'Flexible tenure'] },
  { cat: 'Business & Personal',icon: <IndianRupee size={36} />, title: 'Pvt. / VC Funding', badge: 'Enterprise', desc: 'Private and venture capital funding for startups and growth-stage businesses.', features: ['Startup friendly', 'Growth capital', 'VC tie-ups', 'Structured funding'] },
  // { cat: 'Specialized', icon: '🏫', title: 'School Funding', desc: 'Specialized financing for educational institutions and school infrastructure.', features: ['Education sector', 'Long tenure', 'Special rates', 'Infrastructure focus'] },
  { cat: 'Specialized', icon: <Warehouse size={36} />, title: 'Godown / Warehouse', desc: 'Financing for godown, warehouse and logistics property acquisition.', features: ['Logistics properties', 'High loan amounts', 'Rental yield considered', 'MIDC eligible'] },
  // { cat: 'Specialized', icon: '🍷', title: 'Bar, Restaurant & Hotel', badge: 'Hospitality', desc: 'Funding for wine shops, bars, restaurants, hotels, lodging and resorts.', features: ['F&B businesses', 'Hospitality sector', 'Dhaba & resort', 'PG property too'] },
  // { cat: 'Specialized', icon: '⚙️', title: 'Machinery Loan', desc: 'Finance for industrial machinery, construction equipment and plant assets.', features: ['Manufacturing sector', 'Construction equipment', 'Asset-backed', 'Quick processing'] },
  { cat: 'Specialized', icon: <Globe size={36} />, title: 'Land Purchase Loan', desc: 'Finance for residential plot and land purchase in eligible zones.', features: ['Plot loans', 'Zone compliance', 'No sanction plan req.', 'Multiple zones'] },
];

const zones = [
  { zone: 'Residential Zone', desc: 'Standard housing zones' },
  { zone: 'Sheti-Na-Vikas', desc: 'Agricultural development' },
  { zone: 'Red Zone', desc: 'Restricted area properties' },
  { zone: 'Hill Top', desc: 'Hillside properties' },
  { zone: 'MIDC', desc: 'Industrial estates' },
  { zone: 'MAHADA', desc: 'Housing board properties' },
  { zone: 'PMRDA', desc: 'Metro region development' },
  { zone: 'PMY Properties', desc: 'Government scheme homes' },
  { zone: 'Gunthewari', desc: 'Regularized settlements' },
  { zone: 'Gaothan Property', desc: 'Village limit properties' },
];

export default function Products() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? products : products.filter(p => p.cat === active);

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-label">Our Products</p>
          <h1>Loan Solutions for <span>Every Need</span></h1>
          <p>From home loans to business funding — we have a product for every financial goal, backed by 20+ banking partners.</p>
        </div>
      </div>

      {/* FILTER */}
      <section className="section-sm" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="prod-filters">
            {categories.map(c => (
              <button key={c} className={`prod-filter-btn${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <div className="prod-grid">
            {filtered.map((p, i) => (
              <div key={i} className="prod-card">
                {p.badge && <div className="prod-badge">{p.badge}</div>}
                <div className="prod-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p className="prod-desc">{p.desc}</p>
                <ul className="prod-features">
                  {p.features.map((f, fi) => <li key={fi}><span className="prod-check">✓</span>{f}</li>)}
                </ul>
                <Link to="/contact" className="prod-apply">Apply Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Property Zones</p>
            <h2 className="section-title">We Cover <span>All Property Zones</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>No matter the zone classification of your property, we have the right bank partner to fund it.</p>
          </div>
          <div className="zones-grid">
            {zones.map((z, i) => (
              <div key={i} className="zone-chip">
                <div className="zone-dot" />
                <div>
                  <div className="zone-name">{z.zone}</div>
                  <div className="zone-desc">{z.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="zones-note">
            <TriangleAlert size={20} /><strong>No Sanction Plan Required</strong> for many zone types — contact us to check eligibility for your property.
          </div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="checklist-grid">
            <div>
              <p className="section-label">Document Checklist</p>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>Documents You'll <span>Need</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
                Have these ready before our meeting to avoid delays. All copies should be Xerox except photos and cheques.
              </p>
              <div className="checklist-note">
               <Lightbulb size={20} />
                <div>
                  <strong>Visit Charges:</strong> Rs. 600/- per visit/meeting.<br />
                  <strong>Note:</strong> Documents and charges/fees are non-refundable once submitted.
                </div>
              </div>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 28 }}>Book Consultation</Link>
            </div>
            <div className="checklist-cols">
              <div>
                <div className="checklist-head">For All Applicants</div>
                {['2 Passport size photos & 2 cheques (operating bank)', 'PAN Card & Aadhaar (Front & Back)', 'Current residence proof (Electricity Bill / Index II / Tax receipt)', 'Loan account statement & previous closure NOC', 'Current loans & EMI details', 'All property documents & chain documents'].map((d,i) => (
                  <div key={i} className="checklist-item"><span className="cl-num">{i+1}</span>{d}</div>
                ))}
              </div>
              <div>
                <div className="checklist-head">Salaried Applicants</div>
                {['Last 6-month salary slips / salary certificate', 'Joining & confirmation letter + company ID', 'Salary account 1-year bank statement (PDF)', 'Other account 1-year statement (PDF)'].map((d,i) => (
                  <div key={i} className="checklist-item"><span className="cl-num">{i+1}</span>{d}</div>
                ))}
                <div className="checklist-head" style={{ marginTop: 20 }}>Business Applicants</div>
                {['Last 3-year ITR', 'Shop Act & Udyam Aadhaar', 'Business premises proof / rent agreement', 'Current account 1-year statement (PDF)'].map((d,i) => (
                  <div key={i} className="checklist-item"><span className="cl-num">{i+1}</span>{d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
