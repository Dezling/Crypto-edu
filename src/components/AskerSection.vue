<template>
  <section class="objection-section">
    <div class="decorative-elements">
      <svg class="floating-orb right" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="url(#objectionOrbGradient)"/>
        <defs>
          <radialGradient id="objectionOrbGradient">
            <stop offset="0%" stop-color="#8A2BE2" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#4B0082" stop-opacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Возражения - </span>
        <span class="animated-underline">развенчание мифов</span>
      </h2>

      <div class="objection-grid">
        <div 
          v-for="(item, index) in objections" 
          :key="index" 
          class="objection-card"
          :style="{ '--delay': index * 0.2 + 's' }"
        >
          <div class="card-inner">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const objections = ref([
  {
    title: 'Меня обманут, как и другие псевдо-специалисты',
    text: 'Моя репутация и опыт, просто не оставляет эту мысль в живых. Кейсы, гарантии, чат с реальными людьми включая моих учеников тому доказательство.'
  },
  {
    title: 'Уверен что это незаконно',
    text: 'Абсолютно законно, ведь мы не берем чужие карты или банковские аккаунты, а так же не работаем с процессинговыми площадками.'
  },
  {
    title: 'Это обычная серая схема на раз!',
    text: 'Арбитраж это полноценный бизнес и профессия, которая умрет только в случае, если привычное понимание денег исчезнет.'
  },
  {
    title: 'Нужно уделять слишком много времени',
    text: 'Почти 90% моих учеников по началу совмещают арбитраж вместе с основной работой, но позже полностью уходят в арбитраж.'
  }
])
</script>

<style scoped>
.objection-section {
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

.floating-orb {
  z-index: -1;
  filter: blur(80px);
  opacity: 0.15;
  animation: floatOrb 20s infinite linear;
}

@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-50px) scale(1.2); }
}

.content-wrapper {
  position: relative;
  z-index: 3;
}

.objection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.objection-card {
  opacity: 0;
  transform: translateY(30px);
  animation: cardRise 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes cardRise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-inner {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}
.section-title:hover .animated-underline::after {
  transform: scaleX(1);
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
.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.card-title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.card-text {
  color: #cccccc;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
</style>
