var code = document.querySelector(".code");
var coffee = document.querySelector(".coffee");
var work  = document.querySelector(".work");
var container = document.querySelector(".container");

// CODE TIME

function codetime() {

    if (code.textContent >= 1789) {
        clearInterval(3);
    } else {
        code.textContent++;
    }
}
setInterval(codetime, 2);

// COFFEE TIME

function coffeetime() {
    if (coffee.textContent >= 800) {
        clearInterval(3);
    } else {
        coffee.textContent++;
    }
}
setInterval(coffeetime, 10);

// WORKTIME

function worktime() {
    if (work.textContent >= 100) {
        clearInterval(4);
    } else {
        work.textContent++;
    }
}
setInterval(worktime, 50);

console.log(data_num);
