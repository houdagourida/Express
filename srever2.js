const express=require('express');
const app=express();
const isAuth=require("./middleware/auth")
const path=require('path')
const workinghours=require('./middleware/workingTime')
// app.use(isAuth())
app.use(express.json())
app.use(express.static(path.join(__dirname, "view")));
const users=[{name:"jihen" , email:"jihen@gmail.com"},{name:"houda" , email:"houda@gmail.com"},{name:"sarra" , email:"jihen@gmail.com"}]
app.post("./",(req,res)=>{
    console.log(req)
    res.send({users:[...users,req,body]})
})

app.get('/',(req, res)=> res.status(404).sendFile("./view/index.html", {root:__dirname}))
app.get('/about',(req, res)=> res.sendFile("./view/about.html", {root:__dirname}))
app.use((req,res)=>{res.status(404).sendFile("./view/notfouned.html", {root:__dirname})})
app.listen(4001,()=>console.log('app listening on port port!'))
