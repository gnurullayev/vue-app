<template>
  <div class="content w-50 mx-auto mt-5">
    <h3>Update article</h3>
    <loading v-if="isLoading" />
    <form v-else @submit.prevent="UpdateArticle">
      <my-input type="text" placeholder="Title" v-model="title" />
      <my-textarea
        placeholder="Description"
        style="min-height: 100px"
        v-model="description"
      />
      <my-textarea
        placeholder="Body"
        style="min-height: 100px"
        v-model="body"
      />
      <my-button class="btn-primary" type="submit">Submit</my-button>
    </form>
  </div>
</template>
  
  <script>
import MyTextarea from "@/ui-comonents/MyTextarea.vue";
import MyButton from "@/ui-comonents/MyButton.vue";
import MyInput from "@/ui-comonents/MyInput.vue";
import Loading from "@/ui-comonents/Loading.vue";
import { mapState } from "vuex";

export default {
  name: "CreateArticle",
  components: { MyTextarea, MyButton, MyInput, Loading },
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articles.isLoading,
      article: (state) => state.articles.articleDetaile,
    }),
  },
  methods: {
    UpdateArticle() {
      const data = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };
      const id = this.$route.params.id;
      this.$store.dispatch("updateArticle", { id, data });
      this.$router.push("/")
      this.title = "";
      this.description = "";
      this.body = "";
    },
  },
  mounted(){
    this.$store.dispatch("getArticleDetail",this.$route.params.id)
      .then(res => {
        this.title = res.title;
        this.description = res.description;
        this.body = res.body;
      })
      .catch(e => {
        console.log(e.message);
      })
  }
};
</script>
  
  <style>
</style>