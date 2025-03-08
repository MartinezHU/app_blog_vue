<script setup lang="ts">
// Puedes añadir lógica adicional si es necesario
</script>

<template>
  <section class="featured-post mt-1">
    <h2>Artículo Destacado</h2>
    <div class="post">
      <div class="post-img">🖼️</div>
      <div class="post-content">
        <h3>Título del artículo destacado</h3>
        <p>Un extracto del artículo para captar la atención del lector...</p>
        <button class="btn">Leer más</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-post {
  padding: 60px 20px;
  text-align: center;
  background-color: var(--border-color);
  border-radius: 12px;
}

.featured-post h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
  font-weight: 700;
}

.post {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1000px;
  margin: auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.post-img {
  width: 300px;
  height: 180px;
  background: #e0e0e0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #888;
  flex-shrink: 0;
}

.post-content {
  text-align: left;
}

.post-content h3 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #444;
}

.post-content p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.btn {
  padding: 12px 24px;
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
</style>