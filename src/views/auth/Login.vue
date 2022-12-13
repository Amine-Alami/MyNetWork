<template>
    <UserForm>
        <span class="fs-4" data-v-e065371e="">Se connecter</span>
        <img class="nav-image" src="../../assets/user.png" />
    </UserForm>
</template>

<script setup>
import UserForm from '../../components/UserForm.vue';
import {useRouter} from 'vue-router';
import {useUserStore} from '../../stores/userStore';

const router = useRouter();
const userStore = useUserStore();

if (Object.keys(userStore.user).length !== 0) {
    router.push('/')
}
</script>

<style scoped>
    .nav-image {
        width: 33px;
        height: 23px;
        padding-right: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
</style>