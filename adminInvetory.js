// // Product data
// const products = [
// {
//     id: 1,
//     name: "Monitor 1",
//     image: "Media/monitor1.png",
//     price: 100,
//     amount: 20
// },
// {
//     id: 2,
//     name: "Monitor 2",
//     image: "Media/monitor2.png",
//     price: 150,
//     amount: 15
// },
// {
//     id: 3,
//     name: "Monitor 3",
//     image: "Media/monitor3.png",
//     price: 500,
//     amount: 8
// },
// {
//     id: 4,
//     name: "Monitor 4",
//     image: "Media/monitor4.png",
//     price: 320,
//     amount: 13
// },
// ];

// if(!localStorage.getItem('products')){
//     localStorage.setItem("products", JSON.stringify(products));
// };

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#inventario .table-body");
  
    if(localStorage.getItem('products')){
        
        let products2 = JSON.parse(localStorage.getItem('products')) || []

        products2.forEach((product) => {
        const row = document.createElement("tr");
    
        row.innerHTML = `
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.amount}</td>
        `;
    
        tableBody.appendChild(row);
    });

    };
  });
  