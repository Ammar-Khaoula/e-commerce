// start header

// end header
/*******************start section*/
let productContainer = document.querySelectorAll(".product-container");
let nextBtn = document.querySelectorAll(".nxt-btn");
let preBtn = document.querySelectorAll(".pre-btn");


productContainer.forEach((item, i) => {
    let container = item.getBoundingClientRect();
    let containerWidth = container.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
})
/*end section*************************/