// Navegacion de la landing: menu hamburguesa + scroll suave al apartado de actividades

const botonMenu = document.getElementById("botonMenu");
const menuMovil = document.getElementById("menuPrincipal");
const enlaceActividades = document.getElementById("botonActividades");

if (botonMenu && menuMovil) {
    // Menú hamburguesa
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
    // Scroll suave a actividades
    enlaceActividades.addEventListener("click", (evento) => {
        const destino = document.getElementById("actividades");
        if (!destino) return;

        evento.preventDefault();
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
