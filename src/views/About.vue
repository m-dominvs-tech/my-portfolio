<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-intro">
        <span class="section-badge">Sobre Mí</span>
        <h1 class="about-title">
          Creando soluciones que
          <span class="title-accent">marcando la diferencia</span>
        </h1>
        <p class="about-text">
          Soy un desarrollador Full Stack apasionado por construir experiencias
          digitales excepcionales. Con más de 2 años de experiencia, me
          especializo en transformar ideas complejas en aplicaciones elegantes y
          funcionales.
        </p>
      </div>
    </section>

<section class="skills-section">
      <h2 class="section-title">Skills & Tecnologías</h2>
      <div class="skills-grid">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name" 
          class="skill-category"
          :style="{ animationDelay: `${0.1 + index * 0.1}s` }"
        >
          <h3 class="category-name">{{ category.name }}</h3>
          <div class="skill-tags">
            <span v-for="skill in category.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label" 
          class="stat-card"
          :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
        >
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <h2 class="section-title">Experiencia</h2>
      <div class="timeline">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-date">{{ item.date }}</span>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-company">{{ item.company }}</p>
            <p class="timeline-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const skillCategories = [
  {
    name: "Frontend",
    skills: ["Vue.js", "React", "TypeScript", "JavaScript", "HTML/CSS", "Sass"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "Bases de Datos",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    name: "Herramientas",
    skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
  },
];

const stats = [
  { number: "2+", label: "Años de Experiencia" },
  { number: "30+", label: "Proyectos Completados" },
  { number: "20+", label: "Clientes Satisfechos" },
  { number: "100%", label: "Compromiso" },
];

const timeline = [
  {
    date: "2022 - 2023",
    title: "Desarrollador Front-End/Soporte Tecnico",
    company: "Soluziona SPA",
    description:
      "Optimización de procesos operativos mediante análisis de datos, logrando reducción significativa ",
  },
];
</script>

<style scoped>
.about-page {
  padding: 4rem 2rem;
  max-width: 1200px;
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

.about-hero {
  margin-bottom: 4rem;
}

.about-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-h);
  margin-bottom: 1.5rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.title-accent {
  display: block;
  color: var(--accent);
}

.about-text {
  font-size: 1.125rem;
  color: var(--text);
  max-width: 700px;
  line-height: 1.8;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-h);
  margin-bottom: 2rem;
}

.skills-section {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border);
  animation: fadeSlideUp 0.6s ease-out both;
}

.category-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.4rem 0.8rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--text);
  transition: all 0.2s;
}

.skill-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.stats-section {
  margin-bottom: 4rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 1px solid var(--border);
  transition: transform 0.3s;
  animation: fadeSlideUp 0.6s ease-out both;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text);
}

.timeline-section {
  margin-bottom: 2rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 7px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
}

.timeline-date {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  background: var(--accent-bg);
  color: var(--accent);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-h);
  margin-bottom: 0.25rem;
}

.timeline-company {
  font-size: 1rem;
  color: var(--accent);
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.timeline-desc {
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .about-title {
    font-size: 2.5rem;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .about-page {
    padding: 2rem 1rem;
  }
  .about-title {
    font-size: 2rem;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  .stat-card {
    padding: 1.5rem 1rem;
  }
  .stat-number {
    font-size: 2rem;
  }
}
</style>
