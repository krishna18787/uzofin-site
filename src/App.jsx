import './App.scss'
import heroLeft from './assets/figma/hero-left.png'
import heroRight from './assets/figma/hero-right.png'
import section3Bg from './assets/figma/section3-bg.png'
import section5Bg from './assets/figma/section5-bg.png'
import headerLogo from './assets/figma/header-logo.png'
import integrationLogosImage from './assets/figma/integration-logos.png'

function NavChevron() {
  return (
    <svg className="nav-chevron" width="12" height="8" viewBox="0 0 12 8" aria-hidden>
      <path
        d="M1 1.5L6 6.5L11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App() {
  const navItems = [
    { label: 'AI Banking', dropdown: false },
    { label: 'Payments', dropdown: true },
    { label: 'Payouts', dropdown: true },
    { label: 'Support', dropdown: false },
  ]

  const footerProducts = ['AI Banking', 'Payment', 'Payout', 'Merchant Onboarding', 'FRM']

  const suiteCards = [
    {
      title: 'AI Banking',
      text: 'Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.',
      accent: '#3b82f6',
      metric: '3,969',
      metricLabel: 'TRANSACTIONS PER SECOND',
      dotMetric: true,
    },
    {
      title: 'Payments',
      text: 'Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.',
      accent: '#f59e0b',
      metric: '1,675',
      metricLabel: 'VALIDATOR NODES',
      dotMetric: true,
    },
    {
      title: 'Payouts',
      text: 'Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.',
      accent: '#a855f7',
      metric: '163,077,581,394',
      metricLabel: 'TOTAL TRANSACTIONS',
      dotMetric: true,
    },
    {
      title: 'Merchant Onboarding',
      text: 'Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.',
      accent: '#22c55e',
      metric: '100%',
      metricLabel: 'ON-TIME MERCHANT ONBOARD',
      dotMetric: false,
    },
  ]

  const whyItems = [
    {
      title: 'Unified Dashboard',
      text: 'Manage banking, payments, and merchants in one place.',
    },
    {
      title: 'AI-Driven Decisions',
      text: 'Automate approvals, verification, and financial operations.',
    },
    {
      title: 'Developer-Friendly APIs',
      text: 'Build, integrate, and launch faster.',
    },
    {
      title: 'Enterprise-Grade Security',
      text: 'Bank-level encryption and compliance.',
    },
    {
      title: 'Scalable Infrastructure',
      text: 'Designed for startups to enterprises.',
    },
    {
      title: 'Transparent Pricing',
      text: 'The flexibility to pay with various payment options like cards, wallets, etc.',
    },
  ]

  const carouselCards = [
    {
      title: 'Modern & clean design',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
    {
      title: 'Easy to customize',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
    {
      title: 'Scalability & Integration',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
    {
      title: 'Step-by-step guide',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
    {
      title: 'SaaS based solution',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
    {
      title: 'Always-on reliability',
      body:
        'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
    },
  ]

  const carouselLoop = [...carouselCards, ...carouselCards]

  return (
    <div className="page">
      <header className="hero">
        <nav className="navbar section" aria-label="Primary">
          <div className="brand">
            <img src={headerLogo} alt="UzOFin" />
          </div>
          <ul className="product-list">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <button type="button" className="nav-item nav-item--dropdown">
                    <span className="nav-item__label">{item.label}</span>
                    <NavChevron />
                  </button>
                ) : (
                  <a className="nav-item" href="#/">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-ghost">
            START BUILDING <span aria-hidden>→</span>
          </button>
        </nav>

        <div className="hero-content section">
          <h1>
            AI-powered{' '}
            <span className="hero-title-gradient">Banking &amp; Payment Solutions</span>
            {' '}
            built for Modern Businesses
          </h1>
          <p className="hero-subtitle">
            UzOfin brings intelligent automation, real-time payments, and seamless financial
            operations together so you can scale without friction.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary">
              Start building <span aria-hidden>→</span>
            </button>
            <button type="button" className="btn btn-secondary btn-read-docs">
              Read Docs <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="hero-graphics" aria-hidden>
          <img src={heroLeft} alt="" className="hero-left" />
          <img src={heroRight} alt="" className="hero-right" />
        </div>
      </header>

      <main>
        <section className="section integrations">
          <p>Powering tools and integration for companies around the world</p>
          <img src={integrationLogosImage} alt="" className="logo-row-image" />
        </section>

        <section className="impact section">
          <div className="impact__grid">
            <h2 className="impact__headline">Your Business Pays Are Now Faster and Secure</h2>
            <div className="impact__stats">
              <div className="impact-stat">
                <div className="impact-stat__value text-gradient-stat-a">11.5M+</div>
                <div className="impact-stat__label">Transactions processed monthly</div>
              </div>
              <div className="impact-stat">
                <div className="impact-stat__value text-gradient-stat-b">99.9%</div>
                <div className="impact-stat__label">Platform uptime and reliability</div>
              </div>
              <div className="impact-stat">
                <div className="impact-stat__value text-gradient-stat-c">
                  70% <span className="impact-stat__suffix">Faster</span>
                </div>
                <div className="impact-stat__label">Merchant onboarding with AI automation</div>
              </div>
            </div>
          </div>
        </section>

        <section className="suite section">
          <div className="suite-bg">
            <img src={section3Bg} alt="" />
          </div>
          <div className="suite-layout">
            <div className="suite-intro">
              <h2 className="suite-intro__title">Our Intelligent Financial Suite</h2>
              <p className="suite-intro__lead">
                <span className="suite-intro__dot" aria-hidden />
                Tools that accelerate every step of your financial workflow.
              </p>
            </div>
            <div className="suite-cards">
              {suiteCards.map((item) => (
                <article key={item.title} className="suite-card-v2">
                  <div className="suite-card-v2__accent" style={{ background: item.accent }} />
                  <div className="suite-card-v2__body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="suite-card-v2__metric">
                      {item.dotMetric ? <span className="suite-card-v2__dot" /> : null}
                      <span className="suite-card-v2__num">{item.metric}</span>
                    </div>
                    <div className="suite-card-v2__metric-label">{item.metricLabel}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="api-band section">
          <div className="api-band__lines" aria-hidden>
            <span className="api-line api-line--1" />
            <span className="api-line api-line--2" />
            <span className="api-line api-line--3" />
          </div>
          <div className="api-band__inner">
            <h2 className="api-band__title">
              Build Faster with Our <span className="text-gradient-magenta">Powerful API&apos;s</span>
            </h2>
            <p className="api-band__sub">
              Plug into secure, developer-friendly financial API&apos;s and launch in days, not months
            </p>
            <button type="button" className="btn btn-primary btn-start-building api-band__cta">
              Start building <span aria-hidden>→</span>
            </button>
          </div>
          <img src={section5Bg} alt="" className="api-band__bg" />
        </section>

        <section className="carousel-showcase section" aria-labelledby="industry-carousel-heading">
          <div className="carousel-showcase__glow" aria-hidden />
          <header className="carousel-showcase__header">
            <p className="carousel-showcase__eyebrow" id="industry-carousel-heading">
              24/7 support
            </p>
            <h2 className="carousel-showcase__title">
              Industry <span className="text-gradient-magenta">Standard</span>
            </h2>
          </header>
          <div className="carousel-showcase__viewport">
            <div className="carousel-showcase__track">
              {carouselLoop.map((c, i) => (
                <article
                  key={`${c.title}-${i}`}
                  className={`carousel-card ${i % 3 === 1 ? 'carousel-card--mid' : ''}`}
                >
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <a href="#/">Know more</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why section">
          <h2 className="why__title">
            Why <span className="text-gradient-magenta">UzOFin?</span>
          </h2>
          <p className="why__lead">
            Discover endless creativity with PromptVerse. Generate diverse content effortlessly using
            prompts. Stay updated with real-time trends, automate tasks, and extract insights from any
            document or URL. All within a sleek, futuristic design. Create more, effortlessly.
          </p>
          <div className="why-grid">
            {whyItems.map((item) => (
              <article key={item.title} className="why-card">
                <div className="why-card__head">
                  <h3>{item.title}</h3>
                  <span className="why-card__arrow" aria-hidden>
                    ↗
                  </span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="split-showcase section"
          aria-labelledby="future-heading"
        >
          <div className="future-hero">
            <span className="future-disc future-disc--top" aria-hidden />
            <span className="future-disc future-disc--bottom" aria-hidden />
            <div className="future-hero__inner">
              <h2 id="future-heading" className="future-title">
                <span className="future-title__line">The future of your</span>
                <span className="future-title__line">
                  industry{' '}
                  <span className="text-gradient-starts-here">starts here</span>
                </span>
              </h2>
              <div className="future-hero__actions">
                <button type="button" className="btn btn-future-demo btn-book-demo">
                  BOOK A DEMO <span aria-hidden>→</span>
                </button>
                <button type="button" className="btn btn-build-ai">
                  BUILD AI <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <section className="section newsletter">
          <h3>Subscribe for Instant updates!</h3>
          <form>
            <input type="email" placeholder="Enter your email" aria-label="Enter your email" />
            <button type="button" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </section>

        <section className="section footer-main">
          <div className="footer-brand">
            <img src={headerLogo} alt="UzOFin" className="footer-brand__logo" />
            <p className="footer-brand__tag">Connect. Control. Comply</p>
            <p className="footer-brand__text">
              Experience the new age of payments with UzOFin and explore new growth opportunities to
              reach greater heights.
            </p>
          </div>
          <div className="footer-columns">
            <div>
              <h4 className="footer-col__title">Products</h4>
              {footerProducts.map((item) => (
                <a key={item} href="#/">
                  {item}
                </a>
              ))}
            </div>
            <div>
              <h4 className="footer-col__title">Company</h4>
              <a href="#/">About Us</a>
              <a href="#/">Help Center</a>
              <a href="#/">Contact</a>
            </div>
            <div>
              <h4 className="footer-col__title">Legal</h4>
              <a href="#/">Cookie Policy</a>
              <a href="#/">Privacy Policy</a>
              <a href="#/">Terms of Service</a>
            </div>
            <div>
              <h4 className="footer-col__title">Social</h4>
              <a href="#/">/uzofin</a>
              <a href="#/">/uzofin</a>
              <a href="#/">/uzofin</a>
              <a href="#/">/uzofin</a>
            </div>
          </div>
        </section>

        <div className="copyright section">
          <span>Copyright © 2025 UzOFin. All rights reserved</span>
          <span>India (EN)</span>
        </div>
      </footer>
    </div>
  )
}

export default App
