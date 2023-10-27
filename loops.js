let arr = [1,2,4,6,3,7,8];
let total = ((arr.length + 1) * (arr.length + 2)) / 2;

for (let index = 0; index < arr.length; index++) {
  total = total - arr[index]
  
}

console.log(total);