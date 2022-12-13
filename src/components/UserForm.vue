<template>
    <form class="p-4 border border-secondary rounded bg-light" @submit.prevent.stop="submit">
        <slot></slot>
        <div class="mb-3" v-if="route === 'register'">
            <input placeholder="pseudo" type="text" id="pseudo" class="form-control" required v-model="formData.pseudo">
        </div>
        <div class="mb-3">
            <input placeholder="votre@rmail.fr" type="email" id="email" class="form-control" required v-model="formData.email">
        </div>
        <div class="mb-3">
            <input placeholder="password" type="password" id="password" class="form-control" required v-model="formData.password">
        </div>
        <div class="mb-3" v-if="route === 'register'">
            <input placeholder="confirmer password" type="password" id="checkpassword" class="form-control" required v-model="checkPassword">
        </div>
        <div class="mb-3" v-if="route === 'register'">
            <input placeholder="url de votre image - taille conseillée 1000x200px" type="url" id="urlImgProfil" class="form-control" aria-describedby="imageHelp" v-model="formData.urlImgProfil">
        </div>
        <button type="submit" class="btn btn-success" v-if="route === 'register'">Créer un nouveau profil</button>
        <button type="submit" class="btn btn-success" v-if="route === 'login'">Connexion</button>
        <div class="alert alert-warning d-flex align-items-center mt-4" role="alert" v-if="errorMessage !== ''">
            <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" role="img" aria-label="Warning:"></i>
            {{ errorMessage }}
        </div>
        <div class="alert alert-success d-flex align-items-center mt-4" role="alert" v-if="registrationValidated">
            <i class="bi bi-check-circle-fill flex-shrink-0 me-2" role="img" aria-label="Success:"></i>
            Votre inscription à bien été enregistrée.
        </div>
    </form>
</template>

<script setup>
import {useRoute, useRouter} from 'vue-router';
import {useUserStore} from '../stores/userStore.js';
import {ref} from 'vue';

const route = useRoute().name;
const router = useRouter();
const userStore = useUserStore();

let formData = route === 'profil' ?
    ref({
        pseudo: userStore.user.pseudo,
        email: userStore.user.email,
        password: '',
        urlImgProfil: userStore.user.urlImgProfil,
    })
    : ref({
        pseudo: '',
        email: '',
        password: '',
        urlImgProfil: '',
    });
let checkPassword = ref('');
let registrationValidated = ref(false);
let errorMessage = ref('');

const submit = async () => {
    errorMessage.value = '';
    registrationValidated.value = false;
    let submission;

    if (route === 'register') {
        if (checkPassword.value !== formData.value.password) {
            errorMessage.value = 'Les mots de passe ne sont pas identiques. Merci de vérifier votre saisie.';
        } else {
            submission = await userStore.register(formData.value)
            if (submission.state === false) {
                errorMessage.value = submission.message;
            } else {
                registrationValidated.value = true;
                formData.value = {
                    pseudo: '',
                    email: '',
                    password: '',
                    urlImgProfil: '',
                };
                checkPassword.value = '';
            }
        }
    } else {
        submission = await userStore.login(formData.value);
        submission.state === false ?
            errorMessage.value = submission.message
            : router.push('/');
    }
};
</script>

<style scoped>

</style>