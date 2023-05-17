let jsPython = require('jspython-interpreter');
let script = `print('Hello Universe')`;
const res = jsPython.jsPython().evaluate(script).then(r => alert(r), e => alert(e));