<script setup lang="ts">
import Header from './core/components/Header.vue';
import Footer from './core/components/Footer.vue';
</script>

<template>
    <div class="app-container">
        <!-- Header siempre visible en la parte superior -->
        <Header class="site-header" />

        <!-- Contenido principal con hero y routerview -->
        <main class="main-content">
            <RouterView />
        </main>

        <!-- Footer siempre al final -->
        <footer class="site-footer">
            <Footer />
        </footer>
    </div>
</template>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Asegura que ocupe al menos toda la altura de la ventana */
    background-color: var(--background-color);
}

.site-header {
    position: sticky;
    /* Opcional: para hacer que el header se mantenga fijo al hacer scroll */
    top: 0;
    z-index: 100;
    /* Asegura que esté por encima de otros elementos */
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* Sombra sutil */
}

.main-content {
    flex: 1;
    /* Toma el espacio disponible */
    display: flex;
    flex-direction: column;
}

.hero-section {
    width: 100%;
    /* Puedes ajustar la altura según necesites */
    min-height: 60vh;
    /* Ocupa al menos 60% de la altura de la ventana */
}

.site-footer {
    margin-top: auto;
    background-color: #f8f9fa;
    /* O el color que prefieras */
}
</style>
