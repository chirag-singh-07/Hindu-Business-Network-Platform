import Image from 'next/image';

const links = [
  { href: '#why-hbn', label: 'Why HBN' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#membership', label: 'Membership' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Hindu Business Network home">
        <span className="brand-mark">
          <Image src="/hbn-logo.jpg" alt="" width={48} height={48} priority sizes="48px" />
        </span>
        <span className="brand-name">
          <strong>Hindu Business</strong>
          <span>Network</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>

      <a className="header-cta" href="#membership">
        Explore HBN <span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-nav">
        <summary aria-label="Open navigation menu">
          <span></span><span></span>
        </summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href="#membership">Explore HBN <span aria-hidden="true">↗</span></a>
        </nav>
      </details>
    </header>
  );
}
