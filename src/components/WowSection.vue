<template>
  <section class="benefits-section">
    <div class="decorative-elements">
      <svg class="floating-orb left" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#benefitsOrbGradient)"/>
        <defs>
          <radialGradient id="benefitsOrbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Что ты получаешь вместе с обучением?</span>
      </h2>

      <p class="section-subtitle">
        Ты покупаешь не просто знания, а вход в закрытую экосистему, где каждый шаг к успеху продуман до мелочей
      </p>

      <div class="benefits-grid">
        <div 
          v-for="(benefit, index) in learningBenefits" 
          :key="index" 
          class="benefit-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <div class="card-header">
              <div class="card-number">0{{ index + 1 }}</div>
              <svg class="card-icon" v-html="benefit.icon"></svg>
            </div>
            <h3 class="card-title">{{ benefit.title }}</h3>
            <p class="card-text">{{ benefit.text }}</p>
          </div>
        </div>
      </div>

      <div class="conclusion-box">
        <p class="conclusion-text">
          Арбитраж — это не одиночная игра. Мы уже держим для тебя место в первом ряду
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const learningBenefits = ref([
  {
    title: 'Комьюнити 24/7',
    text: 'Доступ к чату с актуальными связками, обсуждением трендов и взаимной поддержкой. Реальные трейдеры, которые понимают твои боли',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  {
    title: 'Пожизненное сопровождение',
    text: 'Личная поддержка даже через год, обновления курса, бесплатный доступ к новым потокам и общие созвоны по стратегиям',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>`
  },
  {
    title: 'Коллабы с топами',
    text: 'Возможность попасть на обучение к топовым криптотрейдерам России бесплатно. Нужно только желание',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>`
  }
])
</script>

<style scoped>
.benefits-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.section-subtitle {
  text-align: center;
  color: #cccccc;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.benefit-card {
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
  height: 100%;
  border: 1px solid rgba(138, 43, 226, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
}

.card-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-number {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-icon {
  width: 50px;
  height: 50px;
  color: #BA55D3;
  transition: transform 0.4s ease;
}

.card-inner:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
}

.card-title {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
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
  transition: width 0.4s ease;
}

.card-inner:hover .card-title::after {
  width: 100%;
}

.card-text {
  color: #cccccc;
  line-height: 1.7;
  font-size: 1rem;
}

.conclusion-box {
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(138, 43, 226, 0.08);
  border-radius: 12px;
  border: 1px solid rgba(138, 43, 226, 0.2);
}

.conclusion-text {
  color: #fff;
  font-size: 1.3rem;
  margin: 0;
  font-style: italic;
  position: relative;
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
  filter: blur(80px);
  opacity: 0.1;
  animation: floatOrb 20s infinite linear;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, 50px) scale(1.2); }
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .benefits-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .card-inner {
    padding: 1.5rem;
  }

  .conclusion-box {
    margin-top: 3rem;
    padding: 1.5rem;
  }

  .conclusion-text {
    font-size: 1.1rem;
  }
}
</style>