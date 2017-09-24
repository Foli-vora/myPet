<template>
  <div>
    <div>
      <mainHeader></mainHeader>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import mainHeader from '../mainHeader/mainHeader.vue'


  export default {
    components: {
      mainHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
