<template>
  <div>
    <Posts/>
  </div>
</template>

<script lang="ts">
import Posts from './posts/index.vue'
export default {
  name: 'homePage',
  components: {
    Posts
  }
}
</script>