<template>
    <form class="border border-secondary rounded p-4 bg-light shadow" @submit.prevent.stop="submit">
        <h4>Quoi de neuf ?</h4>
        <div class="mb-3">
            <textarea placeholder="Laisser un nouveau post" id="comment" class="form-control" rows="5" required v-model="formData.contenu"></textarea>
        </div>
        <div class="mb-3">
            <input placeholder="url de votre image - taille conseillée 1000x200px" type="url" id="urlImgArticle" class="form-control" aria-describedby="imageHelp" v-model="formData.urlImgArticle">
        </div>
        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-success">Laisser un nouveau post</button>
        </div>
    </form>
</template>

<script setup>
import {useArticleStore} from '../stores/articleStore.js';
import {useUserStore} from '../stores/userStore.js';
import {ref} from 'vue';

const userStore = useUserStore();
const articleStore = useArticleStore();
let formData = ref({
    contenu: '',
    urlImgArticle: '',
    like: 0,
    pseudo: '',
    pfp: '',
    date: '',
    commentaires: [],
});

const submit = () => {
    formData.value.pseudo = userStore.user.pseudo;
    formData.value.pfp = userStore.user.urlImgProfil;
    formData.value.date = Date.now();
    articleStore.addArticle(formData.value);
    formData.value = {
        contenu: '',
        urlImgArticle: '',
        like: 0,
        pseudo: '',
        pfp: '',
        date: '',
        commentaires: [],
    }
}
</script>

<style scoped>

</style>