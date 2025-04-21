<template>
  <section class="free-products-section">
    <div class="decorative-elements">
      <div class="gradient-orb"></div>
    </div>

    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="section-title">
          <span class="gradient-text">Бесплатные ресурсы</span> — 
          <span class="animated-underline">ваш стартовый набор</span>
        </h2>

        <div class="products-grid">
          <a 
            v-for="(product, index) in products" 
            :key="index" 
            :href="product.link"
            class="product-card"
            target="_blank"
          >
            <div class="card-inner">
              <div class="card-header">
                <span class="card-icon">{{ product.emoji }}</span>
                <h3 class="card-title">{{ product.title }}</h3>
              </div>
              <p class="card-description">{{ product.description }}</p>
              <div class="card-cta">
                <span class="cta-text">Перейти →</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const products = ref([
  {
    emoji: '🤖',
    title: 'Личный помошник Истомина',
    description: 'Бесплатное обучение для старта в арбитраже',
    link: 'https://t.me/Istominn_bot'
  },
  {
    emoji: '📚',
    title: 'Кладесть знаний',
    description: 'Все необходимое для начала работы арбитражника',
    link: 'https://t.me/spreadt/159'
  },
  {
    emoji: '👥',
    title: 'Сенат комьюнити',
    description: 'Чат профессионального коммьюнити',
    link: 'https://t.me/senatspread'
  },
  {
    emoji: '🛎️',
    title: 'Мэнеджер ',
    description: 'Персональная поддержка и ответы на вопросы',
    link: 'https://t.me/finspread'
  }
])
</script>

<style scoped>
.free-products-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.product-card {
  background: rgba(25, 25, 35, 0.9);
  border-radius: 1.5rem;
  padding: 1.5px;
  position: relative;
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;
}

.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(45deg, #8A2BE2, #4B0082);
  opacity: 0.3;
  transition: opacity 0.3s;
}

.card-inner {
  position: relative;
  background: rgba(15, 15, 25, 0.95);
  padding: 2rem;
  border-radius: 1.45rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card:hover::before {
  opacity: 0.6;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-title {
  font-size: 1.4rem;
  margin: 0;
}

.card-description {
  color: #cccccc;
  line-height: 1.6;
  flex-grow: 1;
}

.card-cta {
  margin-top: 2rem;
  text-align: right;
}

.cta-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s;
}

.product-card:hover .cta-text {
  opacity: 1;
}

.gradient-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(74,0,130,0) 70%);
  filter: blur(80px);
  right: -300px;
  top: 50%;
  transform: translateY(-50%);
  animation: orbFloat 12s infinite ease-in-out;
}

.section-title {
    animation: titleAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-bottom: 4rem;
  font-size:2.3rem ;

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
@keyframes orbFloat {
  0%, 100% { transform: translateY(-50%) scale(1); }
  50% { transform: translateY(-55%) scale(1.05); }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .product-card {
    min-width: auto;
  }
}
</style>