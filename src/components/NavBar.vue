<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="logo" @click="scrollToTop">
      <span class="gradient-text">SPREADT</span>.RU
    </div>
    
    <ul class="nav-links">
      <li 
        v-for="(link, index) in links" 
        :key="index" 
        class="link-item"
        :style="{ '--delay': index * 0.1 + 's' }"
      >
        <a 
          :href="link.path" 
          class="nav-link"
          @click.prevent="smoothScroll(link.path)"
          @mouseenter="hoverActive = index"
          @mouseleave="hoverActive = null"
        >
          <span class="link-text">{{ link.name }}</span>
          <span class="link-underline" :class="{ 'active': hoverActive === index }"></span>
        </a>
      </li>
    </ul>
    <div class="burger-menu" @click="toggleMenu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </div>
     <div class="mobile-menu" :class="{ 'active': isMenuOpen }">
      <a 
        v-for="(link, index) in links" 
        :key="index"
        :href="link.path"
        class="mobile-link"
        @click.prevent="smoothScroll(link.path)"
      >
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const links = ref([
  { name: 'Обо мне', path: '#about' },
  { name: 'Программа', path: '#briefing' },
  { name: 'Кейсы', path: '#cases' },
  { name: 'Тарифы', path: '#pricing' },
])

const isMenuOpen = ref(false)
const hoverActive = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

const smoothScroll = async (targetId) => {
  try {
    const target = document.querySelector(targetId)
    if (!target) {
      console.error(`Element ${targetId} not found`)
      return
    }

    const navbarHeight = document.querySelector('.navbar').offsetHeight || 60
    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    const offsetPosition = targetPosition - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    isMenuOpen.value = false
    document.body.style.overflow = 'auto'
  } catch (error) {
    console.error('Scroll error:', error)
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid rgba(138, 43, 226, 0.1);
  box-sizing: border-box;
  max-width: 100vw;
}

.logo {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.link-item {
  position: relative;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 300;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  letter-spacing: 0.5px;
  padding: 0.4rem 0;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2 70%, transparent 100%);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: 0;
}

.link-item:hover .link-underline {
  width: 100%;
  opacity: 1;
}

.burger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1001;
}

.burger-line {
  width: 25px;
  height: 3px;
  background: #FFFFFF;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(15, 15, 15, 0.98);
  backdrop-filter: blur(12px);
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.mobile-menu.active {
  display: flex;
  transform: translateY(0);
}

.mobile-link {
  color: white;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(138, 43, 226, 0.1);
  text-align: center;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: all 0.3s ease;
}

.mobile-link:hover,
.mobile-link:active {
  background: rgba(138, 43, 226, 0.2);
}

/* Медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* Скрываем горизонтальную навигацию */
  }

  .burger-menu {
    display: flex; /* Показываем бургер-меню */
  }

  .navbar {
    padding: 0.8rem 3%;
  }

  .logo {
    font-size: clamp(1rem, 2.8vw, 1.3rem);
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.6rem 3%;
  }

  .mobile-menu {
    top: 50px;
  }
}
</style>