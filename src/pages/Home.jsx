import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

// ─── Animated Section ───
function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Cream Drip SVG (Frosting separator) ───
function CreamDrip({ fromColor = "#fff5f7", toColor = "#ffffff", className = "" }) {
  return (
    <div className={`cream-drip ${className}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="60" fill={fromColor} />
        <path d="M0,60 
          C60,60 90,60 120,62 C150,65 160,90 180,95 C200,100 210,80 240,60
          C280,60 320,60 360,60 C380,60 390,60 420,65 C450,80 460,110 480,115 C500,110 510,75 540,60
          C600,60 660,60 720,60 C740,60 750,62 770,70 C790,85 800,100 820,100 C840,100 850,78 870,60
          C930,60 990,60 1020,60 C1040,60 1050,65 1070,75 C1090,90 1100,105 1120,105 C1140,105 1150,85 1170,60
          C1230,60 1290,60 1350,60 C1370,60 1380,62 1400,68 C1420,80 1430,90 1440,85 L1440,0 L0,0 Z"
          fill={fromColor} />
        <path d="M0,60
          C60,60 90,60 120,62 C150,65 160,90 180,95 C200,100 210,80 240,60
          C280,60 320,60 360,60 C380,60 390,60 420,65 C450,80 460,110 480,115 C500,110 510,75 540,60
          C600,60 660,60 720,60 C740,60 750,62 770,70 C790,85 800,100 820,100 C840,100 850,78 870,60
          C930,60 990,60 1020,60 C1040,60 1050,65 1070,75 C1090,90 1100,105 1120,105 C1140,105 1150,85 1170,60
          C1230,60 1290,60 1350,60 C1370,60 1380,62 1400,68 C1420,80 1430,90 1440,85
          L1440,120 L0,120 Z"
          fill={toColor} />
      </svg>
    </div>
  );
}

// ─── Data ───
const FEATURES = [
  { emoji: "🥚", title: "100% Eggless", desc: "Pure vegetarian" },
  { emoji: "🧁", title: "Freshly Baked", desc: "Made to order" },
  { emoji: "🏡", title: "Homemade", desc: "Kitchen crafted" },
  { emoji: "📍", title: "Ahmedabad", desc: "Local pickup" },
];

const HERO_STATS = [
  { value: "500+", label: "Cakes Delivered" },
  { value: "100%", label: "Eggless" },
  { value: "4.9★", label: "Customer Rating" },
];

const PRODUCTS = [
  { name: "Belgian Chocolate Dream", desc: "Rich dark chocolate layered cake with ganache", price: "₹650", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop", tag: "Bestseller" },
  { name: "Strawberry Bliss", desc: "Light vanilla sponge with fresh strawberry cream", price: "₹550", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop", tag: "Popular" },
  { name: "Classic Vanilla", desc: "Timeless vanilla buttercream with sprinkles", price: "₹500", img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=400&fit=crop", tag: "New" },
];

const INGREDIENTS_LEFT = [
  { emoji: "🧈", title: "Premium Butter", desc: "Rich, creamy European-style butter for the perfect crumb" },
  { emoji: "🍫", title: "Belgian Cocoa", desc: "Imported dark cocoa for deep, indulgent chocolate flavor" },
  { emoji: "🫐", title: "Fresh Berries", desc: "Hand-picked seasonal berries bursting with natural sweetness" },
];

const INGREDIENTS_RIGHT = [
  { emoji: "🍓", title: "Real Strawberry", desc: "Fresh, ripe strawberries for authentic fruity taste" },
  { emoji: "🌾", title: "Fine Flour", desc: "Premium sifted flour for the lightest, fluffiest sponge" },
  { emoji: "🥛", title: "Fresh Cream", desc: "Whipped daily for silky smooth frosting and fillings" },
];

import { useNavigate } from "react-router-dom";

// ─── Main Component ───
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <Navbar />

      <div className="home-content">

        {/* ═══════════════════════════════
            1. HERO — Pink gradient + Big cake
        ═══════════════════════════════ */}
        <section className="hero-block">
          {/* Floating fruit decorations */}
          <motion.span className="hero-deco hero-deco--1" animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity }}>🍓</motion.span>
          <motion.span className="hero-deco hero-deco--2" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>🫐</motion.span>
          <motion.span className="hero-deco hero-deco--3" animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}>🍃</motion.span>
          <motion.span className="hero-deco hero-deco--4" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}>🌿</motion.span>
          <motion.span className="hero-deco hero-deco--5" animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}>🍒</motion.span>
          <motion.span className="hero-deco hero-deco--6" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}>🍃</motion.span>

          <div className="hero-inner">
            {/* Left text */}
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span className="hero-label">✨ Homemade in Ahmedabad</span>
              </motion.div>

              <h1 className="hero-heading">
                The Most <span className="pink">Delicious</span><br />
                Eggless Cakes<br />
                <span className="pink">in Ahmedabad</span> 🎂
              </h1>

              <p className="hero-desc">
                If you love premium desserts, you won't be able to resist our handcrafted
                eggless cakes — made fresh just for you!
              </p>

              <div className="hero-buttons">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/customize")}
                  className="btn-primary"
                >
                  Customize Your Cake
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigate("/menu")}
                  className="btn-secondary"
                >
                  View Menu
                </motion.button>
              </div>

              {/* Stats bar */}
              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {HERO_STATS.map((s, i) => (
                  <div key={i} className="hero-stat">
                    <span className="hero-stat-value">{s.value}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right image — Premium showcase */}
            <motion.div
              className="hero-image-side"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Decorative blob behind the cake */}
              <div className="hero-blob"></div>
              {/* Rotating ring */}
              <motion.div
                className="hero-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Glowing accent */}
              <div className="hero-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop"
                alt="Delicious eggless cake"
                className="hero-cake-img"
              />
            </motion.div>
          </div>
        </section>

        {/* Cream drip separator: pink → white */}
        <CreamDrip fromColor="#ffd6e2" toColor="#ffffff" />

        {/* ═══════════════════════════════
            2. FEATURE STRIP
        ═══════════════════════════════ */}
        <section className="feature-strip">
          <div className="section-container">
            <div className="feature-strip-grid">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="feature-item-icon">{f.emoji}</div>
                  <div className="feature-item-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            3. PRODUCT SHOWCASE
        ═══════════════════════════════ */}
        <section className="products-block">
          <div className="section-container">
            <FadeIn>
              <div className="products-heading">
                <p className="eyebrow">Handpicked For You</p>
                <h2>Our Signature Cakes</h2>
              </div>
            </FadeIn>

            <div className="products-grid">
              {PRODUCTS.map((p, i) => (
                <motion.div
                  key={i}
                  className="product-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="product-card-img-wrap">
                    <img src={p.img} alt={p.name} className="product-card-img" loading="lazy" />
                    <span className="product-card-tag">{p.tag}</span>
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">{p.name}</h3>
                    <p className="product-card-desc">{p.desc}</p>
                    <div className="product-card-footer">
                      <span className="product-card-price">{p.price}</span>
                      <button
                        className="product-card-btn"
                        onClick={() => navigate("/customize")}
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cream drip separator: white → pink */}
        <CreamDrip fromColor="#ffffff" toColor="#fff0f3" />

        {/* ═══════════════════════════════
            4. INGREDIENTS SECTION (Pink BG)
        ═══════════════════════════════ */}
        <section className="ingredients-block">
          {/* Decorative floating fruits */}
          <motion.span className="ing-deco" style={{ top: "10%", left: "5%" }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🍓</motion.span>
          <motion.span className="ing-deco" style={{ top: "20%", right: "8%" }} animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>🫐</motion.span>
          <motion.span className="ing-deco" style={{ bottom: "15%", left: "10%" }} animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>🍒</motion.span>
          <motion.span className="ing-deco" style={{ bottom: "20%", right: "5%" }} animate={{ y: [0, -14, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}>🍃</motion.span>

          <div className="ingredients-inner">
            <FadeIn>
              <div className="ingredients-heading">
                <p className="eyebrow">The Secret Is In</p>
                <h2>Our Natural Ingredients</h2>
                <p className="ingredients-subtitle">Only the finest, freshest ingredients go into every cake we bake</p>
              </div>
            </FadeIn>

            <div className="ingredients-showcase">
              {/* Left ingredient cards */}
              <div className="ingredients-col">
                {INGREDIENTS_LEFT.map((ing, i) => (
                  <motion.div
                    key={i}
                    className="ingredient-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(214, 51, 108, 0.12)" }}
                  >
                    <div className="ingredient-card-icon">{ing.emoji}</div>
                    <div className="ingredient-card-text">
                      <h4>{ing.title}</h4>
                      <p>{ing.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center cake — Premium arch showcase */}
              <FadeIn delay={0.2} className="ingredients-center">
                <div className="ingredients-cake-wrap">
                  <div className="ingredients-cake-glow"></div>
                  <div className="ingredients-cake-arch">
                    <img
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=750&fit=crop"
                      alt="Our signature cake"
                      className="ingredients-cake"
                    />
                  </div>
                  <div className="ingredients-cake-badge">
                    <span className="badge-emoji">🌿</span>
                    <span className="badge-text">100% Natural</span>
                  </div>
                </div>
              </FadeIn>

              {/* Right ingredient cards */}
              <div className="ingredients-col">
                {INGREDIENTS_RIGHT.map((ing, i) => (
                  <motion.div
                    key={i}
                    className="ingredient-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(214, 51, 108, 0.12)" }}
                  >
                    <div className="ingredient-card-icon">{ing.emoji}</div>
                    <div className="ingredient-card-text">
                      <h4>{ing.title}</h4>
                      <p>{ing.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cream drip separator: pink → white */}
        <CreamDrip fromColor="#ffe4ec" toColor="#ffffff" />

        {/* ═══════════════════════════════
            5. CTA SECTION
        ═══════════════════════════════ */}
        <section className="cta-block">
          <FadeIn>
            <div className="cta-inner">
              <div className="cta-heading">
                <p className="eyebrow">Want to Know More?</p>
                <h2>Make Your Moments Sweeter 🎉</h2>
              </div>
              <p className="cta-desc">
                Create your perfect cake with our interactive builder. Choose flavors,
                toppings, and size — watch it come to life in real-time.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/customize")}
                className="btn-primary"
              >
                ✨ Start Customizing
              </motion.button>
            </div>
          </FadeIn>
        </section>

      </div>

      <Footer />
    </div>
  );
}