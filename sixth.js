let arr = [2,3,4,1];
for(let value of arr){
    console.log(value);
}

let string = "Javascript";
for(let char of string){
    console.log(char);
}

let SumElements = (arr) =>{
    console.log(arr);
    let sum = 0;
    for (let element of arr){
        sum += element;
    }
    console.log(sum);
}
SumElements([10,20,40,60,90]);