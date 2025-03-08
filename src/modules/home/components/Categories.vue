<script setup lang="ts">
const categories = ['Frontend', 'Backend', 'Bases de Datos', 'DevOps', 'Frameworks', 'Docker']
</script>

<template>
  <section class="categories mt-1">
    <h2>Categorías populares</h2>
    <div class="categories-container">
      <button class="category-btn" v-for="category in categories" :key="category">
        {{ category }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 60px 20px;
  text-align: center;
  background-color: var(--border-color);
  border-radius: 12px;
}

.categories h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
  font-weight: 700;
}

.categories-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-btn:hover {
  background-color: #0056b3;
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.category-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>