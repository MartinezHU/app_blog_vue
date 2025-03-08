<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules' // Añadido Autoplay
import 'swiper/swiper-bundle.css'

const latestPosts = ref([
  { id: 1, title: 'First Post', excerpt: 'This is a short excerpt of the first post...' },
  { id: 2, title: 'Second Post', excerpt: 'This is a short excerpt of the second post...' },
  { id: 3, title: 'Third Post', excerpt: 'This is a short excerpt of the third post...' },
  { id: 4, title: 'Fourth Post', excerpt: 'This is a short excerpt of the fourth post...' },
  { id: 5, title: 'Fifth Post', excerpt: 'This is a short excerpt of the fifth post...' }
])

// Módulos de Swiper que se usarán
const modules = [EffectCoverflow, Navigation, Autoplay] // Añadido Autoplay

// Referencia al componente Swiper
const swiperRef = ref(null)

onMounted(() => {
  // Asegurarse de que el Swiper comience en el primer slide
  if (swiperRef.value && swiperRef.value.swiper) {
    swiperRef.value.swiper.slideTo(0)
  }
})
</script>

<template>
  <section class="latest-posts">
    <h2>Últimos Artículos</h2>
    <Swiper ref="swiperRef" :key="latestPosts.length" :modules="modules" :slides-per-view="3" :space-between="30"
      :loop="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }" :pagination="{ clickable: true }" :navigation="true" :effect="'coverflow'" :coverflow-effect="{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false
      }" :breakpoints="{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }" :initial-slide="0">
      <SwiperSlide v-for="post in latestPosts" :key="post.id">
        <div class="post-card">
          <div class="post-image">🖼️</div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <button class="btn">Leer más</button>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.latest-posts {
  padding: 60px 20px;
  text-align: center;
  position: relative;
  /* Necesario para posicionar los botones */
  background-color: var(--border-color);
  border-radius: 12px;
}

.latest-posts h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
  font-weight: 700;
}

.post-card {
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.post-image {
  width: 100%;
  height: 180px;
  background: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #888;
  margin-bottom: 20px;
}

.post-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #444;
}

.post-card p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-3px);
}

.btn:active {
  transform: translateY(0);
}

/* Estilos para los botones de navegación */
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #007bff;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #0056b3;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.2rem;
  font-weight: bold;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}
</style>