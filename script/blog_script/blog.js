document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("postres_peru");

    if (!contenedor) {
        console.error(
            "El contenedor con id 'postres_peru' no existe en el HTML."
        );
        return;
    }

    fetch("blog.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el JSON.");
            }
            return response.json();
        })
        .then((postres) => {
            postres.forEach((postre) => {
                const article = document.createElement("article");
                article.classList.add("postre");

                article.innerHTML = `
                    <div class="img_blog">
                        <img src="${postre.imagen}" alt="${postre.alt}">
                    </div>
                    <div class="blog_txt">
                        <h3 class="title_blog">${postre.titulo}</h3>
                        <h4 class="sub_title_blog">Descripción:</h4>
                        <p class="txt_blog">${postre.descripcion}</p>
                        <h4 class="sub_title_blog">Ingredientes:</h4>
                        <ul class="list_ingredientes">
                            ${postre.ingredientes
                                .map((ing) => `<li>${ing}</li>`)
                                .join("")}
                        </ul>
                        <h4 class="sub_title_blog">Preparación:</h4>
                        <ol class="list_preparacion">
                            ${postre.preparacion
                                .map((paso) => `<li>${paso}</li>`)
                                .join("")}
                        </ol>
                    </div>
                `;
                contenedor.appendChild(article);
            });
        })
        .catch((error) => {
            console.error("Error al cargar los postres:", error);
            contenedor.innerHTML =
                "<p style='color: red;'>No se pudieron cargar los postres. 😢</p>";
        });
});

// Mostrar el modal después de unos segundos
window.onload = function () {
    setTimeout(function () {
        document.getElementById("sugerenciaModal").style.display = "block";
    }, 4000); // 4 segundos
};

// Cerrar el modal al hacer clic en la "x"
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("sugerenciaModal");
    const span = document.querySelector(".modal .close");
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const abrirBtn = document.getElementById("btns");
    const modal = document.getElementById("sugerenciaModal");
    const cerrarBtn = modal.querySelector(".close");

    abrirBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    cerrarBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
