<script setup lang="ts">
import { ref } from 'vue'

// Datos de ejemplo para los testimonios
const testimonials = ref([
  {
    id: 1,
    name: 'Ana García',
    position: 'Diseñadora UX',
    content: 'El contenido del blog ha sido extremadamente útil para mi desarrollo profesional. Los artículos están bien estructurados y llenos de información valiosa.',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    position: 'Desarrollador Web',
    content: 'He implementado varias de las técnicas explicadas en los artículos con excelentes resultados. Recomiendo este sitio a todos mis colegas.',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Sofía Ramírez',
    position: 'Product Manager',
    content: 'Los recursos y consejos compartidos aquí me han ayudado a mejorar significativamente nuestros procesos de desarrollo.',
    avatar: '👩'
  }
])
</script>

<template>
  <section class="testimonials-sidebar">
    <h2>Testimonios</h2>
    <div class="testimonials-container">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
        <div class="testimonial-avatar">{{ testimonial.avatar }}</div>
        <div class="testimonial-content">
          <p>"{{ testimonial.content }}"</p>
          <div class="testimonial-author">
            <strong>{{ testimonial.name }}</strong>
            <span>{{ testimonial.position }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-sidebar {
  padding: 20px;
  background-color: var(--border-color);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.testimonials-sidebar h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.testimonials-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.testimonial-card {
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-avatar {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: center;
}

.testimonial-content p {
  font-size: 0.9rem;
  color: #555;
  font-style: italic;
  margin-bottom: 10px;
  line-height: 1.5;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.testimonial-author strong {
  color: #333;
}

.testimonial-author span {
  color: #666;
  font-size: 0.8rem;
}

/* Estilo responsive */
@media (max-width: 768px) {
  .testimonials-sidebar {
    margin-top: 30px;
  }
}
</style>