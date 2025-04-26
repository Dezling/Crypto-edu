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
        <span class="gradient-text">Арбитраж — </span> 
        <span class="animated-underline">вечный двигатель крипторынка</span>
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
            <div class="card-content">
              <p 
                v-for="(paragraph, pIndex) in item.text" 
                :key="pIndex" 
                class="card-text"
              >
                <span v-if="pIndex === 0" class="first-word">{{ paragraph.split(' ')[0] }}</span>
                {{ paragraph.substring(paragraph.indexOf(' ')+1) }}
              </p>
              <div class="key-points" v-if="item.keyPoints">
                <div 
                  v-for="(point, kIndex) in item.keyPoints" 
                  :key="kIndex" 
                  class="point"
                >
                  <div class="point-bullet"></div>
                  {{ point }}
                </div>
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
    title: 'Фундаментальная устойчивость',
    text: [
      'Арбитраж криптовалют остаётся актуальным благодаря базовым особенностям рынка:',
      'Различия в ликвидности, региональные регуляторные нюансы и асинхронность работы бирж создают естественную среду для арбитража. Пока существуют децентрализованные площадки и волатильность курсов — этот инструмент будет востребован.'
    ],
    keyPoints: [
      'Технологический прогресс усиливает потенциал',
      'Интеграция с DeFi и AI аналитика',
      'Легальные схемы с налоговой оптимизацией'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  },
  {
    title: 'Вечная актуальность',
    text: [
      'Арбитраж — экономический механизм, эволюционирующий вместе с рынком. Причины вечной востребованности:',
      'Рынок никогда не будет идеально синхронизирован — технические сбои, регуляторные запреты и панические продажи создают постоянные дисбалансы. Новые инструменты (DeFi, NFT) расширяют возможности, но суть остается прежней.'
    ],
    keyPoints: [
      'Дисбалансы — естественное состояние рынка',
      'Методы адаптируются к новым реалиям',
      'Взрывной рост инструментария'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
  position: absolute;
  right: -100px;
  top: 50%;
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
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.animated-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 0.4rem;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
  transform-origin: left;
}

.relevance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 3rem;
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
  border: 1px solid rgba(138, 43, 226, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(138, 43, 226, 0.1);
}

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

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.card-number {
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.card-icon {
  width: 50px;
  height: 50px;
  stroke: url(#iconGradient);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-inner:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.3));
}

.card-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-inner:hover .card-title::after {
  width: 100%;
}

.card-text {
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1.1rem;
}

.card-text::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #8A2BE2;
  font-size: 1.2rem;
}

.first-word {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-right: 0.3em;
}

.key-points {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(138,43,226,0.05);
  border-radius: 12px;
  border-left: 3px solid #8A2BE2;
}

.point {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  color: rgba(255,255,255,0.9);
  line-height: 1.6;
  transition: transform 0.3s ease;
}

.point:hover {
  transform: translateX(8px);
}

.point-bullet {
  width: 8px;
  height: 8px;
  background: #8A2BE2;
  border-radius: 50%;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.point:hover .point-bullet {
  transform: scale(1.4);
}

@media (max-width: 1024px) {
  .relevance-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .card-inner {
    min-height: auto;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .card-number {
    font-size: 2.2rem;
  }
  
  .card-text {
    font-size: 1rem;
    padding-left: 1rem;
  }
  
  .key-points {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text::before {
    left: -0.5rem;
  }
  
  .point {
    font-size: 0.95rem;
  }
}
</style>