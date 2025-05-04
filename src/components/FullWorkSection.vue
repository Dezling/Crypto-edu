<template>
  <section class="profession-section">
    <div class="decorative-elements">
      <svg class="floating-orb right" viewBox="0 0 200 200">
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
      <h2 class="section-title">
        <span class="gradient-text">Арбитраж криптовалют</span> — 
        <span class="animated-underline">реальная профессия</span>
      </h2>

      <div class="profession-grid">
        <div class="profession-card main-card">
          <div class="card-content">
            <h3>Почему это полноценная профессия?</h3>
            <ul class="profession-list">
              <li v-for="(item, index) in professionPoints" :key="index">
                <svg class="list-icon" v-html="item.icon"></svg>
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>

        <div class="advantages-grid">
          <div class="advantage-card" v-for="(adv, index) in advantages" :key="index">
            <div class="advantage-header">
              <svg class="advantage-icon" v-html="adv.icon"></svg>
              <h4>{{ adv.title }}</h4>
            </div>
            <p>{{ adv.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const professionPoints = ref([
  {
    text: 'Арбитраж криптовалют — это не игра в рулетку, а профессия, требующая навыков анализа данных, быстрой адаптации и организаторских качеств.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
  {
    text: 'Чтобы работать в разных GEO, нужно знать регуляторные требования и налоговые нюансы.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>`
  },
  {
    text: 'Криптоарбитраж требует постоянного развития и обучения, тестирования новых инструментов и адаптации к трендам.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  }
]);

const advantages = ref([
  {
    title: 'Аналитическое мышление',
    description: 'Критически важно для оценки рынка и принятия правильных решений.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>`
  },
  {
    title: 'Управление рисками',
    description: 'Необходимость минимизировать риски и защищать капиталы.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
  {
    title: 'Стратегическое планирование',
    description: 'Важный аспект для успешного ведения бизнеса.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>`
  }
]);
</script>

<style scoped>
.profession-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}
.content-wrapper {
  position: relative;
  z-index: 2;
  padding: 2rem;
}
.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1; 
}
.floating-orb {
  z-index: -1; 
}
.profession-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative; 
}
.main-card {
  background: rgba(138, 43, 226, 0.05);
  border: 1px solid rgba(138, 43, 226, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(5px);
}
.advantages-grid {
  display: grid;
  gap: 2rem;
}
.advantage-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease;
}
.advantage-card:hover {
  transform: translateY(-5px);
}
.advantage-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.advantage-icon {
  width: 40px;
  height: 40px;
  stroke: url(#iconGradient);
}
.profession-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(138, 43, 226, 0.1);
}
.list-icon {
  width: 24px;
  height: 24px;
  stroke: #8A2BE2;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes titleAppear {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.section-title {
  animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-bottom: 4rem;
  font-size: 2.3rem;
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
.profession-list li {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  animation-delay: calc(0.2s * var(--index));
}
.profession-list li:nth-child(1) { --index: 1; }
.profession-list li:nth-child(2) { --index: 2; }
.advantage-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  animation-delay: calc(0.2s * var(--index));
}
.advantage-card:nth-child(1) { --index: 1; }
.advantage-card:nth-child(2) { --index: 2; }
.main-card {
  margin-bottom: 2rem;
}
.profession-list {
  margin-top: 2rem;
}
.profession-list li {
  padding: 1.5rem 0;
  margin: 0.5rem 0;
}
.advantage-card {
  margin-bottom: 1.5rem;
  padding: 2.5rem;
}
.advantage-card p {
  margin-top: 1rem;
  line-height: 1.7;
  color: #d8d8d8;
}
.profession-list li:hover {
  transform: translateX(10px);
  background: rgba(138, 43, 226, 0.03);
}
.list-icon {
  transition: transform 0.3s ease;
}
.profession-list li:hover .list-icon {
  transform: rotate(15deg) scale(1.2);
}
@media (max-width: 768px) {
  .profession-section {
    padding: 4rem 0;
  }
  .content-wrapper {
    padding: 1rem;
  }
  .advantage-card {
    padding: 1.8rem;
    margin-bottom: 1rem;
  }
  .profession-list li {
    padding: 1.2rem 0;
  }
}
h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #BA55D3;
  position: relative;
  padding-left: 1.5rem;
}
h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 70%;
  background: linear-gradient(180deg, #8A2BE2, #4B0082);
  border-radius: 3px;
}
h4 {
  font-size: 1.4rem;
  color: #fff;
  transition: color 0.3s ease;
}
.advantage-card:hover h4 {
  color: #BA55D3;
}
@media (max-width: 1024px) {
  .profession-grid {
    grid-template-columns: 1fr;
  }
  .main-card {
    order: -1;
  }
}
@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  .advantage-card {
    padding: 1.5rem;
  }
}
</style>
