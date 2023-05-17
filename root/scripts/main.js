const jsPython = require('jspython-interpreter');
let script = `print("Hello Universe")`;
jsPython.jsPython().evaluate(script).then(r => console.log(r), e => console.log(e)); 