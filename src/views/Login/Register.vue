<template>
  <div style="margin-top: 1rem">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="4.6rem" class="demo-ruleForm">
      <el-form-item label="邮箱:" prop="username" class="load-item">
        <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
  
  
      <el-form-item label="密码:" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
     
      <el-form-item class="btn-group">
        <el-button type="primary" @click="submitForm('ruleForm')" >注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { stripscript, validatePass,validateEmail, validateVCode } from '@/utils/validate';
  
  import {registerUser} from "../../network/register";

  export default {
    name: "Register",
    data() {
      //验证邮箱
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
        } else if(validateEmail(value)){
          callback(new Error('邮箱格式有误'));
        }
        else {
          callback();
        }
      }
  
      var validatePwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          
        }else if(validatePass(value)){
          callback(new Error('请输入6-20位 字母加数字 密码'));
          
        } else {
          
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePwd2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePwd, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePwd2, trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            registerUser(this.ruleForm.username,this.ruleForm.pass).then(res => {
              console.log(res);
            })
           
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.btn-group{ 
  margin-left: 3rem;
}
</style>