<script setup lang="ts">
import { ref, watch } from 'vue';
import { useSettings } from '../store/userSettings';
import { useAuthStore } from '../../modules/auth/store/authStore';
import AuthModal from '../../modules/auth/views/AuthModal.vue';
import { FlDarkTheme } from '@kalimahapps/vue-icons';
import { useAuth } from '../../modules/auth/composables/useAuth';
const isMobileMenuOpen = ref(false);
const storeSettings = useSettings();

const authStore = useAuthStore();

const { logout } = useAuth();

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function toggleDarkMode() {
  let isDarkMode = localStorage.getItem('darkMode') === 'true';

  isDarkMode = !isDarkMode;

  localStorage.setItem('darkMode', isDarkMode.toString());

  if (isDarkMode) {
    document.body.classList.add("dark-theme"); // Añade la clase 'dark-mode' al body para cambiar el color de fondo y texto
    storeSettings.toggleTheme(isDarkMode ? 'dark' : 'light'); // Actualiza el tema en el store

  } else {
    document.body.classList.remove("dark-theme"); // Elimina la clase 'dark-mode' al body para volver al color original de fondo y texto
  }
}

function toggleAuthModal() {
  authStore.toggleModal(); // Muestra el modal de autenticación
}

watch(
  () => authStore.isAuthenticated, // Observamos autenticación
  (newValue) => {
    if (newValue) {
      authStore.showModal = false; // Cerrar modal cuando el usuario inicia sesión
    }
  }
);

function initializeDarkMode() {
  let darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'true') {
    document.body.classList.add("dark-theme"); // Añade la clase 'dark-mode' al body para cambiar el color de fondo y texto
  } else {
    document.body.classList.remove("dark-theme"); // Elimina la clase 'dark-mode' al body para volver al color original de fondo y texto
  }
}

// Llamar a initializeDarkMode al cargar la página
initializeDarkMode();
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-container">
        <img src="../../assets/img/logo.png" alt="Logo Mi Web" class="logo" />
      </div>

      <!-- Botón hamburguesa para móvil -->
      <button class="mobile-menu-button" @click="toggleMobileMenu">
        <span class="hamburger-icon"></span>
      </button>

      <!-- Navegación principal -->
      <nav class="main-nav" :class="{ 'open': isMobileMenuOpen }">
        <ul class="nav-links">
          <!-- <li><a href="#" class="nav-link active">Inicio</a></li> -->
          <li>
            <RouterLink class="nav-link active" to="/">Inicio</RouterLink>
          </li>
          <li><a href="#" class="nav-link">Artículos</a></li>
          <li><a href="#" class="nav-link">Nosotros</a></li>
          <li><a href="#" class="nav-link">Contacto</a></li>
        </ul>
      </nav>

      <!-- Buscador -->
      <div class="search-container">
        <input type="text" placeholder="Buscar..." class="search-input" />
        <button class="search-button">Buscar</button>
      </div>

      <nav class="main-nav" :class="{ 'open': isMobileMenuOpen }">
        <ul class="nav-links">
          <!-- <li><a href="#" class="nav-link active">Inicio</a></li> -->
          <li>
            <div>

            </div>
            <a v-if="authStore.isAuthenticated" class="nav-link" type="button" @click="logout">Cerrar sesión</a>
            <a v-else class="nav-link" type="button" @click="toggleAuthModal">Iniciar
              sesión</a>
          </li>
          <li>
            <a type="button" class="nav-link" style="font-weight: bolder;" @click="toggleDarkMode">
              <FlDarkTheme />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <AuthModal v-if="authStore.showModal" @close="toggleAuthModal" />
  </header>
</template>

<style scoped>
.header {
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  background-color: var(--border-color);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  flex-shrink: 0;
}

.logo {
  height: 40px;
  width: auto;
  border-radius: 12px;
}

.mobile-menu-button {
  display: none;
  /* Oculto en escritorio */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #333;
  position: relative;
  transition: background-color 0.3s;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  width: 24px;
  height: 2px;
  background-color: #333;
  position: absolute;
  left: 0;
  transition: transform 0.3s ease;
}

.hamburger-icon::before {
  top: -6px;
}

.hamburger-icon::after {
  bottom: -6px;
}

.main-nav {
  margin-left: 2rem;
}

.search-container {
  display: flex;
  align-items: center;
}


.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px 0 0 4px;
  font-size: 0.9rem;
}

/**
TODO: Añadir hover y active para el botón de cambiar color */
.search-button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: 1px solid var(--primary-color);
  border-radius: 0 4px 4px 0;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  border-color: var(--secondary-color);
  background-color: var(--secondary-color);
}

/* Responsive */
@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
    order: 3;
  }

  .main-nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    margin-left: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .main-nav.open {
    max-height: 300px;
    /* Ajustar según sea necesario */
  }


  .search-container {
    flex: 1;
    order: 2;
    margin-right: 1rem;
  }
}
</style>