<template>
  <section class="cases-section">
    <div class="decorative-elements">
      <svg class="geometric-pattern right" viewBox="0 0 200 200">
        <path 
          d="M20,20 L180,20 L180,180 L20,180 Z"
          stroke="url(#patternGradient)"
          stroke-width="2"
          fill="none"
        />
        <defs>
          <linearGradient id="patternGradient">
            <stop offset="0%" stop-color="#8A2BE2"/>
            <stop offset="100%" stop-color="#4B0082"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <div class="cases-content">
        <div class="cases-grid">
          <div 
            v-for="(caseItem, index) in cases" 
            :key="index" 
            class="case-card"
          >
            <div class="case-card-inner">
              <div class="case-header">
                <div class="avatar-container">
                  <img 
                    :src="caseItem.photo" 
                    :alt="caseItem.name" 
                    class="case-avatar"
                  >
                  <svg class="avatar-circle" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      stroke="#8A2BE2" 
                      stroke-width="2" 
                      fill="none"
                    />
                  </svg>
                </div>
                <div class="case-info">
                  <div class="case-name">{{ caseItem.name }}</div>
                  <div class="case-period">{{ caseItem.period }}</div>
                </div>
              </div>
              
              <div class="case-stats">
                <div class="stat-item">
                  <div class="stat-value">{{ caseItem.result }}</div>
                  <div class="stat-label">Доходность</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ caseItem.duration }}</div>
                  <div class="stat-label">Обучение</div>
                </div>
              </div>
              
              <div class="case-comment">
                “{{ caseItem.comment }}”
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

const cases = ref([
  {
    name: 'Артем С.',
    period: 'Выпускник 2023',
    result: '+327%',
    duration: '3 месяца',
    photo: 'https://i.pravatar.cc/150?img=1',
    comment: 'Курс полностью изменил мой подход к трейдингу. Теперь я чётко понимаю рыночные тенденции и могу прогнозировать движения!'
  },
  {
    name: 'Ольга М.',
    period: 'Выпускница 2022',
    result: '+415%',
    duration: '4 месяца',
    photo: 'https://i.pravatar.cc/150?img=2',
    comment: 'Никогда не думала, что смогу так быстро разобраться в крипте. Обучение структурировано и максимально практично!'
  },
  {
    name: 'Дмитрий К.',
    period: 'Выпускник 2024',
    result: '+689%',
    duration: '5 месяцев',
    photo: 'https://i.pravatar.cc/150?img=3',
    comment: 'Лучшее решение в моей жизни! Поддержка менторов и сообщества бесценна. Рекомендую всем!'
  }
])
</script>

<style scoped>
.briefing-section {
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.floating-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  animation: floatOrb 20s infinite linear;
  filter: blur(80px);
  opacity: 0.15;
}
.floating-orb.left {
  left: -300px;
  top: 20%;
}
.floating-orb.right {
  right: -300px;
  bottom: 20%;
  animation-delay: -10s;
}
@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-50px) scale(1.2); }
}

.geometric-pattern {
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.1;
  animation: rotatePattern 40s linear infinite;
}

.geometric-pattern.right {
  right: -100px;
  top: 30%;
}
@keyframes rotatePattern {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.circuit-line {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  opacity: 0.15;
  animation: lineFlow 25s linear infinite;
}

@keyframes lineFlow {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 4rem;
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

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.step-card {
  position: relative;
  perspective: 1000px;
}

.step-card-inner {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
    overflow: hidden;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.step-card:hover .step-card-inner {
  transform: rotateY(5deg) rotateX(5deg) translateY(-5px);
}

.step-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s;
  animation: drawBorder 1.5s forwards;
}

@keyframes drawBorder {
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.step-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s;
}

.step-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.3));
}

.step-card:hover .step-icon {
  transform: rotate(15deg) scale(1.1);
}

.step-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.step-description {
  color: #cccccc;
  line-height: 1.6;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.case-card {
  position: relative;
  perspective: 800px;
}

.case-card-inner {
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.case-card:hover .case-card-inner {
  transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
}

.avatar-container {
  position: relative;
  width: 60px;
  height: 60px;
}

.case-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: circleRotate 8s linear infinite;
}

@keyframes circleRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.case-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.case-comment {
  position: relative;
  padding: 1.5rem;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 0.5rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .steps-container,
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>