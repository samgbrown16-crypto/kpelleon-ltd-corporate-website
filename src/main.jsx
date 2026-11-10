import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Code2, Globe2,
  Layers3, Mail, Menu, Moon, ShieldCheck, Smartphone, Sun, X, Zap
} from "lucide-react";
import "./styles.css";

const COMPANY = {
  name: "Kpelleon Ltd",
  region: "Rwanda",
  // Replace this before launch with Kpelleon's official public business email.
  email: "REPLACE_WITH_COMPANY_EMAIL",
  // Add the official registered business address before publishing.
  address: "Gisozi, Kagara, Musezero, Gisozi, Gasabo, Kigali, Rwanda",
};

function Brand({ light = false }) {
  return <NavLink to="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Kpelleon home">
    <span className="brand-mark">K<span>.</span></span>
    <span className="brand-name">KPELLEON</span>
  </NavLink>;
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return <header className="site-header">
    <div className="container nav-wrap">
      <Brand />
      <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"}>{label}</NavLink>)}
        <NavLink to="/contact" className="nav-cta">Let's talk <ArrowUpRight size={15}/></NavLink>
      </nav>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-top">
      <div className="footer-brand">
        <Brand light/>
        <p>Thoughtful technology. Practical digital experiences. Built with purpose.</p>
      </div>
      <div className="footer-col"><span className="footer-label">Explore</span><NavLink to="/about">About us</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/products">Products</NavLink><NavLink to="/contact">Contact</NavLink></div>
      <div className="footer-col"><span className="footer-label">Information</span><NavLink to="/privacy">Privacy policy</NavLink><NavLink to="/terms">Terms & conditions</NavLink><NavLink to="/refunds">Refund policy</NavLink></div>
      <div className="footer-col"><span className="footer-label">Get in touch</span><span>{COMPANY.region}</span><span>{COMPANY.address}</span><a href={COMPANY.email.startsWith("REPLACE") ? "/contact" : `mailto:${COMPANY.email}`}>Contact Kpelleon <ArrowUpRight size={13}/></a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kpelleon Ltd. All rights reserved.</span><span>Technology with purpose.</span></div>
  </footer>;
}

