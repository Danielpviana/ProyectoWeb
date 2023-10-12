class Carrito {
  constructor(productos) {
    this.productos = productos;
    this.itemsSeleccionados = [];
  }

  EliminarItem(id) {
    let carProducts = JSON.parse(localStorage.getItem('carProducts')) || []
    let products = JSON.parse(localStorage.getItem('products')) || []
    
    const productoEncontrado = carProducts.find(producto => producto.id === id);
    const productsFound = products.find(producto => producto.id === id);

    if(productoEncontrado){
      productsFound.amount += 1;
      localStorage.setItem("products", JSON.stringify(products));
      if(productoEncontrado.amount === 1){
        const productosActualizados = carProducts.filter(producto => producto.id !== id);
        //console.log(productosActualizados)
        localStorage.setItem("carProducts", JSON.stringify(productosActualizados));
      }
      else{
        productoEncontrado.amount -= 1;
        localStorage.setItem("carProducts", JSON.stringify(carProducts));
      }
    };

    this.mostrarItems();
  }

  mostrarItems() {
    //console.log("hola")
    let carProducts = JSON.parse(localStorage.getItem('carProducts')) || []
    let productosCodigoHTML = "";
    let total = 0;
    carProducts.forEach( productInCar =>{
      const productSelected = products.find(product => product.id === productInCar.id);
      let productoSeleccionado = `<li class="list-group-item d-flex flex-row justify-content-evenly">
      <img
        src="${productSelected.image}"
        class="item-img"
        alt="..."
      />
      <p style=margin-bottom:0px;>${productSelected.name}</p>
      <p style=margin-bottom:0px;><i>Precio: ${productSelected.price}</i></p>
      <p style=margin-bottom:0px;>#: ${productInCar.amount}</p>
      <button type="button" class="btn btn-success btn-sm" onclick="addToCart(${productSelected.id});">+</button>
      <button type="button" class="btn btn-danger btn-sm" onclick="eliminarClick(${productSelected.id});">-</button>
    </li>`;
    productosCodigoHTML += productoSeleccionado;
    total += (productSelected.price*productInCar.amount);
    })

    document.getElementById("carrito-compras-lista").innerHTML = productosCodigoHTML;
    let totalFinal = "Total: $";
    document.getElementById("total-price").innerHTML = totalFinal + total;
    //console.log(total);
  }
}
