let x = 2;
let y = 5;

// console.log(sum(x, y));

function sum(x, y) {
    console.log(x + y);
}

// هيك نفذ الدالة قبل الحدث 
// document.addEventListener('click', sum(x, y));

// هيك صح نفذ بعد  الحدث

document.addEventListener('click', function () {
    sum(x, y);
});