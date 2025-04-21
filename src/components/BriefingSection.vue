<template>
  <section class="steps-section">
    <div class="decorative-elements">
      <!-- Декоративные элементы без изменений -->
    </div>

    <div class="content-wrapper">
      <div class="text-content">
        <!-- Секция "О подходе" -->
        <div class="approach-section">
          <h2 class="section-title">
            <span class="gradient-text">Профессиональный подход</span> — 
            <span class="animated-underline">основа вашего успеха</span>
          </h2>

          <div class="approach-content">
            <div class="approach-card gradient-border">
              <h3>📈 Мой подход к обучению</h3>
              <p class="emphasis-text">
                Для меня обучение - это детище. Каждый модуль продуман как дополнение к базе: 
                с каждым уроком мы укрепляем структуру и увеличиваем доход.
              </p>
              <div class="features-grid">
                <div class="feature-item">
                  <div class="feature-icon">🎯</div>
                  <h4>Прямые эфиры</h4>
                  <p>Интерактивные занятия с живым общением</p>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">📚</div>
                  <h4>Материалы</h4>
                  <p>Конспекты, чек-листы и шаблоны после каждого урока</p>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">💼</div>
                  <h4>Практика</h4>
                  <p>Реальные кейсы и задания для немедленного применения</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Карусель с модулями -->
        <div class="modules-carousel">
          <h2 class="section-title">
            <span class="gradient-text">Программа обучения</span> — 
            <span class="animated-underline">пошаговый путь к мастерству</span>
          </h2>

          <div class="modules-container" ref="carousel" @wheel.prevent="handleWheel">
            <div 
              v-for="(module, index) in modules" 
              :key="index" 
              class="module-card"
            >
              <div class="module-card-inner">
                <div class="module-header">
                  <span class="module-number">{{-1 +  index + 1 }}</span>
                  <h3 class="module-title">{{ module.title }}</h3>
                </div>
                <div class="module-content">
                  <ul class="module-points">
                    <li v-for="(point, i) in module.points" :key="i"> {{ point }}</li>
                  </ul>
                  <div class="module-result">
                    <span class="result-label">Результат:</span>
                    {{ module.result }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Секция с домашними заданиями -->
        <div class="homework-section">
          <div class="homework-content gradient-border">
            <h3>📌 Домашние задания</h3>
            <p class="emphasis-text">
              Практические задачи, которые приближают вас к реальным заработкам:
            </p>
            <div class="hw-examples">
              <div v-for="(hw, index) in homeworks" :key="index" class="hw-card">
                <div class="hw-icon">{{ hw.emoji }}</div>
                <div class="hw-text">
                  <h4>{{ hw.title }}</h4>
                  <p>{{ hw.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Итоговый блок -->
        <div class="final-block">
          <div class="final-content">
            <h3>🚀 Итог обучения</h3>
            <p class="emphasis-text">
              После прохождения программы вы будете обладать знаниями, 
              которых нет у 80% участников рынка. Мои ученики:
            </p>
            <ul class="final-list">
              <li> Создают устойчивые арбитражные конструкции</li>
              <li> Работают с международными рынками</li>
              <li> Масштабируют бизнес в 3-5 раз</li>
              <li> Открывают собственные обменные пункты</li>
            </ul>
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
    title: 'Нулевой модуль: Матчасть',
    points: [
      'Фундаментальные принципы арбитража',
      'Психология успешного трейдера',
      'Управление рисками и капиталом'
    ],
    result: 'Полная смена мышления и понимание основ'
  },
    {
    title: 'Первый модуль: Теория, 2 урока :',
    points: [
      'основы арбитража и безопасность',
      'По итогам прохождения модуля, ученик технически будет готов к великим свершениям.'
    
    ],
    result: 'Планомерно готовимся к торговле '
  },
    {
    title: 'Второй модуль : Практика.  2 урока :',
    points: [
      ' Практика арбитраж и учёт финансов. Ставлю ученику "базу", показываю как работать в "стакане" так, чтобы зарабатывать даже без ликвидности на рынке.',
    ],
    result: 'На учёте финансов мы учимся считать и разбираем арбитраж как бизнес по винтикам. '
  },
    {
    title: 'Третий модуль :  Укрепление. ',
    points: [
      'Проводим большой урок по созданию устойчивой конструкции. ',
      'Темы урока : Как доставать деньги после блокировки, Уникализация устройств, Как перевыпустить счёт после блокировки, всё про дропов ( от поиска до организации работы ), компрометация. ',
    ],
    result: 'По прохождению урока, ученик будет более компетентный чем 80% рынка арбитража.'
  },
      {
    title: 'Четвёртый модуль : Масштабирование. 2 урока',
    points: [
      'Про команду и привлечение инвестиций.',
    ],
    result: 'Переходим к кратному росту структуры. '
  },
     {
    title: 'Пятый модуль : Новые рынки.',
    points: [
      'Такого в принципе нет ни у кого кроме меня.',
      'От "классики" за рубежом, то арбитража без карт на других рынках.',
      'Говорим так же про открытие своих обменников в других странах.'
    ],
    result: 'У вас появится очень обширный опыт в Арбитраже'
  },
  // Добавьте остальные модули по аналогии
]);

