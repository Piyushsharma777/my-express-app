// const http=require('http')

// const server=http.createServer((req,res)=>{
//    if(req.url=="/about"){
//     res.end('hello about')
//    }
//    if(req.url=="/profile"){
//     res.end('hello profile')
//    }
//    if(req.url=="/"){
//     res.end('hello')
//    }
// })
 
// server.listen(3000)



const express=require('express');
const morgan=require('morgan'); //third party middleware
const app=express();

app.use(morgan('dev'))

app.set('view engine','ejs') //custom middleware

app.use((req,res,next)=>{
    console.log("middleware")
    const a=10,b=30;
    console.log(a+b);
    
    return next()
})
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.send("Hello About")
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.listen(3000)