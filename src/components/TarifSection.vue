<template>
  <section id="pricing" class="pricing-section">
    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Доступные</span>
        <span class="animated-underline"> форматы обучения</span>
      </h2>

      <div class="duration-info">
        <div class="duration-card">
          <div class="duration-icon">⏳</div>
          <h3>Длительность курса</h3>
          <p class="duration-text">
            8 недель интенсивного обучения<br>
            + 2 месяца поддержки после выпуска
          </p>
        </div>
      </div>

      <div class="pricing-grid">
        <div 
          v-for="(tariff, index) in tariffs" 
          :key="index" 
          class="tariff-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="tariff-header">
            <h3 class="tariff-title">{{ tariff.title }}</h3>
            <div class="tariff-price">
              {{ tariff.price }}
              <span class="price-sub">₽/мес</span>
            </div>
          </div>
          <ul class="tariff-features">
            <li 
              v-for="(feature, fIndex) in tariff.features" 
              :key="fIndex"
              class="feature-item"
            >
               {{ feature }}
            </li>
          </ul>
          <div v-if="tariff.installment" class="installment-badge">
            <span>✓ Рассрочка</span>
          </div>
          <a 
        href="#" 
        class="tariff-button"
        @click.prevent
      >
        Выбрать тариф
        <div class="button-hover-effect"></div>
      </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tariffs = ref([
  {
    title: 'Групповое обучение',
    price: '100 000',
    features: [
      'Безопасность в арбитраже',
      'Практика: как заходить, что делать руками',
      'Как выигрывать конкуренцию в P2P',
      'Как продавать крипты больше чем конкуренты',
      'Финансовый учет, финмодель, нейросети в работе',
      'Привлечение капитала и работа с инвесторами',
      'Работа с блокировками: банки, биржи, 115-ФЗ, 161-ФЗ',
      'Построение команды: найм, процессы, круглосуточная работа',
      'Арбитраж без карт (Россия и зарубеж)',
      'Спотовый арбитраж',
      'Международный арбитраж: SWIFT, экзотические страны, белые треугольники и создание обменника в другой юрисдикции',
      
    ],
    installment: true
  },
  {
    title: 'PRO',
    price: '150 000',
    features: [
      'Безопасность в арбитраже',
      'Практика в P2P и споте',
      'Как выигрывать конкуренцию в P2P',
      'Как продавать крипты больше чем конкуренты',
      'Масштабирование: под твой опыт и ресурсы',
      'Финансовый учет, финмодель, нейросети в работе',
      'Привлечение капитала и работа с инвесторами и чужого капитала',
      'Работа с блокировками: разбираем кейсы и схемы снятия',
      'Построение команды: под конкретные цели и объёмы',
      'Арбитраж без карт — в России и за границей',
      'Международный арбитраж: полная практика',
      'Как создавать свои решения в других странах',
      'Международный арбитраж: SWIFT, экзотические страны, белые треугольники и создание обменника в другой юрисдикции',
      
    ],
    installment: true
  },
  
])
</script>

<style scoped>
.cta-button, .hover-line {
  display: none;
}

.tariff-features {
  margin-bottom: 1rem; 
}

.tariff-card {
  padding-bottom: 1.5rem;
}
.tariff-button {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-top: auto;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
}

.tariff-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
}

.tariff-button:active {
  transform: translateY(1px);
}

.button-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.tariff-button:hover .button-hover-effect {
  left: 100%;
}


.pricing-section {
  padding: 8rem 5%;
  background: #0F0F0F;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
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

.animated-underline::after {
 background: linear-gradient(45deg, #8A2BE2, #BA55D3);}
.duration-info {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}


.duration-card {
  background: rgba(138, 43, 226, 0.05);
  border: 1px solid rgba(138, 43, 226, 0.1);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 500px;
  opacity: 0;
  transform: translateY(30px);
  animation: cardAppear 0.8s ease forwards;
  animation-delay: 0.4s;
}

.duration-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.duration-text {
  color: #CCCCCC;
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.tariff-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: cardAppear 0.8s ease forwards;
  animation-delay: var(--delay);
  transition: transform 0.3s ease;
  border: 1px solid rgba(138, 43, 226, 0.15);
  min-height: 650px;
}

.tariff-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.tariff-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.tariff-title {
  font-size: 2rem;
  color: #8A2BE2;
  margin-bottom: 1.5rem;
}

.tariff-price {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.price-sub {
  font-size: 1rem;
  color: #CCCCCC;
}

.feature-item {
  padding: 0.8rem 0;
  color: #CCCCCC;
  display: flex;
  align-items: center;
  line-height: 1.5;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.05rem;
}

.feature-item::before {
  content: '✓';
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
}

.feature-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(138,43,226,0.2) 0%, transparent 100%);
}

.feature-item:hover {
  color: #FFFFFF;
  transform: translateX(10px);
}

.feature-item:hover::before {
  transform: scale(1.2);
}

.installment-badge {
  position: absolute;
  top: -15px;
  right: -15px;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transform: rotate(10deg);
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes cardAppear {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .tariff-price {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .duration-card {
    padding: 1.5rem;
  }
}
</style>