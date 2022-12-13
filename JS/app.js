// modal
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');

      btnOpenPopup.addEventListener('click', () => {
        modal.classList.toggle('show');

        if (modal.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });

      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.toggle('show');

          if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
      
      
//   loginForm
const loginControl = document.querySelector(".modal_body");
const inputId = document.querySelector("#username");
const inputPw = document.querySelector("#password");
const inputEm = document.querySelector("#email");
const loginBtn = document.querySelector("#loginBtn");


// 로그인 유효성검사
const checkF = () => {
    if(inputId.value && inputPw.value && inputEm.value ? 
        loginBtn.disabled = false : loginBtn.disabled = true){
            loginBtn.style.backgroundColor = "#c4e1fb";
        } else {
            loginBtn.style.backgroundColor = "#4390E7";
        }
    }

loginControl.addEventListener('keyup', checkF);

// localStorage
const loginForm = document.querySelector(".form-control");

const USERNAME_KEY = username;

function onLoginSubmit (event) {
  event.preventDefault();

  const username = inputId.value;
  localStorage.setItem("USERNAME_KEY", username);

  const password = inputPw.value;
  localStorage.setItem("PASSWORD_KEY", password);
  
}

loginForm.addEventListener("submit", onLoginSubmit);
