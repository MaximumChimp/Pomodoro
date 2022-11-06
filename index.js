const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    res.render('home')
})

const port = 8000
app.listen(`${port}`,()=>{
    console.log(`listening on port${port}`)
})
