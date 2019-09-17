import { maxHeaderSize } from "http";


// const person = {
//     name: "tomo",
//     age: 27,
//     location: {
//         city: 'tyokyo',
//         temp: 32 
//     }
// };

// const { name: firstName = "anony", age } = person;

// console.log(`${firstName} is ${age}`)

// const {city, temp: temperture} = person.location;
// if (city && temperture) {
//     console.log(`its ${temperture} in ${city}`)
// }

const book = {
    title: 'EGO is the enemy',
    author: 'ryan holiday',
    publisher: {
        name: 'peguin',
        date: "10月10日"
    }
};

const { name: firstname =  "self_published", date = "3月9日"} = book.publisher
console.log(firstname);


const address = ['1299 s jjj street', 'tokyo', 'yokohama', '12222'];

const [, , , ,state = "new"] = address;

console.log((` you are in ${state}`))

const item = ['coffee(hot)', '$2.00', '$2.50', '$2.50']

const [name, , msize = "3333", ] = item

console.log(` A medium ${name} costs ${msize}`)