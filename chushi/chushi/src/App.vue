<template>
  <div id="app">
    <router-view/>
    <Footer v-if="isshow"></Footer>
  </div>
</template>
<script>
import Footer from "./pages/footer/footer.vue"

export default {
  components:{
    Footer
  },
  data () {
    return {
      isshow:true
    }
  },
  mounted () {
    this.isshow = this.$route.meta.isshow
  }
  
}
</script>

<style lang="stylus" scoped>

</style>
