const jspython = require('jspython-interpreter');
const script = `
print('Hello Universe')
`;


let res = jspython()
         .evaluate(script)
         .then(
            r => alert(r),
            e => alert(e)
         )