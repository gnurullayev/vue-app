<template>
  <li class="col-12 col-md-6 col-xl-4 col-xxl-3">
    <div class="card text-start mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ article.title.slice(0, 20) }}...</h5>
        <p class="card-text" style="min-height: 120px">
          {{ article.description }}
        </p>
      </div>

      <div
        class="
          card-footer
          bg-transparent
          d-flex
          justify-content-between
          aligin-items-center
        "
      >
        <my-button
          class="btn-outline-secondary p-0 py-2 px-1"
          @click="readMore(article.slug)"
          >Read more</my-button
        >
        <my-button v-if="(user?.username === article.author.username)"
          class="btn-outline-primary p-0 py-2 px-1"
          @click="updateArticle(article.slug)"
          >Update article</my-button
        >
        <span
          class="text-secondary d-inline-block pt-2"
          style="vertical-align: middle"
          >{{ new Date(article.createdAt).toLocaleDateString("en-US") }}</span
        >
      </div>
    </div>
  </li>
</template>

<script>
import MyButton from "@/ui-comonents/MyButton.vue";
import { mapGetters } from "vuex";
import { gettersTypes } from "@/modles/types";
export default {
  components: { MyButton },
  name: "ArticlesCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      user: [gettersTypes.currentUser],
    }),
  },
  methods: {
    readMore(slug) {
      this.$router.push(`/article/${slug}`);
    },
    updateArticle(slug) {
      this.$router.push(`/articles/${slug}/update-article`);
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style>
</style>