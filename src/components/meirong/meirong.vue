<template>
  <div>
    <div>
      <innerHeader :describe="describe" :tool="tool" @listenToChild="showHeaderHeight"></innerHeader>
      <router-view></router-view>
    </div>
    <scroller :style="{top: scrollTop+'px'}">
      <div class="bodyWrap">
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        狗狗美容香波<br>
        <div class="white" ref="whiteBox"></div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import innerHeader from '../innerHeader/innerHeader.vue'
  export default {
    components: {
      innerHeader
    },
    data () {
      return {
        describe: '美容香波',
        tool: 37,
        scrollTop: 106
      }
    },
    methods: {
      showHeaderHeight (data) {
        this.scrollTop = data
        this.$refs.whiteBox.style.height = data +'px'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .white
    height 106px
    width 100%
</style>
