<template>
  <section class="bonus-section">
    <div class="decorative-elements">
      <svg class="floating-orb left" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#bonusOrbGradient)"/>
        <defs>
          <radialGradient id="bonusOrbGradient">
            <stop offset="0%" stop-color="#FFD700" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#FFA500" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Уникальные Бонусы - </span> 
        <span class="animated-underline">Ваш шанс на успех!</span>
      </h2>

      <div class="bonus-grid">
        <div 
          v-for="(bonus, index) in uniqueBonuses" 
          :key="index" 
          class="bonus-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <div class="card-header">
              <div class="card-number">0{{ index + 1 }}</div>
              <svg class="card-icon" v-html="bonus.icon"></svg>
            </div>
            <h3 class="card-title">{{ bonus.title }}</h3>
            <p class="card-text">{{ bonus.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const uniqueBonuses = ref([
  {
    title: 'Эксклюзивная информация',
    text: 'Закидываю в сообщество самую новую и свежую инфу по рынку',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 4H3v-2h18v2z"/>
          </svg>`,
  },
  {
    title: 'Активное взаимодействие с командой',
    text: 'Самые дружелюбные рабочие отношения которые вы можете только представить',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11V7a1 1 0 00-1-1H5a1 1 0 00-1 1v4m10 0h4m-4 4h5m-5 0v4a1 1 0 001 1h1a1 1 0 001-1v-4"/>
          </svg>`
  },
  {
    title: 'Легкое преподнесение информации',
    text: 'Такой структуры вы не найдете нигде, вам будет интересно и одновременно вы будете прокачивать свои скилы',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m16 0l-4-4m4 4l-4 4"/>
          </svg>`
  }
])
</script>

<style scoped>
.bonus-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.bonus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.bonus-card {
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
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
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
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-icon {
  width: 50px;
  height: 50px;
  transition: transform 0.4s ease;
}

.card-inner:hover .card-icon {
  transform: scale(1.1);
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
  background: linear-gradient(90deg, #FFD700, #FFA500);
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

.section-title {
  margin-bottom: 4rem;
  font-size: 2.3rem;
  animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.gradient-text {
  background: linear-gradient(45deg, #FFD700, #FFA500);
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
  background: linear-gradient(90deg, #FFD700, #FFA500);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .bonus-section {
    padding: 4rem 0;
  }
  
  .card-inner {
    padding: 2rem;
  }
}
</style>
