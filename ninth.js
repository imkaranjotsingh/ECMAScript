var map = new Map();
map.set('name','john');
map.set('name','Andy');
map.set(1,'number one');
map.set(NaN,'No value');
console.log(map.get('name'));
map.get(1);
map.get(NaN);

var map = new Map();
map.set('name','John');
map.set('id',10);
map.size;
map.keys();
map.values();
for(let Key of map.keys()){
    console.log(Key);
}