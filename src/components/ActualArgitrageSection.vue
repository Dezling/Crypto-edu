<template>
  <section class="relevance-section">
    <div class="decorative-elements">
      <svg class="floating-orb right" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#relevanceOrbGradient)"/>
        <defs>
          <radialGradient id="relevanceOrbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Арбитраж - </span> 
        <span class="animated-underline">технология будущего</span>
      </h2>

      <div class="relevance-grid">
        <div 
          v-for="(item, index) in relevanceItems" 
          :key="index" 
          class="relevance-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <div class="card-header">
              <div class="card-number">0{{ index + 1 }}</div>
              <svg class="card-icon" v-html="item.icon"></svg>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.text }}</p>
            <div class="card-stats" v-if="item.stats">
              <div class="stat-item" v-for="(stat, sIndex) in item.stats" :key="sIndex">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const relevanceItems = ref([
  {
    title: 'Рост рынка',
    text: 'Объем крипторынка увеличивается на 35% ежегодно (В том числе и P2P)',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>`,
    stats: [
      { value: '$2.1T', label: 'Капитализация' },
      { value: '+35%', label: 'Рост/год' }
    ]
  },
  {
    title: 'Адаптивность',
    text: 'Во время кризиса на криптовалютных рынках и мире мы так же делаем + за счет разницы курсов',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>`
  },
  {
    title: 'Глобальность',
    text: 'Ликвидность торговли на P2P постоянно высокая',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  }
])
</script>

<style scoped>
.relevance-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.relevance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.relevance-card {
  opacity: 0;
  transform: translateY(30px);
  animation: cardRise 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes cardRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-inner {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-icon {
  width: 50px;
  height: 50px;
  stroke: url(#iconGradient);
  transition: transform 0.4s ease;
}

.card-inner:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
}

.card-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transition: width 0.4s ease;
}

.card-inner:hover .card-title::after {
  width: 100%;
}

.card-text {
  color: #cccccc;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.card-stats {
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(138, 43, 226, 0.1);
}

.stat-item {
  text-align: center;
}
.relevance-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
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

.floating-orb {
  z-index: -1;
  filter: blur(80px);
  opacity: 0.15;
  animation: floatOrb 20s infinite linear;
}

@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-50px) scale(1.2); }
}

.content-wrapper {
  position: relative;
  z-index: 3;
}

.relevance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.card-inner {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(138, 43, 226, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  transform-style: preserve-3d;
}

/* Анимации текста */
@keyframes textSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header {
  animation: textSlide 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.2s);
}

.card-title {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.3s);
}

.card-text {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.4s);
}

.card-stats {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) + 0.5s);
}

/* Улучшенные эффекты при наведении */
.card-inner:hover {
  transform: translateY(-8px) rotateX(3deg) rotateY(3deg);
  box-shadow: 0 15px 40px rgba(138, 43, 226, 0.2);
}

.card-title::after {
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Декоративные элементы */
.card-inner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(138,43,226,0.1) 0%, rgba(0,0,0,0) 70%);
  filter: blur(60px);
  z-index: -1;
  transition: all 0.8s ease;
}

.card-inner:hover::before {
  transform: scale(1.5);
}

/* Анимация иконок */
.card-icon {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-inner:hover .card-icon {
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.3));
}

/* Статистика */
.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateX(5px);
}
.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.9rem;
  color: #999;
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

.section-title {
    animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-bottom: 4rem;
  font-size:2.3rem ;

}
@media (max-width: 768px) {
  .relevance-section {
    padding: 4rem 0;
  }
  
  .card-inner {
    padding: 2rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>