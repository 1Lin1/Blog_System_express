<template>
  <div class="login-menu-wrap">
    <div class="login-menu">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="登录界面" name="login">
          <Login></Login>
        </el-tab-pane>
        <el-tab-pane label="注册界面" name="register">
          <Register></Register>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
  import Login from "./Login";
  import Register from "./Register";
  
  
  export default {
    name: "LoginMenu",
    components: {Register, Login},
    data() {
      return {
        activeName: 'login'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-menu-wrap{
    position: relative;
    margin-top: 10rem;
  }
  
  .login-menu{
    width: 20rem;
    height: 20rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>