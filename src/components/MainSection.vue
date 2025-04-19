<template>
  <section class="hero-section">
       <div class="coin-background">
      <img src="/src/assets/1.svg" class="coin " alt="coin">
    </div>
    <div class="content-wrapper">
     <div class="text-content">
      <h1 class="title">
        <span class="gradient-text">Обучение</span><br>
        <div class="animated-slogan">
          <span class="word-accent">Арбитражу</span> 
          <span class="word-accent"></span> 
          <span class="word-accent">Криптовалют</span>
        </div>
      </h1>
      
      <div class="dynamic-description">
        <p>СТАНЬ АКУЛОЙ <span class="text-flare">АРБИТРАЖНОЙ ТОРГОВЛИ</span></p>
        <div class="features-grid">
          <div class="feature-badge">5+ лет практики</div>
          <div class="feature-badge">1000+ учеников</div>
        </div>
      </div>
        <button class="cta-button">
          Я ГОТОВ НАЧАТЬ
          <div class="hover-line"></div>
        </button>
      </div>
      <div class="visual-element">
        <div class="blockchain-animation">
          <div 
            class="blockchain-line" 
            v-for="(line, index) in 6" 
            :key="index"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}
.animated-slogan {
  position: relative;
  display: inline-block;
  margin: 1rem 0;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.word-accent {
  display: inline-flex;
  font-size: 3.2rem;
  line-height: 1;
  text-align: left;
  /* margin: 0 0.8rem; */
  animation: blink 2s ease-in forwards;
}

.word-accent:nth-child(1) { animation-delay: 0.2s; color: #BA55D3; }
.word-accent:nth-child(2) {animation-delay: 0.5s; color: #9370DB; }
.word-accent:nth-child(3) { animation-delay: 0.8s;color: #8A2BE2; }
.dynamic-description {
  position: relative;
  margin: 2rem 0;
  font-size: 1.4rem;
  max-width: 700px;
}
.text-flare {
  position: relative;
  font-weight: 700;
  background: linear-gradient(45deg, #8A2BE2, #FF00FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 0.3rem;
}
.text-flare::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #8A2BE2 0%, transparent 90%);
  animation: flareMove 2.5s infinite;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.feature-badge {
  background: rgba(138, 43, 226, 0.15);
  border: 1px solid #8A2BE2;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  text-align: center;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.feature-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
}

@keyframes flareMove {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateX(200%); }
}
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.text-content {
  position: relative;
  z-index: 3;
    text-align: left; /* Выравнивание текста по левую сторону */

}

.title {
  font-size: 5rem;
  line-height: 1.05;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
}

.gradient-text {
  background: linear-gradient(45deg, #8A2BE2, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  color: #CCCCCC;
  line-height: 1.6;
}

.cta-button {
  position: relative;
  background: none;
  border: 2px solid #8A2BE2;
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden;
  backdrop-filter: blur(5px);
  background: rgba(15, 15, 15, 0.3);
}

.hover-line {
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: #8A2BE2;
  transition: all 0.4s ease;
}

.cta-button:hover .hover-line {
  left: 0;
}

.visual-element {
  position: relative;
  height: 600px;
  width: 100%;
}

.blockchain-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.blockchain-line {
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    #8A2BE2 50%, 
    transparent 100%);
  animation: lineFlow 6s infinite linear;
  opacity: 0.4;
}

.coin-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2; /* Увеличиваем z-index */
  pointer-events: none;
}

.coin {
  position: absolute;
  width: 900px;
  height: 900px;
  opacity: 0.7;
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  top: 50%;
  left: 32%;
  transform: translateY(-50%);
  filter: 
    drop-shadow(0 0 30px rgba(138, 43, 226, 0.4))
    brightness(1.2);
  animation: gentleFloat 6s ease-in-out infinite;
}

.coin:hover {
  transform: translateY(-50%) scale(1.05) rotate(8deg);
  filter: 
    drop-shadow(0 0 50px rgba(138, 43, 226, 0.6))
    brightness(1.4);
  opacity: 0.9;
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(-50%) rotate(-2deg);
  }
  50% {
    transform: translateY(-52%) rotate(2deg);
  }
}

/* Добавляем свечение вокруг монетки */
.coin::after {
  content: '';
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  background: radial-gradient(
    ellipse at center,
    rgba(138, 43, 226, 0.15) 0%,
    transparent 70%
  );
  z-index: -1;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(0.95);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}
/* Добавляем эффект частиц при наведении */
.coin:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(138, 43, 226, 0.3) 0%,
    transparent 70%
  );
  animation: particleSpread 1.2s ease-out forwards;
}

@keyframes particleSpread {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes lineFlow {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(200%);
    opacity: 0;
  }
}

.blockchain-line:nth-child(1) { left: 10%; height: 80px; animation-delay: 0s }
.blockchain-line:nth-child(2) { left: 25%; height: 120px; animation-delay: 1.2s }
.blockchain-line:nth-child(3) { left: 40%; height: 90px; animation-delay: 2.5s }
.blockchain-line:nth-child(4) { left: 55%; height: 110px; animation-delay: 3.8s }
.blockchain-line:nth-child(5) { left: 70%; height: 70px; animation-delay: 5.1s }
.blockchain-line:nth-child(6) { left: 85%; height: 100px; animation-delay: 6.4s }

.visual-element::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(138,43,226,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(138,43,226,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
}
</style>