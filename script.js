document.addEventListener("keyup", e => {
    if (e.target.matches(".search-form input")) {
        if (e.key === "Escape") e.target.value = "";

        const searchTerm = e.target.value.toLowerCase();

        document.querySelectorAll(".producto").forEach(producto => {
            const nombreProducto = producto.querySelector(".content-card-product h3").textContent.toLowerCase();

            if (nombreProducto.includes(searchTerm)) {
                producto.classList.remove("filtro");
            } else {
                producto.classList.add("filtro");
            }
        });
    }
});
