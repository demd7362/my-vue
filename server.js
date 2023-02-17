const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

server.use(cors({
    origin : '*'
})); // 파라미터 안에 아무것도 없다면 , '*'와 같다

server.use(bodyParser.json()); // 페이로드에서 json을 불러옴

const list = [
    {
        name : '딸기',
        price : 5000
    },
    {
        name : '귤',
        price : 3000
    },
    {
        name : '사과',
        price : 10000
    },
    {
        name : '수박',
        price : 15000
    }
];


server.get('/test',function(req,res){
    res.send(list);
});

server.listen(3300,function(){
    console.log('server started at 3300 port');
});



