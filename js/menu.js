
/* const BASE_URL = window.location.hostname === "127.0.0.1 ? "" : "/nom_repo";*/
const btnMenu = document.querySelector("#btn-menu");
const navHeader = document.querySelector("#nav-header");
const btnClose = document.querySelector("#btn-close");
const btnLogin = document.querySelector("#Login");
const btnSignup = document.querySelector("#Signup");
const inicio = document.querySelector("#inicio");
const logoInicio = document.querySelector('img[alt="Logo"]');

const currentPage = window.location.pathname.split("/").pop(); // Página actual

// Menú hamburguesa
btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible");
  navHeader.classList.remove("btn-menu"); 
});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");
  navHeader.classList.add("btn-menu");
});


if (logoInicio) {
  logoInicio.addEventListener("click", () => {
    if (currentPage === "index.html" || currentPage === "") {
      location.reload(); 
    } else {
      location.href = "../index.html";
    }
  });
}

if (inicio) {
  inicio.addEventListener("click", () => {
    location.href = "../index.html";
  });
}



// Botón de login
if (btnLogin) {
    btnLogin.addEventListener("click", () => {
        location.href = "/paginas/login.html";
    });
}

// Botón de registro
if (btnSignup) {
    btnSignup.addEventListener("click", () => {
        location.href = "/paginas/signup.html";
    });
}

// Oculta dependiendo de la pagina
if (currentPage === "login.html") {
    if (btnLogin) {
        btnLogin.style.display = "none";
    }
    if (btnSignup) {
        btnSignup.onclick = () => location.href = "signup.html";
    }
}

if (currentPage === "signup.html") {
    if (btnSignup) {
        btnSignup.style.display = "none";
    }
}
