<template>
  <div>
    <div class="load-menu">
      
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="4.6rem" class="demo-ruleForm">
        <el-form-item label="邮箱:" prop="username" class="load-item">
          <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item label=" 密码:" prop="checkPass" class="load-item">
          <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  maxlength="20"
          ></el-input>
        </el-form-item>
        
        <el-form-item class="loadbtn-group">
          <el-button type="danger"
                     @click="submitRegisterForm('ruleForm')"
                     class="submit-button"
                     :disabled="isDisableButton"
          >登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    
    
    </div>
  </div>
</template>

<script>
  import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
  
  export default {
    name: "Login",
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
          this.isDisableButton = true;
        } else if(validateEmail(value)){
          callback(new Error('邮箱格式有误'));
          this.isDisableButton = true;
          
        }
        else {
          callback();
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          this.isDisableButton = true;
          
        } else if(validatePass(value)){
          callback(new Error('请输入6-20位 字母加数字 密码'));
          this.isDisableButton = true;
          
        } else {
          callback();
          this.isDisableButton = false;
          
        }
      }
      return {
        ruleForm: {
          username: '',
          checkPass: '',
          // mobilePass: ''
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        
        },
        isDisableButton:true,
        
        isLoad:false,
      };
    },
    methods: {
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('登录用户' + this.ruleForm.username + this.ruleForm.checkPass);
  
            this.$router.push('/articles/listarticles');
  
            // if(this.ruleForm.username === 'admin@qq.com' && this.resetForm.checkPass ==='123aaa'){
            //   this.$router.push('/articles/listarticles');
            // }else {
            //   alert('登录失败 密码错误 请重新登录');
            //   console.log('error submit!!');
            // }
            
          } else {
            alert('请输入正确的格式')
            console.log('error submit!!');
            return false;
          }
          
        });
      },
      
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style scoped lang="scss">
  .load-menu{
    .load-item{
      margin-top: 1rem;
    }
    
    .loadbtn-group{
      margin-top: 1rem;
      margin-left: 3rem;
    }
  }
</style>