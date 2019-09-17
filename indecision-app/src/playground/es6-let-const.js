var nameVar = 'Tomoharu';
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "jen";
nameLet = "julie";
console.log('nameLet', nameLet);


const nameConst = 'frank';
console.log('nameConst', nameConst)

function getPetName(){
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName)
const firstname;

const fullname = "tomoharu tsutsumi";

if (fullname) {
    firstname = fullname.split(' ')[0]
    console.log(firstname);
}

console.log(firstname)