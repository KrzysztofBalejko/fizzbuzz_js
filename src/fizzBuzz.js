function FizzBuzz(){
};

FizzBuzz.prototype.play = function(number){
  if (number % 5 === 0 && number % 3 === 0) {
    return 'Fizzbuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  }
};
