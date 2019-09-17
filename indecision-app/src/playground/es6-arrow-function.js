// const square = function (x) {
//     return x * x;
// };

// function square(x) {
//     return x * x;
// }

// const squarearrow = (x) => {
//     return x * x;
// };

// const squarearrow = (x) => x * x;

// console.log(squarearrow(11))

const getFirstName = (fullname) => {
    let firstname = fullname.split(' ')[0]
    return  firstname
};

const Short = (fullname) => fullname.split(' ')[0];

console.log(getFirstName("tomoharu tsutsumi"))
console.log(Short("tsutsumi tomoharu"))