import { registerData, saveRegisterData } from "./Account-Data/register-data.js";
import { calculateCartQuantity } from "./Controller/cart-quantity-update.js";
import { searchController } from "./Controller/general-search.js";
import { logOut } from "./Controller/log-out.js";
import { menuBar } from "./Controller/menu-bar.js";
import { updateUserDetails } from "./Controller/user-details-update.js";
import { updateWishListDisplay } from "./Controller/wish-list-controller.js";
import { productLinkData, saveProductLinkData } from "./Data/product-link-data.js";
import { allProducts } from "./all-product.js";

updateUserDetails();
searchController();

let browerData = JSON.parse(localStorage.getItem('browerDatas')) || '';
function saveBrowerData() {
  localStorage.setItem('browerDatas', JSON.stringify(browerData))
}

let userDetails;

if (browerData) {
  registerData.forEach(data => {
    if (browerData === data.email) {
      userDetails = data
    }
  })
}

if (userDetails) {
  document.querySelector('.account-name span').innerHTML = `${userDetails.lastName} ${userDetails.firstName}`
  document.querySelector('.account-email span').innerHTML = `${userDetails.email}`
} else {
  window.location.href = 'login.html'
}


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
          USD ${(discountPriceCent/100).toFixed(2)}
        </div>
        <button class="add-to-cart">Buy Now</button>
      </div>
    </a>
  `
}).join('');

document.querySelectorAll('.related-product')
.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.dataset.id
    productLinkData.id = id
    saveProductLinkData();
  });
});

updateWishListDisplay();
calculateCartQuantity();
logOut();

document.querySelector('.link-span').addEventListener('click', () => {
  document.querySelector('.change-email').classList.toggle('hide')
  document.querySelector('.link-span').classList.add('hide')
  document.querySelector('.cancel').classList.remove('hide')
  document.querySelector('.change').classList.remove('hide')
  document.querySelector('.main-address').classList.add('hide')
})

document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.change-email').classList.toggle('hide')
  document.querySelector('.link-span').classList.remove('hide')
  document.querySelector('.cancel').classList.add('hide')
  document.querySelector('.change').classList.add('hide')
  document.querySelector('.main-address').classList.remove('hide')
  document.querySelector('.error').classList.add('hide')
})


if (browerData) {
  let matchdata;

  registerData.forEach(elem => {
    if (elem.email === browerData) {
      matchdata = elem
    }
  })

  document.querySelector('.main-address').innerText = matchdata.address
}

//coming back
document.querySelector('.change').addEventListener('click', () => {
  const inputEl = document.querySelector('.change-email')

  if ((inputEl.value).length > 5) {

    // let matchdata;
    // if (browerData) {
    //   registerData.forEach(elem => {
    //     if (browerData === elem.email) {
    //       matchdata = elem
    //     }
    //   })

    //   matchdata.address = inputEl.value
      
    //   registerData.forEach(elem => {
    //     if (browerData === elem.email) {
    //       matchdata.address = elem.address
    //     }
    //   })
    //   saveRegisterData();

    //   document.querySelector('.main-address').innerText = matchdata.address
    // }
    // console.log(ma);
    let matchdata;

    registerData.forEach(elem => {
      if (elem.email === browerData) {
        matchdata = elem
        matchdata.address = inputEl.value
        elem = matchdata
        saveRegisterData()
      }
    })

    document.querySelector('.main-address').innerText = matchdata.address

    console.log(matchdata);
    console.log(registerData);

    document.querySelector('.error').classList.add('hide')
    inputEl.classList.add('hide')
    document.querySelector('.main-address').classList.remove('hide')
    document.querySelector('.change').classList.add('hide')
    document.querySelector('.cancel').classList.add('hide')
    document.querySelector('.link-span').classList.remove('hide')
  } else {
    document.querySelector('.error').classList.remove('hide')
    inputEl.focus()
  }
})

menuBar()

console.log(registerData);