function PageShell({ eyebrow, title, intro, children }) {
  return <><section className="page-hero"><div className="container"><div className="eyebrow"><span/>{eyebrow}</div><h1>{title}</h1><p>{intro}</p></div></section>{children}</>;
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span/> INDEPENDENT TECHNOLOGY COMPANY · RWANDA</div>
          <h1>Technology that moves <em>ideas forward.</em></h1>
          <p className="hero-lead">Kpelleon creates thoughtful digital products and software experiences that help people and businesses move with confidence.</p>
          <div className="hero-buttons"><NavLink className="btn btn-gold" to="/services">Explore what we do <ArrowUpRight size={17}/></NavLink><NavLink className="text-link" to="/about">Get to know us <ArrowRight size={16}/></NavLink></div>
          <div className="hero-note"><span className="note-line"></span><span>Built on curiosity. Guided by purpose.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract geometric Kpelleon brand artwork">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="art-core"><span>K</span><i></i></div>
          <div className="art-chip chip-top"><Zap size={15}/> IDEAS</div>
          <div className="art-chip chip-bottom"><Layers3 size={15}/> DIGITAL</div>
          <div className="art-caption">01 / PURPOSEFUL INNOVATION</div>
        </div>
      </div>
      <div className="container hero-bottom"><span>DISCOVER KPELLEON</span><ArrowDown size={16}/><span className="hero-bottom-line"></span></div>
    </section>
    <section className="intro-section section-pad"><div className="container intro-grid">
      <div><div className="eyebrow"><span/> WHO WE ARE</div><h2>Good technology starts with <em>understanding.</em></h2></div>
      <div className="intro-text"><p>Kpelleon is a technology company based in Rwanda. We focus on creating useful software, digital platforms and connected experiences shaped around real needs.</p><NavLink className="under-link" to="/about">More about Kpelleon <ArrowUpRight size={16}/></NavLink></div>
    </div></section>
    <section className="services-preview section-pad"><div className="container">
      <div className="section-heading"><div><div className="eyebrow"><span/> WHAT WE DO</div><h2>Ideas into <em>digital reality.</em></h2></div><NavLink className="under-link" to="/services">All services <ArrowUpRight size={16}/></NavLink></div>
      <div className="service-grid">
        <article className="service-card"><div className="service-icon"><Code2/></div><span className="card-index">01</span><h3>Software development</h3><p>Purpose-built software and web experiences designed around practical requirements.</p><NavLink to="/services" aria-label="Explore software development"><ArrowUpRight/></NavLink></article>
        <article className="service-card"><div className="service-icon"><Smartphone/></div><span className="card-index">02</span><h3>Digital products</h3><p>Digital platforms that bring services, communities and ideas together.</p><NavLink to="/products" aria-label="Explore digital products"><ArrowUpRight/></NavLink></article>
        <article className="service-card"><div className="service-icon"><Globe2/></div><span className="card-index">03</span><h3>Digital solutions</h3><p>Technology support that helps organizations work smarter and reach further.</p><NavLink to="/contact" aria-label="Discuss a digital solution"><ArrowUpRight/></NavLink></article>
      </div>
    </div></section>
    <section className="feature-band"><div className="container feature-inner"><div><div className="eyebrow eyebrow-light"><span/> OUR APPROACH</div><h2>Build with clarity.<br/><em>Grow with purpose.</em></h2></div><div className="feature-right"><p>We believe useful technology should feel clear, considered and accessible. We bring that mindset to every product and project.</p><NavLink className="btn btn-outline" to="/contact">Start a conversation <ArrowUpRight size={16}/></NavLink></div></div></section>
    <section className="cta-section section-pad"><div className="container cta-box"><div><div className="eyebrow"><span/> HAVE AN IDEA?</div><h2>Let's make something <em>meaningful.</em></h2></div><NavLink className="btn btn-dark" to="/contact">Talk to our team <ArrowUpRight size={17}/></NavLink></div></section>
  </>;
}

function About() {
  return <PageShell eyebrow="ABOUT KPELLEON" title={<>Technology shaped by <em>purpose.</em></>} intro="We are a Rwanda-based technology company focused on creating useful digital products and software solutions.">
    <section className="section-pad"><div className="container split-section"><div><div className="eyebrow"><span/> OUR STORY</div><h2>Curiosity is where progress <em>begins.</em></h2></div><div className="prose"><p>Kpelleon exists to turn ideas and practical needs into digital experiences. We work across software and digital products, with a focus on clarity, usability and responsible development.</p><p>Our work is guided by a simple belief: technology should solve meaningful problems and make everyday experiences better.</p></div></div></section>
    <section className="values-section section-pad"><div className="container"><div className="eyebrow"><span/> WHAT GUIDES US</div><h2>Principles behind <em>the work.</em></h2><div className="values-grid">{[["01","Purpose","Start with the need. Build toward a useful outcome."],["02","Clarity","Make technology understandable, accessible and easy to use."],["03","Responsibility","Treat trust, privacy and security as essential parts of good work."],["04","Progress","Stay curious, keep learning and improve with intention."]].map(v=><article className="value-card" key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></article>)}</div></div></section>
  </PageShell>;
}

