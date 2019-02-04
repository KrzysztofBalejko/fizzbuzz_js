describe('FizzBuzz', function(){

  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function(){
    it('fizzes on 3', function(){
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function(){
    it('buzzes on 5', function(){
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
  });


});
