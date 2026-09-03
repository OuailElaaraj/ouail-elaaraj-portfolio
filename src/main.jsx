import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profileImage = new URL("./assets/profile-reference.png", import.meta.url).href;

function track(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const nav = ["Home", "About", "Experience", "Expertise", "Skills", "Certifications", "Contact"];

function App() {
  const scrollTo = (id) => {
    track("navigation_click", { section: id });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="logo" onClick={() => scrollTo("home")}>OE.</button>
        <nav className="navlinks">
          {nav.map((item) => (
            <button
              key={item}
              className={item === "Home" ? "active" : ""}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="navCta" onClick={() => scrollTo("contact")}>Let's Connect</button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroCopy">
            <div className="location">⌖ <span>Tangier, Morocco</span></div>
            <h1>Ouail Elaaraj</h1>
            <h2>Affiliate &amp; Performance Marketing</h2>
            <div className="positioning">PUBLISHER &amp; ACCOUNT MANAGEMENT · PARTNERSHIPS &amp; GROWTH</div>
            <div className="rule" />
            <blockquote>"I manage the relationship. I understand the traffic. I focus on the numbers."</blockquote>
            <p className="intro">
              Affiliate &amp; Performance Marketing professional with 7+ years of experience in
              Publisher Management, Account Management, affiliate offers, campaign optimization,
              traffic quality, and international partner relationships.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => scrollTo("experience")}>
                View My Experience <span>↓</span>
              </button>
              <button className="secondary" onClick={() => scrollTo("contact")}>Let's Connect</button>
            </div>
          </div>

          <div className="portraitWrap">
            <div className="decor decorTop" />
            <div className="portraitCard">
              <img src={profileImage} alt="Professional portrait reference" />
            </div>
            <div className="decor decorBottom" />
          </div>
        </section>

        <section className="metrics section">
          <div><strong>7+</strong><span>Years Experience</span></div>
          <div><strong>15+</strong><span>Publishers &amp; Accounts</span></div>
          <div><strong>5+</strong><span>International GEOs</span></div>
          <div><strong>$100K–$400K</strong><span>Monthly Managed Volume</span></div>
        </section>

        <section id="about" className="section contentSection">
          <p className="eyebrow">ABOUT</p>
          <h2>Performance-focused. Partner-driven.</h2>
          <p>
            I am an Affiliate &amp; Performance Marketing professional with 7+ years of experience
            working with publishers, clients, affiliate offers, and international campaigns.
          </p>
          <p>
            My experience sits at the intersection of partner management and performance. I focus
            not only on generating traffic, but on understanding traffic quality, conversion
            performance, campaign economics, and long-term partner value.
          </p>
        </section>

        <section id="experience" className="section contentSection">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Centric Market</h2>
          <div className="experienceCard">
            <div className="experienceHead">
              <div><h3>Publisher Account Manager</h3><span>2019 – Present</span></div>
              <span className="tag">7+ YEARS</span>
            </div>
            <ul>
              <li>Manage a portfolio of 15+ affiliate publishers and client accounts.</li>
              <li>Evaluate offers, GEOs, traffic quality, conversion performance and revenue potential.</li>
              <li>Monitor and optimize campaigns and publisher performance.</li>
              <li>Handle complaints, escalations, traffic-quality and compliance issues.</li>
              <li>Build and maintain long-term international publisher relationships.</li>
              <li>Identify new affiliate opportunities based on market conditions and commercial potential.</li>
            </ul>
          </div>
        </section>

        <section id="expertise" className="section contentSection">
          <p className="eyebrow">EXPERTISE</p>
          <h2>What I Do</h2>
          <div className="grid">
            {[
              ["Publisher Management", "Managing publisher relationships, performance, communication, onboarding and growth."],
              ["Account Management", "Understanding partner needs, solving issues and identifying growth opportunities."],
              ["Affiliate & Offer Management", "Evaluating offers, GEOs, traffic sources, pricing and performance."],
              ["Campaign Optimization", "Using performance data to improve traffic quality, conversion and results."],
              ["Partnerships & Growth", "Building long-term relationships with publishers, affiliates and advertisers."],
              ["Traffic Quality & Compliance", "Monitoring traffic quality, resolving issues and protecting performance."],
            ].map(([title, text]) => (
              <div className="card" key={title}><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </section>

        <section id="skills" className="section contentSection">
          <p className="eyebrow">SKILLS</p>
          <h2>Core Skills</h2>
          <div className="chips">
            {[
              "Affiliate Marketing","Performance Marketing","Publisher Management","Affiliate Management",
              "Offers Management","Account Management","Partner Relationship Management","Partnership Management",
              "Campaign Management","Traffic Acquisition","Performance Analysis","Revenue & ROI Optimization",
              "Traffic Quality & Compliance","Affiliate Network Operations","Conversion Rate Optimization",
              "CRM & Affiliate Platforms","Email Marketing","Digital Marketing","Google Analytics","HTML","Data Analysis","Lead Generation"
            ].map(s => <span key={s}>{s}</span>)}
          </div>
        </section>

        <section id="certifications" className="section contentSection">
          <p className="eyebrow">CERTIFICATIONS &amp; LEARNING</p>
          <h2>Continuous Learning</h2>
          <div className="learningGrid">
            <div className="card"><h3>Google Analytics / GA4</h3><p>In Progress</p></div>
            <div className="card"><h3>CRM &amp; HubSpot</h3><p>Currently developing</p></div>
            <div className="card"><h3>Excel &amp; Data Analysis</h3><p>Currently developing</p></div>
            <div className="card"><h3>Performance Marketing</h3><p>Professional experience</p></div>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>Let's Connect</h2>
            <p>Open to international remote opportunities and professional partnerships.</p>
            <div className="contactLinks">
              <a href="mailto:wael.elaaraj@gmail.com" onClick={() => track("email_click")}>wael.elaaraj@gmail.com</a>
              <a href="https://www.linkedin.com/in/ouail-el-aaraj-publisher-manager/" target="_blank" rel="noreferrer" onClick={() => track("linkedin_click")}>LinkedIn ↗</a>
            </div>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            track("contact_form_submit");
            alert("Thank you! Your message has been submitted.");
          }}>
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required />
            <button className="primary" type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <div><strong>OUAIL ELAARAJ</strong><span>Affiliate &amp; Performance Marketing</span></div>
        <div className="footerLinks">
          <a href="mailto:wael.elaaraj@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ouail-el-aaraj-publisher-manager/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <small>Copyright © 2026 Ouail Elaaraj</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