function Services() {
  const services = [
    [<Code2/>,"Software & web development","Design and development of responsive websites, web applications and software tailored to defined business or user needs."],
    [<Smartphone/>,"Digital product development","Planning and building digital platforms that make services easier to discover, access and use."],
    [<Layers3/>,"Product design & experience","Clear user journeys, thoughtful interfaces and practical product experiences across devices."],
    [<ShieldCheck/>,"Technology consulting","Early-stage technical guidance to help shape requirements, evaluate options and plan digital projects."]
  ];
  return <PageShell eyebrow="OUR SERVICES" title={<>Practical solutions. <em>Thoughtful execution.</em></>} intro="We bring ideas, technology and user needs together to create digital experiences with a clear purpose.">
    <section className="section-pad"><div className="container service-list">{services.map((s,i)=><article className="service-row" key={i}><div className="service-row-icon">{s[0]}</div><span className="row-number">0{i+1}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><ArrowUpRight className="row-arrow"/></article>)}</div></section>
    <section className="feature-band"><div className="container feature-inner"><div><div className="eyebrow eyebrow-light"><span/> THE RIGHT START</div><h2>Every good project<br/><em>starts with a conversation.</em></h2></div><div className="feature-right"><p>Tell us what you are trying to achieve. We can explore the requirements and identify a sensible next step.</p><NavLink className="btn btn-outline" to="/contact">Discuss a project <ArrowUpRight size={16}/></NavLink></div></div></section>
  </PageShell>;
}

