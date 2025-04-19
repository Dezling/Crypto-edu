<template>
  <section id="about" class="about-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">
          <span class="gradient-text">Наша Команда Экспертов</span><br>
          в Арбитраже
        </h2>
        
        <div class="advantages">
          <div 
            v-for="(item, index) in advantages" 
            :key="index" 
            class="advantage-card"
          >
            <div class="icon-container">
              <div class="icon-wrapper" v-html="item.icon"></div>
              <div class="icon-glow"></div>
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
      
      <div class="visual-content">
        <div class="stats-container">
          <div 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="stat-item"
          >
            <div class="stat-icon-wrapper" v-html="stat.icon"></div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
        <img 
          src="/src/assets/icons/17.svg" 
          class="floating-chart" 
          alt="chart"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const advantages = ref([
  {
    title: 'Командные достижения',
    text: 'Построили две арбитражные команды полного цикла',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  {
    title: 'Опыт с Обменниками',
    text: 'Создали свои обменники в Тайланде и Индонезии',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
          </svg>`
  },
  {
    title: 'Методики',
    text: 'Обнаружили несколько самых прибыльных и громких связок в арбитраже',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>`
  },
  {
    title: 'Доверие ByBit',
    text: 'Являемся официальными партнерами ByBit',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
])

const stats = ref([
  { 
    value: '95%', 
    label: 'Учеников стали стабильно зарабатывать на арбитраже',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>`
  },
  { 
    value: '5 Дней', 
    label: 'Столько вы потратите на обучение',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
  { 
    value: '1000+', 
    label: 'Людей прошедших обучение',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>`
  },
  { 
    value: '100%', 
    label: 'Средняя доходность',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>`
  },
  { 
    value: '350+', 
    label: 'Личных сессий в качестве наставников',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>`
  },
  { 
    value: 'Оборот', 
    label: 'за полгода торговли 3.000.000$',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  }
])
</script>

<style scoped>
/* Добавленные/измененные стили для иконок */
.icon-wrapper,
.stat-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper svg,
.stat-icon-wrapper svg {
  width: 100%;
  height: 100%;
  color: inherit;
}

.icon-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 1.5rem;
  color: #BA55D3; /* Цвет для преимуществ */
}

.stat-icon-wrapper {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  color: #8A2BE2; /* Цвет для статистики */
}

/* Остальные стили остаются без изменений */
</style>
<style scoped>
.about-section {
  padding: 8rem 5% 4rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.section-title {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 4rem;
  color: #fff;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.advantage-card {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(20, 20, 30, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
}

.icon-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 80px;
  height: 80px;
  color: #BA55D3;
  padding: 0.5rem;
}

.icon-glow {
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: radial-gradient(rgba(138, 43, 226, 0.3) 0%, transparent 70%);
  animation: glow-pulse 2s infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.4; transform: scale(0.9); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.card-title {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 1rem;
}

.card-text {
  color: #CCCCCC;
  line-height: 1.6;
  font-size: 0.95rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-item {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(20, 20, 30, 0.8);
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
}

.stat-icon {
  width: 50px;
  height: 50px;
  color: #8A2BE2;
  margin-bottom: 1rem;
  padding: 0.3rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #CCCCCC;
  font-size: 0.95rem;
}

.floating-chart {
  position: absolute;
  right: 80px;
  bottom: -110px;
  width: 400px;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .advantages {
    grid-template-columns: 1fr;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .floating-chart {
    display: none;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
  }
  
  .card-icon {
    width: 50px;
    height: 50px;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 1024px) {
  .about-section {
    min-height: 100vh;
  }
}
</style>