<template>
  <section id="briefing" class="steps-section">
    <div class="content-wrapper">
      <div class="approach-section">
        <h2 class="section-title">
          <span class="gradient-text">Системный подход</span> к обучению
        </h2>

        <div class="approach-grid">
          <div class="approach-card">
            <svg class="approach-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            <h3>Структурированная программа</h3>
            <p>Пошаговое погружение от основ до профессиональных техник</p>
          </div>

          <div class="approach-card">
            <svg class="approach-icon" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
            </svg>
            <h3>Практические кейсы</h3>
            <p>Реальные задачи из текущей рыночной практики</p>
          </div>

          <div class="approach-card">
            <svg class="approach-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
            </svg>
            <h3>Контроль прогресса</h3>
            <p>Персональная обратная связь по каждому этапу</p>
          </div>
        </div>
      </div>
      <div class="modules-section">
        <h2 class="section-title">
          <span class="gradient-text">Программа</span> обучения
        </h2>

        <div class="modules-grid" 
             ref="modulesContainer" 
             @wheel.prevent="handleWheel">
          <div 
            v-for="(module, index) in modules" 
            :key="index" 
            class="module-card"
          >
            <div class="module-header">
              <div class="module-number">{{ index + 1 }}</div>
              <h3>{{ module.title }}</h3>
            </div>
            
            <ul class="module-points">
              <li v-for="(point, i) in module.points" :key="i">
                <svg class="bullet-icon" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                {{ point }}
              </li>
            </ul>

            <div class="module-result">
              <svg class="result-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>{{ module.result }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="practice-section">
        <h2 class="section-title">
          <span class="gradient-text">Практика</span> — основа навыков
        </h2>

        <div class="practice-cards">
          <div class="practice-card">
            <div class="card-header">
              <svg class="card-icon" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <h3>Работа с реальными данными</h3>
            </div>
            <p>Анализ текущих рыночных ситуаций и арбитражных возможностей</p>
          </div>

          <div class="practice-card">
            <div class="card-header">
              <svg class="card-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              <h3>Пошаговые инструкции</h3>
            </div>
            <p>Четкие алгоритмы действий для быстрого старта</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const modules = ref([
  {
    title: 'Вводный урок',
    points: [
      'Что такое арбитраж: история, базовые принципы, виды',
      'Психология рынка: почему возникают дисбалансы цен',
      'Практическая демонстрация основных связок',
      'Инструменты для старта: ТОП-5 бирж и аналитика'
    ],
    result: 'Понимание основ и выбор стратегии'
  },
  {
    title: 'Урок по безопасности',
    points: [
      'Риски арбитража: мошенники и блокировки',
      'Особенности работы с контрагентами в P2P',
      'Депозит/вывод криптовалюты',
      'Практические кейсы негативного опыта'
    ],
    result: 'Настройка безопасной работы'
  },
  {
    title: 'Практический урок',
    points: [
      'Выбор связки: анализ ликвидности и спреда',
      'Настройка сделки от ордера до вывода',
      'Заработок в реальном времени',
      'Оптимизация стратегии'
    ],
    result: 'Первые реальные сделки'
  },
  {
    title: 'Учёт финансов и финмодель',
    points: [
      'Шаблоны финансового учёта',
      'Построение финмодели для масштабирования',
      'Привлечение заёмного капитала',
      'Управление рисками'
    ],
    result: 'Профессиональное управление капиталом'
  },
  {
    title: 'Урок по блокировкам',
    points: [
      'Причины блокировок и антидетект-браузеры',
      'VPN и прокси: обход геоблокировок',
      'Шаблоны заявлений в банк',
      'Юридическая защита'
    ],
    result: 'Работа с блокировками'
  },
  {
    title: 'Арбитраж без карт',
    points: [
      'Белые треугольники: схемы (Россия, ЕС, Азия)',
      'Межбиржевой арбитраж',
      'Связки с BTC, ETH',
      'Интеграция с банковскими системами'
    ],
    result: 'Альтернативные методы работы'
  },
  {
    title: 'Построение команды',
    points: [
      'Структура команды и подбор сотрудников',
      'Удалённое управление и мотивация',
      'Обучение сотрудников',
      'Кейс масштабирования'
    ],
    result: 'Создание эффективной команды'
  },
  {
    title: 'Спотовый арбитраж',
    points: [
      'Основы спотового арбитража',
      'ТОП бирж для спота',
      'Софт для автоматизации',
      'Предотвращение мошенничества'
    ],
    result: 'Профессиональные инструменты'
  },
  {
    title: 'Международный арбитраж',
    points: [
      'Трансграничные переводы: SWIFT, SEPA',
      'Анализ международных рынков',
      'Локальные платежные системы',
      'Открытие обменника за рубежом'
    ],
    result: 'Выход на международный уровень'
  }
])

