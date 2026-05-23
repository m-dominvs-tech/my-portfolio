<template>
  <section class="api-data-loader">
    <div class="loader-header">
      <h2>{{ title }}</h2>
      <button class="refresh-button" @click="fetchData" :disabled="isLoading">
        {{ isLoading ? "Cargando..." : "Actualizar" }}
      </button>
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-else-if="isLoading" class="loading-message">Cargando datos...</div>

    <ul v-else class="items-list">
      <li v-if="items.length === 0" class="empty-message">
        No se encontraron datos.
      </li>
      <li
        v-for="item in items"
        :key="item.id || item.name || item.title || item.url"
      >
        {{ item.name || item.title || JSON.stringify(item) }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  apiUrl: {
    type: String,
    default: "/api",
  },
  title: {
    type: String,
    default: "Datos de la API",
  },
});

const items = ref([]);
const isLoading = ref(false);
const error = ref(null);

async function fetchData() {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(props.apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    items.value = await response.json();
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : "Error desconocido al cargar datos";
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchData);
</script>

<style scoped>
.api-data-loader {
  border: 1px solid rgba(102, 126, 234, 0.2);
  background: rgba(245, 247, 255, 0.85);
  border-radius: 16px;
  padding: 1.75rem;
  max-width: 100%;
}

.loader-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.loader-header h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.refresh-button {
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 999px;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.refresh-button:disabled {
  background-color: #c7d2fe;
  cursor: not-allowed;
}

.error-message {
  color: #b91c1c;
  margin-bottom: 1rem;
}

.loading-message {
  color: #374151;
  font-style: italic;
  margin-bottom: 1rem;
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.items-list li {
  background: white;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  color: #111827;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
}

.empty-message {
  color: #6b7280;
}
</style>
