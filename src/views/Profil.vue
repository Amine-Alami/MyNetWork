<template>
    <UserForm>
        <h2>Modifier mon profil</h2>
    </UserForm>
</template>

<script setup>
import UserForm from '../components/UserForm.vue';
import {useRouter} from 'vue-router';
import {useUserStore} from '../stores/userStore.js';

const router = useRouter();
const userStore = useUserStore();

if (Object.keys(userStore.user).length === 0) {
    router.push('/login')
}
</script>

<style scoped>

</style>