function Products() {
  return <PageShell eyebrow="OUR PRODUCTS" title={<>Digital experiences made <em>to connect.</em></>} intro="Kpelleon develops and operates digital products designed to serve real people and practical needs." />;
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    if (COMPANY.email.startsWith("REPLACE")) { alert("Please add Kpelleon's official email in src/main.jsx before using the contact form."); return; }
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <PageShell eyebrow="CONTACT" title={<>Let's start a <em>conversation.</em></>} intro="Have a project, a question or an idea to explore? We'd be glad to hear from you.">
    <section className="section-pad"><div className="container contact-grid">
      <div className="contact-info"><div className="eyebrow"><span/> GET IN TOUCH</div><h2>Good things begin with <em>a hello.</em></h2><p>Reach out to discuss a project, learn more about our work or explore a potential collaboration.</p><div className="contact-detail"><Mail/><div><span>Email</span><strong>{COMPANY.email.startsWith("REPLACE") ? "Add official company email" : COMPANY.email}</strong></div></div><div className="contact-detail"><Globe2/><div><span>Location</span><strong>{COMPANY.region}</strong></div></div></div>
      <form className="contact-form" onSubmit={submit}><label>Your name<input name="name" required placeholder="Full name"/></label><label>Email address<input name="email" type="email" required placeholder="you@example.com"/></label><label>How can we help?<textarea name="message" rows="5" required placeholder="Tell us a little about your enquiry..."/></label><button className="btn btn-dark" type="submit">Send enquiry <ArrowUpRight size={16}/></button>{sent && <p className="form-note">Your email application should now open with your enquiry.</p>}<p className="form-note">This frontend form opens your email application. It does not store or transmit form submissions to a server.</p></form>
    </div></section>
  </PageShell>;
}

const legal = {
  privacy: ["PRIVACY POLICY","Privacy matters.","This page is a starter policy for Kpelleon's corporate website. Replace this draft with a policy reviewed for your actual data practices before publishing."],
  terms: ["TERMS & CONDITIONS","Clear terms. Clear expectations.","These starter terms describe general use of the Kpelleon website. They should be reviewed and adapted to your business before the site goes live."],
  refunds: ["REFUND POLICY","Fairness and transparency.","This draft is a starting point. Publish only a policy that matches the products, services, payment arrangements and applicable consumer-protection requirements of Kpelleon."]
};
function Legal({ type }) {
  const [eyebrow,title,intro] = legal[type];
  return <PageShell eyebrow={eyebrow} title={<>{title}</>} intro={intro}>
    <section className="section-pad"><div className="container legal-content">
      {type === "privacy" ? <>
        <h2>1. About this policy</h2><p>Kpelleon Ltd (“Kpelleon”, “we”, “our” or “us”) is a technology company based in Rwanda. This policy explains how information may be handled when you visit this website or contact us.</p>
        <h2>2. Information you provide</h2><p>If you contact us, you may provide your name, email address and the contents of your message. The contact form on this starter website uses your device's email application and does not submit information to a Kpelleon server.</p>
        <h2>3. Website information</h2><p>Our hosting provider or website infrastructure may process technical information such as browser type, device information, IP address and access logs for security and service operation. Confirm the actual hosting and analytics configuration before launch.</p>
        <h2>4. How information is used</h2><p>Information may be used to respond to enquiries, communicate about requested services, maintain website security and meet legal obligations.</p>
        <h2>5. Sharing and international transfers</h2><p>Do not add analytics, advertising or third-party embeds without updating this policy. If personal data is processed by service providers or transferred internationally, explain the actual providers, purposes and safeguards here.</p>
        <h2>6. Your rights and contact</h2><p>Depending on applicable law, you may have rights to access, correct, delete or object to certain uses of your personal data. Contact Kpelleon using the official contact details published on this website.</p>
        <h2>7. Updates</h2><p>We may update this policy when our services or legal obligations change. The current version will be published on this page.</p>
      </> : type === "terms" ? <>
        <h2>1. Website use</h2><p>This website provides general information about Kpelleon and its services. You agree to use it lawfully and not to interfere with its operation or security.</p>
        <h2>2. Intellectual property</h2><p>Unless stated otherwise, website text, branding, graphics and design are owned by or used with permission by Kpelleon. You may not reproduce them commercially without prior written permission.</p>
        <h2>3. Product information</h2><p>Descriptions of products and services are general information and may change. Specific services are subject to separate written agreements where applicable.</p>
        <h2>4. Third-party websites</h2><p>Links to third-party websites are provided for convenience. Kpelleon does not control and is not responsible for their content or privacy practices.</p>
        <h2>5. Disclaimers and liability</h2><p>We aim to keep website information accurate and available, but do not guarantee uninterrupted access or that all information is error-free. Nothing in these terms excludes liability where exclusion is not permitted by law.</p>
        <h2>6. Contact and changes</h2><p>Questions about these terms may be sent through the contact details on this website. We may update these terms from time to time.</p>
      </> : <>
        <h2>1. Scope</h2><p>This policy applies to paid products or services sold directly by Kpelleon Ltd only where Kpelleon Ltd has expressly offered them. Product-specific terms may apply.</p>
        <h2>2. Cancellations</h2><p>Customers should submit cancellation requests using the support channel provided at the time of purchase. Any applicable notice periods or effects on ongoing services should be stated in the relevant order or service agreement.</p>
        <h2>3. Refund eligibility</h2><p>Refund eligibility depends on the product or service purchased, the reason for the request, the applicable agreement and mandatory consumer-protection law. Do not assume that all purchases are refundable or non-refundable.</p>
        <h2>4. How to request a refund</h2><p>Contact Kpelleon using the official support details shown at checkout or on this website. Include your order reference, purchase date and a brief explanation. Do not send full card numbers or passwords.</p>
        <h2>5. Processing</h2><p>Approved refunds are returned using the original payment method where possible. Processing times may depend on the payment provider and financial institution and should be confirmed for each payment method.</p>
        <h2>6. Statutory rights</h2><p>This policy does not limit any rights that customers have under applicable law.</p>
      </>}
      <div className="draft-warning"><ShieldCheck/><p><strong>Before publishing:</strong> This is starter website copy, not legal advice or a confirmation of Kpelleon's actual compliance. Have the final wording checked against Kpelleon's real operations and applicable Rwandan requirements.</p></div>
    </div></section>
  </PageShell>;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("kpelleon-theme") || "dark");
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("kpelleon-theme", theme); }, [theme]);
  return <BrowserRouter><Header theme={theme} setTheme={setTheme}/><main>
    <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/products" element={<Products/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Legal type="privacy"/>}/><Route path="/terms" element={<Legal type="terms"/>}/><Route path="/refunds" element={<Legal type="refunds"/>}/><Route path="*" element={<PageShell eyebrow="NOT FOUND" title={<>Page not <em>found.</em></>} intro="The page you are looking for may have moved or no longer exists."><section className="section-pad container"><NavLink className="btn btn-dark" to="/">Back to home <ArrowRight size={16}/></NavLink></section></PageShell>}/></Routes>
  </main><Footer/></BrowserRouter>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);