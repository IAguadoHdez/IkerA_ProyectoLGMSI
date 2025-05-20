const btnMenu = document.querySelector("#btn-menu");
const navHeader = document.querySelector("#nav-header");
const btnClose = document.querySelector("#btn-close");
const btnLogin = document.querySelector("#Login");
const btnSignup = document.querySelector("#Signup");
const Inicio = document.querySelector('#inicio');
const LogoInicio = document.querySelector('img[alt="Logo"]');

const currentPage = window.location.pathname.split("/").pop(); // Recoge la pagina en la que estas

// Menú hamburguesa
btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible");
  navHeader.classList.remove("btn-menu"); 
});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");
  navHeader.classList.add("btn-menu");
});

// Redirección al index.html (logo e inicio)
LogoInicio.addEventListener("click", () => {
  location.href = "../index.html";
});

Inicio.addEventListener("click", () => {
  location.href = "../index.html";
});


// Botón de login
if (btnLogin) {
    btnLogin.onclick = function () {
        location.href = "/paginas/login.html";
    };
}

// Botón de signup
if (btnSignup) {
    btnSignup.onclick = function () {
        location.href = "/paginas/signup.html";
    };
}

// Desde login, botón que lleva a signup en la misma carpeta
if (currentPage === "login.html") {
    if (btnSignup) {
        btnSignup.onclick = function () {
            location.href = "signup.html";
        };
    }
    if (btnLogin) {
        btnLogin.style.display = "none";
    }
}

if (currentPage === "signup.html") {
    if (btnSignup) {
        btnSignup.style.display = "none";
    }
}
