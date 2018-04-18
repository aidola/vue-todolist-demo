<template>
  <div class="helper">
    <span class="left">{{unfinishedTodosLength}} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
      {{state}}
      </span>
      <span class="clear" @click="clearAllCompleted"> Clear completed</span>
    </span>
  </div>
</template>
<script>
export default {
  props:{
    filter:{
      required:true,
      type:String,
    },
    todos:{
      required:true,
      type:Array
    }
  },
  data(){
    return {
      states:['all','active','completed']
    }
  },
  computed:{
    unfinishedTodosLength(){
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods:{
    toggleFilter(state){
      this.$emit('toggle',state);
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted');
    }
  }
}
</script>
<style lang="stylus" scoped>
.helper
  width 100%
  height 40px
  line-height 40px
  margin 0 auto
  background #fff
  text-indent 10px
  padding 7px

  .left
      float left
  .tabs
      margin-left 100px
      span
          padding 0 5px
          margin 0 5px
          cursor pointer
      .actived
          border 1px solid #000000


  .clear
      float right
      margin-right  10px
</style>


