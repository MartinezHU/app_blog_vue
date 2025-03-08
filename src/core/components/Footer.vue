<script setup lang="ts">
import { DeFacebookOriginal } from '@kalimahapps/vue-icons'; import { BsTwitterX } from '@kalimahapps/vue-icons';
import { AkInstagramFill } from '@kalimahapps/vue-icons';
import { DeLinkedinOriginal } from '@kalimahapps/vue-icons';
</script>

<template>
  <footer class="footer py-4">
    <div class="container fluid">
      <div class="row">
        <!-- Sección 1: Información -->
        <div class="col-md-4">
          <h5>Mi Web</h5>
          <p>Este es mi blog hecho con Vue 3.</p>
        </div>

        <!-- Sección 2: Enlaces rápidos -->
        <div class="col-md-4">
          <h5>Enlaces rápidos</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="link text-decoration-none">Inicio</a></li>
            <li><a href="#" class="link text-decoration-none">Servicios</a></li>
            <li><a href="#" class="link text-decoration-none">Nosotros</a></li>
            <li><a href="#" class="link text-decoration-none">Contacto</a></li>
          </ul>
        </div>

        <!-- Sección 3: Redes sociales -->
        <div class="col-md-4">
          <h5>Síguenos</h5>
          <a href="#" class="me-3">
            <DeFacebookOriginal />
          </a>
          <a href="#" class="x me-3">
            <BsTwitterX />
          </a>
          <a href="#" class=" me-3">
            <AkInstagramFill class="ig" />
          </a>
          <a href="#" class="">
            <DeLinkedinOriginal />
          </a>
        </div>
      </div>

      <!-- Línea divisoria -->
      <hr class="my-4 border-light">

      <!-- Copyright -->
      <div class="text-center">
        <p class="mb-0">&copy; 2025 Mi Web. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.footer {
  background-color: var(--border-color);
  color: var(--primary-color);
}

li a {
  color: var(--primary-color);
}

li a:hover {
  color: var(--secondary-color);
}

.x {
  color: var(--text-color);
}

.ig {
  color: #ffffff;
  background: #833ab4;
  background: linear-gradient(to right,
      #833ab4, #fd1d1d, #fcb045)
}

/* Si el fondo es blanco, cambia el texto a negro, y viceversa */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #000000;
    --text-color: white;
  }
}
</style>