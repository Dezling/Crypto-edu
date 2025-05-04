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
        <div class="card myth-card">
          <div class="card-inner">
            <div class="card-header">
              <svg class="myth-icon" v-html="mythIcon"></svg>
              <h3>Арбитраж крипты = работа с картами «дропов»<br><span class="subtitle">Устаревший миф</span></h3>
            </div>
            <div class="modern-methods">
              <h4>Современные решения:</h4>
              <ul class="method-list">
                <li v-for="(method, index) in methods" :key="index">
                  <svg class="method-icon" v-html="method.icon"></svg>
                  <div>
                    <h5>{{ method.title }}</h5>
                    <p>{{ method.description }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card future-card">
          <div class="card-inner">
            <div class="card-header">
              <svg class="future-icon" v-html="futureIcon"></svg>
              <h3>Будущее арбитража:<br>Правовое поле и безопасность</h3>
            </div>
            <div class="advantages-block">
              <div class="advantage-item">
                <h4>Преимущества стратегии</h4>
                <ul class="advantage-list">
                  <li v-for="(item, index) in advantages" :key="index">
                    <span class="check-icon">✓</span>{{ item }}
                  </li>
                </ul>
              </div>
              <div class="warning-block">
                <svg class="alert-icon" v-html="alertIcon"></svg>
                <p>Использование дропов приравнивается к отмыванию средств и карается:</p>
                <ul class="penalty-list">
                  <li v-for="(penalty, index) in penalties" :key="index">{{ penalty }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="conclusion-block">
        <h3 class="conclusion-title">
          <span class="gradient-text">Времена карт уходят </span> -
          <span class="animated-underline"> Будущее за адаптацией</span>
        </h3>
        <p class="conclusion-text">
          Мои стратегии исключают серые зоны: вы будете работать через CEX ресурсы, P2P-платформы 
          и международные экосистемы с полным соблюдением регуляторных норм. 
          <span class="highlight">Ваша безопасность и репутация - главный приоритет.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mythIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
  </svg>
`)

const futureIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
`)

const alertIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
`)

const methods = ref([
  {
    title: 'P2P-платформы',
    description: 'Легальные операции через проверенные платформы с гарантиями безопасности',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>`
  },
  {
    title: 'Криптокошельки',
    description: 'Прямые переводы между кошельками без посредников',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1v-2a1 1 0 00-1-1H5a1 1 0 01-1-1V9a1 1 0 011-1z"/>
          </svg>`
  }
])

const advantages = ref([
  'Работа с наличными через обменники',
  'Международные SWIFT-переводы',
  'Использование стейблкоинов',
  'Прозрачная бухгалтерия',
  'Полная легальность операций'
])

const penalties = ref([
  'Блокировка счетов',
  'Штрафы до 2 млн рублей',
  'Конфискация активов',
  'Уголовная ответственность'
])
</script>

<style scoped>
.cards-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  z-index: 3;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.3;
  padding: 0 1rem;
}
.decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2; 
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #64FFAB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes textGlow {
  0% { text-shadow: 0 0 10px rgba(138,43,226,0); }
  50% { text-shadow: 0 0 12px rgba(138,43,226,0.3); }
  100% { text-shadow: 0 0 10px rgba(138,43,226,0); }
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
  background: linear-gradient(90deg, #8A2BE2 30%, #64FFAB 100%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
  transform-origin: left;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin: 0 auto;
}

.card {
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(12px);
  transform: translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(138,43,226,0.3), rgba(100,255,171,0.1));
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.myth-card {
  background: rgba(17, 12, 28, 0.6);
}

.future-card {
  background: rgba(12, 20, 28, 0.6);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.myth-icon,
.future-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  stroke: #8A2BE2;
  filter: drop-shadow(0 0 8px rgba(138,43,226,0.3));
}

.future-icon {
  stroke: #64FFAB;
  filter: drop-shadow(0 0 8px rgba(100,255,171,0.3));
}

.card h3 {
  font-size: 2rem;
  animation: slideUpFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.3s;
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  

}

.subtitle {
  font-size: 1.1rem;
  color: #FF6B6B;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.modern-methods h4 {
  font-size: 1.4rem;
  color: #64FFAB;
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
}

.method-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.method-list li {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: default;
  opacity: 0;
  animation: slideUpFadeIn 0.5s ease-out forwards;
}

.method-list li:hover {
  background: rgba(138,43,226,0.08);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}
.method-list li:nth-child(1) { animation-delay: 0.4s; }
.method-list li:nth-child(2) { animation-delay: 0.5s; }

.advantage-list li {
  opacity: 0;
  animation: slideUpFadeIn 0.4s ease-in forwards;
}
.advantage-list li:nth-child(1) { animation-delay: 0.3s; }
.advantage-list li:nth-child(2) { animation-delay: 0.4s; }
.advantage-list li:nth-child(3) { animation-delay: 0.5s; }
.advantage-list li:nth-child(4) { animation-delay: 0.6s; }
.advantage-list li:nth-child(5) { animation-delay: 0.7s; }

.penalty-list li {
  opacity: 0;
  animation: slideUpFadeIn 0.4s ease-in forwards;
}
.penalty-list li:nth-child(1) { animation-delay: 0.4s; }
.penalty-list li:nth-child(2) { animation-delay: 0.5s; }
.penalty-list li:nth-child(3) { animation-delay: 0.6s; }
.penalty-list li:nth-child(4) { animation-delay: 0.7s; }

.method-icon {
  width: 40px;
  height: 40px;
  stroke: #8A2BE2;
  flex-shrink: 0;
  margin-top: 0.3rem;
}

.method-list h5 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.6rem;
}

.method-list p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.8);
  max-width: 480px;
}

.advantages-block {
  display: grid;
  gap: 2.5rem;
  height: 100%;
}

.advantage-item h4 {
  font-size: 1.4rem;
  color: #64FFAB;
  margin-bottom: 1.2rem;
}

.advantage-list {
  display: grid;
  gap: 0.8rem;
}

.advantage-list li {
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  background: rgba(100,255,171,0.05);
  border-radius: 8px;
  font-size: 1.05rem;
  color: rgba(255,255,255,0.9);
  line-height: 1.4;
  border-left: 3px solid #64FFAB;
}

.check-icon {
  font-size: 1.3rem;
  color: #64FFAB;
  margin-right: 1rem;
  filter: drop-shadow(0 0 6px rgba(100,255,171,0.3));
}

.warning-block {
  padding: 1.5rem;
  background: rgba(255,107,107,0.08);
  border-radius: 12px;
  border: 1px solid rgba(255,107,107,0.15);
}

.warning-block p {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: #FF6B6B;
  margin-bottom: 1.2rem;
}

.alert-icon {
  width: 28px;
  height: 28px;
  stroke: #FF6B6B;
  flex-shrink: 0;
}

.penalty-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.penalty-list li {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  background: rgba(255,107,107,0.1);
  border-radius: 6px;
  font-size: 0.95rem;
  color: #FFA8A8;
  position: relative;
}

.penalty-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  background: #FF6B6B;
  border-radius: 50%;
  margin-right: 0.8rem;
}

.conclusion-block {
  margin-top: 4rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(138,43,226,0.08), rgba(100,255,171,0.05));
  border-radius: 20px;
  border: 1px solid rgba(138,43,226,0.15);
  position: relative;
  overflow: hidden;
}

.conclusion-block::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(138,43,226,0.1) 0%, transparent 60%);
  transform: rotate(45deg);
}

.conclusion-title {
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.conclusion-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.highlight {
  color: #64FFAB;
  font-weight: 500;
  position: relative;
  display: inline-block;
  padding: 0 0.2rem;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.highlight:hover::after {
  transform: scaleX(1);
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .card {
    padding: 1.8rem;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
}

@media (max-width: 768px) {
  .cards-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .myth-icon,
  .future-icon {
    width: 50px;
    height: 50px;
  }
  
  .penalty-list {
    grid-template-columns: 1fr;
  }
  
  .conclusion-block {
    padding: 2rem 1.5rem;
    margin-top: 3rem;
  }
  
  .conclusion-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .method-list li {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.2rem;
  }
  
  .method-icon {
    margin-top: 0;
  }
  
  .penalty-list li {
    font-size: 0.9rem;
  }
}
</style>