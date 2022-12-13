<template>
    <article class="card border-secondary rounded shadow">
        <div class="card-header d-flex justify-content-between align-items-center">
            <div class="d-flex gap-2 align-items-center">
                <h4 class="mb-0">{{ article.pseudo }}</h4>
                <img :src="article.pfp" alt="" class="rounded-circle" width="30" height="30">
            </div>
            <p class="mb-0">posté le {{ new Date(article.date).toLocaleString() }}</p>
        </div>
        <img :src="article.urlImgArticle" alt="..." v-if="article.urlImgArticle">
        <div class="card-body">
            <p class="card-text">{{ article.contenu }}</p>
        </div>
        <div class="card-footer d-flex">
            <p class="mb-0 me-4">
                <i class="bi bi-chat-left-dots me-2"></i>
                <span class="text-white bg-success py-1 px-2 rounded">{{ article.commentaires.length }}</span>
            </p>
            <p class="mb-0" v-if="Object.keys(userStore.user).length !== 0">
                <a href="" @click.prevent.stop="articleStore.addLike(article.id)"><i class="bi bi-hand-thumbs-up me-2 text-black"></i></a>
                <span class="text-white bg-primary py-1 px-2 rounded">{{ article.like }}</span>
            </p>
        </div>
        <div>
            <p class="mb-0 px-3 py-2 fs-4 border-bottom">Commentaires :</p>
            <p class="mx-3 my-2" v-if="article.commentaires.length === 0">Il n'y a pas encore de commentaires.</p>
            <ul class="list-group list-group-flush" v-else>
                <li class="list-group-item" v-for="comment in article.commentaires">
                    <Comment :comment="comment" :key="comment.id"/>
                </li>
            </ul>

        </div>
        <div v-if="Object.keys(userStore.user).length !== 0">
            <p class="mb-0 px-3 py-2 fs-4 border-top">Ajouter un commentaire :</p>
            <CommentForm :articleId="article.id"/>
        </div>
    </article>
</template>

<script setup>
import {useArticleStore} from '../stores/articleStore.js';
import {useUserStore} from '../stores/userStore.js';
import Comment from './Comment.vue';
import CommentForm from './CommentForm.vue';

const userStore = useUserStore();
const articleStore = useArticleStore();
const props = defineProps(['article']);
let article = props.article;
</script>

<style scoped>

</style>