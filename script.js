const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const tolerance = 1.9;

productContainers.forEach((item, i) => {

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += (290 - (item.scrollLeft % 290));
        console.log("Scroll Next");
    })
    

    preBtn[i].addEventListener('click', () => {
        let remainder = item.scrollLeft % 290;
        // If it's not, adjust the scroll amount
        if (remainder >= tolerance) {
            item.scrollLeft -= remainder;
            
        } else {
            item.scrollLeft -= 290;
            
        }
        //item.scrollLeft -= (item.scrollLeft % 290);
 
    })
});


var scrollAmt;
const productContainer = document.querySelector('.product-container');
productContainer.addEventListener("scroll", event =>{
    scrollAmt = productContainer.scrollLeft;
    console.log(scrollAmt);
}, {passive: true});

