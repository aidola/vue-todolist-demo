<template>
  <div id="app">
    <div class="cover"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){

  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
#app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-family:"Microsoft Yahei"
}
#cover
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999999
  opacity .9
  z-index -1
</style>
