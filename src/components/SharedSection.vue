<template>
  <section class="telegram-section" id="community">
    <!-- Анимированный фон -->
    <div class="background-effects">
      <div class="particles">
        <div 
          v-for="i in 30" 
          :key="i"
          class="particle"
          :style="{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`
          }"
        ></div>
      </div>
      <svg class="gradient-wave" viewBox="0 0 1440 363" fill="none">
        <path 
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
          stroke="url(#waveGradient)" 
          stroke-opacity="0.1" 
          stroke-width="10"
        />
        <defs>
          <linearGradient id="waveGradient">
            <stop offset="0%" stop-color="#8A2BE2"/>
            <stop offset="100%" stop-color="#4B0082"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="telegram-container">
      <h2 class="section-title">
        <span class="gradient-text">Присоединяйтесь </span>
        <span class="animated-underline">  к нашему сообществу</span>
      </h2>

      <div class="telegram-grid">
        <a 
          v-for="(channel, index) in channels" 
          :key="index"
          :href="channel.link"
          target="_blank"
          class="telegram-card"
          :style="{ '--delay': index * 0.3 + 's' }"
          @mouseenter="handleHover(index)"
          @mouseleave="handleHover(null)"
        >
          <div class="card-inner">
            <div class="telegram-icon">
              <svg class="tg-logo" viewBox="0 0 240 240" fill="none">
                <path 
                  d="M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240Z" 
                  fill="currentColor"
                />
                <path 
                  d="M98.6666 143.284L103.985 177.052C105.393 177.052 106.369 176.51 107.544 175.425L113.858 169.694L146.557 189.066C152.117 191.76 156.043 190.033 157.378 183.685L177.798 66.7972L177.803 66.7722C179.416 58.8632 174.875 55.4942 169.319 56.9892L49.0127 95.2452C41.1037 97.7032 41.1497 102.216 47.4127 103.889L85.3426 115.007L154.296 72.8872C157.556 70.6622 160.521 71.8162 157.964 74.1222L112.896 114.247L98.6666 143.284Z" 
                  fill="#0F0F0F"
                />
              </svg>
              <div class="icon-glow"></div>
            </div>
            
            <div class="content-wrapper">
              <h3 class="channel-title">{{ channel.title }}</h3>
              <p class="channel-description">{{ channel.description }}</p>
            </div>

            <div class="hover-effect" :class="{ 'active': activeHover === index }">
              <div class="glow"></div>
            </div>
          </div>
          <div class="card-border"></div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const channels = ref([
  {
    title: 'Кейсы & Обучение',
    description: 'Эксклюзивные материалы и практические кейсы',
    link: 'https://t.me/tetherkeys'
  },
  {
    title: 'Основной канал',
    description: 'Новости проекта и полезные материалы',
    link: 'https://t.me/spreadt'
  }
])

const activeHover = ref(null)

const handleHover = (index) => {
  activeHover.value = index
}
</script>

<style scoped>
.telegram-section {
  padding: 8rem 5%;
  background: #0F0F0F;
  position: relative;
  overflow: hidden;
}
.background-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}
.particle {
  position: absolute;
  background: rgba(138,43,226,0.1);
  border-radius: 50%;
  animation: float 4s infinite ease-in-out;
}
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-40px) scale(0.8); }
}
.gradient-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  animation: waveFlow 30s linear infinite;
}

@keyframes waveFlow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

.telegram-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  animation: slideUp 1s ease forwards;
  animation-delay: 0.2s;
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
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2 0%, transparent 100%);
  animation: underlineExpand 1.2s ease forwards;
  animation-delay: 0.5s;
}

.telegram-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
}

.telegram-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  text-decoration: none;
  transform: translateY(30px);
  opacity: 0;
  animation: cardAppear 0.8s ease forwards;
  animation-delay: var(--delay);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;
}


.telegram-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, 
    rgba(138,43,226,0.15) 0%,
    rgba(75,0,130,0.1) 100%);
  border-radius: 24px;
  border: 1px solid rgba(138,43,226,0.2);
  z-index: 1;
  transition: all 0.4s ease;
}
.telegram-card:hover {
  transform: translateY(-8px);
}
.telegram-card:hover::before {
  border-color: rgba(138,43,226,0.4);
  background: linear-gradient(45deg, 
    rgba(138,43,226,0.2) 0%,
    rgba(75,0,130,0.15) 100%);
}


.card-inner {
  position: relative;
  padding: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 2;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.telegram-card:hover .card-inner {
  transform: translateZ(20px);
}

.telegram-icon {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(45deg, #8A2BE2 0%, #4B0082 100%);
  color: white;
  transition: transform 0.3s ease;
}

.telegram-card:hover .telegram-icon {
  transform: rotate(15deg) scale(1.1);
}
.icon-glow {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(rgba(138,43,226,0.3), transparent 60%);
  animation: glowPulse 2s infinite;
}

.tg-logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.content-wrapper {
  flex: 1;
}

.channel-title {
  font-size: 1.8rem;
  background: linear-gradient(45deg, #FFF 30%, #BA55D3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.channel-description {
  color: #CCCCCC;
  line-height: 1.6;
  font-size: 1.1rem;
  position: relative;
  padding-left: 24px;
}

.channel-description::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2 0%, transparent 100%);
}

.hover-effect {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hover-effect.active {
  opacity: 1;
}

.glow {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, 
    rgba(138,43,226,0.15) 0%,
    rgba(138,43,226,0) 60%);
  animation: rotateGlow 12s linear infinite;
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes cardAppear {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes rotateGlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes underlineExpand {
  to { width: 100%; }
}

@media (max-width: 768px) {
  .telegram-grid {
    grid-template-columns: 1fr;
  }
  
  .card-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }
  
  .channel-title {
    font-size: 1.6rem;
  }
  
  .telegram-icon {
    width: 60px;
    height: 60px;
  }
  
  .tg-logo {
    width: 30px;
    height: 30px;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}
</style>