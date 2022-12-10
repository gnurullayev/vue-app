<template>
    <div class="article">
        <div class="container">
            <loading v-if="isLoading"/>
            <div v-else-if="article" class="article-inner text-start">
                <ArticleDetailVue :article="article"/>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleDetailVue from '@/components/ArticleDetail.vue';
import { mapState } from 'vuex';
import Loading from '@/ui-comonents/Loading.vue';
export default {
    components: { ArticleDetailVue, Loading },
    name: "ArticleDetail",
    computed: {
        ...mapState({
            isLoading: state => state.articles.isLoading,
            article: state => state.articles.articleDetaile,
        }) 
    },
    mounted() {
        this.$store.dispatch("getArticleDetail", this.$route.params.id)
    },
}
</script>

<style>
 .article-inner {
    overflow-x: hidden;
 }
</style>