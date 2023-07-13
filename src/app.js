const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 8000
const staticpath = path.join(__dirname,"../public")
const viewspath = path.join(__dirname,"../templates/views")
const partialspath = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(staticpath))


app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorpage:"OOPS page not Found"
    })
})


app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})