<template>
  <div class="app">
    <NavBar />
    
    <section 
       v-for="(section, index) in sections" 
      :key="index"
      :id="getSectionId(section)"
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
import ArbitrageSection from './components/ArbitrageSection.vue'
import FullWorkSection from './components/FullWorkSection.vue'
import JailCardSections from './components/JailCardSections.vue'
import GarantSection from './components/GarantSection.vue'
import ActualArgitrageSection from './components/ActualArgitrageSection.vue'
import UpPointsSection from './components/UpPointsSection.vue'
import FreePeoductSelection from './components/FreePeoductSelection.vue'
import WowSection from './components/WowSection.vue'
import AskerSection from './components/AskerSection.vue'
import { defineAsyncComponent } from 'vue'

const components = {
  MainSection: defineAsyncComponent(() => import('./components/MainSection.vue')),
  AboutSection: defineAsyncComponent(() => import('./components/AboutSection.vue')),
  BriefingSection: defineAsyncComponent(() => import('./components/BriefingSection.vue')),
  TarifSection: defineAsyncComponent(() => import('./components/TarifSection.vue')),
  CasesComponent: defineAsyncComponent(() => import('./components/CasesComponent.vue')),

}

const sections = [
  { component: MainSection, name: 'main' },
  { component: ArbitrageSection },
  { component: ProfileSection },
  { component: AboutSection , name: 'about'},
  { component: FullWorkSection },
  { component: BriefingSection, name:'briefing' },
  { component: JailCardSections },
  { component: GarantSection },
  { component: CasesComponent, name:'cases' },
  { component: ActualArgitrageSection },
  { component: UpPointsSection },
  { component: FreePeoductSelection },
  { component: TarifSection, name:'pricing' },
  { component: AskerSection },
  { component: WowSection },
  { component: FaqSection },
  { component: SharedSection }
]

const sectionRefs = ref([])
const activeIndex = ref(0)
let scrollTimeout = null

const getSectionId = (section) => {
  return section.name
}
const getVisibleSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2
  let closestSection = 0
  let minDistance = Infinity

  sectionRefs.value.forEach((section, index) => {
    if(!section) return
    const rect = section.getBoundingClientRect()
    const sectionCenter = rect.top + window.scrollY + rect.height / 2
    const distance = Math.abs(scrollPosition - sectionCenter)

    if(distance < minDistance) {
      minDistance = distance
      closestSection = index
    }
  })

  return closestSection
}

const handleScroll = () => {
  if(scrollTimeout) window.cancelAnimationFrame(scrollTimeout)
  scrollTimeout = window.requestAnimationFrame(() => {
    activeIndex.value = getVisibleSection()
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if(scrollTimeout) window.cancelAnimationFrame(scrollTimeout)
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
  perspective: 1000px;
}

.scroll-section {
  position: relative;
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  transition: 
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity, filter;
}

.scroll-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(15px);
  opacity: 0;
  transition: opacity 0.8s ease;
  z-index: -1;
}

.scroll-section:not(.active-section) {
  transform: translateY(20px) scale(0.98);
  opacity: 0.4;
  filter: blur(8px);
}

.scroll-section.active-section {
  transform: none;
  opacity: 1;
  filter: blur(0);
}

.scroll-section.active-section::before {
  opacity: 0.3;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .scroll-section {
    padding: 4rem 1rem 1rem;
    min-height: auto;
    height: auto !important;
  }
  
  .scroll-section:not(.active-section) {
    transform: translateY(10px) scale(0.98);
    filter: blur(4px);
    opacity: 0.6;
  }
  
  .scroll-section::before {
    backdrop-filter: blur(8px);
  }
}

@supports (-webkit-overflow-scrolling: touch) {
  .scroll-section {
    -webkit-transform: translateZ(0);
  }
}
</style>
