<template>
  
  <section id="profile" class="profile-card-container">
    <div class="profile-card">
      <div class="card-border-glow"></div>
      <div class="card-content">
        <h3 class="card-subtitle">
          <span class="text-gradient">КТО Я ТАКОЙ?</span>
        </h3>
        <h2 class="card-title">Миллионер, плейбой, филантроп</h2>
          <div class="photo-wrapper">
            <img 
              src="@/assets/money.jpg" 
              alt="Фото с деньгами"
              class="animated-photo"
            >
            <div class="photo-glow"></div>
          </div>

        <div class="card-text">
          <p v-for="(paragraph, index) in paragraphs" :key="index" class="animated-paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div class="card-particles"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paragraphs: [
        'Я занимаюсь арбитражем уже более 3-ех лет. За это время я пробил много потолков, но и дна касался. Мне точно есть чем поделиться и чему тебя научить.',
        // 'Я занимаюсь арбитражем уже более 3ех лет. За это время я пробил много потолков, но и дна касался. Мне точно есть чем поделиться и чему тебя научить.'
      ]
    }
  }
}
</script>

<style scoped>
.profile-card-container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.profile-card {
  position: relative;
  background: rgba(15, 15, 15, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(138, 43, 226, 0.2);
  transform: translateY(30px);
  opacity: 0;
  animation: cardEntrance 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.3s;
  overflow: hidden;
}

@keyframes cardEntrance {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.photo-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transform: translateX(-20px);
  opacity: 0;
  animation: photoSlide 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.5s;
  margin: 2rem 0;
}
@keyframes photoSlide {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animated-photo {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  border: 2px solid transparent;
}

.animated-photo:hover {
  transform: scale(1.02);
}
.animated-photo::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(
    45deg,
    #8A2BE2,
    #BA55D3,
    transparent
  );
  z-index: -1;
  border-radius: 20px;
  animation: frameRotate 8s linear infinite;
}
.animated-photo::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid rgba(138, 43, 226, 0.3);
  border-radius: 15px;
  z-index: 2;
}
@keyframes frameRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.photo-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(138, 43, 226, 0.4) 0%,
    transparent 70%
  );
  animation: glowPulse 3s infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.card-border-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    rgba(138, 43, 226, 0),
    rgba(138, 43, 226, 0.3),
    rgba(138, 43, 226, 0)
  );
  border-radius: 22px;
  z-index: -1;
  animation: borderGlow 3s linear infinite;
}

@keyframes borderGlow {
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
}

.card-subtitle {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.text-gradient {
  background: linear-gradient(45deg, #8A2BE2, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #fff, #8A2BE2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-text {
  position: relative;
  padding: 2rem;
  margin: 2rem auto 0;
  max-width: 800px;
  background: rgba(20, 20, 30, 0.6);
  border-radius: 15px;
  border-left: 4px solid #8A2BE2;
  box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
}

.card-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  border: 1px solid rgba(138, 43, 226, 0.2);
  pointer-events: none;
}
.animated-paragraph {
  position: relative;
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1rem 0;
  opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.8s forwards;
}

@keyframes textReveal {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animated-paragraph:nth-child(1) { animation-delay: 0.5s; }
.animated-paragraph:nth-child(2) { animation-delay: 0.8s; }

.card-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(138, 43, 226, 0.1) 0%,
    transparent 70%
  );
  animation: particleFlow 20s linear infinite;
}

@keyframes particleFlow {
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(360deg) scale(1.2); }
}

@media (max-width: 768px) {
  .profile-card {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .card-title {
    font-size: 2rem;
  }
  
  .card-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .card-title {
    font-size: 1.8rem;
  }
  
  .card-subtitle {
    font-size: 1rem;
  }
}
</style>