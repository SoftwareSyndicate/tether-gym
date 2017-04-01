<template lang="pug">
div#app
  div.nav-container
    s-nav(:items="nav_items", :brand="gym.name")

  div.content-container
    div.breadcrumbs-container
      s-breadcrumbs(:crumbs="crumbs")

    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: mapGetters ({
    nav_items: 'nav_items',
    crumbs: 'crumbs',
    gym: 'gym'
  }),
  created(){
  }
}
</script>

<style lang="stylus">

body
  margin 0px
  height 100vh
  
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height 100%
  display flex
  flex-wrap wrap

  .nav-container
    display flex
    flex-basis 15%  

  .content-container
    flex-basis 85%  
    flex-wrap wrap  
    
    .breadcrumbs-container
      flex-basis 100%

    .view-container
      flex-basis 100%
      padding 1em

      .fade-enter-active, .fade-leave-active
        transition all .2s ease

      .fade-enter, .fade-leave-active
        opacity 0

      
h1, h2, h3, h4, h5, h6
  margin 0px
  font-weight normal

</style>
