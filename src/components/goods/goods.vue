<template>
  <div>
    <div>
      <goodsHeader></goodsHeader>
      <div class="content">

      </div>
      <epet-footer :srcArr="srcArr"></epet-footer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import footer from '../footer/footer.vue'
  import goodsHeader from '../goodsHeader/goodsHeader.vue'

  export default {
    components: {
      'epet-footer': footer,
      goodsHeader
    },
    data () {
      return {
        srcArr:[
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_1.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_2_sel.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_3.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_4.png'
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
