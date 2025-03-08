<script setup lang="ts">
import HeroSection from "../../../core/components/HeroSection.vue";
import LatestPosts from "../components/LatestPosts.vue";
import FeaturedPost from "../components/FeaturedPost.vue";
import Categories from "../components/Categories.vue";
import Testimonials from "../components/Testimonials.vue";
</script>

<template>
  <!--  <HeroSection />-->
  <HeroSection class="hero-section" />

  <div class="contenedor mb-5">
    <div class="main-content">
      <LatestPosts class="carousel-container mt-3" />
      <FeaturedPost class="mt-3" />
    </div>
    <div class="sidebar">
      <Categories class="mt-3" />
      <Testimonials class="mt-3" />
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  padding: 0;
  margin: 0 10%;
  font-size: 1.6rem;
  display: grid;
  /* Usamos CSS Grid para el layout */
  grid-template-columns: 1fr 300px;
  /* Columna principal y sidebar */
  gap: 2rem;
  /* Espacio entre columnas */
  background-color: var(--background-color);
}

.main-content {
  /* Contenedor para evitar que el carrusel se desborde */
  overflow: hidden;
  /* Esto asegura que el carrusel no se desborde */
  width: 100%;
  /* Asegura que ocupe todo el ancho disponible */
}

/* Para dispositivos móviles, cambiar a una columna */
@media (max-width: 768px) {
  .contenedor {
    grid-template-columns: 1fr;
  }

  /* En móviles, primero el contenido principal y después los testimonios */
  .sidebar {
    grid-row: 2;
  }

  .main-content {
    grid-row: 1;
  }
}
</style>