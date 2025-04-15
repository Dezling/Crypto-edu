<template>
  <section class="guarantee-section" id="guarantee">
    <!-- Фоновые SVG элементы -->
    <svg class="bg-pattern" viewBox="0 0 1440 363" fill="none">
      <path 
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
        stroke="#8A2BE2" 
        stroke-opacity="0.05" 
        stroke-width="10"
      />
    </svg>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Гарантии</span>
        <span class="animated-underline"> и ответы на вопросы</span>
      </h2>

      <div class="guarantee-grid">
        <div 
          v-for="(item, index) in guarantees" 
          :key="index"
          class="guarantee-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <svg class="card-border" viewBox="0 0 300 300">
            <path 
              d="M20,20 L280,20 L280,280 L20,280 Z"
              fill="none"
              stroke="url(#borderGradient)"
              stroke-width="2"
              stroke-dasharray="1000"
              stroke-dashoffset="1000"
            />
            <defs>
              <linearGradient id="borderGradient">
                <stop offset="0%" stop-color="#8A2BE2"/>
                <stop offset="100%" stop-color="#4B0082"/>
              </linearGradient>
            </defs>
          </svg>
          
          <div class="card-header">
            <img 
              :src="`/src/assets/icons/${index + 5}.svg`"
              class="card-icon"
              alt="Guarantee icon"
            >
            <h3>{{ item.title }}</h3>
          </div>
          <p class="card-text">{{ item.text }}</p>
        </div>
      </div>

      <div class="faq-container">
        <div 
          v-for="(question, index) in faq" 
          :key="index + 'q'"
          class="faq-item"
          @click="toggleFaq(index)"
        >
          <div class="faq-header">
            <span>{{ question.question }}</span>
            <svg 
              class="faq-icon" 
              viewBox="0 0 24 24"
              :class="{ 'active': activeFaq === index }"
            >
              <path 
                d="M12 6V18M18 12H6"
                stroke="currentColor" 
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <transition name="slide">
            <div v-show="activeFaq === index" class="faq-content">
              <p>{{ question.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const guarantees = ref([
  {
    title: 'Возврат средств',
    text: 'Полный возврат стоимости курса в течение 14 дней'
  },
  {
    title: 'Поддержка 24/7',
    text: 'Круглосуточная помощь персонального ментора'
  },
  {
    title: 'Доступ навсегда',
    text: 'Пожизненный доступ ко всем материалам курса'
  }
])

const faq = ref([
  {
    question: 'Сколько времени занимает обучение?',
    answer: 'Полный курс рассчитан на 8 недель интенсивных занятий'
  },
  {
    question: 'Нужен ли опыт в трейдинге?',
    answer: 'Курс подходит как новичкам, так и опытным трейдерам'
  },
  {
    question: 'Какие гарантии дохода?',
    answer: 'Даем 100% гарантию качества обучения, но не финансовых результатов'
  }
])

const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
.guarantee-section {
  padding: 8rem 5%;
  background: #0F0F0F;
  position: relative;
  overflow: hidden;
}
.bg-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  animation: patternFlow 40s linear infinite;
}

@keyframes patternFlow {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  animation: slideUp 1s ease forwards;
  animation-delay: 0.2s;
}

.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
}
.card-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: drawBorder 1.5s forwards;
}
@keyframes drawBorder {
  to { stroke-dashoffset: 0; }
}


.guarantee-card {
  position: relative;
  background: rgba(138,43,226,0.05);
  border: 1px solid rgba(138,43,226,0.2);
  border-radius: 16px;
  padding: 2rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.guarantee-card:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 15px 40px rgba(138,43,226,0.15);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  filter: drop-shadow(0 0 15px rgba(138,43,226,0.3));
  transition: transform 0.4s ease;
}
.guarantee-card:hover .card-icon {
  transform: rotate(15deg) scale(1.1);
}

.card-text {
  color: #CCCCCC;
  line-height: 1.6;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  position: relative;
  background: rgba(138,43,226,0.05);
  border: 1px solid rgba(138,43,226,0.2);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}


.faq-item:hover {
  background: rgba(138,43,226,0.08);
  transform: translateX(10px);
}


.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.faq-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}
.faq-icon path {
  transition: transform 0.3s ease;
}
.faq-icon.active {
  transform: rotate(45deg);
}
.faq-content {
  position: relative;
  padding: 0 1.5rem 1.5rem;
}
.faq-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #8A2BE2 50%, transparent);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.icon-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #8A2BE2;
  transition: all 0.3s ease;
}

.icon-line:first-child {
  transform: rotate(90deg);
}

.icon-line:last-child {
  transform: rotate(180deg);
}

.faq-icon.active {
  transform: rotate(45deg);
}

.faq-content {
  padding: 0 1.5rem 1.5rem;
  color: #CCCCCC;
  line-height: 1.6;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes cardAppear {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .guarantee-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .guarantee-section {
    padding: 6rem 5%;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .guarantee-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto 4rem;
  }

  .faq-container {
    padding: 0 1rem;
  }

  .faq-header {
    padding: 1rem;
  }

  .faq-content {
    padding: 0 1rem 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .guarantee-card {
    padding: 1.5rem;
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-text {
    font-size: 0.95rem;
  }

  .faq-header {
    font-size: 0.95rem;
  }
}
</style>