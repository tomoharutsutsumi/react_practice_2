const add = (a, b) => {
    return a + b
}

console.log(add(55, 1));

const user = {
    name: 'tomoharu',
    cities: ['tokyo', 'yokohama', 'new york'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has lived in' + city);
        return citymessage;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());