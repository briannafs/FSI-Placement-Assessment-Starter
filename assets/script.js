
// First, tell us your name
let yourName = "Brianna Sengchan" // HINT: Replace this with your own name!


// Variables
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// Selected Elements
const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const gingerCounter = document.querySelector("#qty-gb")

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const cookieCounter = document.querySelector('#qty-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarCounter = document.querySelector('#qty-sugar')

const totalCount = document.querySelector('#qty-total')


// Code to update name display
credit.textContent = `Created by ${yourName}`


// Event listeners
gbPlusBtn.addEventListener('click', function() {
    console.log("clicked");
    gb++;
    gingerCounter.textContent = gb;
});
gbMinusBtn.addEventListener('click', function() {
    console.log("clicked");
    gb--;
    gingerCounter.textContent = gb;
});

ccPlusBtn.addEventListener('click', function() {
    console.log("clicked");
    cc++;
    cookieCounter.textContent = cc;
});
ccMinusBtn.addEventListener('click', function() {
    console.log("clicked");
    cc--;
    cookieCounter.textContent = cc;
});

sugarPlusBtn.addEventListener('click', function() {
    console.log("clicked");
    sugar++;
    sugarCounter.textContent = sugar;
}); 
sugarMinusBtn.addEventListener('click', function() {
    console.log("clicked");
    sugar--;
    sugarCounter.textContent = sugar;
});