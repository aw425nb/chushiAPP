<template>
  <div id="app">
    <router-view/>
   <Footer/>
  </div>
</template>
<script>
import Footer from "./pages/footer/footer.vue"

export default {
  components:{
    Footer
  }
  
}
</script>

<style lang="stylus" scoped>

</style>
