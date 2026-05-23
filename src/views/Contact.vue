<template>
  <main class="contact-page">
    <section class="contact-header">
      <span class="section-badge">Contacto</span>
      <h1 class="contact-title">
        ¿Hablamos?
        <span class="title-accent">Me encantaría escucharte</span>
      </h1>
      <p class="contact-subtitle">
        ¿Tienes un proyecto en mente? ¿Tienes alguna pregunta? No dudes
        encontactarme.
      </p>
    </section>

    <div class="contact-container">
      <section class="contact-form-section">
        <h2 class="form-title">Envíame un mensaje</h2>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Asunto</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              placeholder="¿De qué trata?"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              placeholder="Tu mensaje..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            <span>Enviar Mensaje</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </button>
        </form>
      </section>

      <section class="contact-info-section">
        <div class="info-card">
          <h2 class="info-title">Información de contacto</h2>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">Email</span>
                <a href="mailto:hello@tuemail.com" class="info-value"
                  >matias.morales.olave@gmail.com</a
                >
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">Ubicación</span>
                <span class="info-value"
                  >Santiago Chile comuna: Puente Alto</span
                >
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div class="info-content">
                <span class="info-label">Disponibilidad</span>
                <span class="info-value availability"
                  >De Lunes a Viernes y findesemana medio dia</span
                >
              </div>
            </div>
          </div>

          <div class="social-section">
            <h3 class="social-title">Sígueme</h3>
            <div class="social-links">
              <a href="https://github.com/m-dominvs-tech" target="_blank" class="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"
                  />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/matias-morales-820225403" target="_blank" class="social-link" aria-label="LinkedIn">
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
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
  alert("¡Mensaje enviado! (Demo)");
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
};
</script>

<style scoped>
.contact-page {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background: var(--accent-bg);
  color: var(--accent);
  border: 1px solid var(--accent-border);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-h);
  margin-bottom: 1rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.title-accent {
  display: block;
  color: var(--accent);
}

.contact-subtitle {
  font-size: 1.1rem;
  color: var(--text);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

.contact-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
}

.contact-form-section {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--border);
  animation: fadeSlideUp 0.6s ease-out;
}

.info-card {
  animation: fadeSlideUp 0.6s ease-out 0.2s both;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-h);
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-h);
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--text);
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text);
  opacity: 0.5;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.submit-btn svg {
  width: 18px;
  height: 18px;
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid var(--border);
}

.info-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-h);
  margin-bottom: 1.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--accent-bg);
  border-radius: 10px;
  flex-shrink: 0;
}

.info-icon svg {
  width: 22px;
  height: 22px;
  color: var(--accent);
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.7;
}

.info-value {
  font-size: 1rem;
  color: var(--text-h);
  font-weight: 500;
}

.info-value a {
  color: var(--text-h);
  text-decoration: none;
  transition: color 0.2s;
}

.info-value a:hover {
  color: var(--accent);
}

.availability {
  color: var(--accent);
}

.social-section {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.social-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 1024px) {
  .contact-title {
    font-size: 2.5rem;
  }
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-page {
    padding: 2rem 1rem;
  }
  .contact-title {
    font-size: 2rem;
  }
  .contact-form-section,
  .info-card {
    padding: 1.5rem;
  }
}
</style>
