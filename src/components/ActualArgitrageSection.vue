
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
      'Рынок никогда не будет идеально синхронизирован — технические сбои, регуляторные запреты и панические продажи создают постоянные дисбаланс. Новые инструменты (DeFi, NFT) расширяют возможности, но суть остается прежней.'
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

.floating-orb {
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
  position: relative;
  z-index: 2;
  max-width: 1280px; /* Синхронизировано с CardsSection.vue */
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5%, 2rem);
  box-sizing: border-box;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem); /* Адаптивный размер */
  text-align: center;
  margin-bottom: 3rem;
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

.relevance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Уменьшено с 450px */
  gap: clamp(1rem, 2vw, 2rem);
  position: relative;
  z-index: 2;
  max-width: 100%;
  box-sizing: border-box;
}

.relevance-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

.card-inner {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(138, 43, 226, 0.1);
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  min-height: 400px; /* Уменьшено с 500px */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  background: radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
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
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  background: linear-gradient(45deg, #8A2BE2, #64FFAB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.card-icon {
  width: 50px;
  height: 50px;
  stroke: #8A2BE2; /* Заменено с url(#iconGradient) */
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.card-inner:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.3));
}

.card-title {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
  color: white;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #64FFAB);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-inner:hover .card-title::after {
  width: 100%;
}

.card-text {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  word-break: break-word;
  overflow-wrap: anywhere;
}

.card-text::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #8A2BE2;
  font-size: 1.2rem;
}

.first-word {
  background: linear-gradient(45deg, #8A2BE2, #64FFAB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-right: 0.3em;
}

.key-points {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 12px;
  border-left: 3px solid #8A2BE2;
}

.point {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  transition: transform 0.3s ease;
  word-break: break-word;
  overflow-wrap: anywhere;
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
    gap: clamp(1rem, 2vw, 2rem);
    max-width: 700px; /* Синхронизировано с CardsSection.vue */
    margin: 0 auto;
  }
  .card-inner {
    min-height: auto;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .relevance-section {
    padding: 4rem clamp(0.5rem, 3%, 1rem);
  }
  .content-wrapper {
    padding: 0 clamp(0.5rem, 3%, 1rem);
  }
  .floating-orb {
    display: none; /* Скрываем орб на мобильных */
  }
  .section-title {
    font-size: clamp(1.8rem, 4.5vw, 2.2rem);
  }
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .card-number {
    font-size: clamp(1.8rem, 4.5vw, 2.2rem);
  }
  .card-text {
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    padding-left: 1rem;
  }
  .key-points {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: clamp(1.5rem, 4vw, 1.8rem);
  }
  .card-title {
    font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  }
  .card-text {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }
  .card-text::before {
    left: -0.5rem;
  }
  .point {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }
}

@keyframes slideUpFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
