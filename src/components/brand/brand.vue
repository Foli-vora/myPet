<template>
  <div class="brand-list">
    <brandItem></brandItem>
    brand组件
  </div>
</template>

<script>
  import brandItem from '../bannerItem/bannerItem.vue'
  export default {
    components: {
      brandItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brand-list
  padding-top 40px
  background #f3f4f5
</style>
