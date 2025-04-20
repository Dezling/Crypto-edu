<template>
  <section class="trust-section">
    <div class="decorative-elements">
      <svg class="floating-orb right" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#trustOrbGradient)"/>
        <defs>
          <radialGradient id="trustOrbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Почему мне можно доверять?</span>
        <span class="animated-underline">
			Профессионализм и результаты</span>
      </h2>

      <div class="trust-grid">
        <div 
          v-for="(reason, index) in trustReasons" 
          :key="index" 
          class="trust-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <div class="card-icon">
              <svg v-html="reason.icon"></svg>
            </div>
            <h3 class="card-title">{{ reason.title }}</h3>
            <p class="card-text">{{ reason.text }}</p>
            <div class="card-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const trustReasons = ref([
  {
    title: 'Мой многолетний опыт',
    text: 'Я многое прошел и нет смысла обманывать людей когда вместе с ними я могу заработать больше',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
  {
    title: 'Много учеников',
    text: 'С которыми мы создали очень дружное комьюнити',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  {
    title: 'Прозрачность',
    text: 'Открытая статистика и кейсы учеников всегда есть и будут в моем канале',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>`
  },
  {
    title: 'Поддержка',
    text: 'Существует постоянно, это одно из главных моих правил когда я беру учеников',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>`
  }
])
</script>

<style scoped>
.trust-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.trust-card {
  perspective: 1000px;
  opacity: 0;
  transform: translateY(30px);
  animation: cardAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes cardAppear {
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
  transition: transform 0.4s ease;
  backdrop-filter: blur(10px);
}

.trust-card:hover .card-inner {
  transform: rotateX(5deg) rotateY(5deg) translateY(-5px);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 50%;
  transition: transform 0.4s ease;
}

.trust-card:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
}

.card-icon svg {
  width: 40px;
  height: 40px;
  stroke: url(#iconGradient);
}

.card-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-text {
  color: #cccccc;
  line-height: 1.6;
  min-height: 80px;
}

.card-decoration {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(138,43,226,0.1) 0%, rgba(0,0,0,0) 70%);
  filter: blur(30px);
  z-index: -1;
  transition: all 0.6s ease;
}

.trust-card:hover .card-decoration {
  transform: scale(1.2);
}
.trust-section {
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
  position: relative;
  z-index: 3;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  position: relative;
}

/* Анимации текста */
@keyframes textAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.card-title {
  animation: textAppear 0.6s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.card-text {
  animation: textAppear 0.6s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

/* Улучшенные стили карточек */
.card-inner {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(138, 43, 226, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-inner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(138,43,226,0.1) 0%, rgba(0,0,0,0) 70%);
  filter: blur(40px);
  z-index: -1;
  transition: all 0.6s ease;
}

.trust-card:hover .card-inner::before {
  transform: scale(1.2);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 50%;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card-icon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(45deg, #8A2BE2, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.trust-card:hover .card-icon::after {
  opacity: 0.2;
}

.card-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.card-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #8A2BE2;
  transition: width 0.4s ease;
}

.trust-card:hover .card-title::after {
  width: 100%;
}

.card-text {
  color: #cccccc;
  line-height: 1.7;
  min-height: 80px;
  transform: translateZ(30px);
}

@media (max-width: 768px) {
  .trust-section {
    padding: 4rem 0;
  }
  
  .card-inner {
    padding: 2rem;
  }
  
  .card-text {
    min-height: auto;
  }
}
</style> 