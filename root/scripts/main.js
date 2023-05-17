const button = document.getElementById('signInButton');
const passwordInput = document.getElementById('passwordInput');
const pinInput = document.getElementById('pinInput');

let password = '';
let pin = '';

passwordInput.onchange = (v) => password = v; 
pinInput.onchange = (v) => pin = v; 
button.onclick = () =>{
 alert(password);
}