<template>
  <scroller>
    <div class="brand-list">
      <imgItem :number="numberArr[0]"></imgItem>
      <imgItem :number="numberArr[1]"></imgItem>
      <imgItem :number="numberArr[2]"></imgItem>
      <div class="white"></div>
    </div>
  </scroller>
</template>

<script>
  import imgItem from '../imgItem/imgItem.vue'
  export default {
    components: {
      imgItem
    },
    data () {
      return {
        numberArr: [0,1,2,3,4,5,6,7,8,9]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brand-list
  padding-top 40px
  background #f3f4f5
  .white
    width 100%
    height 44px
</style>
