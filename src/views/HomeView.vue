<template>
  <div class="home">
    <div class="container">
      <loading v-if="isLoading"/>
      <ul v-else class="card-list row list-unstyled">
        <ArticlesCardVue v-for="article in articles" :key="article.id" :article="article" :articles="articles"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ArticlesCardVue from '@/components/ArticlesCard.vue'
import { mapState } from 'vuex'
import Loading from '@/ui-comonents/Loading.vue'
export default {
  name: 'HomeView',
  components: {
    ArticlesCardVue,
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.articles.isLoading,
      articles: state => state.articles.articles
    })
  },    
  mounted() {
    this.$store.dispatch("getArticles");
  },
}
</script>
