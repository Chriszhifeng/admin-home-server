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