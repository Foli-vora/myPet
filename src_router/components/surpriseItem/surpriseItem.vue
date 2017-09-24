<template>
  <div class="surprise">
    <div class="surpriseTitle">
      <div class="title">
        <img src="./suprice.png">
      </div>
      <div class="text">距本场结束</div>
      <div class="time">
        <div class="time1">
          <span class="time1-1">02</span>
          <span class="time1-2">:</span>
          <span class="time1-1">00</span>
          <span class="time1-2">:</span>
          <span class="time1-1">00</span>
        </div>
      </div>
      <div class="more">
        <a href="">
          <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png">
        </a>
      </div>
    </div>
    <div class="surpriseContent">
      <div class="slide-container" ref="container">
        <ul class="slide-wrapper">
          <li class="slideItem" v-for="(item,index) in slideItems" :key="index">
            <div>
              <div class="picture">
                <img :src=item.src>
              </div>
              <div class="content">
                <span class="con_1">￥</span>
                <span class="con_2">{{item.price}}</span>
              </div>
              <div class="text">
                <span>省￥{{item.oldPrice - item.price}}</span>
              </div>
            </div>
          </li>
          <!--<div class="slideItem" v-for="(item,index) in slideItems" :key="index">
            <div class="picture">
              <img :src=item.src>
            </div>
            <div class="content">
              <span class="con_1">￥</span>
              <span class="con_2">{{item.price}}</span>
            </div>
            <div class="text">
              <span>省￥{{item.oldPrice - item.price}}</span>
            </div>
          </div>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        slideItems: [
          {
            src: 'https://img1.epetbar.com/2016-08/12/16/f766d1fef18aaff6ee084f5103946ae8.jpg',
            price: 19.00,
            oldPrice: 38.00
          },
          {
            src: 'https://img1.epetbar.com/2017-05/31/16/83b21cd8bd2ebe1b51b34755478ee0c9.jpg',
            price: 20.00,
            oldPrice: 37.00
          },
          {
            src: 'https://img1.epetbar.com/2015-05/16/d2d57fa9309ea5c52a4d91fa2cadfefe.jpg',
            price: 43.00,
            oldPrice: 63.00
          },
          {
            src: 'https://img1.epetbar.com/2016-12/24/16/4ce29026e631dbf6be80f447ad3e4e75.jpg',
            price: 55.00,
            oldPrice: 66.00
          },
          {
            src: 'https://img1.epetbar.com/2016-07/13/12/597fcc94f7775b10b473ef9e483e019e.jpg',
            price: 26.00,
            oldPrice: 36.00
          },
          {
            src: 'https://img1.epetbar.com/2017-05/19/14/71cab14b20687460c909ce05c836939e.jpg',
            price: 28.00,
            oldPrice: 37.00
          },
          {
            src: 'https://img1.epetbar.com/2017-07/13/15/1009e07d445939d7d618cfa2e0c1856d.jpg',
            price: 31.00,
            oldPrice: 39.00
          },
          {
            src: 'https://img1.epetbar.com/2016-03/23/14/cf59dc7689e0e5695e7a45acd041263b.jpg',
            price: 10.00,
            oldPrice: 16.00
          },
          {
            src: 'https://img1.epetbar.com/2017-04/05/18/aa3ca06d84f8edb8a4341735df80a71d.png',
            price: 66.00,
            oldPrice: 106.00
          },
          {
            src: 'https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg',
            price: 77.00,
            oldPrice: 116.00
          },
          {
            src: 'https://img1.epetbar.com/2017-08/15/18/fbb899f7cdb226bce4e4f57bd2231f45.jpg',
            price: 33.00,
            oldPrice: 47.00
          },
          {
            src: 'https://img1.epetbar.com/2015-08/26/16/38eda7eaad012c829ea4d7918e3d1a17.jpg',
            price: 48.00,
            oldPrice: 68.00
          }
        ]
      }
    },

    mounted () {
      this.$nextTick(() => {
        if(!this.scroll){
          this.scroll = new BScroll(this.$refs.container,{
            click: true,
            scrollX: true}
          )
        } else {
          this.scroll.refresh()
        }

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.surprise
  position relative
  .surpriseTitle
    text-align center
    height 40px
    padding 10px
    .title
      float left
      width 85px
      img
        display block
        text-align center
        width 105px
        height 24px
        padding auto
        margin-left -20px
        vertical-align middle
    .text
      float left
      margin-top 1px
      font-size 13px
      margin-left 10px
    .time
      float left
      margin-left 5px
      text-align center
      .time1
        display flex
        font-size 12px
        width 83px
        height 20px
        .time1-1
          border 1px solid #ddd
          padding 1px 2px
          font-size 13px
        .time1-2
          margin 0.3px
          font-size 12px
          font-weight 700
    .more
      position absolute
      top 2px
      right -8px
      a
        img
          display block
          margin 0 0 0 auto
          width 50%
          vertical-align middle
  .surpriseContent
    padding-left 5px
    margin-bottom 10px
    .slide-container
      width 100%
      height 100%
      margin 0 auto
      position relative
      overflow hidden
      .slide-wrapper
        width 1182px
        margin-right 10px
        white-space nowrap
        /*display flex*/
        .slideItem
          display inline-block
          height 100%
          margin 0 .5em
          font-size 12px
          .picture
            width 85px
            height 85px
            img
              width 100%
              height 100%
          .content
            color red
            margin-top 5px
            text-align center
          .text
            color #999
            text-align center
</style>
