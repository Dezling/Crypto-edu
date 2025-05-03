<template>
  <section id="profile" class="profile-section">
    <div class="content-wrapper">
      <h2 class="section-title">
        <span class="gradient-text">Почему</span>
        <span class="subtitle">именно я твой наставник?</span>
      </h2>

      <div class="profile-content first-photo">
        <div class="photo-column">
          <!-- Первое фото -->
          <div class="photo-container">
            <img 
              src="/images/mon.jpg" 
              alt="Фото профиля"
              class="profile-photo"
            >
            <div class="photo-overlay"></div>
          </div>

          <!-- Второе фото -->
          <div class="photo-container secondary-photo">
            <img 
              src="/images/monney.jpg" 
              alt="Фото профиля 2"
              class="profile-photo"
            >
            <div class="photo-overlay"></div>
          </div>
        <div class="photo-container third-photo">
            <img 
              src="/images/mon2.jpg" 
              alt="Фото профиля 2"
              class="profile-photo"
            >
            <div class="photo-overlay"></div>
          </div>
        </div>
        <div class="text-column">
          <h3 class="experience-title">5+ лет в криптоарбитраже</h3>

          <div class="paragraphs-container">
            <p 
              v-for="(paragraph, index) in paragraphs" 
              :key="index"
              class="animated-paragraph"
            >
              <span class="paragraph-number">0{{ index + 1 }}</span>
              <span v-html="highlightImportantWords(paragraph)"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        'Более 5 лет в криптовалютном арбитраже и управлении международными проектами. Моя команда генерирует стабильную чистую прибыль от $10 000 в месяц, используя проверенные стратегии и кастомные инструменты анализа.',
        ' За моими плечами организация арбитражных операций в 10+ странах, включая запуск обменника в Таиланде и Индонезии с ежемесячным оборотом $500 000+. Глубокое понимание регуляторных нюансов и рисков (от 115-ФЗ до азиатских compliance-требований). Практические кейсы: от P2P-связок до оптимизации внутренних процессов при построении собственной команды на криптовалютном поприще.',
        'Я начинал с нуля, как и многие: первые сделки проводил с минимальным капиталом, сталкивался с кассовыми разрывами и ошибками, из-за которых терял до 70% депозита. Этот опыт закалил меня. Сегодня, спустя более 5 лет я руковожу командой из 10+ специалистов, которая ежемесячно приносит более миллиона рублей в карман.',
        'Мои ученики — это сообщество, где успех одних вдохновляет других. Их отзывы говорят не об абстрактных обещаниях, а о реальных изменениях: от первых сделок до построения системного дохода. Многие из них, начав с основ, уже смогли достичь впечатляющих результатов самостоятельно, доказав, что методики работают даже в условиях высокой конкуренции. Один из моих «падаванов» даже умудрился заработать больше 7000 $ за месяц в соло(!)',
        'Так почему же? Я не скрываю подводных камней — покажу, как их обходить. Мы разберем только реальные кейсы и научимся на лучших примерах. Вы будете прогнозировать риски, работать с ликвидностью и масштабироваться даже в условиях нестабильности, получать не только теорию, но и рабочие схемы, которые прошли проверку в условиях реального рынка.  ',
        'Моя цель — чтобы ваши стартовые трудности стали историей, а не повторением чужих ошибок.'
      ]
    }
  },
  methods: {
    highlightImportantWords(paragraph) {
      return paragraph.replace(/(рабочие схемы|более миллиона рублей|неудач|прогнозировать риски)/g, 
      '<span class="highlight">$1</span>');
    }
  }
}
</script>

<style scoped>
.profile-section {
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  line-height: 1;
}

.gradient-text {
  background: linear-gradient(45deg, #000, #8A2BE2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
}

.subtitle {
  display: block;
  font-size: 1.8rem;
  color: #888;
  margin-top: 1rem;
  letter-spacing: 3px;
}

.profile-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.photo-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

.photo-container {
  position: relative;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  transform: translateX(-20px);
  opacity: 0;
  animation: slideIn 1s forwards;
  animation-delay: 0.3s;
}
.photo-container.first-photo{ 
  animation-delay: 0.5s;
  margin-left: 5rem;
  transform: rotate(3deg);
  z-index: 1;
}
.photo-container.secondary-photo {
  animation-delay: 0.5s;
  margin-left: 2rem;
  transform: rotate(3deg);
  z-index: 1;
}
.photo-container.third-photo {
  animation-delay: 0.5s;
  margin-left: 2rem;
  transform: rotate(3deg);
  z-index: 1;
}
.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 100%
  );
  mix-blend-mode: multiply;
}

.experience-title {
  font-size: 1.8rem;
  color: #8A2BE2;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(138, 43, 226, 0.3);
}

.paragraphs-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.animated-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
  opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.8s forwards;
  position: relative;
  padding-left: 50px;
}

.paragraph-number {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: rgba(138, 43, 226, 0.3);
}

.highlight {
  color: #FFDD57; /* Привлекательный цвет для выделения */
  font-weight: bold;
  transition: color 0.3s ease;
}

.highlight:hover {
  color: #FFC107; /* Цвет при наведении */
}

@keyframes slideIn {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes textReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-paragraph:nth-child(1) { animation-delay: 0.4s; }
.animated-paragraph:nth-child(2) { animation-delay: 0.6s; }
.animated-paragraph:nth-child(3) { animation-delay: 0.8s; }
.animated-paragraph:nth-child(4) { animation-delay: 1.0s; }
.animated-paragraph:nth-child(5) { animation-delay: 1.2s; }
.animated-paragraph:nth-child(6) { animation-delay: 1.4s; }
.animated-paragraph:nth-child(7) { animation-delay: 1.6s; }

@media (max-width: 1024px) {
  .profile-content {
    grid-template-columns: 1fr;
  }
  
  .photo-column {
    height: auto;
    margin-bottom: 4rem;
  }
  
  .photo-container {
    height: 500px;
    top: 80px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
  }
  
  .animated-paragraph {
    padding-left: 40px;
    font-size: 1rem;
  }
  
  .paragraph-number {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .profile-section {
    padding: 4rem 1rem;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
  
  .photo-container {
    height: 400px;
  }
  
  .experience-title {
    font-size: 1.4rem;
  }
}
</style>
