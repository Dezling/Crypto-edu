<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="logo" @click="scrollToTop">
      <span class="gradient-text">SPREDT</span>.RU
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
import { ref, onMounted, onUnmounted } from 'vue'

const links = ref([
  { name: 'Обо мне', path: '#about' },
  { name: 'Программа', path: '#program' },
  { name: 'Кейсы', path: '#briefing' },
  { name: 'Отзывы', path: '#reviews' },
  { name: 'Тарифы', path: '#pricing' },
])

const hoverActive = ref(null)

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const smoothScroll = (targetId) => {
  const targetElement = document.querySelector(targetId)
  if (!targetElement) return
  
  const navbarHeight = document.querySelector('.navbar').offsetHeight
  const targetPosition = targetElement.offsetTop - navbarHeight
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 800
  let startTime = null

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  const ease = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Скрываем бургер-меню по умолчанию */
.burger-menu {
  display: none;
}

/* Скрываем мобильное меню по умолчанию */
.mobile-menu {
  display: none;
}
.mobile-link {
  color: white;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(138,43,226,0.1);
  transition: all 0.3s ease;
}

.mobile-link:active {
  background: rgba(138,43,226,0.2);
}
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
  overflow: hidden;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  margin-right: 2rem;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Заменяем auto на hidden */
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.link-item {
  position: relative;
  flex-shrink: 0;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.9rem;
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
  transform-origin: left center;
}


@media (max-width: 1024px) {
  .navbar {
    padding: 1rem 3%;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .logo {
    font-size: 1.3rem;
    margin-right: 1.5rem;
  }
}


@media (max-width: 768px) {
  /* Скрываем обычное меню на мобильных */
  .nav-links {
    display: none;
  }
  
  /* Показываем бургер-меню */
  .burger-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    padding: 8px;
    margin-left: auto;
  }
  
  .burger-line {
    width: 24px;
    height: 2px;
    background: #8A2BE2;
    transition: all 0.3s ease;
  }

  /* Стили для активного мобильного меню */
.mobile-menu {
  position: fixed;
  top: 60px; /* Высота навбара */
  left: 0;
  right: 0;
  background: #0F0F0F;
  padding: 1rem;
  display: none;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid rgba(138,43,226,0.2);
  z-index: 9999; /* Увеличиваем z-index */
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.mobile-menu.active {
  display: flex;
}

  /* Исправляем отступы для мобильной версии */
  .navbar {
    flex-wrap: nowrap;
    padding: 0.8rem 5%;
    min-height: 60px;
  }

  .logo {
    width: auto;
    margin-bottom: 0;
    text-align: left;
    font-size: 1.3rem;
    margin-right: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-wrap: wrap;
    padding: 0.8rem 3%;
  }
  
  .logo {
    width: 100%;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  .nav-links {
    width: 100%;
    justify-content: center;
    max-width: 100%;
  }
}
</style>