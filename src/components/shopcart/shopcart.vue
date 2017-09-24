<template>
  <div>
    shopcart组件
    <div>
      <epet-footer></epet-footer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import footer from '../footer/footer.vue'

  export default {
    components: {
     'epet-footer': footer
     }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
