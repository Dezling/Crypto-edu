<template>
  <section class="evolution-section">
    <div class="decorative-elements">
      <svg class="evolution-orb" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#evolutionGradient)"/>
        <defs>
          <radialGradient id="evolutionGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.1"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Эволюция трейдера - </span>
        <span class="animated-underline">От копеек до Недвижки</span>
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
            <div class="step-graph">
              <svg class="graph-line" viewBox="0 0 100 40">
                <path 
                  :d="step.graph" 
                  fill="none" 
                  stroke="url(#graphGradient)"
                  stroke-width="2"
                  stroke-dasharray="1000"
                  stroke-dashoffset="1000"
                />
              </svg>
              <div class="graph-label">{{ step.graphLabel }}</div>
            </div>
          </div>
          <div class="step-number">#0{{ index + 1 }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const evolutionSteps = ref([
  {
    title: 'Копеечный старт',
    description: 'Торговля с $10 как настоящий Молодой Бизнес',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`,
    graph: "M5 35 Q25 5 45 15 T85 25",
    graphLabel: "+1500% к капиталу"
  },
  {
    title: 'Командный забег',
    description: 'Нанял кота и 5 хомячков что бы было веселее',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`,
    graph: "M5 30 Q25 5 50 10 T95 15",
    graphLabel: "x10 клиентов"
  },
  {
    title: 'Обменник ON',
    description: 'Теперь у меня свой "маленький ByBit" на Бали',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
          </svg>`,
    graph: "M5 25 C25 5 75 5 95 20",
    graphLabel: "$1M+ оборот"
  },
  {
    title: 'Это Тайланд Да?',
    description: 'Купил виллу там, где все серьезные ребята',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>`,
    graph: "M5 10 S30 5 50 35 S75 5 95 30",
    graphLabel: "1000m² океан"
  }
])
</script>

<style scoped>
.evolution-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.evolution-track {
  display: grid;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.evolution-step {
  opacity: 0;
  transform: translateX(-50px);
  animation: stepAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}
.section-title {
    animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-bottom: 4rem;
  font-size:2.3rem ;

}
@keyframes stepAppear {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.step-content {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  border: 1px solid rgba(138, 43, 226, 0.2);
}

.step-content:hover {
  transform: translateY(-5px) rotateZ(1deg);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.step-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  stroke: url(#iconGradient);
  transition: transform 0.4s ease;
}

.step-content:hover .step-icon {
  transform: rotate(15deg) scale(1.1);
}

.step-title {
  font-size: 1.8rem;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.step-description {
  color: #cccccc;
  line-height: 1.6;
  min-height: 60px;
  font-style: italic;
}

.step-graph {
  margin-top: 2rem;
  position: relative;
}

.graph-line {
  width: 100%;
  height: 80px;
  animation: drawGraph 1.5s ease-out forwards;
}

@keyframes drawGraph {
  to {
    stroke-dashoffset: 0;
  }
}

.graph-label {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.9rem;
  color: #BA55D3;
  padding: 5px 10px;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 5px;
}

.step-number {
  position: absolute;
  right: -20px;
  top: -20px;
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
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
  z-index: -1;
  filter: blur(60px);
  opacity: 0.1;
  animation: floatOrb 25s infinite linear;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.1); }
  66% { transform: translate(-20px, 50px) scale(0.9); }
}

.content-wrapper {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.evolution-track {
  display: grid;
  gap: 2.5rem; /* Уменьшил расстояние между элементами */
}
.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.animated-underline {
  position: relative;
  display: inline-block;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
}

.evolution-step {
  opacity: 0;
  transform: translateX(-30px);
  animation: stepAppear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

/* Анимации текста */
@keyframes textSlide {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.step-title {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.2s);
}

.step-description {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.3s);
}

.step-graph {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.4s);
}

.step-content {
  padding: 2rem; /* Уменьшил внутренний отступ */
  border-radius: 16px;
  backdrop-filter: blur(8px);
  transform: scale(0.98);
  transition: all 0.3s ease;
}

.step-content:hover {
  transform: scale(1) translateY(-3px);
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.08);
}

.step-icon {
  width: 50px; /* Уменьшил размер иконки */
  height: 50px;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.5rem; /* Уменьшил размер шрифта */
  margin-bottom: 0.8rem;
}

.step-description {
  font-size: 0.95rem; /* Уменьшил размер шрифта */
  min-height: 50px;
  line-height: 1.5;
}

.step-graph {
  margin-top: 1.5rem;
}

.graph-line {
  height: 60px; /* Уменьшил высоту графика */
}

.graph-label {
  font-size: 0.8rem;
  padding: 4px 8px;
}

.step-number {
  font-size: 2rem; /* Уменьшил размер номера */
  right: -15px;
  top: -15px;
}

@media (max-width: 768px) {
  .evolution-section {
    padding: 4rem 0;
  }
  
  .step-content {
    padding: 2rem;
  }
  
  .step-title {
    font-size: 1.5rem;
  }
  
  .step-number {
    font-size: 2rem;
    right: -10px;
  }
}
</style>