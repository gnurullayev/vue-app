import axios from "axios";

export const ArticlesService = {
    getArticles() {
       return axios.get("/articles")
    },
    getArticleDetail(id) {
        return axios.get(`/articles/${id}`)
    },
    createArticle(article) {
        return axios.post(`/articles`,{article})
    },
    updateArticle(article) {
        return axios.put(`/articles/${article.id}`, {article: article.data})
    },
    deleteArticle(id) {
        return axios.delete(`/articles/${id}`)
    },
}