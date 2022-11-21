const loginBtn = document.getElementById('login-button');
const wrongPasswordMsg = document.getElementById('wrong-password');

loginBtn.addEventListener('click', () => {
  wrongPasswordMsg.innerText = 'Käyttäjätunnus ja salasana eivät täsmää.'
})