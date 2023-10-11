document.addEventListener("DOMContentLoaded", function () {
  // Product data
  const products = [
    {
      name: "Monitor 1",
      image: "Media/monitor1.png",
      price: "$100.50",
    },
    {
      name: "Monitor 2",
      image: "Media/monitor2.png",
      price: "$150.50",
    },
    {
      name: "Monitor 3",
      image: "Media/monitor3.png",
      price: "$500.10",
    },
    {
      name: "Monitor 4",
      image: "Media/monitor4.png",
      price: "$300.20",
    },
  ];

  // Get the product-cards container
  const productCardsContainer = document.querySelector("#product-cards .row");

  // Function to create a product card
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "col-md-3 py-3 py-md-0";

    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" alt="">
        <div class="overlay">
          <button type="button" class="btn btn-secondary" title="Comprar">
            <i><img src="Media/views.png" alt="" width="30px"></i>
          </button>
          <button type="button" class="btn btn-secondary" title="Favorito">
            <i><img src="Media/heart.png" alt="" width="30px"></i>
          </button>
          <button type="button" class="btn btn-secondary" title="Agregar al carrito">
            <i><img src="Media/add carts.png" alt="" width="30px"></i>
          </button>
        </div>
        <div class="card-body">
          <h3 class="text-center">${product.name}</h3>
          <div class="star text-center">
            <i class='bx bxs-star checked'></i>
            <i class='bx bxs-star checked'></i>
            <i class='bx bxs-star checked'></i>
            <i class='bx bxs-star checked'></i>
            <i class='bx bxs-star checked'></i>
          </div>
          <h5>${product.price} <span><i><img src="Media/add.png" alt="" width="20px"></i></span></h5>
        </div>
      </div>
    `;

    return card;
  }

  // Populate product cards
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
  });
});
