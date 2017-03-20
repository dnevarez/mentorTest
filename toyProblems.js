//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {

  reverseIt: function(str) {
    if(typeof str === 'string'){
      return str.split('').reverse().join('');
    }
    return 'Error: invalid input'
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it


  removeDups:  function(arr) {
    if (arr.constructor === Array){
      return arr.reduce( (a,b) => { if (a.indexOf(b) < 0 ) a.push(b); return a; },[]);
    }
    return 'Error: Invalid argument'
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str){
    if(typeof str === 'string'){
      return str.split(' ').map(x => { return (x[0].toUpperCase() + x.substr(1)) }).join(' ');
    }
    return 'Error: Invalid input'
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str){
    if(typeof str === 'string'){
      var m = str.match(/[aeiou]/gi);
      return m === null ? 0 : m.length;
    }
    return 'Error: Invalid input'
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num) {
    if(typeof num === 'number'){
      if(num <= 0) return false;
      for(var i = 2; i < num; i++){
        if (num % 2 === 0){
          return false
        }
      }
      return true
    }
    return 'Error: Invalid Input'
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined,
}
