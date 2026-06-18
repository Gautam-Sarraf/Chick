import Image from "next/image";
import MenuSection from "../components/MenuSection";
import ReviewsCarousel from "../components/ReviewsCarousel";

export default function Home() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <a href="#" className="nav-logo" id="site-logo">
          CHICKAROS<span>★★★</span>
        </a>
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#overview" className="nav-link" id="nav-item-overview">Overview</a>
          <a href="#menu" className="nav-link" id="nav-item-menu">Menu</a>
          <a href="#reviews" className="nav-link" id="nav-item-reviews">Reviews</a>
          <a href="#contact" className="nav-link" id="nav-item-contact">Location</a>
        </nav>
        <div className="nav-meta">
          <a href="tel:+441215535353" className="nav-phone" id="nav-phone-link">
            +44 121 553 5353
          </a>
          <a href="#contact" className="nav-cta" id="nav-order-btn">
            Order Online
          </a>
        </div>
        <button className="mobile-nav-toggle" aria-label="Toggle navigation menu" id="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="grid-container" id="hero">
          <div className="column-left">
            <div className="hero-tagline">West Bromwich Premiere Dining</div>
            <h1 className="hero-title" id="main-heading">
              <span>Classic</span>
              <span className="title-glow">Chickaros</span>
              <span className="title-sub">West Bromwich</span>
            </h1>
            <p className="hero-intro-text">
              Exposed brick charm, soft glowing neon, and a warm family-friendly environment.
              Discover a solid, comforting menu without too many surprises—exactly what you want
              when you're in the mood for something dependable.
            </p>
            <div className="hero-badges">
              <div className="badge-item" id="hero-badge-rating">
                <span className="badge-val">4.4 ★</span>
                <span className="badge-label">964 Google Reviews</span>
              </div>
              <div className="badge-item" id="hero-badge-price">
                <span className="badge-val">£10–20</span>
                <span className="badge-label">Average per person</span>
              </div>
              <div className="badge-item" id="hero-badge-location">
                <span className="badge-val">3B Astle Park</span>
                <span className="badge-label">High Street location</span>
              </div>
            </div>
          </div>
          <div className="column-right">
            <div className="hero-image-frame" id="hero-storefront-image">
              <Image
                src="/images/storefront.png"
                alt="Chickaros West Bromwich storefront at night showing the Hollywood-style entrance and beautiful pink flower ceiling"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* Overview & Vibe Section */}
        <section className="grid-container section-cream" id="overview">
          <div className="column-left">
            <div className="vibe-tagline">The Ambience</div>
            <h2 className="vibe-title" id="overview-heading">
              Modern Glamour Meets Historic Charm
            </h2>
            <p className="vibe-desc">
              Located in the historic Astle Retail Park, Chickaros West Bromwich blends old-town feel with modern flair.
              The moment you walk in, you are greeted by our Hollywood-style entrance, leading into a warm space characterized by exposed brick walls, vintage touches, and gorgeous pink cherry blossoms cascading from the ceiling.
            </p>
            <p className="vibe-desc">
              Whether you are sitting down for a family dinner or stopping by for quick mocktails and wings, our friendly, laid-back service ensures a cozy setting where every guest feels at home.
            </p>
            <div className="quote-block">
              "The entrance is beautiful – the Hollywood-style entrance really gives the restaurant a unique and welcoming vibe."
            </div>
            <a href="#menu" className="button-editorial terracotta" id="overview-menu-btn">
              View Menu
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="column-right">
            <div className="services-badges">
              <span className="service-badge" id="service-dine-in">Dine-in</span>
              <span className="service-badge" id="service-takeaway">Takeaway</span>
              <span className="service-badge" id="service-delivery">Delivery</span>
            </div>
             <div className="hero-image-frame" style={{ marginTop: "3rem", width: "100%", aspectRatio: "4 / 3" }} id="overview-dish-image">
               <Image
                 src="/images/signature_dish.png"
                 alt="A gourmet selection of chicken wings and grilled lamb chops prepared at Chickaros"
                 fill
                 sizes="(max-width: 1024px) 100vw, 40vw"
               />
             </div>
          </div>
        </section>

        {/* Interactive Menu Section */}
        <MenuSection />

        {/* Secondary Gallery / Focus Section */}
        <section className="gallery-section" id="gallery">
          <div className="gallery-card">
            <h3 className="gallery-title" id="gallery-mains-title">Dependable Comfort Food</h3>
            <div className="gallery-image-frame" id="gallery-mains-img">
              <Image
                src="/images/signature_dish.png"
                alt="Juicy flame grilled chicken breast and sizzling lamb chops platter"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="gallery-caption">
              <span>Gourmet Platter</span>
              <span>Soft, Juicy, Grilled to Perfection</span>
            </div>
          </div>
          <div className="gallery-card">
            <h3 className="gallery-title" id="gallery-drinks-title">Signature Mocktails</h3>
            <div className="gallery-image-frame" id="gallery-drinks-img">
              <Image
                src="/images/mocktails.png"
                alt="Colorful strawberry mint daiquiri and citrus infusion mocktails served in tall glasses"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="gallery-caption">
              <span>Artisanal Beverages</span>
              <span>Vibrant & Refreshing Mixes</span>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section" id="reviews">
          <div className="section-header-editorial">
            <h2 className="editorial-section-title" id="reviews-heading">
              Guest <span>Reviews</span>
            </h2>
            <p className="editorial-meta-text">
              What our guests say about their dining experience at Chickaros West Bromwich.
            </p>
          </div>

          <ReviewsCarousel />
        </section>

        {/* Location & Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-info-panel">
            <h2 className="contact-title" id="contact-heading">Location & Hours</h2>
            
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-label">Find Us</span>
                <span className="contact-val" id="contact-address">
                  3B, Astle Park, High St, West Bromwich B70 8NS, United Kingdom
                  <br />
                  <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted-dark)" }}>
                    Located in: Astle Retail Park
                  </span>
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-label">Get in Touch</span>
                <a href="tel:+441215535353" className="contact-val link" id="contact-phone">
                  +44 121 553 5353
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Opening Times</span>
                <div className="hours-grid">
                  <span className="hours-day">Monday – Thursday</span>
                  <span className="hours-time">1:00 PM – 11:00 PM</span>
                  
                  <span className="hours-day">Friday – Saturday</span>
                  <span className="hours-time">1:00 PM – 12:00 AM</span>
                  
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">1:00 PM – 11:00 PM</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-label">Service Options</span>
                <div className="services-badges" style={{ marginTop: "0.5rem" }}>
                  <span className="service-badge" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>Dine-in</span>
                  <span className="service-badge" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>Takeaway</span>
                  <span className="service-badge" style={{ backgroundColor: "rgba(0,0,0,0.04)" }}>Delivery</span>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: "4rem" }}>
              <a href="https://chickaroswestbromwich.co.uk" className="button-editorial terracotta" style={{ width: "100%", justifyContent: "center" }} id="contact-order-btn">
                Order Online (Delivery & Takeaway)
              </a>
            </div>
          </div>

          <div className="map-panel">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.768134763321!2d-1.9984579!3d52.5197796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487098035b17423d%3A0xd370f90d5a1c418e!2sChickaros%20West%20Bromwich!5e0!3m2!1sen!2suk!4v1718712345678!5m2!1sen!2suk"
               className="map-iframe"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Chickaros West Bromwich Google Map Location"
               id="location-map"
             ></iframe>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#" className="nav-logo" style={{ fontSize: "1.6rem" }} id="footer-logo">
          CHICKAROS<span>★★★</span>
        </a>
        <span className="footer-copyright" id="footer-copy-text">
          &copy; 2026 Chickaros West Bromwich. All Rights Reserved.
        </span>
        <div className="footer-links">
          <a href="#" className="footer-link" id="footer-link-privacy">Privacy Policy</a>
          <a href="#" className="footer-link" id="footer-link-terms">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}
