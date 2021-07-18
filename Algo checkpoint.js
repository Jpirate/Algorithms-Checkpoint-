string = "from the ounce to the bounce it's all about culture, livity ";
var lth = string.length;
let count = 0;
let vowelsCount = 0;
for (let character of string) {
    if (character === " "){
        count = count + 1; 
    }

    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") 
    {
        vowelsCount += 1; 
    }
         
    

}
console.log (string.length);
console.log (count);
console.log (vowelsCount);

