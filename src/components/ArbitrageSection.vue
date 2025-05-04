<template>
  <section class="p2p-arbitrage-section">
    <div class="decorative-grid"></div>
    
    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">P2P Арбитраж</span> —<br>
        Искусство извлекать прибыль из разницы цен
      </h2>

      <div class="explanation-block">
        <div class="animated-diagram">
          <div class="exchange-platform left">
            <div class="platform-name">Покупка USDT</div>
            <div class="price buy">92₽</div>
          </div>
          
          <div class="arrows">
            <div class="arrow-transfer"></div>
            <div class="arrow-transfer delay-1"></div>
            <div class="profit-badge">+4.3%</div>
          </div>

          <div class="exchange-platform right">
            <div class="platform-name">Продажа USDT</div>
            <div class="price sell">96₽</div>
          </div>
        </div>
      <div class="animated-description">
          <p class="glowing-text">
            <span class="highlight">Арбитраж</span> — это экономический феномен, основанный 
            на эксплуатации временных или пространственных
            диспаритетов цен на идентичные или схожие активы в различных  <span class="gradient-accent">сегментах рынка. </span>В контексте
            <span class="animated-underline">криптовалютных рынков</span>, он проявляется как стратегия извлечения прибыли за счёт разницы котировок, возникающей вследствие асимметрии информации, ликвидности или регуляторных условий. 
            <span class="focus-text"> А если «серьёзно» </span><span class="highlight">арбитраж</span> — это как игра в «найди отличия» между биржами, где вместо картинок — <span class="gradient-accent">курс доллара </span>, а вместо приза — <span class="gradient-accent">твоя прибыль</span> 
         
          </p>
        </div>


        <div class="step-cards">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="step-card"
            :style="{ transitionDelay: `${index * 0.2}s` }"
          >
            <div class="step-header">
              <div class="step-number">0{{ index + 1 }}</div>
              <svg class="step-icon" viewBox="0 0 24 24">
                <path :d="step.icon"/>
              </svg>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
const steps = ref([
  {
    title: 'Находим разницу',
    description: 'Анализируем курсы на разных P2P-площадках и биржах',
    icon: 'M21 21l-3.5-3.5M17 10a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    title: 'Совершаем сделку',
    description: 'Одновременная покупка и продажа на разных платформах',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  {
    title: 'Фиксация прибыли',
    description: 'Мгновенное получение разницы без рыночных рисков',
    icon: 'M15 8.25H9m6 3h3m-3 3h3m-3.813-9.375L13.5 4.5 15 3M9 15.75V21l3-3.75 3 3.75V15.75'
  },
])


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.step-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.p2p-arbitrage-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
}

.decorative-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(138, 43, 226, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(138, 43, 226, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 5rem;
  line-height: 1.2;
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

.explanation-block {
  display: grid;
  gap: 4rem;
}

.animated-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin: 3rem 0;
  position: relative;
}

.exchange-platform {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(20, 20, 30, 0.9);
  backdrop-filter: blur(10px);
  width: 220px;
  text-align: center;
  transition: transform 0.3s ease;
}

.platform-name {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 2.4rem;
  font-weight: 700;
}

.buy { color: #2ed573; }
.sell { color: #ff4757; }

.arrows {
  position: relative;
  width: 200px;
  height: 80px;
}

.arrow-transfer {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2 0%, transparent 100%);
  animation: arrowFlow 2.5s infinite;
}

.arrow-transfer::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid #8A2BE2;
  border-top: 2px solid #8A2BE2;
  transform: rotate(45deg);
}

.delay-1 {
  animation-delay: 1.2s;
  opacity: 0.5;
}

.profit-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(46, 213, 115, 0.15);
  color: #2ed573;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  animation: pulse 2s infinite;
}

@keyframes arrowFlow {
  0% { width: 0%; opacity: 0; }
  30% { width: 100%; opacity: 1; }
  100% { width: 100%; opacity: 0; }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.05); }
}

