const btnMenu = document.querySelector("#btn-menu");

const navHeader = document.querySelector("#nav-header");

const btnClose = document.querySelector("#btn-close");

const btnLogin = document.querySelector("#Login");

const btnSignup = document.querySelector("#Signup");

const currentPage = window.location.pathname.split("/").pop();

btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible");
  navHeader.classList.remove("btn-menu"); 
});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");
  navHeader.classList.add("btn-menu");
});

  // Botones del nav
    var Inicio = document.querySelector('#inicio');
    if (Inicio) {
        Inicio.onclick = function() {
            location.href = ".\\index.html";
        };
    }
   if (btnLogin) {
    btnLogin.onclick = function () {
      location.href = ".\\login.html";
    };
  }

  if (btnSignup) {
    btnSignup.onclick = function () {
      location.href = ".\\signup.html";
    };
  }
  
   // Ocultar el botón correspondiente según la página
  if (currentPage === "login.html") {
    btnLogin.style.display = "none";
  }

  if (currentPage === "signup.html") {
    btnSignup.style.display = "none";
  }

 
  
  

