<template>
  <section class="cards-section">
    <div class="decorative-elements">
      <svg class="floating-orb left" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#cardsOrbGradient)"/>
        <defs>
          <radialGradient id="cardsOrbGradient">
            <stop offset="0%" stop-color="#FF6B6B" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#8A2BE2" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Карты в арбитраже - </span> 
        <span class="animated-underline">мифы и реальность</span>
      </h2>

      <div class="cards-grid">
        <div class="card warning-card">
          <div class="card-inner">
            <div class="card-header">
              <svg class="warning-icon" v-html="warningIcon"></svg>
              <h3>Почему карты не обязательны?</h3>
            </div>
            <ul class="benefits-list">
              <li v-for="(item, index) in benefits" :key="index">
                <svg class="list-icon" v-html="item.icon"></svg>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="card law-card">
          <div class="card-inner">
            <div class="card-header">
              <svg class="law-icon" v-html="lawIcon"></svg>
              <h3>Осторожно: это незаконно!</h3>
            </div>
            <div class="law-content">
              <p class="law-text">
                <svg class="alert-icon" v-html="alertIcon"></svg>
                Покупка и использование чужих банковских карт 
                <span class="highlight">преследуется по статье 159 УК РФ</span>
              </p>
              <ul class="consequences-list">
                <li v-for="(item, index) in consequences" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const warningIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
  </svg>
`)

const lawIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
`)

const alertIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
`)

const benefits = ref([
  {
    title: 'Альтернативные методы',
    text: 'Работа через P2P-платформы и криптовалюты',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  },
  {
    title: 'Безопасность',
    text: 'Не нужно рисковать своими средствами',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>`
  }
])

const consequences = ref([
  'Уголовная ответственность',
  'Крупные штрафы до 1 млн рублей',
  'Конфискация имущества',
  'Лишение свободы до 5 лет'
])
</script>

<style scoped>
.cards-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}
.section-title {
  animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-bottom: 4rem;
  font-size:2.3rem ;
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

.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1; /* Уменьшаем z-index для фона */
}

.content-wrapper {
  position: relative;
  z-index: 3; /* Увеличиваем z-index контента */
  padding: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  position: relative;
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  transform: translateY(20px);
  opacity: 0;
  animation: cardAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  position: relative; /* Добавляем позиционирование */
  z-index: 2; /* Устанавливаем уровень выше фона */
}

.warning-card {
  animation-delay: 0.2s;
  border: 1px solid rgba(138, 43, 226, 0.2);
}

.law-card {
  animation-delay: 0.4s;
  border: 1px solid rgba(255, 107, 107, 0.3);
}

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.warning-icon {
  width: 50px;
  height: 50px;
  stroke: #FF6B6B;
}

.law-icon {
  width: 50px;
  height: 50px;
  stroke: #8A2BE2;
}

.benefits-list li {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.benefits-list li:hover {
  transform: translateX(10px);
}

.list-icon {
  width: 40px;
  height: 40px;
  stroke: url(#iconGradient);
  flex-shrink: 0;
}

.law-content {
  position: relative;
  padding: 2rem;
  background: rgba(255, 107, 107, 0.05);
  border-radius: 15px;
}

.highlight {
  color: #FF6B6B;
  font-weight: 700;
}

.consequences-list {
  margin-top: 1.5rem;
  padding-left: 2rem;
}

.consequences-list li {
  position: relative;
  padding: 0.8rem 0;
  color: #FFA8A8;
}

.consequences-list li::before {
  content: '⚖️';
  position: absolute;
  left: -2rem;
}

.alert-icon {
  width: 24px;
  height: 24px;
  stroke: #FF6B6B;
  margin-right: 0.8rem;
}
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card-header h3 {
  animation: textSlide 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.benefits-list li {
  animation: textSlide 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(0.4s + 0.1s * var(--index));
}

.consequences-list li {
  animation: fadeIn 0.4s ease-in forwards;
  opacity: 0;
  animation-delay: calc(0.5s + 0.1s * var(--index));
}

/* Улучшаем отступы */
.card-inner {
  padding: 1.5rem;
}

.card-header {
  margin-bottom: 2.5rem;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

h4 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #fff;
  transition: color 0.3s ease;
}

.benefits-list li p {
  margin-top: 0.6rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #d8d8d8;
  opacity: 0.9;
}

.law-text {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.consequences-list li {
  padding: 1rem 0;
  font-size: 1.1rem;
}

/* Анимация иконок */
.list-icon {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefits-list li:hover .list-icon {
  transform: rotate(15deg) scale(1.1);
  filter: drop-shadow(0 2px 4px rgba(138, 43, 226, 0.3));
}

/* Эффект параллакса при скролле */
.card {
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover {
  transform: translateY(-5px) scale(1.02);
}

/* Анимация подчеркивания */
.highlight {
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.highlight:hover::after {
  transform: scaleX(1);
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .card {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .cards-section {
    padding: 4rem 0;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>