.step-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.step-card {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(25, 25, 35, 0.8);
  backdrop-filter: blur(10px);
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.step-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.step-number {
  font-size: 2rem;
  color: rgba(255,255,255,0.1);
  font-weight: 700;
}

.step-icon {
  width: 40px;
  height: 40px;
  stroke: #BA55D3;
  fill: none;
  stroke-width: 1.5;
}

.step-title {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
}

.step-description {
  color: #aaa;
  line-height: 1.6;
  font-size: 0.95rem;
}
.animated-description {
  max-width: 900px;
  margin: 5rem auto;
  position: relative;
  perspective: 800px;
  transform-style: preserve-3d;
}

.glowing-text {
  font-size: 1.25rem;
  line-height: 1.9;
  text-align: justify;
  color: rgba(255,255,255,0.92);
  padding: 3rem;
  border-radius: 24px;
  background: linear-gradient(45deg, 
    rgba(30, 30, 45, 0.8) 0%, 
    rgba(35, 35, 50, 0.7) 100%);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(138, 43, 226, 0.3);
  transform: rotateX(3deg) translateZ(50px);
  animation: 
    text-float 8s ease-in-out infinite,
    border-glow 4s ease-in-out infinite;
  box-shadow: 
    0 8px 32px rgba(0,0,0,0.15),
    0 0 40px rgba(138, 43, 226, 0.1);
  position: relative;
  overflow: hidden;
}
.glowing-text::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    rgba(138, 43, 226, 0.1) 0%,
    rgba(186, 85, 211, 0.05) 50%,
    rgba(138, 43, 226, 0.1) 100%
  );
  animation: gradient-flow 12s linear infinite;
  z-index: -1;
}

@keyframes text-float {
  0%, 100% { 
    transform: rotateX(3deg) translateZ(50px) translateY(0);
  }
  50% { 
    transform: rotateX(1deg) translateZ(50px) translateY(-10px);
  }
}
@keyframes gradient-flow {
  0% { transform: translate(-25%, -25%) rotate(0deg); }
  100% { transform: translate(-25%, -25%) rotate(360deg); }
}
@keyframes border-glow {
  0%, 100% { 
    box-shadow: 
      0 8px 32px rgba(0,0,0,0.15),
      0 0 40px rgba(138, 43, 226, 0.1);
    border-color: rgba(138, 43, 226, 0.3);
  }
  50% { 
    box-shadow: 
      0 8px 40px rgba(0,0,0,0.2),
      0 0 60px rgba(138, 43, 226, 0.25);
    border-color: rgba(138, 43, 226, 0.5);
  }
}

.highlight {
  color: #fff;
  font-weight: 600;
  position: relative;
  background: linear-gradient(90deg, #8A2BE2 0%, #BA55D3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 4px;
  animation: highlight-pulse 3s ease infinite;
}


@keyframes highlight-pulse {
  0%, 100% { text-shadow: 0 0 8px rgba(138, 43, 226, 0); }
  50% { text-shadow: 0 0 15px rgba(138, 43, 226, 0.4); }
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, transparent);
  animation: line-extend 2.5s infinite;
}

.gradient-accent {
  position: relative;
  font-weight: 500;
  background: linear-gradient(45deg, #BA55D3, #40E0D0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 6s ease infinite;
}
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animated-underline {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.animated-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #40E0D0);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-underline::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #8A2BE2;
  transition: width 0.4s ease;
}

.animated-underline:hover::before {
  width: 100%;
}

.focus-text {
  display: inline-block;
  animation: focus-pulse 2s infinite;
}

@keyframes line-extend {
  0% { width: 0; opacity: 0; }
  50% { width: 100%; opacity: 1; }
  100% { width: 100%; opacity: 0; }
}

@media (max-width: 768px) {
  .glowing-text {
    font-size: 1rem;
    padding: 1.5rem;
  }
  
  .animated-description {
    margin: 3rem auto;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .animated-diagram {
    flex-direction: column;
    gap: 2rem;
  }
  
  .arrows {
    height: 100px;
    width: 80px;
    transform: rotate(90deg);
  }
  
  .step-cards {
    grid-template-columns: 1fr;
  }
}
</style>