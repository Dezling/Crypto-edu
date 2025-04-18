<template>
  <section class="steps-section">
    <div class="decorative-elements">
      <svg class="floating-orb left" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#orbGradient)"/>
        <defs>
          <radialGradient id="orbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">
          <span class="gradient-text">Старт с нуля</span> — 
          <span class="animated-underline">ваш путь к успеху</span>
        </h2>
        
        <div class="steps-container">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="step-card"
          >
            <div class="step-card-inner">
              <svg class="step-border" viewBox="0 0 280 280">
                <path 
                  d="M20,20 L260,20 L260,260 L20,260 Z"
                  fill="none"
                  stroke="url(#borderGradient)"
                  stroke-width="2"
                  stroke-dasharray="1000"
                  stroke-dashoffset="1000"
                />
                <defs>
                  <linearGradient id="borderGradient">
                    <stop offset="0%" stop-color="#8A2BE2" />
                    <stop offset="100%" stop-color="#4B0082" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div class="step-icon">
                <svg v-html="step.icon">
                </svg>
                  <defs>
        <linearGradient id="iconGradient">
          <stop offset="0%" stop-color="#8A2BE2" />
          <stop offset="100%" stop-color="#4B0082" />
        </linearGradient>
      </defs>
              </div>
              <div class="step-number">{{ index + 1 }}</div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    title: 'Полный обзор бирж',
    description: 'Рабочие биржи и понимание, с чего заходить',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>`
  },
  {
    title: 'Базовые связки',
    description: 'Модели, которые можно масштабировать',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  },
  {
    title: 'Арбитраж без карт',
    description: 'Связки без карт, банков, блоков',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
          </svg>`
  },
  {
    title: 'Практические уроки',
    description: 'Не просто теория, а реальное применение',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>`
  },
  {
    title: 'Домашние задания',
    description: 'С обратной связью от куратора',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>`
  },
  {
    title: 'Поддержка куратора',
    description: 'Помощь практикующего специалиста',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
          </svg>`
  },
  {
    title: 'Рабочее комьюнити',
    description: 'Общение с действующими трейдерами',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  {
    title: 'Личные консультации',
    description: 'Регулярные созвоны с автором курса',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>`
  },
  {
    title: 'База знаний',
    description: 'Доступ к эксклюзивным материалам',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>`
  },
  {
    title: 'Бонусный контент',
    description: 'Интервью с безопасником о мошенниках',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>`
  }
])
</script>

<style scoped>
.step-icon svg {
  width: 100%;
  height: 100%;
  stroke: url(#iconGradient);
  filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.3));
}

/* .step-card-inner defs {

fill: url(#iconGradient);
  <stop offset="0%" stop-color="#8A2BE2" />
  <stop offset="100%" stop-color="#4B0082" />
  </linearGradient>
} */
.step-card-inner {
  background: linear-gradient(to right, #8A2BE2, #4B0082);
}
.briefing-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.floating-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  animation: floatOrb 20s infinite linear;
  filter: blur(80px);
  opacity: 0.15;
}
.floating-orb.left {
  left: -300px;
  top: 20%;
}
.floating-orb.right {
  right: -300px;
  bottom: 20%;
  animation-delay: -10s;
}
@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-50px) scale(1.2); }
}

.geometric-pattern {
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.1;
  animation: rotatePattern 40s linear infinite;
}

.geometric-pattern.right {
  right: -100px;
  top: 30%;
}
@keyframes rotatePattern {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.circuit-line {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  opacity: 0.15;
  animation: lineFlow 25s linear infinite;
}

@keyframes lineFlow {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 4rem;
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

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.step-card {
  position: relative;
  perspective: 1000px;
}

.step-card-inner {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
    overflow: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.step-card:hover .step-card-inner {
  transform: rotateY(5deg) rotateX(5deg) translateY(-5px);
}

.step-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s;
  animation: drawBorder 1.5s forwards;
}

@keyframes drawBorder {
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s;
}

.step-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.3));
}

.step-card:hover .step-icon {
  transform: rotate(15deg) scale(1.1);
}

.step-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.step-description {
  color: #cccccc;
  line-height: 1.6;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.case-card {
  position: relative;
  perspective: 800px;
}

.case-card-inner {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.case-card:hover .case-card-inner {
  transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
}

.avatar-container {
  position: relative;
  width: 60px;
  height: 60px;
}

.case-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: circleRotate 8s linear infinite;
}

@keyframes circleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.case-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.case-comment {
  position: relative;
  padding: 1.5rem;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 0.5rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .steps-container,
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>