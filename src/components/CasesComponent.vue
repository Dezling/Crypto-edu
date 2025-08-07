
<template>
  <section id="cases" class="cases-section">
    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Наши кейсы</span> —
        <span class="animated-underline">реальные результаты</span>
      </h2>
      
      <div class="scroll-container">
        <div 
          v-for="(caseItem, index) in cases" 
          :key="index" 
          class="case-item"
          @click="openModal(caseItem)"
        >
          <div class="media-container">
            <div class="image-overlay"></div>
            <img 
              v-if="caseItem.image" 
              :src="caseItem.image" 
              alt="Case image"
              class="case-image"
            >
            <iframe
              v-if="caseItem.video"
              :src="caseItem.video"
              class="case-video"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="media-badge">
              {{ caseItem.video ? 'Видео' : 'Фото' }}
            </div>
          </div>
          <div class="case-text">
            <div class="text-content">
              {{ caseItem.text }}
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="selectedMedia" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>
          <img 
            v-if="selectedMedia.image" 
            :src="selectedMedia.image" 
            alt="Full image" 
            class="modal-media"
          />
          <iframe
            v-if="selectedMedia.video"
            :src="selectedMedia.video"
            class="modal-media"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cases = ref([
  {
    image: '/images/case1.jpg',
    text: 'Стабильные 100$ в день при том, что занят своей основной работой и арбитражит с неполным «фокусом». Базовый, хороший результат.'
  },
  {
    video: 'https://www.youtube.com/embed/watch?v=0WSTRH21N5c',
    text: 'С нуля до миллиона рублей в арбитраже. Фидбэк по обучению.'
  },
  {
    image: '/images/case6.jpg',
    text: 'Это что за домашка такая, где 13% зарабатывают?'
  },
  {
    image: '/images/case101.jpg',
    text: 'Для большинства из читающих, отметка в 100$ в день может показаться серьезной. Но по факту, ученики, прошедшие первые 4 урока, уже выходят на такие деньги. Вам нужно просто знать, куда прикладывать усилия.'
  },
  {
    image: '/images/case2.jpg',
    text: 'Опять же, 15.000₽ в день — это базовый результат, получаемый в процессе обучения. Не после обучения, не через год, а в процессе. Думайте, в общем.'
  },
  {
    image: '/images/case20.jpg',
    text: 'Миллион рублей за 3 месяца точно заслуживает уважения. Ожидаю от ребят «единицу» в месяц. Потенциал точно есть.'
  },
])

const selectedMedia = ref(null)

const openModal = (media) => {
  selectedMedia.value = media
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMedia.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.cases-section {
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
  position: relative;
  z-index: 2;
  color: white;
  opacity: 0;
  animation: slideUpFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #64FFAB); /* Синхронизировано с CardsSection.vue */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animated-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #8A2BE2, #64FFAB);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.section-title:hover .animated-underline::after {
  transform: scaleX(1);
  transform-origin: left;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: clamp(1rem, 2vw, 2rem);
  padding: clamp(1rem, 2vw, 1.5rem);
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 100%;
  box-sizing: border-box;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.case-item {
  flex: 0 0 clamp(260px, 85vw, 360px); /* Адаптивная ширина */
  scroll-snap-align: start;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(138, 43, 226, 0.2);
  box-sizing: border-box;
}

.case-item:hover {
  transform: translateY(-10px) scale(1.02);
}

.media-container {
  position: relative;
  padding-top: 56.25%; /* Соотношение 16:9 */
  background: #000;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.8));
  z-index: 1;
}

.case-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Изменено с contain на cover */
  background: #000;
}

.case-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.media-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(138, 43, 226, 0.5);
  color: white;
  padding: clamp(0.2rem, 1vw, 0.3rem) clamp(0.6rem, 2vw, 1rem);
  border-radius: 20px;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  z-index: 2;
  backdrop-filter: blur(5px);
}

.case-text {
  padding: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  z-index: 2;
}

.text-content {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  max-width: 100%; /* Изменено с 90vw */
  max-height: 90vh;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
}

.modal-media {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

@media (max-width: 1024px) {
  .scroll-container {
    max-width: 700px; /* Синхронизировано с CardsSection.vue */
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .cases-section {
    padding: 4rem clamp(0.5rem, 3%, 1rem);
  }
  .content-wrapper {
    padding: 0 clamp(0.5rem, 3%, 1rem);
  }
  .section-title {
    font-size: clamp(1.8rem, 4.5vw, 2.2rem);
  }
  .scroll-container {
    overflow-x: hidden; /* Отключаем горизонтальный скролл */
    display: grid;
    grid-template-columns: 1fr; /* Переключаем на одноколоночный макет */
  }
  .case-item {
    flex: 0 0 100%; /* Полная ширина */
  }
  .text-content {
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    -webkit-line-clamp: 4;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: clamp(1.5rem, 4vw, 1.8rem);
  }
  .case-item {
    border-radius: 15px;
  }
  .media-badge {
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    padding: clamp(0.15rem, 1vw, 0.2rem) clamp(0.5rem, 1.5vw, 0.8rem);
  }
  .text-content {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }
}

@keyframes slideUpFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>