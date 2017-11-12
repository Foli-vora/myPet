<template>
  <div>
    <div class="login-page">
      <div class="login-box">
        <!-- /.login-logo -->
        <div class="login-box-body">
          <p class="login-box-msg">
            <img src="./assets/logo.jpg" style="width:120px;height:72px;">
          </p>
          <form>
            <div class="form-group has-feedback">
              <input type="text" name="name" class="form-control" placeholder="请输入用户名" ref="username">
              <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="password" name="password" class="form-control" placeholder="请输入密码" ref="password">
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
            </div>
          </form>
          <div class="social-auth-links text-center">
            <a href="#" @click="login()" style="padding-left:0px;text-align:center;" id="btn_login" class="btn btn-block btn-social btn-facebook btn-flat">登陆</a>
            <!--<router-link to="/login" @click="login">登录</router-link>-->
          </div>
          <div class="social-auth-links text-center">
            <a href="#" @click="regist()" style="padding-left:0px;text-align:center;" id="btn_regist" class="btn btn-block btn-social btn-facebook btn-flat">注册</a>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    methods: {
      login () {
        console.log(this.$refs.username.value,this.$refs.password.value)
        axios.get('/api/login',{
          params: {
            username:this.$refs.username.value,
            password:this.$refs.password.value
          }
        })
          .then(res => {
            //获取返回的数据
            const result = res.data
            console.log(result)
            if(result.code === 'succeed' && result.data === true){
              alert('登录成功')
            } else if(result.data === 1) {
              alert('用户名不存在')
            } else {
              alert('请注册之后再登录')
            }

          })
        this.$refs.username.value = ''
        this.$refs.password.value = ''
      },
      regist() {
        let username = this.$refs.username.value
        let password = this.$refs.password.value
        axios.get('/api/signup',{
          params: {
            username,
            password
          }
        })
          .then(res => {
            //获取返回的数据
            const result = res.data
            console.log(result)
            if(result.data === true) {
              alert("注册成功")
            }
          })

        this.$refs.username.value = ''
        this.$refs.password.value = ''
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
