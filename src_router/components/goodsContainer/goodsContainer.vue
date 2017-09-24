<template>
  <div class="goodsContainer">
    <ul>
      <li v-for="(item,index) in items">
        <div class="title">
          <span class="title1">{{item.title}}</span>
          <span class="title2" v-show="item.smallTitle">{{item.smallTitle}}</span>
        </div>
        <div class="imageContainer">
          <img class="image" :src=item.src>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: '伯纳天纯',
            smallTitle: '',
            src: "https://img2.epetbar.com/nowater/2017-09/20/09/88edca1b9538b28257f4c14fa546d55e.jpg@!water"
          },
          {
            title: '海洋之星FISH4DOGS',
            smallTitle: '',
            src: "https://img2.epetbar.com/nowater/2017-09/04/10/85ee6b88797f7f5662dd298980a079d3.jpg@!water"
          },
          {
            title: '冠能',
            smallTitle: '送178元宠物碗',
            src: "https://img2.epetbar.com/nowater/2017-09/05/11/f5a8e5759be0295bc0f49f88efecd4bb.jpg@!water"
          },
          {
            title: '丝倍亮',
            smallTitle: '8折加送丝巾',
            src: "https://img2.epetbar.com/nowater/2017-09/05/14/c910e01072da0cf4a83eafda5a492f3f.jpg@!water"
          },
          {
            title: '荣耀玛氏',
            smallTitle: '全场6折起',
            src: "https://img2.epetbar.com/nowater/2017-09/19/10/2f0b98bc57350354a0cbfe1090c97ae2.jpg@!water"
          },
          {
            title: '优卡',
            smallTitle: '只为爱宠卓越表现',
            src: "https://img2.epetbar.com/nowater/2017-09/20/13/1b18c703af536f15160beb1d0de06275.jpg@!water"
          },
          {
            title: '禾仕嘉&Martbones',
            smallTitle: '',
            src: "https://img2.epetbar.com/nowater/2017-09/19/13/4c58a988b2d91593f0bbadbd20d90a2a.jpg@!water"
          },
          {
            title: '爱普士妙鲜包',
            smallTitle: '8折尝鲜',
            src: "https://img2.epetbar.com/nowater/2017-08/31/10/6452054f25e2d89ce1413ecdc7d43a43.jpg@!water"
          },
          {
            title: 'NexGard尼可信',
            smallTitle: '',
            src: "https://img2.epetbar.com/nowater/2017-09/18/16/02601e1592dd7cff65711e59a0c997dd.jpg@!water"
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goodsContainer
  width 100%
  ul
    li
      height 199px
      .title
        width 100%
        height 24px
        padding 10px
        .title1
          font-size 15px
        .title2
          font-size 12px
          color #999
          margin-left 5px
      .imageContainer
        width 100%
        height 155px
        .image
          width 100%
          height 100%
</style>
