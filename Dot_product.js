let arr =  [1,2,3,4,5]
let arr2 = [9,8,7,6,5]
sum = 0;

for (index in arr) {
    
     sum += arr[index] * arr2[index];
}
console.log (sum);