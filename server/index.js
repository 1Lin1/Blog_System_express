const express = require('express');

const app = express();

//告诉express识别json
app.use(express.json());

// 解决跨域问题
app.use(require('cors')());

//声明模型
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myBlog', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
});


const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    body: { type: String },
}))


//新增文章
app.post('/api/articles', async(req, res) => {
    console.log(req.body);
    const newArticle = await Article.create(req.body);
    res.send(newArticle);
})

//获取所有文章
app.get('/api/articles', async(req, res) => {
    const listArticles = await Article.find();
    res.send(listArticles);
})

//获取单个文章
app.get('/api/articles/:id', async(req, res) => {
    const singleArticle = await Article.findById(req.params.id);
    res.send(singleArticle);
})


//删除文章根据文章id
app.delete('/api/articles/:id', async(req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        message: 'success delete'
    })
})

//更新文章

app.put('/api/articles/:id', async(req, res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send({
        message: '修改文章成功'
    })

})



app.get('/', async(req, res) => {
    res.send('index')
})

app.listen(3001, () => {
    console.log('http://localhost:3001');
})