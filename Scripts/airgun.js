import { calculateCartQuantity } from "./Controller/cart-quantity-update.js";
import { searchController } from "./Controller/general-search.js";
import { updateUserDetails } from "./Controller/user-details-update.js";
import { airgunData } from "./Data/airgun-data.js";
import { productLinkData, saveProductLinkData } from "./Data/product-link-data.js";

updateUserDetails();
searchController();

document.querySelector('.category-products-grid')
  .innerHTML = airgunData.map(({id, displayImage, brand, discountPriceCent, name}) => {
    return `
      <a href="product-link.html">
        <div class="category-product-container" data-id="${id}">
          <div class="image-cont">
            <img src="${displayImage}" alt="">
          </div>
          <div class="category-product-name">
          ${name}
          </div>
          <div class="category-product-price">₱${discountPriceCent}</div>
          <span>${brand}</span>
        </div>
      </a>
    `
  }).join("")


document.querySelectorAll('.category-product-container')
  .forEach(link => {
    link.addEventListener('click', () => {
      const id = link.dataset.id
      productLinkData.id = id
      saveProductLinkData();
    });
  });

  calculateCartQuantity();