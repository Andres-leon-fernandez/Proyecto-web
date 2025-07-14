document.addEventListener("DOMContentLoaded", () => {
    // Crear fondo oscuro
    const overlay = document.createElement("div");
    overlay.id = "promoOverlay";

    // Crear el banner
    const banner = document.createElement("div");
    banner.classList.add("promo-banner");

    // Botón de cierre (X)
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("promo-close");
    closeBtn.innerHTML = "&times;";

    // Evento de cierre con la X
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que cierre por doble clic
        overlay.remove(); // Cierra al instante
    });

    // Imagen
    const img = document.createElement("img");
    img.src = "productos_img/alfajor.webp";
    img.alt = "Alfajor promoción";

    // Título y descripción
    const title = document.createElement("h2");
    title.textContent = "¡25% de Descuento en Alfajores!";

    const description = document.createElement("p");
    description.textContent = "Solo por tiempo limitado. ¡No te lo pierdas!";

    // Armar el banner
    banner.appendChild(closeBtn);
    banner.appendChild(img);
    banner.appendChild(title);
    banner.appendChild(description);
    overlay.appendChild(banner);
    document.body.appendChild(overlay);

    // Cerrar al hacer clic fuera del banner
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
});
