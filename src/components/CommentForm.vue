<template>
    <form class="px-3 pb-3" @submit.prevent.stop="submit">
        <div class="mb-3">
            <textarea placeholder="Laisser un commentaire" id="commentContent" class="form-control" required v-model="formData.contenu"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-success">Laisser votre commentaire</button>
    </form>
</template>

<script setup>
import {useArticleStore} from '../stores/articleStore.js';
import {useUserStore} from '../stores/userStore.js';
import {ref} from 'vue';

const userStore = useUserStore();
const articleStore = useArticleStore();
const props = defineProps(['articleId']);
let articleId = props.articleId;
let formData = ref({
    contenu: '',
    pseudo: '',
    date: '',
});

const submit = () => {
    formData.value.pseudo = userStore.user.pseudo;
    formData.value.date = Date.now();
    articleStore.addComment(articleId, formData.value);
    formData.value = {
        contenu: '',
        pseudo: '',
        date: '',
    }
}
</script>

<style scoped>
</style>