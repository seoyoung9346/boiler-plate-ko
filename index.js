const express = require('express') //express 모듈 가져오기
const app = express() //새로운 express 앱 만들기
const port = 5000 //5000번 포트에서 앱 실행

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seoyoung9346:abcde@boilerplate.tjqtl.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})