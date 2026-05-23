<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- LOGO -->
      <div class="logo">MatyDev</div>

      <!-- MOBILE MENU -->
      <button
        class="menu-toggle"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- LINKS -->
      <nav class="nav-links" :class="{ open: isMenuOpen }">
        <router-link to="/" @click="isMenuOpen = false">Home</router-link>
        <router-link to="/about" @click="isMenuOpen = false">About</router-link>
        <router-link to="/projects" @click="isMenuOpen = false"
          >Projects</router-link
        >
        <router-link to="/contact" @click="isMenuOpen = false"
          >Contact</router-link
        >
      </nav>

      <!-- THEME BUTTON -->
      <button class="theme-btn" @click="toggleDarkMode">
        {{ isDarkMode ? "🌞" : "🌙" }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);
const isMenuOpen = ref(false);

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  isDarkMode.value = savedTheme === "dark";
  applyTheme(isDarkMode.value);
});
</script>
<style scoped>
.navbar {
  position: sticky;

  top: 0;

  z-index: 1000;

  backdrop-filter: blur(16px);

  background: rgba(15, 23, 42, 0.65);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-container {
  max-width: 1200px;

  margin: 0 auto;

  padding: 1rem 2rem;

  display: flex;

  align-items: center;

  justify-content: space-between;
}

/* LOGO */

.logo {
  font-size: 1.2rem;

  font-weight: 800;

  color: white;

  letter-spacing: 0.5px;
}

/* LINKS */

.nav-links {
  display: flex;

  align-items: center;

  gap: 2rem;
}

.nav-links a {
  position: relative;

  color: rgba(255, 255, 255, 0.8);

  text-decoration: none;

  font-weight: 500;

  transition: 0.25s ease;
}

.nav-links a:hover {
  color: #60a5fa;
}

/* underline animation */

.nav-links a::after {
  content: "";

  position: absolute;

  left: 0;

  bottom: -6px;

  width: 0%;

  height: 2px;

  background: #60a5fa;

  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* THEME BUTTON */

.theme-btn {
  width: 42px;

  height: 42px;

  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(255, 255, 255, 0.04);

  color: white;

  cursor: pointer;

  transition: 0.25s ease;
}

.theme-btn:hover {
  transform: rotate(10deg);

  border-color: #60a5fa;

  box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
}

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: white;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.nav-links .router-link-active {
  color: #60a5fa;
}

/* MOBILE */

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 1rem;
    left: 1rem;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 1.2rem;
    background: rgba(15, 23, 42, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 22px;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    font-size: 1rem;
    color: white;
  }

  .theme-btn {
    order: 2;
  }
}
</style>
