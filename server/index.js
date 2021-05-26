/*
 * @Author: Chris:)
 * @Date: 2021-05-22 18:00:06
 * @LastEditTime: 2021-05-26 16:33:16
 * @LastEditors: Chris:)
 * @FilePath: /admin-home-server/server/index.js
 */
// 引入express
const express = require('express')
const app = express()
// const port = 3000
// 引入mongoose
const mongoose = require('mongoose')
// 连接mongodb数据库
mongoose.connect('mongodb://localhost/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error', (err) => {
    console.log('connection db error:',err)
    throw err
})

db.once('open', () => {
    console.log('connection db success')

})









// 定义接口模型
// const Schema = mongoose.schema
// const ObjectId = Schema.ObjectId

// const model = new Schema({
//   author: ObjectId,
//   title:  String,
//   body:   String,
//   data:   Date
// })
app.get('/', (req,res) => {
  res.send('helloworld')
})

app.listen(8880, () => console.log(`Example app listening on port 8880!`))