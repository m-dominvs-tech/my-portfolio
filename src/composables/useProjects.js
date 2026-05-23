import { ref, computed } from "vue";
import projectsData from "../data/projects.json";

const projectImages = {
  flowdesk: new URL("../assets/projects/flowdesk.png", import.meta.url).href,
  shoppingCart: new URL("../assets/projects/shopping-cart.png", import.meta.url)
    .href,
  gauge: new URL("../assets/projects/gauge.png", import.meta.url).href,
  portfolio: new URL("../assets/projects/portafolio.png", import.meta.url).href,
  dashboard: new URL("../assets/projects/layout-dashboard.png", import.meta.url)
    .href,
  chat: new URL("../assets/projects/bot-message-square.png", import.meta.url)
    .href,
  activity: new URL("../assets/projects/activity.png", import.meta.url).href,
};

const filters = ["Todos", "Frontend", "Backend", "Full Stack", "Mobile"];
const activeFilter = ref("Todos");
const searchQuery = ref("");

const projects = projectsData.map((project) => ({
  ...project,
  image: projectImages[project.imageKey] || "",
}));

const featuredProject = computed(
  () => projects.find((project) => project.featured) || projects[0],
);

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesFilter =
      activeFilter.value === "Todos" || project.category === activeFilter.value;

    const matchesQuery =
      !query ||
      [project.title, project.description, project.category, ...project.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesFilter && matchesQuery;
  });
});

export function useProjects() {
  return {
    filters,
    activeFilter,
    searchQuery,
    featuredProject,
    filteredProjects,
  };
}
