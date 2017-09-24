<template>
  <div class="footerNav">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../../assets/main_tab_1_sel.png">
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <img src="../../assets/main_tab_2.png">
        </router-link>
      </li>
      <li>
        <router-link to="/shopcart">
          <img src="../../assets/main_tab_3.png">
        </router-link>
      </li>
      <li>
        <router-link to="/myPet">
          <img src="../../assets/main_tab_4.png">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
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
