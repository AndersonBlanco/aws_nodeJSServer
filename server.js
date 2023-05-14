const express = require('express');
const app = express();

app.get('/test', (req, res) =>{
    res.send('Hello Universe')
});


app.listen(8080, (req, res) =>{
   console.log("Server running")
})