//  approach 1
let reverse = 0;
let number = 123456;
let lastNumber;

while(number != 0){
	lastNumber = number % 10;
  reverse = reverse * 10 + lastNumber;
  number = Math.floor(number/10);
}

console.log("Reverse number : "+reverse);



// approch 2
function reverse1(number)
{
	number = number + "";
	return number.split("").reverse().join("");
}
console.log(Number(reverse1(1132243)));