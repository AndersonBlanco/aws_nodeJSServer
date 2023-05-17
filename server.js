const jsPython = require('jspython-interpreter'); 
const axios = require('axios'); 
const exp = require('express');  

const app = exp();


app.use(exp.static(__dirname + '/root'));
app.get('/', (req, res) =>{
   res.sendFile('root/home.html', {root: __dirname});

});

let script = `
 import requests
 import axios

 res = axios.get('https://www.npmjs.com/package/jspython-interpreter')
 print('res.json()')
`;
jsPython.jsPython().evaluate(script).then(r => r); 

const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
  
})

