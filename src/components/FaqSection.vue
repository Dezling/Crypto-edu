<template>
  <section class="guarantee-section" id="guarantee">
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
        <span class="gradient-text">Гарантии </span>
        <span class="animated-underline"> и ответы на вопросы</span>
      </h2>
      <h3 class="section-subtitle">Наши гарантии</h3>
      <div class="garant-container">
        <div 
          v-for="(item, index) in garant" 
          :key="index + 'g'"
          class="faq-item"
          @click="toggleGarant(index)"
        >
          <div class="faq-header">
            <span>{{ item.question }}</span>
            <svg 
              class="faq-icon" 
              viewBox="0 0 24 24"
              :class="{ 'active': activeGarant === index }"
            >
              <path d="M12 6V18M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <transition name="slide">
            <div v-show="activeGarant === index" class="faq-content" v-html="item.answer"></div>
          </transition>
        </div>
      </div>
      <h3 class="section-subtitle">Частые вопросы</h3>
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
              <path d="M12 6V18M18 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <transition name="slide">
            <div v-show="activeFaq === index" class="faq-content" v-html="question.answer"></div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const faq = ref([
  {
    question: '«Какие гарантии, что я начну зарабатывать?»',
    answer: `
      <p>Гарантировать 100%-ый доход — значит расписаться в шарлатанстве.</p>
      <p>Я гарантирую, что дам все инструменты, стратегии и поддержку, которые приводят моих учеников к первым прибылям.</p>
      <p>Ваш успех зависит только от вашей дисциплины — а я научу, как её прокачать. Если будете следовать инструкциям, результаты не заставят себя ждать.</p>
    `
  },
  {
    question: '«Сколько времени нужно уделять арбитражу?»',
    answer: `
      <p>Зависит от того, сколько ты хочешь заработать.</p>
      <p>Для тех, кто уже плотно в «матрице» и работает на условном заводе – есть отдельный постик <a href="https://t.me/spreadt/526" target="_blank" rel="noopener">https://t.me/spreadt/526</a>.</p>
    `
  },
  {
    question: '«Нужны ли специальные навыки или опыт?»',
    answer: `
      <p>Если вы умеете включать компьютер и открывать браузер — остальному научу.</p>
      <p>Никакого опыта в трейдинге или программировании не нужно.</p>
      <p>Но готовность учиться, пробовать и не бояться ошибок — обязательна.</p>
      <p>Ещё пригодится умение пользоваться калькулятором</p>
    `
  },
  {
    question: '«Что, если я потеряю деньги?»',
    answer: `
      <p>Каждый работает с тем бюджетом, с которым ему комфортно для того, чтобы минимизировать риски.</p>
      <p>Отдельный урок, посвящённый безопасности и сохранению капитала прилагается.</p>
      <p>Плюс научу вас:</p>
      <ul>
        <li>Работе только с проверенными связками (никаких 50 % за сутки, пора перестать верить в Деда Мороза).</li>
        <li>Адекватному распределению имеющегося капитала.</li>
        <li>Страховке от резких скачков рынка.</li>
      </ul>
      <p>Главное — внимательно вникать и не допускать легкомысленного отношения к деньгам. Пусть чужие, а не собственные ошибки будут путеводителями.</p>
    `
  },
  {
    question: '«Буду ли я получать поддержку после обучения?»',
    answer: `
      <p>Да, и это не просто чат с эмодзи и мемами.</p>
      <p>Вы получите:</p>
      <ul>
        <li>Пожизненный доступ к обновлениям курса.</li>
        <li>Закрытое комьюнити, где делятся инсайдами и свежими связками.</li>
        <li>Возможность войти в коллаборации с самыми продвинутым игроками на рынке криптовалют.</li>
      </ul>
    `
  },
])
const garant = ref([
  {
    question: 'Гарантии того, что ты меня «не кинешь»',
    answer: `
      <ol>
        <li>
          <p><strong>«Моя репутация дороже ваших денег»</strong></p>
          <p>У меня нет анонимных аккаунтов (даже канал назван моей фамилией), поддельных скринов или секретных схем. Есть открытый YouTube-канал с интервью учеников, живой Telegram-чат с 1500+ участников и сотни отзывов, которые можно проверить. Если бы я кидал людей — давно бы забрал свой профит и скрылся, а не тратил годы на создание живого сообщества.</p>
        </li>
        <li>
          <p><strong>«Возможность поэтапной оплаты — ваша страховка»</strong></p>
          <p>Вы платите не сразу всю сумму, а частями в зависимости от выбранного тарифа.</p>
        </li>
        <li>
          <p><strong>«Доступ к материалам — сразу после оплаты»</strong></p>
          <p>Вы получаете доступ к побочным материалам, шаблонам, закрытому комьюнити в день оплаты. Никаких «скоро зальём» или «ждём набора группы».</p>
        </li>
        <li>
          <p><strong>«Я всегда на связи — проверьте сами»</strong></p>
          <p>Перед оплатой вы можете:</p>
          <ul>
            <li>Написать мне в личные сообщения;</li>
            <li>Пообщаться с учениками из чата — они подтвердят, что я не призрак и не держу их деньги в заложниках;</li>
            <li>Посетить бесплатную консультацию — увидите мой подход и экспертизу.</li>
          </ul>
        </li>
        <li>
          <p><strong>«Возможность пощупать тариф за 15 к»</strong></p>
          <p>Вы берёте самый дешёвый ознакомительный тариф, понимаете, что имеете дело с командой профессионалов и начинаете постигать азы криптоарбитража уже углубленно.</p>
        </li>
      </ol>
    `
  }
])

