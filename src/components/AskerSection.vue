<template>
  <section class="objection-section">
    <div class="decorative-elements">
      <svg class="floating-orb right" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#objectionOrbGradient)"/>
        <defs>
          <radialGradient id="objectionOrbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Развеиваем сомнения — </span>
        <span class="animated-underline">прозрачность вместо мифов</span>
      </h2>

      <div class="thesis-container">
        <div 
          v-for="(item, index) in objections" 
          :key="index" 
          class="thesis-item"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="thesis-header">
            <div class="thesis-marker">#{{ index + 1 }}</div>
            <h3 class="thesis-title">{{ item.title }}</h3>
          </div>
          
          <div class="response-list">
            <div 
              v-for="(response, rIndex) in item.responses" 
              :key="rIndex" 
              class="response-line"
            >
              <div class="response-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p class="response-text">{{ response }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const objections = ref([
  {
    title: '«Ты меня заскамишь, и я потеряю деньги»',
    responses: [
      'Если бы я занимался скамом, мне проще было бы продавать «волшебные кнопки». Репутация дороже разовых $1000',
      'Открытые отзывы, YouTube-канал и ученики-шефы — лучшие гарантии'
    ]
  },
  {
    title: '«Твоё обучение плохое»',
    responses: [
      'Ученики покупают вторые айфоны, а не пишут гневные отзывы',
      'Программа на реальных кейсах + личный разбор материала'
    ]
  },
  {
    title: '«Арбитраж это не серьёзно»',
    responses: [
      'Серьёзно — 20 лет копить на пенсию. Арбитраж — когда пенсия копится на тебя',
      'Учим системности, а не лотерее. Банки десятилетиями живут на спредах'
    ]
  },
  {
    title: '«Арбитраж это незаконно»',
    responses: [
      'Работа через лицензированные биржи — абсолютно легально',
      'Никаких серых схем — только прозрачные операции'
    ]
  },
  {
    title: '«Нужно уделять много времени»',
    responses: [
      '90% учеников начинают совмещать с основной работой',
      'Дисциплина нужна везде — но здесь она окупается кратно'
    ]
  },
  {
    title: '«А если запретят в России?»',
    responses: [
      'Крипта вне границ — работаем из любой точки мира',
      'Ужесточение законов = рост спреда = новые возможности'
    ]
  }
])
</script>

<style scoped>
.objection-section {
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

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.thesis-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.thesis-item {
  opacity: 0;
  transform: translateX(-30px);
  animation: itemSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes itemSlide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.thesis-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(138, 43, 226, 0.2);
}

.thesis-marker {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}

.thesis-title {
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 0;
}

.response-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.response-line {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
}

.response-line:hover {
  background: rgba(138, 43, 226, 0.08);
  transform: translateX(10px);
}

.response-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: #BA55D3;
  margin-top: 3px;
}

.response-icon svg {
  width: 100%;
  height: 100%;
}

.response-text {
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* Общие стили для заголовков остаются без изменений */
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  line-height: 1.3;
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

@media (max-width: 768px) {
  .objection-section {
    padding: 4rem 0;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  
  .thesis-header {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .thesis-title {
    font-size: 1.2rem;
  }
  
  .response-text {
    font-size: 0.95rem;
  }
  
  .response-line {
    padding: 0.8rem;
  }
}

.floating-orb {
  filter: blur(80px);
  opacity: 0.1;
  animation: floatOrb 20s infinite linear;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, 50px) scale(1.2); }
}
</style>