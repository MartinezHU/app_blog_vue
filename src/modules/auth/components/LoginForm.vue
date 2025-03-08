<script setup lang="ts">
import { ref } from 'vue';
import { CaLogin } from '@kalimahapps/vue-icons';
import { CdArrowSwap } from '@kalimahapps/vue-icons';
import { useAuthStore } from '../store/authStore';
import { useAuth } from '../composables/useAuth';
import type { LoginCredentials } from '../models/login_credential.model';
import {  useRouter } from 'vue-router'
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const authStore = useAuthStore();
const { login } = useAuth();

const router = useRouter()

async function submitForm() {
    if (!email.value || !password.value) {
        errorMessage.value = 'Por favor, completa todos los campos';
        return;
    }

    authStore.loading = true;

    const credentials: LoginCredentials = {
        app_name: import.meta.env.VUE_APP_NAME,
        email: email.value,
        password: password.value
    };

    try {
        // Simulando una solicitud a la API
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Aquí iría la lógica real para iniciar sesión
        console.log('Login with:', email.value, password.value);

        await login(credentials);

        if (authStore.isLogin) {
            return router.push({ name: 'home' });
        }

        // Reset de campos y errores
        errorMessage.value = '';
    } catch (error) {
        errorMessage.value = 'Error al iniciar sesión. Inténtalo de nuevo.';
    } finally {
        authStore.loading = false;
    }
}


function toSignUp() {
    authStore.isLogin = false;
    // Reset de campos y errores
    email.value = '';
    password.value = '';
    errorMessage.value = '';
}
</script>

<template>
    <div>
        <div v-if="errorMessage" class="alert alert-danger mb-3">
            {{ errorMessage }}
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Introduce tu email"
                required />
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password"
                placeholder="Introduce tu contraseña" required />
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="remember">
            <label class="form-check-label" for="remember">Recordarme</label>
        </div>

        <button class="btn btn-primary w-100 d-flex justify-content-center align-items-center" @click="submitForm"
            :disabled="authStore.loading">
            <span v-if="authStore.loading" class="spinner-border spinner-border-sm me-2" role="status"
                aria-hidden="true"></span>
            Iniciar sesión
            <span class="ms-2">
                <CaLogin />
            </span>
        </button>

        <div class="text-center mt-3">
            <a href="#" @click.prevent="toSignUp" class="d-flex align-items-center justify-content-center">
                ¿No tienes una cuenta? <strong class="ms-1">Registrarte</strong>
                <CdArrowSwap class="ms-1" />
            </a>
        </div>
    </div>
</template>