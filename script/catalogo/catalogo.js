document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".container-item");

    if (!contenedor) {
        console.error(
            "No se encontró el contenedor con clase 'container-item'"
        );
        return;
    }

    fetch("productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el JSON de productos.");
            }
            return response.json();
        })
        .then((productos) => {
            productos.forEach((producto) => {
                const item = document.createElement("div");
                item.classList.add("item");

                item.innerHTML = `
                    <figure>
                        <img src="${producto.img}" alt="${producto.titulo}" />
                    </figure>
                    <div class="info-producto">
                        <h2 class="title-producto">${producto.titulo}</h2>
                        <p class="description-producto">${
                            producto.descripcion
                        }</p>
                        <p class="estado">Disponible</p>
                        <p class="precio">$${producto.precio}</p>
                        <a href="producto.html?id=${
                            producto.id
                        }" class="boton_destacado">Ver producto</a>
                    </div>
                `;

                contenedor.appendChild(item);
            });
        })
        .catch((error) => {
            console.error("Error al generar el catálogo:", error);
            contenedor.innerHTML =
                "<p style='color:red;'>No se pudo cargar el catálogo 😢</p>";
        });
});
