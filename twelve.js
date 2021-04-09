var map = new Map();
map.set('name','John');
map.set('id',10);
for(let [key,value] of map){
    console.log(key+" - "+value);
}