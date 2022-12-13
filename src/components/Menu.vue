<template>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto navbar-brand">
        <span class="fs-2">MyNetWork</span>
        <img class="nav-image logo" src="../assets/logo.png" />
    </a>
    <nav class="menu d-flex flex-column flex-shrink-0 p-3 border rounded shadow">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <RouterLink :to="'/'" class="nav-link">
                    <img class="nav-image" src="../assets/home.png" />
                    Fils d'actualités
                </RouterLink>
            </li>
        </ul>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item" v-if="Object.keys(userStore.user).length === 0">
                <RouterLink :to="'/register'" class="nav-link">
                    <img class="nav-image" src="../assets/user.png" />
                    Créer un profil
                </RouterLink>
            </li>
            <li class="nav-item" v-if="Object.keys(userStore.user).length === 0">
                <RouterLink :to="'/login'" class="nav-link">
                    <img class="nav-image" src="../assets/login.png" />
                    Se connecter
                </RouterLink>
            </li>
            <li class="nav-item" v-else>
                <a href="" @click.prevent.stop="logout" class="nav-link">
                    <img class="nav-image" src="../assets/logout.png" />
                    Déconnection
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import {useUserStore} from '../stores/userStore.js';
import {useRouter} from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    userStore.logout()
    router.push('/');
}
</script>

<style scoped>
    .nav-image {
        width: 33px;
        height: 23px;
        padding-right: 10px;
    }
    a {
        color: black;
    }
    .logo {
        margin-left: 10px;
        width: 50px;
        height: 40px;
    }
    .menu {
        margin-top: 20px;
        width: 220px;
        border: 0.5px solid black !important;
        background-color: white;
    }
    .nav-link {
        padding: 0 !important;
    }
</style>