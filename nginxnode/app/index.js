const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('收到请求！')
  res.send('欢迎使用微信云托管')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('项目启动：', port)
})
