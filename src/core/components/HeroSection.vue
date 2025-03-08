<script setup lang="ts">
// Puedes añadir lógica si es necesario
</script>

<template>
  <section class="hero-container">
    <div class="hero-content">
      <h1 class="title">Bienvenido a mi Blog</h1>
      <p class="hero-subtitle">Descubre historias, guías y análisis sobre tecnología y desarrollo.</p>
      <div class="cta-container">
        <button class="cta-primary">Explorar artículos</button>
        <button class="cta-secondary">Suscribirse</button>
      </div>
    </div>
    <div class="hero-image">
      <!-- Aquí podrías añadir una imagen representativa -->
      <div>
        <img class="image-overlay" src="../../assets/img/laptop_hero.jpg" alt="Imagen representativa del hero" />

        <!--        <div class="image-overlay"></div>-->
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #434950 0%, #465771 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* En pantallas más grandes, mostrar lado a lado */
@media (min-width: 768px) {
  .hero-container {
    flex-direction: row;
    text-align: left;
    padding: 5rem 3rem;
  }

  .hero-content {
    flex: 1;
    padding-right: 3rem;
  }

  .hero-image {
    flex: 1;
  }
}

.hero-content {
  z-index: 10;
  max-width: 800px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1f1f1f;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 2.5rem;
  line-height: 1.5;
}

.cta-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 768px) {
  .cta-container {
    justify-content: flex-start;
  }
}

.cta-primary {
  padding: 0.8rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.cta-secondary {
  padding: 0.8rem 2rem;
  background-color: transparent;
  color: #000000;
  border: 2px solid #007bff;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  color: #ffffff;
  background-color: rgb(47, 105, 187);
  transform: translateY(-3px);
}

.placeholder-image {
  width: 100%;
  height: 350px;
  background-color: #e0e0e0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  opacity: 0.3;
}
</style>