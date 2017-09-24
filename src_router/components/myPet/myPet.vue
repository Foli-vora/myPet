<template>
  <div>
    <div class="imgWrapper">
      <div class="headerTop">
        <a href="" class="back"></a>
        <div class="register">
          <a href="">注册</a>
        </div>
      </div>
      <div class="headerMiddle">
        <img src="http://static.epetbar.com/mpet/images/login/logo.png">
      </div>
      <div class="headerBottom">
        <ul>
          <li class="bottomLeft">
            <a href="javascript;">普通登录</a>
            <i></i>
          </li>
          <li class="bottomRight">
            <a href="javascript;">手机动态密码登录</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="wrapper">
        <div class="inner" v-show="true">
          <ul>
            <li>
              <span class="nameIco"></span>
              <input type="text" name="username" placeholder="手机号/邮箱/用户名">
            </li>
            <li>
              <span class="passwordIco"></span>
              <input type="password" name="password" placeholder="输入密码">
            </li>
          </ul>
        </div>
        <div class="inner" v-show="false">
            <ul>
              <li>
                <span class="numIco"></span>
                <input type="text" name="username" placeholder="已注册的手机号">
              </li>
              <li>
                <span class="passwordIco"></span>
                <input type="password" name="password" placeholder="输入密码">
                <span class="numImg">
                  <img src="https://wap.epet.com/share/seccode.html?hash=5157&height=30&width=85" alt="">
                </span>
              </li>
              <li>
                <span class="passwordIco"></span>
                <input type="password" name="password" placeholder="动态密码">
                <a href="" class="getPhonePass f14" v-show="false">已发送</a>
                <a href="" class="getPhonePass f12">获取动态密码</a>
              </li>
            </ul>
          </div>
      </div>
      <div class="d1">
        <a href="">忘记密码？</a>
      </div>
      <div class="d2">
        <a href="">登录</a>
      </div>
      <div class="d3">
        APP专享:E宠团5折包邮,首单满99送99<a href="">去下载</a>
      </div>
      <div class="d4"></div>
      <div class="d5">
        <div class="text">合作网站登录</div>
        <ul>
          <li class="zhifubao">
            <img src="http://static.epetbar.com/mpet/images/login/login_ico4.png">
          </li>
          <li class="qq">
            <img src="http://static.epetbar.com/mpet/images/login/login_ico2.png">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .imgWrapper
    background url("https://img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png") no-repeat
    background-size 100% 177.88px
    .headerTop
      height 50px
      line-height 50px
      padding 0 12px
      text-align center
      position relative
      .back
        background url("https://static.epetbar.com/mpet/images/personal-bico3.png") no-repeat
        background-size 12px 17px
        display block
        width 22px
        height 20px
        position absolute
        margin-top 16px
      .register
        position absolute
        top 0
        right 10px
        display block
        a
          color #fff

    .headerMiddle
      padding 12px 0 24px 0
      img
        display block
        margin auto
        width 20%
        vertical-align middle
    .headerBottom
      background-color rgba(255,255,255,0.3)
      height 44px
      ul
        li
          float left
          width 50%
          text-align center
          height 44px
          line-height 44px
          position relative
          &>a
            font-size 15px
            color #fff
            display block
          &>i
            display block
            width 0
            height 0
            border-left 10px solid transparent
            border-right 10px solid transparent
            border-bottom 10px solid #fff
            position absolute
            bottom 0
            left 0
            right 0
            margin auto
            font-style normal



  .content
    .wrapper
      width 100%
      /*height 92px*/
      background #fff
      border-radius 6px
      margin 0 4% 0 4%
      padding 0 1.6%
      .inner
        width 100%
        height 100%
        ul
          &>li
            border-bottom #e2e2e2 solid 1px
            padding 12px 0 12px 30px
            position relative
            box-sizing content-box
            width 303px
            &>input
              display block
              height 21px
              width 100%
              font-size 15px
              border none
              padding 0
              color #666
              font-family "Microsoft YaHei",Tahoma,Arial
              outline none
            .nameIco
              float left
              display inline
              height 21px
              width 17px
              background url("https://static.epetbar.com/mpet/images/ico3.png") no-repeat
              background-size contain
              margin 1px 0 0 -25px
            .passwordIco
              float left
              display inline
              height 20px
              width 17px
              margin 0 0 0 -25px
              background url("https://static.epetbar.com/mpet/images/ico4.png") no-repeat
              background-size contain
            .numIco
              float left
              display inline
              height 17px
              width 17px
              background url("https://static.epetbar.com/mpet/images/ico1.png") no-repeat
              background-size contain
              margin 2px 0 0 -25px
            .numImg
              display block
              position absolute
              top 5px
              right 0
              img
                vertical-align middle
            .getPhonePass
              background #fff
              color #ff4259
              border 1px solid #eb4c33
              position absolute
              right 0
              top 5px
              border-radius 3px
              width 100px
              text-align center
              padding 3px 0
            .f14
              font-size 14px
            .f12
              font-size 12px
    .d1
      box-sizing border-box
      width 100%
      height 20px
      padding 0 24px
      text-align center
      margin-top 12px
      a
        display block
        color #898989
        font-size 14px
        float right
    .d2
      box-sizing border-box
      width 100%
      height 44px
      padding-top 6px
      text-align center
      display block
      a
        margin 0 15px
        display block
        letter-spacing 5px
        border-radius 5px
        background #2ec975
        font-size 15px
        padding 10px 0
        text-align center
        color #fff
    .d3
      width 100%
      height 20px
      color #666
      font-size 12px
      margin-top 6px
      text-align center
      a
        color #0ca4ed
    .d4
      height 120px
      width 100%
    .d5
      width 100%
      height 113.66px

      .text
        width 100%
        height 20px
        color #d7d7d7
        margin-top 6px
        font-size 16px
        text-align center
        font-weight normal
      ul
        width 100%
        height 93.66px
        padding 18px 0
        box-sizing border-box
        &>li
          width 33.3333%
          padding 0 13px
          float left
          display inline
          box-sizing border-box
          &>img
            width 60%
            height auto
            display block
            margin auto
            max-width 176px
            vertical-align middle
</style>
