<template>
    <el-container style="height:100vh;" >
        <el-aside style="background-color: #1e272e;" width="240px" >
            <el-menu router
                     default-active="/articles/listarticles"
                     background-color="#1e272e"
                     text-color="#ffffff"
                     active-text-color="#ffdd59"
                     style="border-right: 1px solid #1e272e"
            >
    
                <el-submenu index="1" >
                    <template slot="title"><i class="el-icon-menu"></i>{{NavRoutes.name}}</template>
                    
                    <el-menu-item index="/articles/listarticles">
                        <i class="el-icon-tickets"></i>
                        文章列表
                    </el-menu-item>
    
                    <el-menu-item index="/articles/createarticles">
                        <i class="el-icon-document-add"></i>
                        增加文章
                    </el-menu-item>
<!--                    <el-menu-item v-for="(item2,index2) in NavRoutes.children"-->
<!--                                  :key="index2"-->
<!--                                  :index="item2.path"-->
<!--                                  :class="$route.path === item2.path?'is-active':''"-->
<!--                    -->
<!--                    >-->
<!--                        <i :class="item2.icon"></i>-->
<!--                        {{item2.name}}-->
<!--                    </el-menu-item>-->
                </el-submenu>
            </el-menu>
        
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    import ListArticles from "./childCpn/ListArticles";
    export default {
        components: {
            ListArticles,
            NavRoutes:''
        },
        created() {
            this.NavRoutes = this.$router.options.routes[2];
            console.log(this.NavRoutes);
        }
    
    };
</script>

<style lang="scss">


</style>
