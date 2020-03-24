<template>
  <div>
    <el-table :data="listArticlesData">
      <el-table-column prop="title" label="标题" width="140">
      </el-table-column>
      <el-table-column prop="body" label="内容" width="160">
      </el-table-column>
<!--      操作-->
      <el-table-column
              fixed="right"
              label="操作"
              width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="editArticle(scope.row._id)" size="small">编辑</el-button>
          <el-button type="text" @click="removeArticle(scope.row._id)" size="small">删除</el-button>
        </template>
      </el-table-column>
      
    </el-table>
  
  
<!--    分页功能-->
    <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
            @current-change="pageClick"
    >
    </el-pagination>
  </div>
</template>

<script>
  import {getArticles,removeArticleById} from "../../../network/articles";

  export default {
    name: "ListArticles",
    inject:['reload'],//刷新不闪烁
    data() {
     
      return {
        listArticlesData: []
      }
    },
    methods:{
      fetch(){
        getArticles().then(res => {
          this.listArticlesData = res;
        })
      },
      editArticle(articleId){
        this.$router.push(`/articles/updatearticles/${articleId}`);
      },
      removeArticle(articleId){
        removeArticleById(articleId).then(res => {
          console.log(res);
          this.$message({
            message: '成功删除文章',
            type: 'error'
          });
          this.fetch();
        })
      },
      
      
      // 获取分页信息
      pageClick(currentPage){
        console.log(currentPage);
      }
    },
    created() {
      // 获取所有博客
      this.fetch();
    }
  }
</script>

<style scoped>

</style>