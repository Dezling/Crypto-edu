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
      </h2>

      <div class="trust-content">
        <div class="main-statement">
          <p class="statement-text">
            <span class="gradient-highlight">Я не прошу верить на слово</span> — 
            у вас есть доступ к каналу с реальными отзывами учеников, 
            которые уже вышли на доход 
            <span class="income-range">от $1000 до $10 000</span> в месяц
          </p>
          
          <div class="proof-actions">
            <a href="https://t.me/tetherkeys" class="channel-link">
              <svg class="link-icon" v-html="channelIcon"></svg>
              <span>Перейти в Telegram-канал</span>
            </a>
          </div>
        </div>

        <div class="video-section">
          <div class="video-header">
            <svg class="youtube-icon" v-html="youtubeIcon"></svg>
            <h3>Хотите услышать истории из первых уст?</h3>
          </div>
          <p class="video-description">
            На моем YouTube-канале — эксклюзивные интервью, где ученики:
          </p>
          <ul class="video-list">
            <li>Рассказывают как строили первые сделки</li>
            <li>Делится преодолением трудностей</li>
            <li>Показывают рабочие стратегии</li>
          </ul>
          <a href="https://www.youtube.com/@spreadt." class="cta-button">
            Смотреть видео-отзывы
            <svg class="arrow-icon" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"/>
            </svg>
          </a>
        </div>

        <div class="transparency-block">
          <div class="warning-content">
            <svg class="alert-icon" v-html="alertIcon"></svg>
            <p class="transparency-text">
              <span class="emphasis">Никаких подставных отзывов</span> — 
              только честный разбор ошибок, реальные цифры 
              и стратегии, работающие прямо сейчас
            </p>
          </div>
          <p class="trust-footer">
            Ваше доверие должно быть основано на фактах — 
            <span class="gradient-underline">и я даю вам эти факты</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const channelIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.14-.26-.094l.528-2.39 2.932-2.646c.548-.37-.119-.568-.846-.201l-3.62 2.28-3.074-.958c-.658-.203-.658-.639.136-.954l11.566-4.458c.548-.244 1.028.136.846.954z"/>
  </svg>
`)

const youtubeIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
`)

const alertIcon = ref(`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
  </svg>
`)
</script>

<style scoped>
.trust-section {
  padding: 8rem 0;
  position: relative;
}

.main-statement {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}
.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.3;
  padding: 0 1rem;
}
.statement-text {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #fff;
  margin-bottom: 2rem;
}

.gradient-highlight {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
   font-size: 2.1rem;
}

.income-range {
  color: #64FFAB;
  position: relative;
  display: inline-block;
}

.income-range::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transition: transform 0.3s ease;
  transform-origin: right;
}

.income-range:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.proof-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.channel-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: rgba(138,43,226,0.1);
  color: #8A2BE2;
  transition: all 0.3s ease;
}

.channel-link:hover {
  background: rgba(138,43,226,0.2);
  transform: translateY(-2px);
}

.link-icon {
  width: 24px;
  height: 24px;
}

.video-section {
  max-width: 800px;
  margin: 4rem auto;
  padding: 3rem;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  text-align: center;
}

.video-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.youtube-icon {
  width: 40px;
  height: 40px;
  fill: #FF0000;
}

.video-description {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.video-list {
  text-align: left;
  max-width: 500px;
  margin: 0 auto 2rem;
  list-style: none;
}

.video-list li {
  padding: 0.8rem;
  position: relative;
  padding-left: 2rem;
}

.video-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #8A2BE2;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  color: white;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.transparency-block {
  max-width: 800px;
  margin: 4rem auto 0;
  padding: 2rem;
  text-align: center;
}

.warning-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255,107,107,0.05);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.alert-icon {
  width: 40px;
  height: 40px;
  stroke: #FF6B6B;
  flex-shrink: 0;
}

.transparency-text {
  color: #FFA8A8;
  line-height: 1.6;
}

.emphasis {
  color: #FF6B6B;
  font-weight: 500;
}

.trust-footer {
  font-size: 2.1rem;
  color: #fff;
}

.gradient-underline {
  background-image: linear-gradient(90deg, #8A2BE2, #64FFAB);
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background-position: 0 100%;
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
  z-index: 2;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.main-statement {
  animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.video-section {
  animation: slideIn 0.8s 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.transparency-block {
  animation: slideIn 0.8s 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.statement-text {
  position: relative;
  z-index: 2;
}

.gradient-highlight {
  position: relative;
  display: inline-block;
}

.gradient-highlight::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #BA55D3);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.gradient-highlight:hover::after {
  transform: scaleX(1);
}

.income-range {
  position: relative;
  display: inline-block;
}

.income-range::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #64FFAB;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.income-range:hover::before {
  transform: scaleX(1);
}

.channel-link {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.channel-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(138,43,226,0.1), rgba(100,255,171,0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.channel-link:hover::before {
  opacity: 1;
}

.video-section {
  position: relative;
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138,43,226,0.1);
  transform: translateZ(0);
}

.video-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(45deg, #8A2BE2 0%, #4B0082 100%);
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.3;
}

.video-list li {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
}

.video-list li:nth-child(1) { animation-delay: 0.3s; }
.video-list li:nth-child(2) { animation-delay: 0.4s; }
.video-list li:nth-child(3) { animation-delay: 0.5s; }

.cta-button {
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 4px 15px rgba(138,43,226,0.2);
  transition: all 0.4s ease;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255,255,255,0.1) 25%,
    transparent 50%,
    rgba(255,255,255,0.1) 75%
  );
  animation: shine 3s infinite;
}

@keyframes shine {
  to {
    left: 100%;
  }
}

.transparency-block {
  position: relative;
  z-index: 2;
}

.warning-content {
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(45deg, rgba(255,107,107,0.05), rgba(138,43,226,0.03));
}

.alert-icon {
  filter: drop-shadow(0 0 8px rgba(255,107,107,0.2));
}

.gradient-underline {
  position: relative;
}

.gradient-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #64FFAB);
  transform-origin: right;
  transition: transform 0.4s ease;
  transform: scaleX(0);
}

.gradient-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (max-width: 768px) {
  .trust-section {
    padding: 4rem 0;
  }
  
  .statement-text {
    font-size: 1.2rem;
  }
  
  .video-section {
    padding: 2rem;
  }
  
  .video-list {
    padding-left: 1rem;
  }
}
</style>