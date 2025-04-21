<template>
  <section class="cases-section">
    <div class="content-wrapper">
      <h2 class="section-title">Наши кейсы</h2>
      
      <div class="scroll-container">
        <div 
          v-for="(caseItem, index) in cases" 
          :key="index" 
          class="case-item"
          @click="openModal(caseItem.image)"
        >
          <div class="media-container">
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
              allowfullscreen
            ></iframe>
          </div>
          <div 
            v-if="caseItem.text" 
            class="case-text"
          >
            {{ caseItem.text }}
          </div>
        </div>
      </div>
      
      <div v-if="selectedImage" class="modal" @click="closeModal">
        <img :src="selectedImage" alt="Full image" class="modal-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cases = ref([
  {
    image: '/public/case1.jpg',
    text: 'Стабильные 100$ в день при том, что занят своей основной работой и арбитражит с неполным «фокусом». Базовый, хороший результат.'
  },
  {
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    text: 'Смотрите наш видеокейс!'
  },
  {
    image: '/public/case6.jpg',
    text: 'Это что за домашка такая, где 13% зарабатывают?'
  },
    {
    image: '/public/case101.jpg',
    text: 'Для большинства из читающих, отметка в 100$ в день может показаться серьезной. Но по факту, ученики, прошедшие первые 4 урока, уже выходят на такие деньги. Вам нужно просто знать, куда прикладывать усилия. '
  },
     {
    image: '/public/case102.jpg',
    text: 'Опять же, 10.000₽ в день - это базовый результат, получаемый в процессе обуча. Не после обучение, не через год, а в процессе. Думайте, в общем.'
  },
    {
    image: '/public/case20.jpg',
    text: 'Миллион рублей за 3 месяца точно заслуживает уважения. Ожидаю от ребят «единицу» в месяц. Потенциал точно есть.'
  },

])

const selectedImage = ref(null)

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}
</script>

<style scoped>
.cases-section {
  padding: 4rem 0;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  padding-bottom: 2rem;
  height: 600px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.case-item {
  flex: 0 0 400px;
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.case-item:hover {
  transform: translateY(-5px);
}

.media-container {
  position: relative;
  flex: 1;
  min-height: 250px;
}

.case-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Обрезка для квадратного формата */
}

.case-video {
  width: 100%;
  height: 100%;
  border: none;
}

.case-text {
  padding: 1.5rem;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.6;
  background: linear-gradient(45deg, #8a2be233, #4b008233);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
}

@media (max-width: 768px) {
  .case-item {
    flex: 0 0 300px;
  }
  
  .scroll-container {
    height: 500px;
  }
  
  .case-text {
    font-size: 1rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }
  
  .case-item {
    flex: 0 0 250px;
  }
  
  .scroll-container {
    height: 400px;
  }
}
</style>
