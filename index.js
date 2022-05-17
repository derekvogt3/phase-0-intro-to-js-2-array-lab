// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  var newCats = [...cats];
  newCats.pop();
  print(newCats);
  return newCats;
}

function removeFirstCat() {
  console.log(cats);
  var newCats = [...cats];
  newCats.shift();
  return newCats;
}
