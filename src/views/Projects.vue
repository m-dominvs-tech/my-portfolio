<template>
  <section class="projects-page">
    <div class="projects-header">
      <span class="section-badge">Proyectos</span>
      <h1 class="projects-title">
        Mis proyectos <span class="title-accent">recientes</span>
      </h1>
      <p class="projects-subtitle">
        Explora algunos proyectos destacando las tecnologías y soluciones que he
        construido.
      </p>
    </div>

    <div class="projects-toolbar">
      <p class="projects-summary">
        Mostrando <strong>{{ filteredProjects.length }}</strong> proyectos ·
        filtro:
        <span>{{ activeFilter }}</span>
      </p>
    </div>

    <div class="featured-section">
      <div class="featured-card">
        <div class="featured-copy">
          <span class="section-badge">Proyecto destacado</span>
          <h2>{{ featuredProject.title }}</h2>
          <p>{{ featuredProject.description }}</p>
          <div class="featured-tags">
            <span v-for="tag in featuredProject.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <div class="featured-links">
            <a
              v-if="featuredProject.demo"
              :href="featuredProject.demo"
              target="_blank"
              class="project-link primary"
              rel="noreferrer noopener"
            >
              Demo
            </a>
            <a
              v-if="featuredProject.repo"
              :href="featuredProject.repo"
              target="_blank"
              class="project-link secondary"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </div>
        </div>
        <div class="featured-image-wrapper">
          <img
            :src="featuredProject.image"
            :alt="featuredProject.title"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="projects-actions">
      <p class="projects-summary">
        Mostrando <strong>{{ filteredProjects.length }}</strong> proyectos ·
        filtro: <span>{{ activeFilter }}</span>
      </p>

      <div class="project-search">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Buscar por proyecto, tecnología o categoría"
        />
      </div>
    </div>

    <div class="filters">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        :class="['filter-btn', { active: activeFilter === filter }]"
        @click="activeFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "../components/ui/ProjectCard.vue";
import { useProjects } from "../composables/useProjects";

const {
  filters,
  activeFilter,
  searchQuery,
  featuredProject,
  filteredProjects,
} = useProjects();
</script>
<style scoped>
.projects-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

/* HEADER */

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.45rem 1rem;

  border-radius: 999px;

  background: rgba(59, 130, 246, 0.08);

  border: 1px solid rgba(59, 130, 246, 0.15);

  color: #60a5fa;

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 0.4px;

  margin-bottom: 1.2rem;
}

.projects-title {
  font-size: clamp(2.5rem, 5vw, 4.8rem);

  line-height: 1;

  font-weight: 800;

  letter-spacing: -2px;

  color: var(--text-h);

  margin-bottom: 1rem;
}

.title-accent {
  color: #3b82f6;
}

.projects-subtitle {
  max-width: 680px;

  margin: 0 auto;

  font-size: 1rem;

  line-height: 1.8;

  color: var(--text);

  opacity: 0.72;
}

.projects-toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.projects-summary {
  color: var(--text);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.85rem 1.2rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
  font-size: 0.95rem;
  font-weight: 600;
}

.projects-summary span {
  color: var(--accent);
}

.featured-section {
  margin: 3rem 0 2rem;
}

.featured-card {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 1fr);
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  border-radius: 28px;
  overflow: hidden;
}

.featured-copy h2 {
  font-size: clamp(2rem, 2.5vw, 2.9rem);
  margin: 1rem 0 1rem;
  color: var(--text-h);
}

.featured-copy p {
  color: var(--text);
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
}

.featured-image-wrapper {
  min-height: 280px;
  overflow: hidden;
  border-radius: 24px;
  background: #0f172a;
}

.featured-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.featured-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.project-search {
  margin-top: 1rem;
}

.project-search input {
  width: 100%;
  min-width: 280px;
  padding: 0.95rem 1rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.project-search input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* FILTERS */

.filters {
  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap: 0.8rem;

  margin-bottom: 3.5rem;
}

.filter-btn {
  padding: 0.75rem 1.2rem;

  border-radius: 999px;

  border: 1px solid var(--border);

  background: var(--bg-secondary);

  color: var(--text);

  font-size: 0.92rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.filter-btn:hover {
  transform: translateY(-2px);

  border-color: #3b82f6;

  color: #3b82f6;
}

.filter-btn.active {
  background: #3b82f6;

  border-color: #3b82f6;

  color: white;

  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
}

/* GRID */

.projects-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

  gap: 2rem;
}

/* MOBILE */

@media (max-width: 768px) {
  .projects-page {
    padding: 3rem 1rem;
  }

  .projects-header {
    margin-bottom: 3rem;
  }

  .featured-card {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    gap: 0.6rem;
  }

  .filter-btn {
    width: 100%;
  }
}
</style>
