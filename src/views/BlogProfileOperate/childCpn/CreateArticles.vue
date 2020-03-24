<template>
  <el-form ref="form" :model="article" label-width="100px" @submit.native.prevent="_saveArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
   
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button @click="_backToListArticle">取消</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
  import {addArticles} from "../../../network/articles";

  export default {
    data() {
      return {
        article: {
        
        }
      }
    },
  
    inject:['reload'],//刷新不闪烁
    methods: {
      _saveArticle() {
        addArticles(this.article.title,this.article.body).then(res => {
          console.log(res);
          this.$message({
            message: '成功添加新文章',
            type: 'success'
          });
          this.$router.push('/articles/listarticles')
        })
        this.reload();
  
      },
      _backToListArticle(){
        this.$router.push('/articles/listarticles')
      }
    }
  }
</script>