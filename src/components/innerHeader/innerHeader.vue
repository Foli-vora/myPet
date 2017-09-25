<template>
  <div class="innerHeader" ref="innerHeader">
    <div class="xiazaiApp" v-show="ShowImg" @click="showBottom($event)">
      <span class="smallBtn">
        <img src="http://static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
      </span>
      <div class="xiazaiImg">
        <a href="https://wap.epet.com/download.html?do=market&utm_source=baidu-wap-pz&utm_type=source">
          <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water">
        </a>
      </div>
    </div>
    <div class="middleHeader">
      <div class="middleHeaderWrap">
        <div class="wrapper">
          <a href="#" class="back"></a>
          <span class="middleText">{{describe}}</span>
          <span class="rightImg" @click="showBottom($event)" ref="rightBox"></span>
        </div>
      </div>
      <div class="hiddenBottom" v-show="isShow">
        <router-link to="/home">
          <span class="icon1"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/goods">
          <span class="icon2"></span>
          <p>分类</p>
        </router-link>
        <router-link to="/shopcart">
          <span class="icon3">
            <em>{{tool}}</em>
          </span>
          <p>购物车</p>
        </router-link>
        <router-link to="/myPet">
          <span class="icon4"></span>
          <p>我的e宠</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    props: {
      describe: String,
      tool: Number
    },

    data () {
      return {
        isShow: false,
        ShowImg: true,
        innerHeaderHeight: 106
      }
    },
    methods: {
      showBottom (event) {
        if(event.target == this.$refs.rightBox) {
          this.isShow = !this.isShow
        } else {
          this.ShowImg = !this.ShowImg
        }

        // 实时获取头部的高度
        setTimeout(() => {
          this.innerHeaderHeight = this.$refs.innerHeader.offsetHeight
        },)
        // 获取完高度之后，再 使用$emit来触发一个自定义事件，并传递一个参数 这是子组件向父组件 传递信息的方法
        // 在这里 因为 获取头部的高度是
        setTimeout(() => {
          this.$emit('listenToChild',this.innerHeaderHeight)
        },1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .innerHeader
    background white
    height 100%
    .xiazaiApp
      max-width 640px
      margin 0 auto
      position relative
      .smallBtn
        position absolute
        top: 20%
        left: 2%
        width 5%
        vertical-align middle
        display inline-block
        margin-right 2%
        &>img
          height 100%
          width 100%
      .xiazaiImg
        &>a
          img
            width 100%
            vertical-align middle
    .middleHeader
      display block
      opacity 1
      height auto
      .middleHeaderWrap
        height 50px
        line-height 50px
        position relative
        padding 0 14px
        border-bottom 1px solid #f3f3f3
        background #fff
        text-align center
        color #333
        .wrapper
          .back
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/personal-bico1.png") no-repeat
            background-size 9px 17px
            display block
            width 22px
            height 20px
            position absolute
            margin-top 17px
          .middleText
            width 90%
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            display block
            margin 0 auto
            font-size 18px
          .rightImg
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/imgtk-new.png") no-repeat
            background-size 20px 20px
            position absolute
            top 0
            right 14px
            width 20px
            height 20px
            z-index 100
            cursor pointer
            margin-left 10px
            margin-top 15px
            float right
      .hiddenBottom
        display block
        width 100%
        background #fff
        border-bottom 1px solid #d7d7d7
        overflow hidden
        padding 10px 0
        a
          display inline-block
          width 25%
          text-align center
          float left
          color #333
          p
            color #666
            font-size 14px
            text-align center
          span
            display block
            height 30px
          .icon1
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/head_icon1.png") 50% 0 no-repeat
            background-size auto 100%
          .icon2
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/head_icon2.png") 50% 0 no-repeat
            background-size auto 100%
          .icon3
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/head_icon4.png") 50% 0 no-repeat
            background-size auto 100%
            position relative
            em
              display inline-block
              height 22px
              width 22px
              color #fff
              text-align center
              line-height 18px
              font-size 12px
              background red
              border-radius 14px
              border #fff solid 2px
              position absolute
              top -7px
              right 14px
              font-style  normal
          .icon4
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/head_icon5.png") 50% 0 no-repeat
            background-size auto 100%


</style>
