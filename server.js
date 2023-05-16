const express = require('express');
const https = require('https'); 
function usingexpress(){
    const app = express();

app.get('/test', (req, res) =>{
    res.send('Hello Universe')
});

let port = 8080; 
app.listen(port, (req, res) =>{
   console.log(`Server running on port ${port}`)
})
}

usingexpress(); 