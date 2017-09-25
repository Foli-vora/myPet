<template>
    <div>
      <mainHeader @listenToChild="showHeaderHeight"></mainHeader>
      <scroller :style="{top: scrollTop+'px'}">
        <div class="container" ref="homeBody">
          <div>
            <bannerItem :num="index[0]"></bannerItem>
            <!--<div class="blingbling">
              <img src="https://img2.epetbar.com/nowater/2017-07/03/8/747562c921cd37cf0dafbe24ccfe62bd.gif">
            </div>-->
            <bannerItem :num="index[1]"></bannerItem>
            <columnNav></columnNav>

            <split></split>

            <surpriseItem></surpriseItem>

            <split></split>

            <currencyItem></currencyItem>

            <split></split>

            <customTitleItem :index="index[0]"></customTitleItem>
            <fashionItem></fashionItem>

            <split></split>

            <customTitleItem :index="index[1]"></customTitleItem>
            <bannerItem :num="index[2]"></bannerItem>
            <split></split>

            <customTitleItem :index="index[2]"></customTitleItem>
            <goodsContainer></goodsContainer>

            <split></split>
            <charityItem></charityItem>
            <split></split>
            <judgeItem></judgeItem>
            <split></split>

            底部

          </div>
          <div class="white" ref="whiteBox"></div>
        </div>
      </scroller>
      <div>
        <epet-footer :srcArr="srcArr"></epet-footer>
      </div>
      <div class="dogBox"></div>
    </div>
</template>

<script>
  import mainHeader from '../mainHeader/mainHeader.vue'

  import footer from '../footer/footer.vue'

  import surpriseItem from '../surpriseItem/surpriseItem.vue'
  import bannerItem from '../bannerItem/bannerItem.vue'
  import columnNav from '../columnNav/columnNav.vue'
  import currencyItem from '../currencyItem/currencyItem.vue'
  import customTitleItem from '../customTitleItem/customTitleItem.vue'
  import fashionItem from '../fashionItem/fashionItem.vue'
  import goodsContainer from '../goodsContainer/goodsContainer.vue'
  import charityItem from '../charityItem/charityItem.vue'
  import judgeItem from '../judgeItem/judgeItem.vue'

  import split from '../split/split.vue'

  import BScroll from 'better-scroll'

  export default {
    components: {
      mainHeader,
      'epet-footer': footer,
      surpriseItem,
      bannerItem,
      columnNav,
      currencyItem,
      split,
      customTitleItem,
      fashionItem,
      goodsContainer,
      charityItem,
      judgeItem
    },

    data () {
      return {
        index: [0,1,2,3,4],
        scrollTop: 150,
        srcArr: [
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_1_sel.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_2.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_3.png',
          'https://static.epetbar.com/static_web/wap/dist/images/background/main_tab_4.png'
        ]
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.homeBody)
      })
    },
    methods: {
      showHeaderHeight (data) {
        this.scrollTop = data
        this.$refs.whiteBox.style.height = (data + 44) +'px'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .container
    .white
      width 100%
      height 194px
  .dogBox
    @keyframes nnh{
      from{
        background-position: 0 0;
      }
      to{
        background-position: -85px 0;
      }
    }
    overflow hidden
    position absolute
    right -1px
    bottom 15%
    width 41px
    height 46px
    background url("../../assets/godog.png") no-repeat
    background-size 80px auto
    animation nnh 2.5s steps(2) infinite
    z-index 2
</style>
