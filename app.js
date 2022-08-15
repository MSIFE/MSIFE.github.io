// const boton = document.querySelectorAll('.item-boton');
// boton.forEach(botonAdd =>{
//     botonAdd.addEventListener('click', addCarrito);
// })
// const shoppingItems = document.querySelector(".shoppingCartItemsContainer");


// function addCarrito(event){
//     const button = event.target;
//     const item = button.closest('.item');
    
//   const itemTitle = item.querySelector(".item-title").textContent;
//   const itemPrice = item.querySelector(".item-precio").textContent;
//   const itemImage = item.querySelector(".item-image").src;
  
//   addToShop(itemPrice,itemTitle,itemImage)

// }

// function addToShop(itemPrice,itemTitle,itemImage){

//   const shoppingRow = document.createElement('div');
//   const shoppingAddcontainer =  `
//   <div class="row shoppingCartItem">
//         <div class="col-6">
//             <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                 <img src=${itemImage} class="shopping-cart-image">
//                 <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
//             </div>
//         </div>
//         <div class="col-2">
//             <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                 <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
//             </div>
//         </div>
//         <div class="col-4">
//             <div
//                 class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
//                 <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
//                     value="1">
//                 <button class="btn btn-danger buttonDelete" type="button">X</button>
//             </div>
//         </div>
//     </div>`;
//     shoppingRow.innerHTML = shoppingAddcontainer;
//     shoppingItems.appendChild(shoppingRow);
// }



