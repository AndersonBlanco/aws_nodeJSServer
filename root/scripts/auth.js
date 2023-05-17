const passwordInput = document.getElementById('passwordInput');
const pinInput = document.getElementById('pinInput');
const signInButton = document.getElementById('signInButton');

const validPassword = 'a';
const validPin = '1';



signInButton.onclick = () =>{
    if(passwordInput.value == validPassword & pinInput.value == validPin){
        location.assign('/home');
}else{
       location.assign('/');
}
}
