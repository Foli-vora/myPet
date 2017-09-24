<template>
  <div class="columnNavDiv">
    <ul>
      <li v-for="(image,index) in images" :key="index">
        <a href="">
          <img :src=image>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          "https://img1.epetbar.com/2017-09/20/19/e77641bc5e038c17069fc3b0953ed82a.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/93e48869e3da723f9248c27718f39956.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/c8eb54f31278c068ec5d731ec650a886.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/0b7132cfff063d7f17f614c25ce9da1c.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/b3fa851021c844ae8a7493567c26e8ce.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/4335b268a53422a205c1f322370d31c1.png@!water",
          "https://img1.epetbar.com/2017-09/20/19/cca7810f68fe70fa82aff20f53c2eaa0.jpg@!water",
          "https://img1.epetbar.com/2017-09/21/10/34570dec4ee213b0b998563f687c0ebf.jpg@!water"
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.columnNavDiv
  width 100%
  height 195.5px
  ul
    padding 10px 0
    height 100%
    li
      width 25%
      float left
</style>
