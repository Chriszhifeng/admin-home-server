/*
 * @Author: Chris:)
 * @Date: 2021-05-22 18:00:06
 * @LastEditTime: 2021-05-23 22:02:29
 * @LastEditors: Chris:)
 * @FilePath: /admin-home-server/server/index.js
 */
// 引入express
const express = require('express')
const app = express()
// 引入mongoose
const mongoose = require('mongoose')
// 连接mongodb数据库
const db = mongoose.connect('mongodb://localhost/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// 定义接口模型
const Schema = mongoose.schema
const ObjectId = Schema,ObjectId

const model = new Schema({
  author: ObjectId,
  title:  String,
  body:   String,
  data:   Date
})
app.get('/', (req,res) => {
  res.send('helloworld')
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`))