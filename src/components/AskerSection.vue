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

      <div class="objection-grid">
        <div 
          v-for="(item, index) in objections" 
          :key="index" 
          class="objection-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <h3 class="card-title">{{ item.title }}</h3>
            <div class="response-list">
              <div 
                v-for="(response, rIndex) in item.responses" 
                :key="rIndex" 
                class="response-item"
              >
                <div class="response-marker">{{ rIndex + 1 }}</div>
                <p class="response-text">{{ response }}</p>
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

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.objection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.objection-card {
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
  background: rgba(45, 30, 60, 0.9);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(138, 43, 226, 0.3);
  transition: all 0.3s ease;
}

.card-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.15);
}

.card-title {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  position: relative;
  padding-left: 1.5rem;
}

.card-title::before {
  content: '⁉';
  position: absolute;
  left: 0;
  top: -0.2rem;
  color: #BA55D3;
  font-size: 1.2em;
}

.response-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.response-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
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
.response-marker {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}

.response-text {
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* Общие стили для заголовков */
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
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  
  .objection-grid {
    grid-template-columns: 1fr;
  }
  
  .card-title {
    font-size: 1.2rem;
    padding-left: 1.2rem;
  }
  
  .response-text {
    font-size: 0.9rem;
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