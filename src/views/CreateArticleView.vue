<template>
  <div class="content w-50 mx-auto mt-5">
    <h3>Create article</h3>
    
    <form @submit.prevent="createArticle">
      <my-input type="text" placeholder="Title" v-model="title" required/>
      <my-textarea placeholder="Description" v-model="description" style="min-height: 100px;" required/>
      <my-textarea placeholder="Body" v-model="body" style="min-height: 100px;" required/>
      <my-button class="btn-primary" type="submit">Submit</my-button>
    </form>
  </div>
</template>
 
<script>
import MyTextarea from '@/ui-comonents/MyTextarea.vue'
import MyButton from '@/ui-comonents/MyButton.vue'
import MyInput from '@/ui-comonents/MyInput.vue'
import { mapState } from 'vuex'
 
export default {
  name:"CreateArticle",
  components: { MyTextarea, MyButton, MyInput },
  data() {
    return {
      title: "",
      description:"",
      body: "",
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.articleHandler.isLoading
    })
  },
  methods: {
    createArticle() {
      const article = {title: this.title, description: this.description, body: this.body};
      this.$store.dispatch("createArticle",article)
      this.title = "";
      this.description = "";
      this.body = ""
    }
  },
  watch: {
    isLoading() {
      if(!this.isLoading) {
        this.$router.push("/")
      }
    }
  }

  
}
</script>

<style>

</style>