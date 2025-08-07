<template>
  <section class="evolution-section">
    <div class="decorative-elements">
      <svg class="evolution-orb" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#evolutionGradient)"/>
        <defs>
          <radialGradient id="evolutionGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
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
  padding: 6rem clamp(1rem, 5%, 2rem); /* Синхронизировано с CardsSection.vue */
  position: relative;
  overflow-x: hidden; /* Предотвращаем горизонтальный скролл */
  background: #0F0F0F; /* Совместимо с GuaranteeSection.vue */
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1;
}

.evolution-orb {
  position: absolute;
  top: 50%;
  right: clamp(0.5rem, 2vw, 1rem); /* Адаптивный отступ */
  width: clamp(80px, 12vw, 100px); /* Уменьшенный размер */
  height: clamp(80px, 12vw, 100px);
  transform: translateY(-50%);
  filter: blur(80px);
  opacity: 0.15;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(-50%) rotate(0deg); }
  50% { transform: translateY(-55%) rotate(10deg); }
}

.content-wrapper {
  max-width: 1280px; /* Синхронизировано с CardsSection.vue */
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5%, 2rem);
  z-index: 2;
  box-sizing: border-box;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: clamp(2rem, 5vw, 2.5rem); /* Адаптивный размер */
  line-height: 1.3;
  opacity: 0;
  animation: slideUpFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #64FFAB); /* Синхронизировано с CardsSection.vue */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.animated-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #64FFAB);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
  transform-origin: left;
}

.evolution-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: clamp(1rem, 2vw, 2rem) 0;
  gap: clamp(1rem, 2vw, 1.5rem);
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 100%;
  box-sizing: border-box;
}

.evolution-track::-webkit-scrollbar {
  display: none;
}

.evolution-step {
  flex: 0 0 clamp(260px, 85vw, 320px); /* Адаптивная ширина */
  scroll-snap-align: start;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
  position: relative;
  box-sizing: border-box;
}

.step-content {
  background: rgba(255, 255, 255, 0.03); /* Синхронизировано с RelevanceSection.vue */
  border-radius: 16px;
  padding: clamp(1.5rem, 3vw, 2rem);
  height: 320px;
  border: 1px solid rgba(138, 43, 226, 0.2);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.step-content:hover {
  transform: translateY(-5px) scale(1.02);
}

.step-icon {
  width: 50px;
  height: 50px;
  stroke: #8A2BE2; /* Синхронизировано с RelevanceSection.vue */
  margin-bottom: 1.5rem;
  flex-shrink: 0;
}

.step-title {
  color: white;
  font-size: clamp(1.3rem, 3.5vw, 1.4rem);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.step-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  line-height: 1.6;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.step-number {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: rgba(138, 43, 226, 0.15);
  z-index: -1;
}

.progress-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2, #64FFAB);
  transition: width 0.5s ease;
}

@media (max-width: 1024px) {
  .evolution-track {
    max-width: 700px; /* Синхронизировано с CardsSection.vue */
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .evolution-section {
    padding: 4rem clamp(0.5rem, 3%, 1rem);
  }
  .content-wrapper {
    padding: 0 clamp(0.5rem, 3%, 1rem);
  }
  .evolution-orb {
    display: none; /* Скрываем орб на мобильных */
  }
  .section-title {
    font-size: clamp(1.8rem, 4.5vw, 2.2rem);
  }
  .evolution-track {
    overflow-x: hidden; /* Отключаем горизонтальный скролл */
    display: grid;
    grid-template-columns: 1fr; /* Переключаем на одноколоночный макет */
  }
  .evolution-step {
    flex: 0 0 100%; /* Полная ширина */
  }
  .step-content {
    height: auto;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: clamp(1.5rem, 4vw, 1.8rem);
  }
  .step-title {
    font-size: clamp(1.2rem, 3.5vw, 1.3rem);
  }
  .step-description {
    font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  }
}

@keyframes slideUpFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>