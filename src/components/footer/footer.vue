<template>
  <div class="footerNav">
    <ul>
      <li>
        <router-link to="/home">
          <img :src=srcArr[0]>
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <img :src=srcArr[1]>
        </router-link>
      </li>
      <li>
        <router-link to="/shopcart">
          <img :src=srcArr[2]>
        </router-link>
      </li>
      <li>
        <router-link to="/myPet">
          <img :src=srcArr[3]>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      srcArr: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerNav
    z-index 102
    width 100%
    background white
    position fixed
    bottom 0
    li
      float left
      width 25%
      text-align center
      img
        width 40px
        height 42px

</style>