const activeFaq = ref(null)
const activeGarant = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const toggleGarant = (index) => {
  activeGarant.value = activeGarant.value === index ? null : index
}
</script>
<style scoped>
.guarantee-section {
  padding: 10rem 5%;
  background: #0F0F0F;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.bg-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  animation: patternFlow 50s linear infinite;
  z-index: 0;
}

@keyframes patternFlow {
  from { stroke-dashoffset: 2000; }
  to { stroke-dashoffset: 0; }
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 6rem;
  opacity: 0;
  animation: slideUp 1s ease forwards;
  animation-delay: 0.2s;
  letter-spacing: -0.03em;
}

.section-subtitle {
  font-size: 2.5rem;
  text-align: center;
  margin: 6rem 0 3rem;
  position: relative;
  padding: 1rem 0;
  color: #E8E8E8;
}

.section-subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2 0%, #4B0082 100%);
}

.gradient-text {
  background: linear-gradient(45deg, #9D4DFA 0%, #6A1B9A 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 4px 20px rgba(157, 77, 250, 0.2);
}

.animated-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 0.4em;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2 0%, #4B0082 100%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.animated-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.garant-container {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 3rem;
  background: rgba(25, 25, 25, 0.8);
  border-radius: 30px;
  border: 1px solid rgba(157, 77, 250, 0.3);
  box-shadow: 0 20px 50px rgba(138, 43, 226, 0.15);
}

.faq-container {
  max-width: 1000px;
  margin: 6rem auto 0;
  padding: 3rem;
  background: rgba(20, 20, 20, 0.9);
  border-radius: 30px;
  border: 1px solid rgba(157, 77, 250, 0.2);
}

.faq-item {
  background: linear-gradient(145deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.07));
  border: 1px solid rgba(157, 77, 250, 0.4);
  border-radius: 20px;
  margin-bottom: 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.faq-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(138, 43, 226, 0.2);
}

