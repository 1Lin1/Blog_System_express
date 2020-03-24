import {request} from "./request";

// 增加文章
export function addArticles(title,body) {
  return request({
    url:'/api/articles',
    method:'post',
    data:{
      title:title,
      body:body,
    }
    
  })
}

// 获取所有
export function getArticles(title,body) {
  return request({
    url:'/api/articles',
    method:'get',
  })
}

// 获取单篇文章
export function getSingleArticle(articleId) {
  return request({
    url:`/api/articles/${articleId}`,
    method:'get',
  })
}


//删除文章通过id
export function removeArticleById(removeId) {
  return request({
    url:`/api/articles/${removeId}`,
    method:'delete',
  })
}

//更新文章
export function updateArticleById(updateId,data) {
  return request({
    url:`/api/articles/${updateId}`,
    method:'put',
    data:data
  })
}
