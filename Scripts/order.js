import { searchController } from "./Controller/general-search.js";
import { updateUserDetails } from "./Controller/user-details-update.js";
import { updateWishListDisplay } from "./Controller/wish-list-controller.js";
import { productLinkData, saveProductLinkData } from "./Data/product-link-data.js";
import { calculateCartQuantity } from "./Controller/cart-quantity-update.js";
import { allProducts } from "./all-product.js";
import {  orderedItems } from "./Data/order-data.js";
import { logOut } from "./Controller/log-out.js";
import { registerData } from "./Account-Data/register-data.js";
import { browerData } from "./Account-Data/brower-user-data.js";
import { menuBar } from "./Controller/menu-bar.js";

updateUserDetails();
searchController();
updateSaveItemsPage();

function updateSaveItemsPage() {

  document.querySelector('.saved-item-product-container')
    .innerHTML = orderedItems.map(order => {

    let matchingproduct;
    allProducts.forEach(product => {
    if (order.id === product.id) {
      matchingproduct = product
    }
    });

    let dataMatch;
    registerData.forEach(elem => {
      if (elem.email = browerData) {
        dataMatch = elem
      }
    })


    return `
    <div class="saved-items-container saved-items-container-${matchingproduct.id}" data-id="${matchingproduct.id}">
      <div class="saved-items-details">
        <img src="${matchingproduct.displayImage}" alt="">
        <div class="saved-items-product-details">
          <div class="saved-items-product-name">
          ${matchingproduct.name}
          </div>
          <div class="saved-items-rating-icon">
          ${matchingproduct.rating.icon}
          </div>
          <div class="saved-items-product-price">
          PHP ${matchingproduct.priceCent}
          </div>
        </div>
      </div>
      <div class="saved-option-status">
        <span>Processing</span>
      </div>
      <div class="shipping-address">
        <b>Shipping Address: ${dataMatch.address} </b>
      </div>
    </div>
    `
    }).join('');

  console.log(orderedItems);

  if ( orderedItems.length === 0) {
    document.querySelector('.emthy-saved-cart')
      .classList.remove('hide')
  } else {
    document.querySelector('.emthy-saved-cart')
    .classList.add('hide')
  };

  document.querySelector('.customer-views-product-grid')
  .innerHTML = allProducts.map(({displayImage, name, discountPriceCent, id}) => {
    return `
      <a href="product-link.html">
        <div class="related-product"  data-id="${id}">
          <i class="fa-regular fa-heart fa-heart-${id}" aria-hidden="true"></i>
          <div class="related-product-img-cont">
            <img src="${displayImage}" alt="">
          </div>
          <div class="related-product-name">
            ${name}
          </div>
          <div class="related-product-price">
            PHP ${discountPriceCent}
          </div>
        </div>
      </a>
    `
  }).join('');

  updateWishListDisplay();
};






document.querySelectorAll('.related-product, .saved-items-container')
.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.dataset.id
    productLinkData.id = id
    saveProductLinkData();
  });
});

menuBar();
updateWishListDisplay();
calculateCartQuantity();
logOut();