<template>
  <div>
    <div class="zhuliang">
      <innerHeader></innerHeader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import innerHeader from '../innerHeader/innerHeader.vue'
  export default {
    components: {
      innerHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
