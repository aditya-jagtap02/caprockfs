import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Lightbulb,
  CheckCircle
} from 'lucide-react';import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', loanType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="page-hero-label">Contact Us</p>
          <h1>Let's Start Your <span>Financial Journey</span></h1>
          <p>Reach out to us for a free consultation. Our advisors are available Monday–Saturday, 9 AM – 7 PM.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* INFO */}
            <div className="contact-info">
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">We're Here to <span>Help</span></h2>
              <div className="gold-divider" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 36 }}>
                Whether you have questions about a specific loan product, need help with documents, or want to compare your options — talk to our expert team today.
              </p>
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="cc-icon"><Phone size={24} /></div>
                  <div>
                    <div className="cc-label">Call Us</div>
                    <a href="tel:+919421308851" className="cc-val">+91 94213 08851</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon"><Mail size={24} /></div>
                  <div>
                    <div className="cc-label">Email Us</div>
                    <a href="mailto:caprock2006@gmail.com" className="cc-val">caprock2006@gmail.com</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon">  <Clock3 size={24} /></div>
                  <div>
                    <div className="cc-label">Working Hours</div>
                    <div className="cc-val">Mon – Sat: 9 AM – 7 PM</div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon"><MapPin size={24} /></div>
                  <div>
                    <div className="cc-label">Location</div>
                    <div className="cc-val">Pune, Maharashtra</div>
                  </div>
                </div>
              </div>
              <div className="visit-note">
                <Lightbulb size={20} />
                <div>
                  <strong>Visit Charges: ₹600/-</strong> per consultation meeting.<br />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>Documents & fees are non-refundable once submitted to lenders.</span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><CheckCircle size={56} /></div>
                  <h3>Thank You!</h3>
                  <p>Your enquiry has been received. Our advisor will call you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: 20 }}>Send Another Enquiry</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="form-title">Send an Enquiry</div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" type="tel" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="email" value={form.email} onChange={handle} placeholder="your@email.com" type="email" />
                    </div>
                    <div className="form-group">
                      <label>Loan / Service Type *</label>
                      <select name="loanType" value={form.loanType} onChange={handle} required>
                        <option value="">Select a product/service</option>
                        <option>Home Loan</option>
                        <option>Mortgage Loan</option>
                        <option>Business Loan</option>
                        <option>Personal Loan</option>
                        <option>Balance Transfer</option>
                        <option>Commercial Loan</option>
                        <option>Project Loan</option>
                        <option>Insurance</option>
                        <option>Vastu Consultancy</option>
                        <option>Branded Plotting</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group full">
                    <label>Message / Requirements</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your loan requirement, property type, amount needed, etc." />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Submit Enquiry →</button>
                  <p className="form-note">* Required fields. We will call you within 24 working hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-head center">
            <p className="section-label">FAQs</p>
            <h2 className="section-title">Common <span>Questions</span></h2>
          </div>
          <div className="faq-grid">
            {[
              { q: 'Do you charge for consultation?', a: 'We charge ₹600/- per visit/meeting. This is to ensure serious enquiries and cover our advisory time.' },
              { q: 'Which banks do you work with?', a: 'We are tied up with 20+ banks and NBFCs including SBI, HDFC, ICICI, Axis, Bajaj Finance, and many cooperative banks.' },
              { q: 'What is the loan processing time?', a: 'Processing time varies by bank and profile, but we typically achieve sanction within 7–21 working days for eligible profiles.' },
              { q: 'Can you help with Red Zone / Gunthewari properties?', a: 'Yes. We specialise in all property zones including Red Zone, Gunthewari, MIDC, MAHADA, and more.' },
              { q: 'What is a Balance Transfer?', a: 'A balance transfer moves your existing loan to a new lender with a lower rate, reducing your EMI. We also offer top-up funds during the transfer.' },
              { q: 'Do you handle both salaried and business profiles?', a: 'Absolutely. We have dedicated processes for salaried employees, self-employed professionals and business owners.' },
            ].map((f, i) => (
              <div key={i} className="faq-card">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
