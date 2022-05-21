const mongoose = require('mongoose'); //몽구스 모델 불러오기


const userSchema = mongoose.Schema({
    name: {
        type: String, 
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //space 없애주는 역할
        unique: 1 //같은 이메일 쓰지 못하게 

    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String, 
        maxlength: 50
    },
    role: {
        //관리자 등 역할 지정
        type: Number,
        default: 0 //임의로 지정하지 않을시 0
    },
    image: String,
    token:{ //유효성 검사 등에 쓰임
        type: String
    },
    tokenExp: { //토큰 유효성
        type: Number
    }

})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌

module.exports= User; //모델을 다른 파일에서 쓸수있도록 export해줌