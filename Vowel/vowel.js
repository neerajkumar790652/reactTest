

function Vowel(string) { 
    const count = string.match(/[aeiou]/gi).length;
    return count;
}
console.log(Vowel("neerajkumar"));