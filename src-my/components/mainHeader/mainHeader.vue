<template>
  <div class="mainHeader">
    <div class="xiazaiApp">
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
      <div class="mainWrapper">
        <div class="title">
          <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
            <span class="animals">狗狗站</span>
            <span class="line">|</span>
            <span class="text">重庆</span>
            <i></i>
          </a>
        </div>
        <div class="searchText">
          <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
            <input type="search" placeholder="搜索商品和品牌">
            <img src="../../assets/search.png">
          </a>
        </div>
        <div class="talk">
          <a href="https://wap.epet.com/wappms/pms.html?fw=0">
            <img src="http://static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
    </div>
    <div class="headerList">
      <div class="listWrap" ref="nav">
        <ul>
          <li class="on">
            <a href="https://wap.epet.com/?menu_param=0&pet_type=dog&fw=0">
            <span class="rela">
              <span>首页</span>
              <i></i>
            </span>
            </a>
          </li>
          <li>
            <a href="https://wap.epet.com/?menu_param=123&pet_type=dog&fw=0">
            <span class="rela">
              <span>主粮</span>
              <i></i>
            </span>
            </a>
          </li>
          <li>
            <a href="https://wap.epet.com/?menu_param=125&pet_type=dog&fw=0">
            <span class="rela">
              <span>医疗保健</span>
              <i></i>
            </span>
            </a>
          </li>
          <li>
            <a href="https://wap.epet.com/?menu_param=131&pet_type=dog&fw=0">
            <span class="rela">
              <span>零食玩具</span>
              <i></i>
            </span>
            </a>
          </li>
          <li>
            <a href="https://wap.epet.com/?menu_param=134&pet_type=dog&fw=0">
            <span class="rela">
              <span>日用外出</span>
              <i></i>
            </span>
            </a>
          </li>
          <li>
            <a href="https://wap.epet.com?menu_param=140&pet_type=dog&fw=0">
            <span class="rela">
              <span>美容香液</span>
              <i></i>
            </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    mounted () {
      this.$nextTick(() => {
        if(!this.scroll) {
          this.scroll = new BScroll(this.$refs.nav,{
            scrollX: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mainHeader
    background white
    position fixed
    top 0
    left 0
    z-index 4
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
    padding 5px 10px
    position relative
    display flex
    height 50px
    text-align center
    .mainWrapper
      /*display flex*/
      padding 8px 0
      width 100%
      text-align center
      display -webkit-box
      -webkit-box-align center
      .title
        margin-right 20px
        a
          position relative
          span
            color #898989
            font-size 13px
          i
            position absolute
            top 10px
            right -11px
            border-width 4px
            border-style solid solid dotted
            border-color: #898989 transparent transparent
      .searchText
        position relative
        -webkit-box-flex 1
        a
          input
            width 100%
            height 25px
            border 0
            background #e9e9e9
            border-radius 4px
            color #bcbcbc
            text-indent 10px
            font-size 13px
            outline 0
          img
            width 11px
            height 11px
            position absolute
            right 5px
            top 0
            bottom 0
            margin auto 0
            background-position 0 0
      .talk
        img
          width 25px
          margin-left 10px
  .headerList
    position relative
    width 100%
    height 35px
    .listWrap
      overflow hidden
      ul
        width 120%
        display flex
        white-space nowrap
        .on
          color #459d36
        li
          display inline-block
          width 16.6667%
          &>i
            background-color #459d36
          &>a
            display block
            width 100%
            height 100%
            line-height 36px
            font-size 14px
            text-align center
            color #666
            .rela
              position relative
              &>i
                position absolute
                bottom 1px
                left -10%
                width 120%
                height 2px
</style>
