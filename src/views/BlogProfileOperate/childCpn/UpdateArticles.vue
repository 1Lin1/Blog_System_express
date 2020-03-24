<template>
  <el-form ref="form" :model="article" label-width="100px" @submit.native.prevent="_saveArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">确认修改</el-button>
      <el-button @click="">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  
  import {getSingleArticle,updateArticleById} from "../../../network/articles";

  export default {
    name: "UpdateArticles",
    data() {
      return {
        article: {
        }
      }
    },
    methods:{
      fetch(){
        getSingleArticle(this.$route.params.id).then(res => {
          this.article = res;
        })
      },
      
      // 保存修改后的文章
      _saveArticle(){
        updateArticleById(this.$route.params.id,this.article).then(res => {
          console.log(res);
          this.$router.push('/articles/listarticles')
          this.$message({
            message: res.message,
            type: 'success'
          });
        })
      }
    },
    created() {
      // 获取当前文章详情
      this.fetch();
    }
  }
</script>

<style scoped>

</style>