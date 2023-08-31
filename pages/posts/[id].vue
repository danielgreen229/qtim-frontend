<template>
  <div class="home main">
    <section class="projects" v-if="currentPost">
      <div class="container container--small">
        <h1 class="page-title page-title--dark">{{ currentPost.title }} </h1>
        <div class="business">
          <div class="business__img">
            <img :src="currentPost.image" alt=""/>
          </div>
        </div>
        <div class="post-info__container">
          <span class="post-info__p">{{ TranslatedText.info }}</span>
          <p class="text-block__p" v-html="currentPost.description"></p>
        </div>
      </div>
    </section>
  </div>
</template>


<script lang="ts">
export default {
  name: 'currentPostPage',
  created () {
    let posts = this.$store.state.posts.posts
    posts.length != 0 ? '' : this.$store.dispatch("GET_CURRENTPOST", this.$route.params)
  },
  computed: {
    TranslatedText () {
      let currentLang = this.$store.state.language
      let text = this.$store.state.lang[currentLang]
      return text
    },
    currentPost () {
      let posts = this.$store.state.posts.posts

      if(posts.length != 0)
        return posts.find(x => x.id === this.$route.params.id)

      let post = this.$store.state.posts.currentPost
      return post
    }
  }
}
</script>


<style scoped>
.projects .page-title {
  margin-bottom: 73px;
}
.page-title {
  font-weight: 400;
  font-size: 84px;
  line-height: 100%;
  color: #101010;
}

.business__img {
  position: relative;
  max-height: 85vh;
  overflow: hidden;
}

.business__img img {
  top: 0;
  left: 0;
  width: 100%;
  -o-object-fit: fill;
  object-fit: fill;
  -o-object-position: center;
  object-position: center;
}

.post-info__container {
  padding: 80px 0;
}

.post-info__p {
  font-size: 16px;
  color: #101010;
}

.text-block__p {
  margin-top: 32px;
  width: 50%;  
  font-size: 24px;
  line-height: 140%;
}

@media screen and (max-width: 600px) {
  .projects .page-title {
    margin-bottom: 26px;
    text-align: left;
  }  
  .page-title {
    font-size: 64px;
    text-align: center;
  }
  .text-block__p {
    font-size: 24px;
    line-height: 120%;
    width: 100%;
  }
  .post-info__container {
    padding: 60px 0;
  }
}
</style>