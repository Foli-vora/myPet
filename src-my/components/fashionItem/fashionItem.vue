<template>
  <div class="fashion">
    <ul>
      <li v-for="(item,index) in items" :key="index">
        <div class="imgDiv">
          <img :src=item.src>
          <span class="smallBtn"></span>
        </div>
        <div class="text">
          <div class="text1">{{item.describe}}</div>
          <div class="text2">
            <span class="imgIco"></span>
            <span class="num">{{item.number}}</span>
            <span class="line">|</span>
            <span class="time">{{item.time}}</span>
          </div>
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
            src: "https://img1.epetbar.com/2017-07/28/13/2506a15cf4e969125891d29f869b8572.jpg@!500w0h",
            describe: "神奇饮水除口臭",
            number: 27465,
            time: '01:13'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.fashion
  ul
    li
      .imgDiv
        position relative
        width 375px
        height 211px
        img
          width 100%
          height 100%
        .smallBtn
          background url("https://static.epetbar.com/static_web/wap/dist/images/background/play.png") no-repeat
          background-size contain
          width 20px
          height 20px
          position absolute
          left 50%
          top 50%
          margin-left -10px
          margin-top -10px
      .text
        font-size 12px
        text-align center
        color #999
        padding 10px
        .text1
        .text2
          margin-top 8px
          .imgIco
            display inline-block
            background url("https://static.epetbar.com/static_web/wap/dist/images/background/view-black.png")  no-repeat
            background-size contain
            width 10px
            height 9px
          .num
            font-style normal
          .line
            margin 0 5px
</style>
