var map = new Map();
map.set('name','John');
map.set('id',10);
console.log(map.size);
console.log(map.keys());
console.log(map.values());
for(let element of map){
    console.log(element);
}