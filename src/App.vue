<template>
  <div class="app">
    <NavBar />
    
    <section 
      v-for="(section, index) in sections" 
      :key="index"
      :ref="el => { sectionRefs[index] = el }"
      class="scroll-section"
      :class="{
        'active-section': activeIndex === index,
        'prev-section': activeIndex === index + 1,
        'next-section': activeIndex === index - 1
      }"
    >
      <component :is="section.component" />
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from './components/NavBar.vue'
import AboutSection from './components/AboutSection.vue'
import MainSection from './components/MainSection.vue'
import BriefingSection from './components/BriefingSection.vue'
import TarifSection from './components/TarifSection.vue'
import SharedSection from './components/SharedSection.vue'
import FaqSection from './components/FaqSection.vue'
import ProfileSection from './components/ProfileSection.vue'
import CasesComponent from './components/CasesComponent.vue'
const sections = [
  { component: MainSection },
  {component: ProfileSection},
  { component: AboutSection },
  { component: BriefingSection },
  {component: CasesComponent},
  { component: TarifSection },
  { component: FaqSection },
  { component: SharedSection }
]

const sectionRefs = ref([])
const activeIndex = ref(0)

let observer = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = sectionRefs.value.findIndex(ref => ref === entry.target)
      if (entry.isIntersecting) {
        activeIndex.value = index
      }
    })
  }, options)

  sectionRefs.value.forEach(el => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: #0F0F0F;
  color: #FFFFFF;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
}

.scroll-section {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  transition: 
    filter 0.6s ease-out,
    opacity 0.6s ease-out;
}

/* Активная секция */
.scroll-section.active-section {
  filter: blur(0);
  opacity: 1;
}

/* Предыдущая и следующая секции */
.scroll-section.prev-section,
.scroll-section.next-section {
  filter: blur(8px);
  opacity: 0.7;
}

/* Все остальные секции */
.scroll-section:not(.active-section):not(.prev-section):not(.next-section) {
  filter: blur(12px);
  opacity: 0.4;
}

NavBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
}
</style>