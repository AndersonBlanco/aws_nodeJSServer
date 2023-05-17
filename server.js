const jsPython = require('jspython-interpreter'); 

const exp = require('express');  

const app = exp();


app.use(exp.static(__dirname + '/root'));
app.get('/', (req, res) =>{
   res.sendFile('root/home.html', {root: __dirname});

});

let script = `
print('Hello Universe')
`;
jsPython.jsPython().evaluate(script).then(r => console.log('Results \n', r)); 

const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
  
})

