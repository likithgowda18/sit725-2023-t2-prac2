let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    //let payLoad = {}
    let statusCode = 200;
    let sucessMesssage = 'successful';
    let number1 = req.query.number1; // 99
    let number2 = req.query.number2; // 40
    let result = parseInt(number1) + parseInt(number2); // convert them to int

    res.json({
        message:sucessMesssage, 
        code: statusCode, 
        data: result
    });
});

app.get('/multiplyTwoNumbers', (req, res) => {
    let statusCode = 200;
    let successMessage = 'successful';
    let number1 = parseInt(req.query.number1); // 25
    let number2 = parseInt(req.query.number2); // 4
    let result = number1 * number2;

    res.json({
        message: successMessage,
        code: statusCode,
        data: result
    });
});

app.listen(port, () => {
    console.log('server started');
});