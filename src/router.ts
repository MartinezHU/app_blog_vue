import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./modules/home/views/HomeView.vue";
//import { useAuthStore } from "./modules/auth/store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("./modules/auth/views/AuthView.vue"),
    //   // route level code-splitting
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    { path: "/:pathMatch(.*)*", redirect: "/" }, // Redirigir a Home si la ruta no existe
  ],
});

// Para restringir el acceso a rutas según el estado de autenticación global
// Descomentar la siguiente línea para habilitar esta funcionalidad

// router.beforeEach((to, _from, next) => {
//   const authStore = useAuthStore();

//   if (to.name !== "login" && !authStore.isAuthenticated) {
//     next("/login");
//   } else if (to.name === "login" && authStore.isAuthenticated) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
