<template>
  <div class="container">
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './header.vue'
import Footer from './footer.vue'
import Todo from './todo.vue'

export default {
  components:{
    Header,
    Todo,
    Footer
  }
}
</script>
<style lang="stylus" scoped>

</style>
