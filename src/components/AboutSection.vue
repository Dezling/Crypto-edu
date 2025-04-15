<template>
  <section id="about" class="about-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">
          <span class="gradient-text">Ваш эксперт</span><br>
          в криптотрейдинге
        </h2>
        
        <div class="advantages">
          <div 
            v-for="(item, index) in advantages" 
            :key="index" 
            class="advantage-card"
          >
            <div class="icon-container">
              <img 
                :src="`/src/assets/icons/${index + 5}.svg`"
                class="card-icon"
                alt="advantage icon"
              >
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
            <img 
              :src="`/src/assets/icons/${index * 2 + 4}.svg`"
              class="stat-icon"
              alt="stat icon"
            >
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
    title: 'Практический опыт',
    text: '12 лет успешной торговли на крипторынках'
  },
  {
    title: 'Обучение',
    text: '5000+ студентов прошли полный курс'
  },
  {
    title: 'Методики',
    text: 'Авторские торговые стратегии'
  },
  {
    title: 'Поддержка',
    text: 'Персональный менторинг 24/7'
  }
])

const stats = ref([
  { value: '95%', label: 'Успешных сделок' },
  { value: '10k+', label: 'Часов обучения' },
  { value: '300%', label: 'Средняя доходность' },
  { value: '50+', label: 'Анализных инструментов' }
])
</script>

<style scoped>
.about-section {
  padding: 8rem 5% 4rem;
  /* background: #0a0a0a; */
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
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.4));
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
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
  padding: 3rem;
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
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.4));
}

.stat-value {
  font-size: 2.5rem;
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
  
  .stat-icon {
    width: 50px;
    height: 50px;
  }
}

@media (min-width: 1024px) {
  .about-section {
    min-height: 100vh;
  }
  
  .card-icon {
    width: 100px;
    height: 100px;
  }
}
</style>