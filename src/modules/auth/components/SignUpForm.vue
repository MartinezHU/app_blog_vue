<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '../store/authStore';
import { CdArrowSwap } from '@kalimahapps/vue-icons';

const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const passwordError = ref('');
const loading = ref(false);
const errorMessage = ref('');

// Validación de contraseñas coincidentes
const passwordsMatch = computed(() => {
    if (confirmPassword.value && password.value !== confirmPassword.value) {
        passwordError.value = 'Las contraseñas no coinciden';
        return false;
    }
    passwordError.value = '';
    return true;
});

async function submitSignUp() {
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
        errorMessage.value = 'Por favor, completa todos los campos';
        return;
    }

    if (!passwordsMatch.value) {
        return;
    }

    loading.value = true;
    try {
        // Simulando una solicitud a la API
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Aquí iría la lógica real para registrarse
        console.log('Sign up with:', name.value, email.value, password.value);

        // Reset de campos y errores
        errorMessage.value = '';
    } catch (error) {
        errorMessage.value = 'Error al registrarse. Inténtalo de nuevo.';
    } finally {
        loading.value = false;
    }
}

function toLogin() {
    authStore.isLogin = true;
    // Reset de campos y errores
    name.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    errorMessage.value = '';
    passwordError.value = '';
}
</script>

<template>
    <div>
        <div v-if="errorMessage" class="alert alert-danger mb-3">
            {{ errorMessage }}
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="name" placeholder="Ingresa tu nombre" required />
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email"
                placeholder="Ingresa tu correo electrónico" required />
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password"
                placeholder="Ingresa tu contraseña" required />
        </div>

        <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmar contraseña</label>
            <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword"
                placeholder="Confirma tu contraseña" :class="{ 'is-invalid': passwordError }" required />
            <div v-if="passwordError" class="invalid-feedback">
                {{ passwordError }}
            </div>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="terms" required>
            <label class="form-check-label" for="terms">Acepto los términos y condiciones</label>
        </div>

        <button class="btn btn-success w-100 d-flex justify-content-center align-items-center" @click="submitSignUp"
            :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Registrarse
            <span class="ms-2">→</span>
        </button>

        <div class="text-center mt-3">
            <a href="#" @click.prevent="toLogin" class="d-flex align-items-center justify-content-center">
                ¿Ya tienes una cuenta? <strong class="ms-1">Iniciar sesión</strong>
                <CdArrowSwap class="ms-1" />
            </a>
        </div>
    </div>
</template>