
/* Favourite Button */
const hearts = document.querySelectorAll(".fav-icon")
// console.log(hearts);

Array.from(hearts).map(  heart => {
    heart.addEventListener("click" , () => {
        heart.classList.toggle("red")
    })
}  )





/* Plus / Minus Quantity */
let btnMinus = document.querySelectorAll(".down_count");
let btnAdd = document.querySelectorAll(".up_count");

Array.from(btnAdd).map(btn => {
    btn.addEventListener("click", function(){
        btn.previousElementSibling.value++
    })
})
Array.from(btnMinus).map(btn => {
    btn.addEventListener("click", function(){
        if (btn.nextElementSibling.value > 1) {
            btn.nextElementSibling.value--
        }
    })
})











/*  Ajouter au panier */
let addBasket = document.querySelectorAll(".addToBasket");
let products = document.querySelectorAll(".card-title");
let shoppingList = document.querySelector(".shopping-list");
let productTitle = Array.from(products);
let qtyProduct = document.querySelectorAll(".quantity_input");
let total = document.querySelector(".total-price")
for (let i=0; i < addBasket.length ; i++) {

addBasket[i].addEventListener("click", (event) => {

    let prodName = addBasket[i].previousElementSibling.previousElementSibling.innerHTML
    let prodPrice = addBasket[i].parentElement.nextElementSibling.firstElementChild.innerHTML.replace("€", "")
    let totalPrice = parseInt(prodPrice) * parseInt(qtyProduct[i].value)
    total.innerHTML = parseInt(total.innerHTML.replace("€", "")) + parseInt(totalPrice) +  "€"
    let structur = `<div class="row">
    <h6 class="text-left shopping-item col-8">${prodName}
    </h6>
    <h5 class="price-checkout text-right col-4">${totalPrice} €</h5>
    <h5 class="price-checkout text-right col-4">${"x" + qtyProduct[i].value} </h5>
</div> <hr>`

shoppingList.innerHTML = shoppingList.innerHTML + structur


})

}




/*  Vider Panier */

let emptyBasket = document.querySelector(".reset-btn");

let shoppingContainer = document.querySelector(".shopping_container")

emptyBasket.addEventListener("click", () => {

    shoppingList.innerHTML = ""
    total.innerHTML = 0 + "$"
    // let newList = `<div class="shopping-list container"></div>`
    // shoppingContainer.innerHTML = newList
    


})




/*  Total somme panier  */ 

let totalSum = document.querySelector("")



















/* ---------- WORKING CODES---------------- */

/*  Ajouter au panier */

/* let addBasket = document.querySelectorAll(".addToBasket");

for (let i=0; i < addBasket.length ; i++) {

addBasket[i].addEventListener("click", () => {

console.log("added to cart")
})

}
 */






/* Plus / Minus Quantity */
/* 
let btnRemove = document.querySelector(".down_count");
let btnAdd = document.querySelector(".up_count");
let quantityInput = document.querySelector(".quantity_input");


btnAdd.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1 ;
})

btnRemove.addEventListener('click', () => {
    if (quantityInput.value > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1 ;
    }
})




 */







