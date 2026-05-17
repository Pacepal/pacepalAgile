// Navegación clásica de la landing.

const botonMenu = document.getElementById("botonMenu");
const menuMovil = document.getElementById("menuPrincipal");
const enlaceActividades = document.getElementById("botonActividades");

if (botonMenu && menuMovil) {
    botonMenu.addEventListener("click", () => {
        menuMovil.classList.toggle("menu--abierto");
        const abierto = menuMovil.classList.contains("menu--abierto");
        botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    menuMovil.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menuMovil.classList.remove("menu--abierto");
            botonMenu.setAttribute("aria-expanded", "false");
        });
    });
}

if (enlaceActividades) {
    enlaceActividades.addEventListener("click", (evento) => {
        const destino = document.getElementById("actividades");
        if (!destino) return;

        evento.preventDefault();
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
