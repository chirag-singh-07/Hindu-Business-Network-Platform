import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const pillars = [
  {
    number: '01',
    title: 'Be easier to find',
    copy: 'Bring your business story, work, and services into one thoughtful professional profile.',
  },
  {
    number: '02',
    title: 'Meet with purpose',
    copy: 'Discover people and businesses by the work they do and the places they serve.',
  },
  {
    number: '03',
    title: 'Build trust over time',
    copy: 'Create meaningful connections through consistent, respectful participation.',
  },
];

const audiences = [
  'Entrepreneurs',
  'Professionals',
  'Traders',
  'Manufacturers',
  'Service providers',
  'Business organizations',
];

const faqs = [
  {
    question: 'What is Hindu Business Network?',
    answer: 'HBN is being built as a professional network where Hindu business owners and professionals can present their work, discover one another, and build trusted business relationships.',
  },
  {
    question: 'Who is the network for?',
    answer: 'The platform is designed for entrepreneurs, professionals, traders, manufacturers, service providers, and organizations. Membership and community policies will be published before onboarding opens.',
  },
  {
    question: 'Can I create an account today?',
    answer: 'Member onboarding is still in development. This page shares the product direction; account registration and member features are not live yet.',
  },
  {
    question: 'Will there be a free membership?',
    answer: 'The product plan includes free and premium memberships. Final plans, pricing, and availability will be shared before members can subscribe.',
  },
];

