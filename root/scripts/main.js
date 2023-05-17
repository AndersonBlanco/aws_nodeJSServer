var jsPython = require('jspython-interpreter');
 
const signInButton = document.getElementById('signInButton');
signInButton.onclick = () =>{
   jsPython.jsPython()
   .evaluate(script)
   .then(
      r => alert(r),
      e => alert(e)
   );

}; 

/**/