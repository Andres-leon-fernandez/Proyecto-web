document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="top-header">
            <div class="top_logo">
                <a href="index.html" class="logo"><img src="img/logo.webp" alt="logo de la Panadería"></a>
            </div>
            <div class="top_icon">
                <i class="fa-regular fa-user fa-2xl" style="color: #833f23"></i>
            </div>
            <div class="top_icon">
                <i class="fa-solid fa-cart-shopping fa-2xl" style="color: #833f23"></i>
            </div>
            <div class="hamburguesa" id="hamburguesa">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="index.html" class="menu_option">Inicio</a></li>
                <li><a href="nosotros.html" class="menu_option">Sobre Nosotros</a></li>
                <li><a href="catalogo.html" class="menu_option">Catálogo</a></li>
                <li><a href="blog.html" class="menu_option">Blog</a></li>
                <li><a href="contactanos.html" class="menu_option">Contáctanos</a></li>
            </ul>
        </div>
        <div class="header_left"></div>
    `;
    document.body.prepend(header);


    const hamburguesa = document.getElementById("hamburguesa");
    const menu = document.querySelector(".menu");

    hamburguesa.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
});
