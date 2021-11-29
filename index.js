// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
    return cats;
};

function destructivelyPrependCat(name){
    cats.unshift('Bob');
    return cats;
};

function destructivelyRemoveLastCat(name){
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats;
};

function appendCat(name){
    const appendCats = [...cats, name];
    return appendCats;
};

function prependCat(name){
    const prependOfCats = [name, ...cats];
    return prependOfCats;
};

function removeLastCat(name){
    const removedLastCat = cats.slice(0, -1);
    return removedLastCat;
};

function removeFirstCat(name){
    const removedFirstCat = cats.slice(1);
    return removedFirstCat;
};
