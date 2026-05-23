<template>
  <main class="hero">
    <div class="hero-left">
      <div class="hero-content">
        <div class="badges">
          <span class="badge">Full Stack Developer</span>
          <router-link to="/contact" class="badge badge-outline badge-link">
            Open to Work
          </router-link>
        </div>

        <h1 class="title">
          Building Digital
          <span class="title-accent">Experiences</span>
        </h1>

        <p class="subtitle">
          Passionate about crafting elegant solutions with modern technologies.
          I transform ideas into impactful, user-friendly applications.
        </p>

        <div class="cta-group">
          <router-link to="/projects" class="btn btn-primary">
            <span>View Projects</span>
            <svg
              class="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
          <router-link to="/contact" class="btn btn-secondary">
            Contact Me
          </router-link>
        </div>

        <div class="social-links">
          <a href="#" class="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
              />
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </div>

    <div class="hero-right">
      <div class="code-card">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-filename">developer.js</span>
        </div>
        <pre
          class="code-body"
        ><code><span class="kw">const</span> <span class="var">dev</span> = {
  <span class="key">name</span>: <span class="str">"Your Name"</span>,
  <span class="key">role</span>: <span class="str">"Full Stack Developer"</span>,
  <span class="key">stack</span>: [<span class="str">"Vue"</span>, <span class="str">"React"</span>, <span class="str">"Node"</span>],
  <span class="key">focus</span>: <span class="str">"Building great apps"</span>,
  <span class="key">status</span>: <span class="bool">true</span>
};

<span class="kw">export</span> <span class="kw">default</span> dev;</code></pre>
      </div>

      <div class="floating-badges">
        <div class="float-badge fb-1">🚀 Vue</div>
        <div class="float-badge fb-2">⚡ Fast</div>
        <div class="float-badge fb-3">💎 Clean</div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: calc(100vh - 73px);
  padding: 4rem 2.5rem;
  background: var(--bg);
  overflow: hidden;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content {
  animation: fadeSlideUp 0.8s ease-out;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--accent-bg);
  color: var(--accent);
  border: 1px solid var(--accent-border);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.badge-outline {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.badge-link {
  text-decoration: none;
  display: inline-flex;
}

.title {
  font-size: 4rem;
  font-weight: 800;
  color: var(--text-h);
  margin-bottom: 1.25rem;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.title-accent {
  display: block;
  color: var(--accent);
}

.subtitle {
  font-size: 1.125rem;
  color: var(--text);
  margin-bottom: 2rem;
  max-width: 520px;
  line-height: 1.7;
}

.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.btn-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s;
}

.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-h);
  border: 2px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--bg-secondary);
  color: var(--text);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.scroll-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
  color: var(--text);
  font-size: 0.8rem;
  opacity: 0.6;
}

.scroll-line {
  width: 40px;
  height: 2px;
  background: var(--border);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.scroll-line::after {
  content: "";
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--accent);
  animation: scrollMove 2s infinite;
}

@keyframes scrollMove {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.hero-right {
  position: relative;
  animation: fadeSlideUp 0.8s ease-out 0.2s both;
}

.code-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -20px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid var(--border);
}

.code-dots {
  display: flex;
  gap: 8px;
}

.code-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dots span:nth-child(1) {
  background: #ef4444;
}
.code-dots span:nth-child(2) {
  background: #f59e0b;
}
.code-dots span:nth-child(3) {
  background: #22c55e;
}

.code-filename {
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.6;
  font-family: "Fira Code", monospace;
}

.code-body {
  margin: 0;
  padding: 1.5rem;
  font-family: "Fira Code", "Consolas", monospace;
  font-size: 0.85rem;
  line-height: 1.9;
  overflow-x: auto;
}

.code-body code {
  color: #e2e8f0;
}
.kw {
  color: #c084fc;
}
.var {
  color: #38bdf8;
}
.key {
  color: #22d3ee;
}
.str {
  color: #4ade80;
}
.bool {
  color: #f472b6;
}

.floating-badges {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.float-badge {
  position: absolute;
  padding: 0.5rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  box-shadow: var(--shadow);
  animation: float 3s ease-in-out infinite;
}

.fb-1 {
  top: 10%;
  right: -5%;
  animation-delay: 0s;
}
.fb-2 {
  bottom: 30%;
  left: -10%;
  animation-delay: 1s;
}
.fb-3 {
  bottom: 10%;
  right: 5%;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 1.5rem;
  }

  .title {
    font-size: 3rem;
  }

  .hero-right {
    order: -1;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2.25rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .cta-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .code-body {
    font-size: 0.7rem;
    padding: 1rem;
  }

  .scroll-indicator {
    display: none;
  }

  .floating-badges {
    display: none;
  }
}
</style>
