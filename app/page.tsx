const tools = [
  { number: "01", name: "AI Chat", detail: "Think, ask and explore ideas.", status: "Coming soon" },
  { number: "02", name: "AI Writer", detail: "Turn rough ideas into clear writing.", status: "Coming soon" },
  { number: "03", name: "AI Research", detail: "Organize research and understand complex topics.", status: "Coming soon" },
  { number: "04", name: "AI PDF", detail: "Work with documents and summaries.", status: "Coming soon" },
  { number: "05", name: "AI Code", detail: "Understand, write and improve code.", status: "Planned" },
  { number: "06", name: "AI Image", detail: "Create visual concepts with AI.", status: "Planned" }
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/" aria-label="AIXORA AI home">
          <span className="brand-mark">A</span>
          <span>AIXORA <i>AI</i></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#tools">AI Tools</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:hello@aixora.ai">Get updates <span>↗</span></a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> THE UNIFIED AI WORKSPACE</div>
          <h1>Make room for<br /><span>what&apos;s possible.</span></h1>
          <p className="hero-text">
            A clearer way to work with AI. Bring ideas, writing, research and
            productivity tools together in one focused workspace.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#tools">Explore the platform <span>→</span></a>
            <a className="text-button" href="#about">Discover AIXORA</a>
          </div>
          <p className="hero-note">AIXORA AI is in development. Tools are labelled by availability.</p>
        </div>
        <div className="visual" aria-label="AIXORA AI workspace preview">
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core">
            <div className="core-symbol">A<span>.</span></div>
            <div className="core-label">INTELLIGENCE, CONNECTED</div>
          </div>
          <div className="float-card card-top"><span className="mini-icon">✳</span><span>Ideas, amplified</span><b>↗</b></div>
          <div className="float-card card-bottom"><span className="mini-dot" /><span>One workspace</span><b>01 / 01</b></div>
        </div>
      </section>

      <section className="trust-strip shell" id="about">
        <span>ONE ACCOUNT</span><span className="strip-line" /><span>ONE WORKSPACE</span><span className="strip-line" /><span>MULTIPLE AI CAPABILITIES</span>
      </section>

      <section className="tools-section shell" id="tools">
        <div className="section-heading">
          <div><div className="eyebrow">THE TOOLKIT</div><h2>One place. More ways<br />to move forward.</h2></div>
          <p>Explore the capabilities planned for AIXORA AI. Availability is shown honestly—no demo buttons pretending to be live tools.</p>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <article className="tool-card" key={tool.number}>
              <div className="tool-card-top"><span>{tool.number}</span><span className={tool.status === "Coming soon" ? "status" : "status planned"}>{tool.status}</span></div>
              <h3>{tool.name}</h3>
              <p>{tool.detail}</p>
              <div className="tool-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing shell">
        <div className="eyebrow">A MORE FOCUSED WAY TO USE AI</div>
        <h2>Less switching.<br /><span>More creating.</span></h2>
        <p>We&apos;re building AIXORA AI one reliable capability at a time.</p>
        <a className="primary-button" href="mailto:hello@aixora.ai">Contact the team <span>→</span></a>
      </section>

      <footer className="footer shell">
        <a className="brand" href="/"><span className="brand-mark">A</span><span>AIXORA <i>AI</i></span></a>
        <span>© {new Date().getFullYear()} AIXORA AI. In development.</span>
        <span>Built for what&apos;s next.</span>
      </footer>
    </main>
  );
}