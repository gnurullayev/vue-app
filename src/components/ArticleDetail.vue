<template>
    <h2 class="title mb-3">{{article.title}}</h2>
    <div class="row gy-3">
        <div class="col-12 col-md-6">
            <p class="desc">
                {{article.description}}
            </p>
        </div>

        <div class="col-12 col-md-3">
            <strong class="text-secondary d-block">Created at:</strong>
            <span>{{new Date(article.createdAt).toLocaleDateString("en-US")}}</span>
        </div>

        <div class="col-12 col-md-3">
            <strong class="text-secondary d-block">Updated at:</strong>
            <span>{{new Date(article.updatedAt).toLocaleDateString("en-US")}}</span>
        </div>

        <div class="col-12 col-md-4">
            <div class="profil d-flex align-items-center gap-2 pb-3">
                <span class="profil rounded-circle d-inline-block bg-info d-flex align-items-center justify-content-center text-white" style="width:60px; height: 60px;">{{article.author.username[0].toUpperCase()}}</span>
                <strong>{{article.author.username}}</strong>
            </div>
            <p class="bio">{{article.author.bio}}</p>
        </div>

        <div class="col-12 col-md-8">
            <p class="">{{article.body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleDetailVue",
    props: {
        article:{
            type: Object,
            required: true,
        }
    },
}
</script>

<style>
    .body {
        display: block;
        max-width: 100%;
    }
</style>