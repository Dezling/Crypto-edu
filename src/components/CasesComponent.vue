<template>
  <section class="cases-section">
    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Наши кейсы</span> -
        <span class="animated-underline"> реальные результаты</span>
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
    text: 'С нуля до миллиона рублей в арбитраже. Фидбэк по обучу.'
  },
  {
    image: '/images/case6.jpg',
    text: 'Это что за домашка такая, где 13% зарабатывают?'
  },
    {
    image: '/images/case101.jpg',
    text: 'Для большинства из читающих, отметка в 100$ в день может показаться серьезной. Но по факту, ученики, прошедшие первые 4 урока, уже выходят на такие деньги. Вам нужно просто знать, куда прикладывать усилия. '
  },
     {
    image: '/images/case2.jpg',
    text: 'Опять же, 15.000₽ в день - это базовый результат, получаемый в процессе обуча. Не после обучение, не через год, а в процессе. Думайте, в общем.'
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
  padding: 6rem 0;
  position: relative;
}
.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #BA55D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 2rem 1.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
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
.case-item {
  flex: 0 0 min(90vw, 500px);
  scroll-snap-align: start;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(138,43,226,0.2);
}

.case-item:hover {
  transform: translateY(-10px) scale(1.02);
}

.media-container {
  position: relative;
  padding-top: 56.25%;
  background: #000;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.8));
  z-index: 1;
}

.case-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  background: rgba(138,43,226,0.5);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  z-index: 2;
  backdrop-filter: blur(5px);
}

.case-text {
  padding: 1.5rem;
  position: relative;
  z-index: 2;
}

.text-content {
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: #000;
  border-radius: 15px;
  overflow: hidden;
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
  background: rgba(255,255,255,0.1);
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
  background: rgba(255,255,255,0.2);
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .cases-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .case-item {
    flex: 0 0 85vw;
  }
  
  .text-content {
    font-size: 1rem;
    -webkit-line-clamp: 4;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .case-item {
    border-radius: 15px;
  }
  
  .media-badge {
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
  }
}
</style>