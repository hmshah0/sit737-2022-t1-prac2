var express = require("express")
var bodyParser=require('body-parser')
app = express();
app.use(express.static('public')) 

var port = 3000;

app.use(express.static(__dirname + 'public'));

//Adding 2 numbers
var add = function(num1,num2){
    var result = num1 + num2;
    return result;
}

app.get('/add',function(request,response){
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);
    var result = add(num1,num2);
    response.send("The Addition of " + num1 + " and " + num2 +  " is: " + result)
})

//Substracting 2 numbers
var substract = function(num1,num2){
    var result = num1 - num2;
    return result;
}

app.get('/substract',function(request,response){
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);
    var result = substract(num1,num2);
    response.send("Substraction of " + num1 + " and " + num2 +  " is: " + result)
})

//Division of 2 numbers
var divide = function(num1,num2){
    var result = num1/num2;
    return result;
}

app.get('/divide',function(request,response){
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);
    var result = divide(num1,num2);
    response.send("The division of " + num1 + " and " + num2 +  " is: " + result)
})

//Multiplication of 2 numbers
var multiply = function(num1,num2){
    var result = num1 * num2;
    return result;
}

app.get('/multiply',function(request,response){
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);
    var result = multiply(num1,num2);
    response.send("Multiplication of " + num1 + " and " + num2 +  " is: " + result)
})

app.listen(port);
console.log("Listening on port ", port);
