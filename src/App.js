import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import './App.css';
import logo from './assets/logo.jpeg';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
  <img src={logo} alt="Caprock Logo" className="logo-image" />
</Link>

        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/products', 'Products'], ['/partners', 'Our Partners'], ['/contact', 'Contact']].map(([path, label]) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
          <li><a href="tel:+919421308851" className="nav-cta">Get Started</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
  <img src={logo} alt="Caprock Logo" className="footer-logo-image" />
</div>
          <p className="footer-tagline">Your trusted partner for loans, insurance and financial growth. We connect you to the right lenders for your unique needs.</p>
          <div className="footer-contact-quick">
            <a href="mailto:caprock2006@gmail.com">caprock2006@gmail.com</a>
            <a href="tel:+919421308851">+91 94213 08851</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/partners">Our Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Loan Products</h4>
            <ul>
              <li><Link to="/products">Home Loan</Link></li>
              <li><Link to="/products">Mortgage Loan</Link></li>
              <li><Link to="/products">Business Loan</Link></li>
              <li><Link to="/products">Personal Loan</Link></li>
              <li><Link to="/products">Project Loan</Link></li>
              <li><Link to="/products">Balance Transfer</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Other Services</h4>
            <ul>
              <li><Link to="/services">Insurance</Link></li>
              <li><Link to="/services">Branded Plotting</Link></li>
              <li><Link to="/services">Vastu Consultancy</Link></li>
              <li><Link to="/services">Construction Loans</Link></li>
              <li><Link to="/services">Commercial Loans</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 CAPROCK Financial Services. All rights reserved.</p>
        <p className="footer-disc">Loan approval is subject to bank/NBFC norms. Documents and fees as per lender requirements.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
