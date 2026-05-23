import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  watch(isDark, (val) => {
    document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
    localStorage.setItem('theme', val ? 'dark' : 'light')
  }, { immediate: true })

  return { isDark, toggleTheme }
}