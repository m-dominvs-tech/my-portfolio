<template>
  <article class="project-card">
    <div class="project-image">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="project-preview"
      />
      <div class="image-overlay"></div>
      <span class="project-badge">{{ project.category }}</span>
    </div>

    <div class="project-content">
      <div class="project-meta">
        <span class="project-status">{{ projectStatus }}</span>
        <span class="project-state">{{
          project.repo ? "Código abierto" : "Privado"
        }}</span>
      </div>

      <h3 class="project-title">{{ project.title }}</h3>

      <p class="project-desc">{{ project.description }}</p>

      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{
          tag
        }}</span>
      </div>

      <div class="project-links">
        <a
          :href="project.demo || '#'"
          target="_blank"
          class="project-link primary"
          :class="{ disabled: !project.demo }"
          rel="noreferrer noopener"
          :aria-disabled="!project.demo"
        >
          <ExternalLink class="link-icon" aria-hidden="true" />
          <span>Demo</span>
        </a>

        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          class="project-link secondary"
          rel="noreferrer noopener"
        >
          <Github class="link-icon" aria-hidden="true" />
          <span>GitHub</span>
        </a>

        <span v-else class="project-link secondary disabled">
          <Github class="link-icon" aria-hidden="true" />
          <span>Privado</span>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { Github, ExternalLink } from "lucide-vue-next";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const projectStatus = computed(() => {
  return (
    props.project.status ||
    (props.project.demo
      ? "En vivo"
      : props.project.repo
        ? "En progreso"
        : "Privado")
  );
});
</script>

<style scoped>
.project-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 28px;
  overflow: hidden;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow:
    0 24px 50px rgba(15, 23, 42, 0.16),
    0 0 24px rgba(59, 130, 246, 0.12);
}

.project-image {
  position: relative;
  min-height: 240px;
  overflow: hidden;
  background: #0f172a;
}

.project-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(1.12);
  transition:
    transform 0.4s ease,
    filter 0.4s ease;
}

.project-card:hover .project-preview {
  transform: scale(1.05);
  filter: brightness(1.22);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.22), transparent 55%);
}

.project-badge {
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 1;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: #0f172a;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}

html.dark .project-badge {
  background: rgba(15, 23, 42, 0.92);
  color: #f8fafc;
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: var(--text);
  font-size: 0.82rem;
}

.project-status,
.project-state {
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  font-weight: 700;
}

.project-title {
  font-size: 1.5rem;
  color: var(--text-h);
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
}

.project-desc {
  color: var(--text);
  line-height: 1.8;
  opacity: 0.85;
  margin: 0;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.tag {
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.95rem 1.1rem;
  border-radius: 16px;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  transition:
    transform 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

.project-link.primary {
  background: var(--accent);
  color: white;
}

.project-link.secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
}

.project-link:hover {
  transform: translateY(-2px);
}

.project-link.secondary:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

.link-icon {
  width: 18px;
  height: 18px;
}

.disabled {
  pointer-events: none;
  opacity: 0.55;
}

@media (max-width: 640px) {
  .project-content {
    padding: 1.25rem;
  }

  .project-meta {
    gap: 0.5rem;
  }

  .project-links {
    gap: 0.65rem;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
