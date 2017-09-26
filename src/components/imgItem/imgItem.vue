<template>
  <div class="brandItem">
    <div class="title">
      <span>—— {{titles[number]}} ——</span>
    </div>
    <div class="list">
      <ul>
        <li class="listItem" v-for="(Item,index) in brandItems[number]" :key="index">
          <div>
            <div class="img">
              <img :src="Item.src">
            </div>
            <p class="name">{{Item.name}}</p>
            <p class="address">{{Item.address}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      number: Number
    },
    data () {
      return {
        titles: ["推荐品牌","主粮品牌","零食品牌"],
        brandItems: [
            [
              {
                name: 'ZIWI Peak',
                address: '新西兰',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg'
              },
              {
                name: '渴望',
                address: '加拿大',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2013-01/28/87feaa80f9fbed84c37a7b07da6324a1.jpg'
              },
              {
                name: '卡比CANIDAE',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg'
              },
              {
                name: '爱肯拿Acana',
                address: '加拿大',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/370a7f6ed7d607b8542aa9e37d202ac5.jpg'
              }
            ],
            [
              {
                name: '耐吉斯',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/16/2d1826af31eac743bb3c32233511d759.jpg'
              },
              {
                name: 'ZIWI Peak',
                address: '新西兰',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg'
              },
              {
                name: '荒野盛宴',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/17f86c4bc86565f0bcefc596bfb9cdb8.jpg'
              },
              {
                name: '卡比CANIDAE',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/f439e0dc22df3f6c5bc8919b8d9e5c82.jpg'
              },
              {
                name: '贵族Natures Gift',
                address: '澳大利亚',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2014-08/06/ef4a3c316d6f2bb6a4258c4bbe962da3.jpg'
              },
              {
                name: '鱼子酱Canine Caviar',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/436a1eeeb8fdb467fcf70c104286f98e.jpg'
              },
              {
                name: 'N3',
                address: '中国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/72d26c05eb8f3c3ad381603c2c74bacb.jpg'
              },
              {
                name: '丝倍亮Supercoat',
                address: '澳大利亚',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-10/13/8/a7e6f487268d5d809bb4ed93fc36e439.jpg'
              },
              {
                name: '希尔斯',
                address: '美国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-10/31/18/2c672ffae063615967f02150c8eab500.jpg'
              },
              {
                name: '喜乐比SharlovY',
                address: '中国',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/d7d5e71790b343ef4fa5b6e6b9a04cf7.jpg'
              },
              {
                name: '渴望',
                address: '加拿大',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2013-01/28/87feaa80f9fbed84c37a7b07da6324a1.jpg'
              },
              {
                name: '爱肯拿Acana',
                address: '加拿大',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/370a7f6ed7d607b8542aa9e37d202ac5.jpg'
              }
          ],
            [
              {
                name: 'HappiDoggy',
                address: '新加坡',
                src: 'https://img2.epetbar.com/nowater/brand_logo/2016-12/15/14/a9fcef55f088b6c7c4e6833568d4669e.jpg'
              }
            ],
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brandItem
  padding-bottom 15px
  margin-bottom 10px
  background #fff
  .title
    padding-top 20px
    font-size 12px
    color #999
    text-align center
  .list
    ul
      .listItem
        display inline-block
        margin-top 20px
        width 33.33%
        padding 0 5px
        position relative
        box-sizing border-box
        .img
          box-sizing border-box
          border 1px solid #e2e2e2
          text-align center
          padding 50px 10px 10px
          height 50px
          position relative
          img
            max-width 100%
            height 40px
            margin 10px auto 0
            position absolute
            top 0
            left 0
            right 0
            display block
            border 0
            vertical-align middle
        &>p
          height 20px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .name
          font-size 13px
          margin-top 5px
          text-align center
          color #333
        .address
          font-size 12px
          color #999
          text-align center
</style>
