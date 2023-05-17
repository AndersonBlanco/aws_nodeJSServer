const button = document.getElementById('signInButton');
const passwordInput = document.getElementById('passwordInput');
const pinInput = document.getElementById('pinInput');

let password = passwordInput.value;
let pin = '';

//passwordInput.onfocus = (v) => password =v; 
pinInput.onchange = (v) => pin = v; 
button.onclick = () =>{
 alert(password)
}