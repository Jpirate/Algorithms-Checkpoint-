set1 = [3,1,7,9];
set2 = [2,4,1,9,3];
let is_unique;
let uniqueArray = []
for (let element of set1) {
    is_unique = true;
    for (let element2 of set2){
        if (element === element2){
            is_unique = false;
            break;
        }
    }

    if (is_unique){
      uniqueArray.push (element);
    }
}

set1 = [3,1,7,9];
set2 = [2,4,1,9,3];
let is_unique;
let uniqueArray = []
for (let element of set2) {
    is_unique = true;
    for (let element2 of set1){
        if (element === element2){
            is_unique = false;
            break;
        }
    }

    if (is_unique){
      uniqueArray.push (element);
    }
}

var sum = 0;
for (let element of uniqueArray) {
    sum += element; 
}
console.log (sum);