  // Product data
  const products = [
  {
    id: 1,
    name: "Monitor 1",
    image: "Media/monitor1.png",
    price: 100,
    amount: 20
  },
  {
    id: 2,
    name: "Monitor 2",
    image: "Media/monitor2.png",
    price: 150,
    amount: 15
  },
  {
    id: 3,
    name: "Monitor 3",
    image: "Media/monitor3.png",
    price: 500,
    amount: 8
  },
  {
    id: 4,
    name: "Monitor 4",
    image: "Media/monitor4.png",
    price: 320,
    amount: 13
  },
];

let eCommerceShop = new Carrito(products);

if(!localStorage.getItem('products')){
  localStorage.setItem("products", JSON.stringify(products));
};

eCommerceShop.mostrarItems();

function addToCart(id) {
  let products2 = JSON.parse(localStorage.getItem('products')) || []
  let carProducts = JSON.parse(localStorage.getItem('carProducts')) || []
  const productAdded = carProducts.find(carProduct => carProduct.id === id);
  const productSelected = products2.find(product => product.id === id);
  //console.log(products2);

  if (productAdded) {
    if (productSelected.amount === 0){
      alert('No hay más productos de este tipo :(')
    } else {
      productAdded.amount = productAdded.amount + 1;
      productSelected.amount = productSelected.amount - 1;
      //alert("Producto añadido con éxito: "+productSelected.name)
    }
  } else {
    let newProductAdded = {
      id: id,
      amount: 1
    }
    productSelected.amount = productSelected.amount - 1;
    carProducts.push(newProductAdded);
    //alert("Producto añadido con éxito: "+productSelected.name)
  }
  localStorage.setItem("carProducts", JSON.stringify(carProducts));
  localStorage.setItem("products", JSON.stringify(products2));
  eCommerceShop.mostrarItems();
}

function eliminarClick(id) {
  //console.log("diste click", id);
  eCommerceShop.EliminarItem(id);
}

function comprarClick(){
  let carProducts = JSON.parse(localStorage.getItem('carProducts')) || []
  if(carProducts.length === 0){
    alert("El carrito está vacío.");
  }
  else{
    alert("Compra realizada exitosamente.");
    localStorage.setItem("carProducts", JSON.stringify([]));
    eCommerceShop.mostrarItems();
  }
}

document.addEventListener("DOMContentLoaded", function () {
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
          <button type="button" id="${product.id}" class="btn btn-secondary" title="Agregar al carrito" onclick="addToCart(${product.id})">
            <i><img data-id="${product.id}" src="Media/add carts.png" alt="" width="30px"></i>
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
          <h5>$${product.price} </h5>
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

