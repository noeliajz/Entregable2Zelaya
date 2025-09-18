
const productos = [
    {
        "id": 1,
        "nombre": "Cerveza Quilmes",
        "categoria": "Cervezas",
        "precio": 57700,
        "stock": 120,
    },
    {
        "id": 2,
        "nombre": "Vino",
        "categoria": "Vinos",
        "precio": 25950,
        "stock": 45,
    },
    {
        "id": 3,
        "nombre": "Whisky",
        "categoria": "Licores",
        "precio": 8500,
        "stock": 20,
    },
    {
        "id": 4,
        "nombre": "Jugo de Naranja Natural",
        "categoria": "Bebidas",
        "precio": 37885,
        "stock": 30,
    },
    {
        "id": 5,
        "nombre": "Maní Salado",
        "categoria": "Comida",
        "precio": 29950,
        "stock": 80,
    },
    {
        "id": 6,
        "nombre": "Vodka",
        "categoria": "Licores",
        "precio": 40000,
        "stock": 15,
    },
    {
        "id": 7,
        "nombre": "Agua Mineral",
        "categoria": "Bebidas",
        "precio": 2000,
        "stock": 50,
    },
    {
        "id": 8,
        "nombre": "Cerveza",
        "categoria": "Cervezas",
        "precio": 6500,
        "stock": 90,
    },
    {
        "id": 9,
        "nombre": "Licor de frutilla",
        "categoria": "Licores",
        "precio": 50000,
        "stock": 25,
    }
];

function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById("lista-productos");

    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4', 'mb-4'); 

        productoDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                        <strong>Categoría:</strong> ${producto.categoria}<br>
                        <strong>Precio:</strong> $${producto.precio}<br>
                        <strong>Stock:</strong> ${producto.stock}
                    </p>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
});