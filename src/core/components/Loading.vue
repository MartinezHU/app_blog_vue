<script setup lang="ts">
import { useLoadingStore } from '../store/loadingStore'; // Ajusta la ruta según tu estructura

const loadingStore = useLoadingStore();
</script>

<template>
    <div class="loading-overlay" v-if="loadingStore.loading">
        <div class="spinner">
            <div class="loader"></div>
            Cargando...
        </div>
    </div>
</template>



<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 1.2em;
}

.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>