function ArrowMark() {
  return <span className="arrow-mark" aria-hidden="true">↗</span>;
}

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hindu Business Network',
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl.replace(/\/$/, '')}/hbn-logo.jpg` } : {}),
  };

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }}
        />

        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot"></span>
              A business community rooted in trust
            </p>
            <p className="hindi-line" lang="hi">विश्वास से विकास</p>
            <h1 id="hero-title" className="hero-title animate__animated animate__fadeIn">
              Business grows <em>stronger</em> together.
            </h1>
            <p className="hero-intro">
              A considered place for Hindu entrepreneurs and professionals to be discovered, build relationships, and grow with their community.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#why-hbn">Discover the network <ArrowMark /></a>
              <a className="text-link" href="#our-belief">What we believe <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">A shared space for work with purpose and people with ambition.</p>
          </div>

          <div className="hero-art" aria-label="Hindu Business Network emblem and brand motifs">
            <div className="hero-art-wash"></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <span className="orbit-label orbit-label-top">विश्वास <i>•</i> भरोसा</span>
            <span className="orbit-label orbit-label-bottom">A community that moves business forward</span>
            <div className="seal-frame animate__animated animate__fadeIn">
              <Image
                className="hero-seal"
                src="/hbn-logo.jpg"
                alt="Hindu Business Network emblem with a trident, handshake, and HBN lettering"
                width={440}
                height={440}
                priority
                sizes="(max-width: 700px) 72vw, (max-width: 1100px) 48vw, 38vw"
              />
            </div>
            <span className="art-index">HBN <b>—</b> 01</span>
          </div>
        </section>

        <div className="principle-ribbon" aria-label="Our principles">
          <span>Trust before transaction</span><i aria-hidden="true">✳</i>
          <span>People before profiles</span><i aria-hidden="true">✳</i>
          <span>Progress through community</span>
        </div>

        <section className="intro-section section-wrap" id="why-hbn" aria-labelledby="why-title">
          <div className="section-aside" data-reveal>
            <p className="eyebrow">A network with intention</p>
            <span className="vertical-note">01 / THE IDEA</span>
          </div>
          <div className="intro-main" data-reveal>
            <h2 id="why-title" className="section-title">
              Good business starts with <em>good people.</em>
            </h2>
            <p className="section-lede">
              HBN is being created to make those introductions easier: a shared, professional home for people who value trust, community, and the work it takes to build something lasting.
            </p>
            <a className="underlined-link" href="#how-it-works">A clearer way to connect <span aria-hidden="true">→</span></a>
          </div>
          <div className="intro-astra" aria-hidden="true">
            <span>ॐ</span><i></i><b></b>
          </div>
        </section>

        <section className="audience-section section-wrap" aria-labelledby="audience-title">
          <div className="audience-heading" data-reveal>
            <p className="eyebrow">Many kinds of work. One shared network.</p>
            <h2 id="audience-title">Made for the people <em>who make things happen.</em></h2>
          </div>
          <ul className="audience-list" data-reveal>
            {audiences.map((audience, index) => (
              <li key={audience}>
                <span className="audience-number">0{index + 1}</span>
                <span>{audience}</span>
                <span className="audience-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="belief-section" id="our-belief" aria-labelledby="belief-title">
          <div className="belief-inner section-wrap">
            <div className="belief-quote" data-reveal>
              <p className="eyebrow eyebrow-light">The HBN belief</p>
              <h2 id="belief-title">Trust is not a feature. It is the <em>foundation.</em></h2>
              <p>We want the network to feel personal, dependable, and worthy of the relationships built through it.</p>
              <span className="belief-seal" lang="hi">संबंध&nbsp; • &nbsp;विश्वास&nbsp; • &nbsp;विकास</span>
            </div>
            <div className="pillar-list" id="how-it-works">
              {pillars.map((pillar) => (
                <article className="pillar" key={pillar.number} data-reveal>
                  <span className="pillar-number">{pillar.number}</span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.copy}</p>
                  </div>
                  <span className="pillar-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="membership-section section-wrap" id="membership" aria-labelledby="membership-title">
          <div className="membership-heading" data-reveal>
            <p className="eyebrow">A network that grows with you</p>
            <h2 id="membership-title">Start open.<br /><em>Go further when you’re ready.</em></h2>
            <p className="membership-lede">The plan is simple: make useful connections accessible, then offer more tools to members who want to deepen their reach.</p>
          </div>
          <div className="membership-cards" data-reveal>
            <article className="membership-card free-card">
              <span className="membership-kicker">A place to begin</span>
              <h3>Free membership</h3>
              <p>Create your business presence, discover the community, and start building professional connections.</p>
              <div className="membership-rule"></div>
              <span className="membership-foot">Open doors. Meaningful beginnings.</span>
              <span className="card-stamp" aria-hidden="true">HBN<br /><b>01</b></span>
            </article>
            <article className="membership-card premium-card">
              <span className="membership-kicker">For the next stage</span>
              <h3>Premium membership</h3>
              <p>Planned tools for deeper discovery, richer visibility, and more direct ways to grow your network.</p>
              <div className="membership-rule"></div>
              <span className="membership-foot">More reach. On your terms.</span>
              <span className="premium-star" aria-hidden="true">✳</span>
            </article>
          </div>
          <p className="membership-disclaimer" data-reveal>Plans and exact features will be published before member onboarding opens. No account registration or subscriptions are available yet.</p>
        </section>

        <section className="closing-section section-wrap" aria-labelledby="closing-title">
          <div className="closing-panel" data-reveal>
            <div className="closing-mark" aria-hidden="true">ॐ</div>
            <p className="eyebrow eyebrow-light">The beginning of something shared</p>
            <h2 id="closing-title">Build your business.<br /><em>Build each other up.</em></h2>
            <p>Hindu Business Network is taking shape. The next step is a thoughtful community, built one real connection at a time.</p>
            <a className="button button-light" href="#top">Back to the beginning <span aria-hidden="true">↑</span></a>
            <span className="closing-watermark" aria-hidden="true">HBN</span>
          </div>
        </section>

        <section className="faq-section section-wrap" aria-labelledby="faq-title">
          <div className="faq-heading" data-reveal>
            <p className="eyebrow">A few good questions</p>
            <h2 id="faq-title">Before we <em>meet.</em></h2>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}<span aria-hidden="true"></span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <a className="brand footer-brand" href="#top" aria-label="Hindu Business Network home">
            <span className="brand-mark"><Image src="/hbn-logo.jpg" alt="" width={44} height={44} sizes="44px" /></span>
            <span className="brand-name"><strong>Hindu Business</strong><span>Network</span></span>
          </a>
          <p className="footer-note">A more connected business community, built on trust.</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#why-hbn">Our purpose</a>
            <a href="#membership">Membership</a>
            <a href="#our-belief">Our belief</a>
          </nav>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© {new Date().getFullYear()} Hindu Business Network</span>
          <span>Made for meaningful business.</span>
        </div>
      </footer>
    </>
  );
}
