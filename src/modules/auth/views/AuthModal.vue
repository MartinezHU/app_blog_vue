<script setup lang="ts">
import { onMounted } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import SignUpForm from '../components/SignUpForm.vue';
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();


// Cerrar modal con Escape
onMounted(() => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && authStore.showModal) {
            authStore.toggleModal();
        }
    });
});

function closeModal(): void {
    authStore.toggleModal();
}
</script>

<template>
    <div>
        <transition name="modal-fade">
            <div v-if="authStore.showModal" class="modal-backdrop">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                {{ authStore.isLogin ? 'Iniciar Sesión' : 'Registro' }}
                            </h5>
                            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <transition name="form-slide" mode="out-in">
                                <div :key="authStore.isLogin ? 'login' : 'signup'" class="form-container">
                                    <LoginForm v-if="authStore.isLogin" @switch-to-signup="authStore.switchToSignUp" />
                                    <SignUpForm v-else @switch-to-login="authStore.switchToLogin" />
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
}

.modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
    width: 100%;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    overflow: hidden;
}

.btn-close {
    padding: 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

/* Form Slide Animation */
.form-slide-enter-active,
.form-slide-leave-active {
    transition: all 0.3s ease-out;
}

.form-slide-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.form-slide-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>