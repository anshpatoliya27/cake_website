import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Our Cakes", href: "#cakes" },
    { label: "About Khushi", href: "#about" },
    { label: "How to Order", href: "#process" },
    { label: "Contact Us", href: "#contact" },
  ];

  const cakeCategories = [
    { label: "Birthday Cakes", href: "#" },
    { label: "Wedding Cakes", href: "#" },
    { label: "Anniversary Cakes", href: "#" },
    { label: "Custom Designs", href: "#" },
    { label: "Mini Cakes", href: "#" },
  ];

  const policies = [
    { label: "Order Policy", href: "#" },
    { label: "Pickup Info", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap');

        .ck-footer {
          font-family: 'DM Sans', sans-serif;
          background: #0D0D0D;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        .footer-cta-strip {
          background: linear-gradient(135deg, #FF3D8B 0%, #FF6BAD 50%, #FF3D8B 100%);
          padding: 20px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .cta-strip-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .cta-strip-icon {
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .cta-strip-text {
          font-family: 'Nunito', sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
        }
        .cta-strip-sub {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.85);
          margin-top: 2px;
        }
        .cta-strip-btn {
          background: #fff;
          color: #FF3D8B;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 800;
          border: none;
          padding: 12px 28px;
          border-radius: 100px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .cta-strip-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }

        .footer-body {
          padding: 64px 60px 40px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .brand-logo {
          font-family: 'Nunito', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #FF3D8B;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }
        .brand-logo span { color: #fff; }

        .brand-desc {
          font-size: 13.5px;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          font-weight: 300;
          margin-bottom: 24px;
          max-width: 260px;
        }

        .trust-badges {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 9px 14px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
          transition: all 0.2s;
        }
        .trust-badge:hover {
          border-color: rgba(255,61,139,0.3);
          background: rgba(255,61,139,0.06);
          color: #fff;
        }
        .tb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .social-row { display: flex; gap: 10px; }
        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
        }
        .social-btn:hover {
          border-color: #FF3D8B;
          background: rgba(255,61,139,0.1);
          color: #FF3D8B;
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-family: 'Nunito', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FF3D8B;
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .footer-links a {
          font-size: 13.5px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 300;
        }
        .footer-links a:hover { color: #fff; gap: 10px; }
        .link-arrow {
          font-size: 10px;
          opacity: 0;
          transition: all 0.2s;
          color: #FF3D8B;
        }
        .footer-links a:hover .link-arrow { opacity: 1; }

        .newsletter-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .nl-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nl-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #fff;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .nl-input::placeholder { color: rgba(255,255,255,0.25); }
        .nl-input:focus {
          border-color: rgba(255,61,139,0.5);
          background: rgba(255,61,139,0.05);
        }
        .nl-btn {
          background: linear-gradient(135deg, #FF3D8B, #FF6BAD);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 800;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }
        .nl-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255,61,139,0.35);
        }
        .nl-success {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(92,255,148,0.08);
          border: 1px solid rgba(92,255,148,0.2);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 13px;
          color: #5CFF94;
          font-weight: 500;
          animation: fadeInUp 0.4s ease;
        }

        .contact-quick {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 24px;
        }
        .cq-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
        }
        .cq-icon {
          width: 28px;
          height: 28px;
          background: rgba(255,61,139,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-bottom {
          padding: 20px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          font-weight: 300;
        }
        .footer-copy span { color: #FF3D8B; }
        .footer-policies { display: flex; gap: 20px; }
        .footer-policies a {
          font-size: 11.5px;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.04em;
        }
        .footer-policies a:hover { color: #FF3D8B; }
        .footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .loc-dot {
          width: 6px;
          height: 6px;
          background: #FF3D8B;
          border-radius: 50%;
          animation: pulse-loc 2s ease-in-out infinite;
        }
        .footer-bg-text {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Nunito', sans-serif;
          font-size: clamp(60px, 8vw, 110px);
          font-weight: 900;
          color: rgba(255,255,255,0.02);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: -2px;
          user-select: none;
        }
        .wa-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 54px;
          height: 54px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          transition: all 0.25s ease;
          z-index: 1000;
          border: none;
          text-decoration: none;
        }
        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 32px rgba(37,211,102,0.5);
        }
        .wa-pulse {
          position: absolute;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(37,211,102,0.3);
          animation: wa-ring 2s ease-out infinite;
        }

        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(8px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse-loc {
          0%,100% { transform:scale(1); opacity:1; }
          50% { transform:scale(1.5); opacity:0.6; }
        }
        @keyframes wa-ring {
          0% { transform:scale(1); opacity:0.5; }
          100% { transform:scale(1.8); opacity:0; }
        }

        @media (max-width: 900px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            padding: 48px 28px 32px;
          }
          .footer-cta-strip { padding: 18px 28px; }
          .footer-bottom { padding: 18px 28px; }
          .footer-bg-text { display: none; }
        }
        @media (max-width: 560px) {
          .footer-body { grid-template-columns: 1fr; }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-policies { flex-wrap: wrap; gap: 12px; }
        }
      `}</style>

      <footer className="ck-footer">

        {/* Top CTA Strip */}
        <div className="footer-cta-strip">
          <div className="cta-strip-left">
            <div className="cta-strip-icon">🎂</div>
            <div>
              <div className="cta-strip-text">Ready to order your dream cake?</div>
              <div className="cta-strip-sub">Order at least 24 hours in advance · Pickup only · Ahmedabad</div>
            </div>
          </div>
          <button
            className="cta-strip-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Order Now →
          </button>
        </div>

        {/* Main Body */}
        <div className="footer-body">

          {/* Brand Column */}
          <div>
            <div className="brand-logo">
              Cake <span>by Khushi</span>
            </div>
            <p className="brand-desc">
              Handcrafted eggless cakes made with love, fresh ingredients,
              and a whole lot of heart — straight from Khushi's kitchen to
              your celebration.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <span className="tb-dot" style={{ background: "#FF3D8B" }}></span>
                100% Eggless — always, no exceptions
              </div>
              <div className="trust-badge">
                <span className="tb-dot" style={{ background: "#FFD93D" }}></span>
                Freshly baked on your pickup day
              </div>
              <div className="trust-badge">
                <span className="tb-dot" style={{ background: "#5CFF94" }}></span>
                Proudly serving Ahmedabad
              </div>
            </div>
            <div className="social-row">
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="social-btn" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="link-arrow">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Categories */}
          <div>
            <div className="footer-col-title">Our Cakes</div>
            <ul className="footer-links">
              {cakeCategories.map((cat) => (
                <li key={cat.label}>
                  <a href={cat.href}>
                    <span className="link-arrow">→</span>
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact-quick">
              <div className="cq-item">
                <div className="cq-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                Ahmedabad, Gujarat
              </div>
              <div className="cq-item">
                <div className="cq-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                Orders open: 9 AM – 8 PM
              </div>
              <div className="cq-item">
                <div className="cq-icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                Min. 24 hrs advance order
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="footer-col-title">Stay in the loop</div>
            <p className="newsletter-desc">
              Get notified about new flavours, seasonal specials, and
              exclusive offers — straight to your inbox.
            </p>
            {!subscribed ? (
              <form className="nl-form" onSubmit={handleSubscribe}>
                <input
                  className="nl-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="nl-btn" type="submit">
                  Notify me 🎂
                </button>
              </form>
            ) : (
              <div className="nl-success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5CFF94" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                You're on the list — sweet!
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2025 <span>Cake by Khushi</span> · Made with 🩷 in Ahmedabad
          </div>
          <div className="footer-policies">
            {policies.map((p) => (
              <a key={p.label} href={p.href}>{p.label}</a>
            ))}
          </div>
          <div className="footer-badge">
            <span className="loc-dot"></span>
            Ahmedabad Only
          </div>
        </div>

        {/* Watermark background text */}
        <div className="footer-bg-text">CAKE BY KHUSHI</div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20Khushi!%20I%27d%20like%20to%20order%20a%20cake%20%F0%9F%8E%82"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-pulse"></span>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
        </svg>
      </a>
    </>
  );
};

export default Footer;
