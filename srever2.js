const express=require('express');
const path=require('path')
const app=express();
const workinghours=require('./middleware/workingTime.js')

// app.use(isAuth())
app.use(workinghours)
app.use(express.static(path.join(__dirname, "view")));


app.get('/',(req, res)=> res.status(404).sendFile("./view/index.html", {root:__dirname}))
app.get('/about',(req, res)=> res.sendFile("./view/about.html", {root:__dirname}))
app.use((req,res)=>{res.status(404).sendFile("./view/notfouned.html", {root:__dirname})})
app.listen(4001,()=>console.log('app listening on port port!'))
