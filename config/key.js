if(process.env.NODE_ENV == 'production'){
    module.exports = requitre('./prod');
}else{
    module.exports = require('./dev');
}