const modulesContainer = ref(null)

const handleWheel = (e) => {
  if (modulesContainer.value) {
    const delta = e.deltaY || e.detail || e.wheelDelta
    modulesContainer.value.scrollLeft += delta * 0.5
  }
}
</script>

<style scoped>
.steps-section {
  padding: 6rem clamp(1rem, 5%, 2rem); /* Синхронизировано с CardsSection.vue */
  position: relative;
  overflow-x: hidden; /* Предотвращаем горизонтальный скролл */
  background: #0F0F0F; /* Совместимо с GuaranteeSection.vue */
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.content-wrapper {
  max-width: 1280px; /* Синхронизировано с CardsSection.vue */
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5%, 2rem);
  box-sizing: border-box;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.5rem); /* Адаптивный размер */
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-weight: 600;
  line-height: 1.3;
  opacity: 0;
  animation: slideUpFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #64FFAB); /* Синхронизировано с CardsSection.vue */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient-flow 8s ease infinite;
}

@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Уменьшено с 300px */
  gap: clamp(1rem, 2vw, 2rem);
  margin-bottom: 6rem;
  max-width: 100%;
  box-sizing: border-box;
}

.approach-card {
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}

.approach-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.approach-icon {
  width: 48px;
  height: 48px;
  fill: #8A2BE2;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.approach-card:hover .approach-icon {
  transform: scale(1.1);
}

.approach-card h3 {
  font-size: clamp(1.1rem, 3vw, 1.25rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 500;
}

.approach-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  word-break: break-word;
  overflow-wrap: anywhere;
}

.modules-section {
  margin-top: 6rem;
  padding: clamp(0.5rem, 2vw, 1rem);
}

.modules-grid {
  display: flex;
  overflow-x: auto;
  gap: clamp(1rem, 2vw, 2rem);
  padding: 1.5rem 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
  box-sizing: border-box;
}

.module-card {
  min-width: clamp(280px, 90vw, 360px); /* Адаптивная ширина */
  flex-shrink: 0;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.03);
  border-left: 4px solid #8A2BE2;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.module-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.module-number {
  width: 40px;
  height: 40px;
  background: #8A2BE2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.module-points {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.module-points li {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  line-height: 1.6;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.bullet-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: #8A2BE2;
  margin-top: 4px;
}

.module-result {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 8px;
  color: #BA55D3;
  font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  margin-top: 1.5rem;
}

.result-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  flex-shrink: 0;
}

.practice-section {
  margin-top: 6rem;
}

.practice-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Уменьшено с 300px */
  gap: clamp(1rem, 2vw, 2rem);
  margin-top: 3rem;
  max-width: 100%;
  box-sizing: border-box;
}

.practice-card {
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.practice-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: 40px;
  height: 40px;
  fill: #8A2BE2;
  flex-shrink: 0;
}

.practice-card h3 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 500;
}

.practice-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  word-break: break-word;
  overflow-wrap: anywhere;
}

.modules-grid::-webkit-scrollbar {
  height: 8px;
}

.modules-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.modules-grid::-webkit-scrollbar-thumb {
  background: #8A2BE2;
  border-radius: 4px;
}

.modules-grid::-webkit-scrollbar-thumb:hover {
  background: #BA55D3;
}

@media (max-width: 1024px) {
  .section-title {
    font-size: clamp(1.8rem, 4.5vw, 2.2rem);
  }
  .approach-grid,
  .practice-cards {
    grid-template-columns: 1fr;
    max-width: 700px; /* Синхронизировано с CardsSection.vue */
    margin: 0 auto;
  }
  .approach-card,
  .practice-card {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .steps-section {
    padding: 4rem clamp(0.5rem, 3%, 1rem);
  }
  .content-wrapper {
    padding: 0 clamp(0.5rem, 3%, 1rem);
  }
  .section-title {
    font-size: clamp(1.6rem, 4vw, 2rem);
  }
  .module-card {
    min-width: clamp(260px, 85vw, 320px);
    padding: 1.5rem;
  }
  .module-number {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  .modules-grid {
    overflow-x: hidden; /* Отключаем горизонтальный скролл */
    display: grid;
    grid-template-columns: 1fr; /* Переключаем на одноколоночный макет */
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: clamp(1.5rem, 3.5vw, 1.75rem);
  }
  .approach-icon {
    width: 40px;
    height: 40px;
  }
  .practice-card {
    padding: 1.5rem 1rem;
  }
  .module-points li {
    font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  }
  .module-card {
    min-width: 100%; /* Полная ширина на маленьких экранах */
  }
}

@keyframes slideUpFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>