const homeworks = ref([
  {
    emoji: '📝',
    title: 'Регистрация на платформах',
    description: 'Подготовка рабочих инструментов для старта'
  },
  // Добавьте остальные задания
]);

const carousel = ref(null)

const handleWheel = (e) => {
  if (carousel.value) {
    const delta = Math.sign(e.deltaY)
    carousel.value.scrollLeft += delta * 100
  }
}
</script>
<style scoped>
/* Базовые стили */
.steps-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.3;
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

/* Стили для карточек */
.approach-card {
  background: rgba(25, 25, 35, 0.9);
  padding: 2.5rem;
  border-radius: 1.5rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.approach-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.approach-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 1rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feature-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2, #4B0082);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.feature-item:hover {
  background: rgba(138, 43, 226, 0.1);
  transform: translateY(-3px);
}

.feature-item:hover::after {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: transform 0.3s;
}

.feature-item:hover .feature-icon {
  transform: scale(1.1);
}

/* Карусель модулей */
.modules-container {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1.5rem 0;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #8A2BE2 #1a1a1a;
}

.modules-container::-webkit-scrollbar {
  height: 8px;
}

.modules-container::-webkit-scrollbar-track {
  background: #1a1a1a;
  border-radius: 4px;
}

.modules-container::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  border-radius: 4px;
}

.module-card {
  min-width: 340px;
  flex-shrink: 0;
  background: linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(74, 0, 130, 0.1));
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
}

.module-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.module-card:hover {
  transform: translateY(-5px);
}

.module-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.module-number {
  font-size: 2.2rem;
  font-weight: 700;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  border-radius: 12px;
  color: white;
}

.module-points {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
}

.module-points li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.module-points li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #8A2BE2;
  font-weight: bold;
}

.module-result {
  padding: 1rem;
  background: rgba(138, 43, 226, 0.1);
  border-radius: 0.8rem;
  border-left: 3px solid #8A2BE2;
}

.result-label {
  font-weight: 600;
  color: #BA55D3;
}

/* Домашние задания */
.homework-content {
  background: rgba(25, 25, 35, 0.9);
  padding: 2.5rem;
  border-radius: 1.5rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.hw-examples {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.hw-card {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: rgba(138, 43, 226, 0.05);
  border-radius: 1rem;
  transition: all 0.3s;
}

.hw-card:hover {
  background: rgba(138, 43, 226, 0.1);
  transform: translateX(10px);
}

.hw-icon {
  font-size: 2.2rem;
  min-width: 50px;
  text-align: center;
}

/* Итоговый блок */
.final-block {
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(74, 0, 130, 0.1));
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
}

.final-block::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.final-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
}

.final-list li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  font-size: 1.1rem;
}

.final-list li::before {
  content: '✔️';
  position: absolute;
  left: 0;
  filter: hue-rotate(45deg);
}

/* Анимации */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes gradientPulse {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .module-card {
    min-width: 280px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>