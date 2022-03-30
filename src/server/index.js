const express = require('express') // 引入 express
const app = express() // 实例一个 express 对象

app.use(require('cors')()) // 解决跨域
app.use(express.json()) // express处理json数据

const mysql = require('mysql') // 调用 MySQL模块

// 创建连接
var db = mysql.createConnection({
  host: '47.103.68.175',
  user: 'sa', // 用户名
  password: 'Zkjz@123', // 密码
  database: 'admin', // 数据库名
  port: 1433 // 端口号
})
db.connect((err) => {
  if (err) throw err
  console.log('连接成功')
})

app.get('/', (req, res) => {
  res.send('index')
})

// 新增文章
app.post('/api/article', (req, res) => {
  let data = req.body
  let sql = 'INSERT INTO posts SET ?'
  db.query(sql, data, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send(result)
    }
  })
})

// 获取文章列表
app.get('/api/article', (req, res) => {
  console.log('12311')
  let sql = 'SELECT * FROM posts'
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.json(result)
    }
  })
})

// 删除文章
app.delete('/api/article/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id= ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.json(result)
    }
  })
})

// 获取文章详情
app.get('/api/article/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id= ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

// 修改文章
app.put('/api/article/:id', (req, res) => {
  let newTitle = req.body.title
  let newBody = req.body.body
  let sql = `UPDATE posts SET title = '${newTitle}',body = '${newBody}' WHERE ID = ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

// 监听端口3000
app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
