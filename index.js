const express = require('express') //express 모듈 가져오기
const app = express() //새로운 express 앱 만들기
const port = 5000 //5000번 포트에서 앱 실행

const User = require("./models/User"); //유저 모델 불러옴
const bodyParser = require('body-parser'); //bodyparser 불러옴

const config = require('./config/key');

//bodyparser 옵션 설정
app.use(bodyParser.urlencoded({extended: true})); 
//urlenxoded 데이터 분석해서 가져올수있도록해줌
app.use(bodyParser.json());
//json type 분석

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('서영이는 공부중')
})

//회원가입 route 설정
app.post('/register', (req, res) => {
  //회원가입할때 필요한 정보들을  client에서 가져오면
  //그것들을 데이터베이스에 넣어준다

  const user = new User(req.body); //불러온 유저모델로 인스턴스 생성
  //정보들을 데이터베이스 넣기 //req.body : json 형식으로 id, pw 등 들어있음
  //bodyparser가 req.body 구성
  
  user.save((err, userinfo)=> {
    if(err) return res.json({success: false, err}) //json형태로 success false와 에러메세지 전송
    return res.status(200).json({ //statue(200) = 성공했다는 의미
      success: true
    })
  }) 

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})