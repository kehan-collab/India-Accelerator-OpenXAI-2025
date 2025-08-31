"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>⚡ AI Regex Generator ⚡</h1>
        <p>
          Enter the cyber grid. Generate complex regex like a true hacker —
          powered by AI & neon logic.
        </p>
        <Link href="/regex" className="btn">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>Features</h2>
        <div className="cards">
          <div className="card">
            <h3>🤖 AI-Powered</h3>
            <p>Translate human language to regex instantly using cutting-edge AI.</p>
          </div>
          <div className="card">
            <h3>⚡ Ultra-Fast</h3>
            <p>Neon-speed regex generation with real-time responses.</p>
          </div>
          <div className="card">
            <h3>🕶 Hacker Style</h3>
            <p>Dark terminal vibes. Copy, paste, and execute like a pro.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact Us</h2>
        <p>Want to contribute to the cyber grid? Ping us.</p>
        <a href="mailto:hello@example.com" className="btn">
          Send Message
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} CyberRegex Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
