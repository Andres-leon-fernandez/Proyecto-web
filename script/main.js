document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.id = "promoOverlay";
    const banner = document.createElement("div");
    banner.classList.add("promo-banner");
    
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("promo-close");
    closeBtn.innerHTML = "&times;";

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        overlay.remove();
    });

    const img = document.createElement("img");
    img.src = "productos_img/alfajor.webp";
    img.alt = "Alfajor promoción";

    const title = document.createElement("h2");
    title.textContent = "¡25% de Descuento en Alfajores!";

    const description = document.createElement("p");
    description.textContent = "Solo por tiempo limitado. ¡No te lo pierdas!";

    banner.appendChild(closeBtn);
    banner.appendChild(img);
    banner.appendChild(title);
    banner.appendChild(description);
    overlay.appendChild(banner);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
});
