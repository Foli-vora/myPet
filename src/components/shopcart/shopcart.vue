<template>
  <div class="shopCartWrap">
    <div>
      <innerHeader :describe="describe" :tool="tool" @listenToChild="showHeaderHeight"></innerHeader>
      <router-view></router-view>
    </div>
    <div class="bodyWrap" :style="{top: scrollTop+'px'}">
      <div class="myCart">
        <div class="cartImgWrap">
          <span class="cartImg"></span>
        </div>
        <div class="emptyCart">购物车是空的</div>
        <div class="chooseBox">
          <a href="javascript:;">去逛逛</a>
          <a href="javascript:;">我的收藏</a>
        </div>
      </div>
      <div class="white"></div>
    </div>
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
        describe: '购物车',
        tool: 0,
        scrollTop: 106
      }
    },
    methods: {
      showHeaderHeight (data) {
        this.scrollTop = data
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopCartWrap
  font-size 18px
  background #f5f5f5
  width 100%
  height 667px
  text-align center
  .bodyWrap
    background white
    .myCart
      .cartImgWrap
        .cartImg
          margin 50px auto 20px
          display inline-block
          width 100px
          height 100px
          background url("https://static.epetbar.com/mpet/images/cart-ico.png") no-repeat 0 -160px
          background-size 105px auto
      .emptyCart
        color #dbdbdb
        font-size 16px
        text-align center
      .chooseBox
        margin-top 15px
        a
          display inline-block
          border-radius 5px
          border 1px solid #999
          height 40px
          line-height 40px
          width 100px
          color #999
          font-size 18px
    .white
      width 100%
      height 60px
      background #fff
</style>
