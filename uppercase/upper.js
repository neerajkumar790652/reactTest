

function uppercase(string)
{
  var array = string.split(' ');
  var newarray = [];
    
  for(var x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercase("the quick brown fox"));
