document.addEventListener("DOMContentLoaded", () => {
  
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  if(togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.style.filter = type === 'text' ? 'invert(50%)' : 'invert(100%)';
    });
  }
  
  
  const loginGreeting = document.getElementById('login-greeting');

  if(loginGreeting) {
    const loginPhrases = [
      "Welcome Back!",
      "Log in safely",
      "Enjoy coding",
      "Have fun today"
    ];

    let phraseIndex = 0;
    let letterIndex = 1;
    let deleting = false;

    function animateLoginText() {
      const current = loginPhrases[phraseIndex];
      
      if (!deleting) {
        if (letterIndex < current.length) {
          loginGreeting.textContent = current.slice(0, letterIndex + 1);
          letterIndex++;
          setTimeout(animateLoginText, 150);
        } else {
          deleting = true;
          setTimeout(animateLoginText, 1000);
        }
      } else {
        if (letterIndex > 1) {
          loginGreeting.textContent = current.slice(0, letterIndex - 1);
          letterIndex--;
          setTimeout(animateLoginText, 100);
        } else {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % loginPhrases.length;
          letterIndex = 1;
          setTimeout(animateLoginText, 500);
        }
      }
    }

    animateLoginText();
  }
  
  const loginBtn = document.getElementById('login');
  const usernameInput = document.getElementById('username');

  if(loginBtn && usernameInput && passwordInput) {
    loginBtn.addEventListener('click', () => {
      const username = usernameInput.value;
      const password = passwordInput.value;

      if(username && password){
        window.location.href = "home-page.html";
      } else {
        alert('Please fill in both fields!');
      }
    });
  }
});