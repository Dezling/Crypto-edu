<template>
  <section class="evolution-section">
    <div class="decorative-elements">
      <svg class="evolution-orb" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#evolutionGradient)"/>
        <defs>
          <radialGradient id="evolutionGradient">
            <stop offset="0%" stop-color="#2172E5" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#1A42AB" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Ветка развития в арбитраже криптовалют — </span>
        <span class="animated-underline">От ручных сделок до системного бизнеса</span>
      </h2>

      <div class="evolution-track">
        <div 
          v-for="(step, index) in evolutionSteps" 
          :key="index" 
          class="evolution-step"
          :style="{ '--delay': index * 0.3 + 's' }"
        >
          <div class="step-content">
            <div class="step-icon" v-html="step.icon"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
            <div class="progress-line" :style="{width: progressWidth(index)}"></div>
          </div>
          <div class="step-number">#{{ (index + 1).toString().padStart(2, '0') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const evolutionSteps = ref([
  {
    title: 'Теория и базовые связки',
    description: 'Изучение P2P, спотового арбитража, работы с наличкой. Анализ рисков и требований бирж',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>`
  },
  {
    title: 'Тестирование и первые сделки',
    description: 'Работа с капиталом $500, ручной мониторинг бирж, расчет спреда, анализ ошибок',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  },
  {
    title: 'Автоматизация и масштабирование',
    description: 'Заработок $100/день, работа с постоянными клиентами, наращивание капитала',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>`
  },
  {
    title: 'Построение команды',
    description: 'Найм и обучение сотрудников, выстраивание процессов, анализ новых GEO',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  {
    title: 'Открытие обменника',
    description: 'Запуск криптообменника, B2B направление, позиционирование как инфлюенсера',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
          </svg>`
  }
])

const progressWidth = (index) => {
  return `${(index + 1) * 20}%`
}
</script>

<style scoped>
.evolution-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}
.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  z-index: 2;
  padding: 0 1.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.2rem;
  padding: 0 1rem;
}

.evolution-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 2rem 0;
  gap: 1.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.evolution-track::-webkit-scrollbar {
  display: none;
}

.evolution-step {
  flex: 0 0 300px;
  scroll-snap-align: start;
  opacity: 0;
  transform: translateY(30px);
  animation: stepAppear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
  position: relative;
}

.step-content {
  background: rgba(45, 30, 60, 0.9); 
  border-radius: 16px;
  padding: 2rem;
  height: 350px;
  border: 1px solid rgba(138, 43, 226, 0.3); 
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.step-content:hover {
  transform: translateY(-5px) scale(1.02);
}

.step-icon {
  width: 50px;
  height: 50px;
  color: #BA55D3;
  margin-bottom: 1.5rem;
}

.step-title {
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.step-description {
  color: #9CA3AF;
  font-size: 0.95rem;
  line-height: 1.6;
}

.step-number {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(138, 43, 226, 0.15); 
 z-index: -1;
}

.progress-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transition: width 0.5s ease;
}

@keyframes stepAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .evolution-step {
    flex: 0 0 85vw;
  }
  
  .step-content {
    height: 320px;
    padding: 1.5rem;
  }
  
  .step-title {
    font-size: 1.3rem;
  }
}

.gradient-text {
 background: linear-gradient(45deg, #8A2BE2, #BA55D3);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animated-underline::after {
 background: linear-gradient(45deg, #8A2BE2, #BA55D3);}
</style>