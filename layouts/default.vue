<template>
  <div>
    <Header/>
    <slot class="main"/>
    <Footer/>
  </div>
</template>


<script >
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'defaultVue',
  components: {
    Header, Footer
  }
}
</script>