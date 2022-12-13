import {defineStore} from 'pinia';
import {addArticle, updateArticle} from '../services/articleService.js';

export const useArticleStore = defineStore('articleStore', {
    state: () => {
        return {
            articles: [],
        }
    },
    getters: {
        articlesSorted: function () {
            return this.articles.sort((a, b) => b.date - a.date)
        }
    },
    actions: {
        addLike: function (articleId) {
            const article = this.articles.find(article => article.id === articleId)
            article.like++
            updateArticle(article)
        },
        addComment: function (articleId, comment) {
            const article = this.articles.find(article => article.id === articleId)
            article.commentaires.push(comment)
            updateArticle(article)
        },
        addArticle: async function (article) {
            const newArticle = await addArticle(article)
            this.articles.unshift(newArticle)
        },
    }
})