.faq-header {
  padding: 1.8rem 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.faq-header span {
  font-weight: 500;
  color: #F8F8F8;
  flex-grow: 1;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.faq-item:hover .faq-header span {
  color: #BA55D3;
}

.faq-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  color: #9D4DFA;
}

.faq-icon.active {
  transform: rotate(45deg) scale(1.1);
}

.faq-content {
  padding: 0 2.5rem 2rem;
  color: #DCDCDC;
  line-height: 1.8;
  font-size: 1.1rem;
  font-weight: 300;
}

.garant-container ol {
  counter-reset: garant-counter;
  padding-left: 0;
}

.garant-container ol li {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 4rem;
}

.garant-container ol li::before {
  counter-increment: garant-counter;
  content: counter(garant-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 2.8rem;
  height: 2.8rem;
  background: #8A2BE2;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2em;
  box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
}

.garant-container ol strong {
  color: #BA55D3;
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2em;
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 3.5rem;
  }
  
  .garant-container,
  .faq-container {
    padding: 2rem;
    margin: 3rem auto;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.8rem;
  }

  .section-subtitle {
    font-size: 2rem;
  }

  .garant-container ol li {
    padding-left: 3rem;
  }

  .garant-container ol li::before {
    width: 2.2rem;
    height: 2.2rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.2rem;
  }

  .section-subtitle {
    font-size: 1.8rem;
  }

  .garant-container,
  .faq-container {
    padding: 1.5rem;
    border-radius: 20px;
  }

  .faq-header {
    padding: 1.5rem;
  }
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.guarantee-section {
  padding: 10rem 5%;
  background: #0F0F0F;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.bg-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  animation: patternFlow 50s linear infinite;
  z-index: 0;
}

@keyframes patternFlow {
  from { stroke-dashoffset: 2000; }
  to { stroke-dashoffset: 0; }
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 6rem;
  opacity: 0;
  animation: slideUp 1s ease forwards;
  animation-delay: 0.2s;
  letter-spacing: -0.03em;
}

.gradient-text {
  background: linear-gradient(45deg, #9D4DFA 0%, #6A1B9A 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 4px 20px rgba(157, 77, 250, 0.2);
}

.animated-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 0.4em;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2 0%, #4B0082 100%);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.animated-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 8rem;
}

.guarantee-card {
  position: relative;
  background: linear-gradient(145deg, rgba(138, 43, 226, 0.08), rgba(75, 0, 130, 0.05));
  border: 1px solid rgba(157, 77, 250, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.guarantee-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(138, 43, 226, 0.25);
  border-color: rgba(157, 77, 250, 0.4);
}

.card-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: drawBorder 1.8s forwards;
}

@keyframes drawBorder {
  to { stroke-dashoffset: 0; }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card-icon {
  width: 72px;
  height: 72px;
  filter: drop-shadow(0 6px 24px rgba(138, 43, 226, 0.3));
  transition: transform 0.4s ease;
  flex-shrink: 0;
}

.guarantee-card:hover .card-icon {
  transform: rotate(15deg) scale(1.15);
}

.card-text {
  color: #F0F0F0;
  line-height: 1.8;
  font-size: 1.15rem;
  hyphens: auto;
  word-wrap: break-word;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.faq-container {
  max-width: 840px;
  margin: 0 auto;
}

.faq-item {
  background: linear-gradient(145deg, rgba(138, 43, 226, 0.06), rgba(75, 0, 130, 0.04));
  border: 1px solid rgba(157, 77, 250, 0.2);
  border-radius: 20px;
  margin-bottom: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item:hover {
  border-color: rgba(157, 77, 250, 0.4);
  transform: translateX(8px);
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  gap: 1.5rem;
}

.faq-header span {
  font-weight: 500;
  color: #F8F8F8;
  flex-grow: 1;
  hyphens: auto;
  word-break: break-word;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
}

.faq-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: #9D4DFA;
}

.faq-icon.active {
  transform: rotate(45deg);
}

.faq-content {
  padding: 0 2rem 2rem;
  color: #DCDCDC;
  line-height: 1.8;
  font-size: 1.1rem;
  font-weight: 300;
}

.faq-content p {
  margin: 1.5em 0;
  hyphens: auto;
  word-wrap: break-word;
  position: relative;
  padding-left: 2rem;
}

.faq-content p:first-child {
  margin-top: 0;
}

.faq-content p:last-child {
  margin-bottom: 0;
}

.faq-content p::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 8px;
  height: 8px;
  background: #9D4DFA;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(157, 77, 250, 0.3);
}

.faq-content ul {
  margin: 2em 0;
  padding-left: 2.5rem;
  list-style: none;
}

.faq-content li {
  position: relative;
  padding-left: 2.5rem;
  margin: 1em 0;
  line-height: 1.7;
  font-size: 1.05rem;
}

.faq-content li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.45em;
  width: 12px;
  height: 12px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239D4DFA'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
  background-size: contain;
}

.faq-content a {
  color: #BA55D3;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
}

.faq-content a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.faq-content a:hover {
  color: #9D4DFA;
}

.faq-content a:hover::after {
  transform: scaleX(1);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

@media (max-width: 1200px) {
  .guarantee-grid {
    gap: 2rem;
  }
}

@media (max-width: 1024px) {
  .guarantee-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .section-title {
    font-size: 3.5rem;
  }
}

@media (max-width: 768px) {
  .guarantee-section {
    padding: 6rem 5%;
  }

  .section-title {
    font-size: 2.8rem;
    margin-bottom: 4rem;
  }

  .guarantee-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto 4rem;
  }

  .guarantee-card {
    padding: 2rem;
  }

  .card-icon {
    width: 64px;
    height: 64px;
  }

  .faq-content {
    padding: 0 1.5rem 1.5rem;
  }

  .faq-header {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.2rem;
  }

  .card-text {
    font-size: 1rem;
  }

  .faq-content p {
    padding-left: 1.5rem;
    font-size: 1rem;
  }

  .faq-content p::before {
    width: 6px;
    height: 6px;
  }

  .faq-content li {
    padding-left: 2rem;
    font-size: 0.95rem;
  }

  .faq-content li::before {
    width: 10px;
    height: 10px;
  }
}

@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>