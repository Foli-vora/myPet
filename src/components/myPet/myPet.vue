<template>
  <div>
    <div v-show="showMyPet">
      <div class="imgWrapper">
        <div class="headerTop">
          <a href="#" class="back"></a>
          <div class="register">
            <a href="javascript:;" @click="registerShow">注册</a>
          </div>
        </div>
        <div class="headerMiddle">
          <img src="http://static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="headerBottom">
          <ul>
            <li class="bottomLeft" @click="showForm(true)">
              <a href="javascript:;">普通登录</a>
              <i v-show="leftShow"></i>
            </li>
            <li class="bottomRight" @click="showForm(false)">
              <a href="javascript:;">手机动态密码登录</a>
              <i v-show="!leftShow"></i>
            </li>
          </ul>
        </div>
        <div class="forgetPassword">

        </div>
      </div>
      <div class="content">
        <div class="wrapper">
          <div class="inner" v-show="leftShow">
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
          <div class="inner" v-show="!leftShow">
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
                <a href="javascript:;" class="getPhonePass f14" v-show="false">已发送</a>
                <a href="javascript:;" class="getPhonePass f12">获取动态密码</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d1">
          <a href="javascript:;" @click="showForgetPassword">忘记密码？</a>
        </div>
        <div class="d2">
          <a href="javascript:;">登录</a>
        </div>
        <div class="d3">
          APP专享:E宠团5折包邮,首单满99送99<a href="javascript:;">去下载</a>
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
    <div class="maskWrapper">
      <div class="registerMask" v-show="showRegister">
        <!--<form action=""></form>-->
        <ul class="telephone">
          <li>
            <span class="telIco"></span>
            <input type="text" placeholder="请输入手机号码" name="phone">
            <!--输入框有内容 就变红色
                会验证手机号码的正确性  -- 只能是数字，够11位
            -->
          </li>
        </ul>
        <div class="nextTick">
          <a class="btn" :class="{isRed: showRed}" @click="ShowAddUser">下一步</a>
        </div>
      </div>
      <div class="addUser" v-show="addUser">
        <!--<form action=""></form>-->
        <ul class="newUser">
          <li>
            <span class="telIco"></span>
            <input type="text" placeholder="请输入手机号码" name="phone">
          </li>
          <li>
            <span class="secCodeIco"></span>
            <input type="seccode" placeholder="图片验证码" name="secCode" style="width:57%;display:inline-block;">
            <img class="numberImg" src="https://wap.epet.com/share/seccode.html?hash=6157&height=30&width=85">
          </li>
          <li>
            <span class="mEmailIco"></span>
            <input type="text" placeholder="验证码" name="code" style="padding-right:9.5em;">
            <a class="textImgAfter" href="javascript:;" v-show="false">
              (<d id="time">60</d>)验证码已发送</a>
            <a class="textImgNow" href="javascript:;">获取短信验证码</a>
          </li>
          <li>
            <span class="mNameIco"></span>
            <input type="text" placeholder="你的昵称/用户名" name="username">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="password" placeholder="请设置密码" name="password">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="password" placeholder="请确认密码" name="passwordag">
          </li>
        </ul>
        <div class="nextTick">
          <a class="btn" :class="{isRed: showRed}">下一步</a>
        </div>
      </div>
      <div class="forgetPasswordWrap" v-show="isShowForgetPassword">
        <div>
          <innerHeader :describe="describe" :tool="tool"></innerHeader>
          <router-view></router-view>
        </div>
        <header class="bar">
          <a href="javascript:;" class="back"></a>
          <h1 class="title">找回密码</h1>
        </header>
        <div class="content">
          <!--<form action=""></form>-->
          <ul class="form">
            <li>
              <label>手机号码：</label>
              <div class="inputBox">
                <input type="text" class="mInput1" placeholder="输入绑定的手机号码...">
              </div>
            </li>
            <li>
              <label>验证号码：</label>
              <div class="inputBox">
                <input type="text" class="mInput2 mr5">
                <span style="display:none" class="btn">
                  <d id="stime">60</d>秒后再次发送
                </span>
                <a href="javascript:;" class="btn">获取验证码</a>
              </div>
            </li>
            <li>
              <label>输入密码：</label>
              <div class="inputBox">
                <input type="password" class="mInput1" name="newpwd" check="no" id="newpwd">
              </div>
            </li>
            <li>
              <label>确认密码：</label>
              <div class="inputBox">
                <input type="password" name="rptpwd" id="rptpwd" class="mInput1">
                <input type="hidden" name="uid" id="uid">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import innerHeader from '../innerHeader/innerHeader.vue'
  export default {
    components: {
      innerHeader
    },
    data () {
      return {
        leftShow: true,
        showRegister: false,
        showMyPet: true,
        showRed: false,
        addUser: false,
        describe: '登录',
        tool: 0,
        isShowForgetPassword: false
      }
    },
    methods: {
      showForm (isTrue) {
        this.leftShow = isTrue
      },
      registerShow () {
        this.showRegister = true
        this.showMyPet = false
      },
      ShowAddUser () {
        this.addUser = true
        this.showRegister = false
      },
      showForgetPassword () {
        this.isShowForgetPassword = true
        this.showMyPet = false
      }
    }
  }
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
  .maskWrapper
    .registerMask
    .addUser
      &>ul
        margin-left 12px
        &>li
          border-bottom #e2e2e2 solid 1px
          padding 14.4px 0 14.4px 30px
          position relative
          &>input
            display block
            height 21px
            width 100%
            font-size 13px
            color #b8b8b8
            border none
            padding 0
            -webkit-appearance none
            background-color #fff
            border-radius 3px
            outline none
          &>a
            width 126px
            margin-right 14px
            position absolute
            right 0
            top 10px
            border-radius 30px
            text-align center
            padding 8px 0
            color #fff
            font-size 14px
            display block
          .telIco
            float left
            display inline
            width 17px
            height 17px
            background url("https://static.epetbar.com/mpet/images/login/ico1.png") no-repeat
            background-size contain
            margin 2px 0 0 -25px
          .secCodeIco
            float left
            display inline
            width 17px
            height 17px
            background url("https://static.epetbar.com/mpet/images/login/ico5.png") no-repeat bottom
            background-size contain
            margin 2px 0 0 -25px
          .mEmailIco
            float left
            display inline
            width 17px
            height 21px
            background url("https://static.epetbar.com/mpet/images/login/ico2.png") no-repeat
            background-size contain
            margin 7px 0 0 -25px
          .mNameIco
            float left
            display inline
            width 17px
            height 21px
            background url("https://static.epetbar.com/mpet/images/login/ico3.png") no-repeat
            background-size contain
            margin 1px 0 0 -25px
          .mpasswordIco
            float left
            display inline
            width 17px
            height 20px
            background url("https://static.epetbar.com/mpet/images/login/ico4.png") no-repeat
            background-size contain
            margin 0 0 0 -25px
          .numberImg
            position absolute
            right 20px
            vertical-align middle
            border none
          .textImgNow
            background #fed171
          .textImgAfter
            background #e2e2e2
      &>.nextTick
        box-sizing border-box
        margin-top 24px
        padding-top 18px
        text-align center
        .btn
          background #d7d7d7
          color #fff
          display block
          margin 0 10%
          border-radius 30px
          font-size 15px
          padding 7px 0
          text-align center
        .isRed
          background #f03131



    .forgetPasswordWrap
      font-size 18px
      background #f5f5f5
      width 100%
      height 667px
      text-align center
      .bar
        background #27c768
        height 52.8px
        width 100%
        line-height 52.8px
        padding 0 12px
        position relative
        .back
          width 22px
          height 20px
          background url("https://static.epetbar.com/mpet/images/back1.png") center top no-repeat
          background-size 13px 20px
          margin-top 11px
          position relative
          z-index 100
          float left
        .title
          display block
          font-size 18px
          line-height 44px
          color #fff
          text-align center
          font-weight bold
          width 100%
          margin 0 -20px
          position absolute
      .content
        margin-top 24px
        .form
          li
            width 100%
            padding 12px 0 12px 120px
            border-bottom #eff3f5 solid 1px
            background white
            label
              width 90px
              text-align right
              margin-left -90px
              float left
              font-size 15px
              font-weight bold
              line-height 29px
              padding-right 10px
            .inputBox
              width 255px
              height 31px
              box-sizing border-box
              line-height 30px
              .mInput1
                width 80%
                height 30px
                line-height normal
                border #e2e2e2 solid 1px
                border-radius 3px
                padding 0 10px
                font-size 12px
                outline none
                background #fff
              .mInput2
                width 40%
                height 30px
                line-height 28px
                border #d0d0d0 solid 1px
                border-radius 3px
                padding 0 10px
                font-size 13px
                outline none
                background #fff
                vertical-align middle
                margin-right 6px
              .btn
                vertical-align middle
                display inline-block
                border-radius 3px
                box-shadow inset 0 1px rgba(255,255,255,0.2)
                height 30px
                padding 0 10px
                color #fff
                font-size 12px
                text-align center
              span
                line-height 30px
                background #f03131
                border #f03131 solid 1px
              a
                line-height 28px
                background #ff8000;
                border: #ff6600 solid 1px;


</style>
