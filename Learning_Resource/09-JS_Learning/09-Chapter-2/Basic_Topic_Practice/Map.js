// create empty map

let map = new Map();

map.set("name", "Pankaj"); 
map.set("age", 22);

console.log(map);


let map1 = new Map([
    ["a", 1],
    ["b", 2]
]);

map1.delete("a");

console.log(map1);

console.log(map1.size); 

map1.clear();


let map2 = new Map([
    ["name", "Pankaj"],
    ["age", 22]
]);


for (let [key, value] of map2) {
    console.log(key, value);
}

map2.forEach((value, key) => {
    console.log(key, value);
});


let map4 = new Map([
    ["name", "Pankaj"],
    ["age", 22]
]);

