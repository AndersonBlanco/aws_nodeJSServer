//import jsPython from 'jspython-interpreter';
const exp = require('express');  
//const { jsPython } = require('jspython-interpreter');
//const jsPython = require('jspython-interpreter');

const app = exp();

const script = `print('Hello Universe')`;
//let scriptRes = jsPython().evaluate(script).then( r => r,e => e);
app.use(exp.static(__dirname + '/root'));
app.get('/', (req, res) =>{
   res.sendFile('root/home.html', {root: __dirname});
   //res.send(scriptRes)
});
const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})

