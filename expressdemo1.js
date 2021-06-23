const express = require('express')

const app= express()

var port = process.env.PORT || 9090

app.post('/ibm',function(req,res){
    res.send('<h2>Welcome to express server post</h2>')
})
app.get('/ibm',function(req,res){
    res.send('<h2>Welcome to express server get </h2>')
    })
app.put('/ibm',function(req,res){
    res.send('<h2> Welcome to express server put </h2>')
        })
app.delete('/ibm',function(req,res){
    res.send('<h2>Welcome to express server delete </h2>')
                })

app.listen(port,function(){
    console.log('Express server started')
})