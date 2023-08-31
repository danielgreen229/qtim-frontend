<template>
  <div class="home main">
    <section class="projects">
      <div class="container container--small">
        <h2 class="page-title page-title--dark">{{ TranslatedText.articles }}</h2>
        <span class="projects__row">
          <div class="projects__col" v-for="post, index in paginatedData" :key="index">
            <NuxtLink :to="'/posts/' + post.id">
              <div @mouseover="showReadMore[index] = true" 
                 @mouseleave="showReadMore[index] = false">
                <article class="project" active-categorie="all" 
                         :class="{'project__translate' : showReadMore[index]}">
                  <a class="project__img" >
                    <div :style="{'background-image': 'url(' + post.image + ')'}"/>
                  </a>
                  <a class="project__title link-hover"
                     :class="{'link-hover-active' : showReadMore[index]}">
                    {{ post.preview }}
                  </a>
                </article>
                <Transition>
                  <span class="project__span" v-show="showReadMore[index]">{{ TranslatedText.readmore }}</span>
                </Transition>
              </div>
            </NuxtLink>
          </div>
        </span>
      </div>
    </section>
    <div class="pagination__container container container--small">
      <div v-if="pageNum > 0" class="pagination-container__button" @click="prevPage()">
        <img class="pagination__button rotated-button" src="@/assets/svg/vector.svg"/>
      </div>
      <div @click="setPage(navPageNum + 0)" class="pagination__num" 
           :class="{'pagination-current__num': currentPageNum == 1}">
        {{ navPageNum }}
      </div>
      <div @click="setPage(navPageNum + 1)" class="pagination__num" 
           :class="{'pagination-current__num': currentPageNum == 2}">
        {{ navPageNum + 1 }}
      </div>
      <div @click="setPage(navPageNum + 2)" class="pagination__num" 
           :class="{'pagination-current__num': currentPageNum == 3}">
        {{ navPageNum + 2 }}
      </div>
      <div @click="setPage(navPageNum + 3)" class="pagination__num" 
           :class="{'pagination-current__num': currentPageNum == 4}">
        {{ navPageNum + 3 }}
      </div>
      <div @click="setPage(navPageNum + 4)" class="pagination__num" 
           :class="{'pagination-current__num': currentPageNum == 5}">
        {{ navPageNum + 4 }}
      </div>  
      <div v-if="pageNum !== pageCount - 1" class="pagination-container__button" @click="nextPage()">
        <img class="pagination__button" src="@/assets/svg/vector.svg"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'postsPage',
  data () {
      return {
        showReadMore: [],
        errorLoadingImg: [],
        pageNum: 0,
        navPageNum: 1,
        currentPageNum: 1
      }
  },
  created () {
    this.$store.dispatch('GET_POSTS')
  },
  computed: {
    TranslatedText () {
      let currentLang = this.$store.state.language
      let text = this.$store.state.lang[currentLang]
      return text
    },
    posts () {
      let posts = this.$store.state.posts.posts
      
      return posts
    },
    pageCount(){
      let l = this.posts.length,
          s = 8;
      return Math.ceil(l/s);
    },
    paginatedData(){
      const start = this.pageNum * 8,
            end = start + 8;
      return this.posts.slice(start, end);
    }
  },
  watch: {
    posts () {
      this.showReadMore = new Array(this.posts).fill(false);
    },
  },
  methods: {
    setPage (ind) {
      ind--
      this.pageNum = ind 
      if(this.pageNum > this.pageCount - 5) {
        this.navPageNum = this.pageCount - 4
        this.currentPageNum = 6 - (this.pageCount - this.pageNum)
      }
      else {
        this.currentPageNum = 1
        this.navPageNum = this.pageNum + 1
      }
    },
    nextPage(){
      this.pageNum++;
      this.pageNum >= this.pageCount - 4 ? this.currentPageNum++ : this.navPageNum = this.pageNum + 1
    },
    prevPage(){
      this.pageNum--;
      this.pageNum >= this.pageCount - 5 ? this.currentPageNum -= 1 : this.navPageNum = this.pageNum + 1
    }
  }
}
</script>

<style>
.pagination__container {
  margin-bottom: 140px;  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
}

.pagination-container__button {
  border-radius: 12px;
  border-color: #e8e8e8;  
  border-style: solid;
  border-width: 1px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination-container__button img {
  
}

.pagination__button {

}

.rotated-button {
  transform: scale(-1, 1);
}

.pagination__num {
  background-color: #f3f3f3;
  color: black;
  border-radius: 12px;
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination-num__p {
  font-size: 16px;
  height: 15px;
}

.pagination-current__num {
  background-color: black;
  color: white;
}


img { 
  -moz-user-select: none; 
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
}



.project__translate {
  transform: translateY(-25px);
}

.project {
  display: flex;
  flex-direction: column;
  transition: 0.3s ease all;
}

.projects {
  padding: 60px 0 50px;
  background-color: #fff;
}

.projects .page-title {
  margin-bottom: 50px;
}

.projects__row {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.project__span {
  position: absolute;
  bottom: 0;
  color: #E2BEFF;
  font-size: 20px;
  cursor: pointer;
}

.projects__col {
  width: calc(25% - 24px);
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}

.project__img {
    padding-bottom: 100.1792114695%;
    position: relative;
    display: block;
    margin-bottom: 24px;
    
}
.project__img:after {
  position: absolute;
  background-image: url("@/assets/svg/logo.svg");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  z-index: 0;
  background-color: #e2beff;
}

.project__img div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
}

.error__img {
  object-fit: none !important;
}



.link-hover {
    position: relative;
}

.project__title {
  font-size: 20px;
  line-height: 120%;
  font-weight: 400;
  color: #000 !important;
}


/*.link-hover:before {
    content: "";
    position: absolute;
    width: 0;
    bottom: 0;
    height: 2px;
    margin: -5px 0;
    left: 0;
    background-color: #101010;
    transition: all .4s ease-in 0s;
    border-radius: 999px;
}

.link-hover-active:before {
  width: calc(100% - 17px);
}*/

@media screen and (max-width: 1350px) {
  .projects__row {
    
  } 
  .projects__col {
    
  }

}

@media screen and (max-width: 1150px) {
  .projects__col {
  
  }  
}

@media screen and (max-width: 1030px) {
  .projects__col {
    min-height: auto;
   
  }
  .projects__col .project {
    flex-grow: 1;
  }
}


@media screen and (max-width: 700px) {
  .projects__row {
    margin: 32px 0 0;
    gap: 0;
  }
  .project__img {
    margin-bottom: 20px;
  }
  .project__title {
    font-size: 20px;
    line-height: 120%;
  }
  .projects__col {
    width: 100%;
    padding: 0;
  }
  .project {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 600px) {
  .projects {
    padding: 40px 0 60px;
  } 
  .projects .page-title {
    margin-bottom: 26px;
    text-align: left;
  }
  .page-title {
    font-size: 64px;
    text-align: center;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>