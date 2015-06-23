var adder = require('../adder.js');


describe("adder tests", function() {

   it('2 + 2 should equal 4', function() {
      var sum = adder.add(2, 2);

      expect(sum).toBe(4);
   });

   it('2 + 5 should equal 5', function() {
      var sum = adder.add(2, 3);

      expect(sum).toBe(5);
   });

   it('[2 + 5] should equal 5', function() {
      var sum = adder.add([2, 3]);

      expect(sum).toBe(5);
   });

   it('add a number and an array', function() {
      var sum = adder.add(1, [2, 3]);

      expect(sum).toBe(6);
   });

   it('add an array and a number', function() {
      var sum = adder.add([2, 3], 1);

      expect(sum).toBe(6);
   });

   it('add a string and a number', function() {
      var sum = adder.add('string', 1);

      expect(sum).toBe(1);
   });

   it('add a number and a string', function() {
      var sum = adder.add(1, 'string');

      expect(sum).toBe(1);
   });

   it('add nothing', function() {
      var sum = adder.add();

      expect(sum).toBe(0);
   });

   it('add two arrays', function() {
      var sum = adder.add([1,1], [2,2]);

      expect(sum).toBe(6);
   });
   
   it('add arrays with embedded strings', function() {
      var sum = adder.add([1,'string'], [2,2]);

      expect(sum).toBe(5);
   });

   it('add 3 numbers', function() {
      var sum = adder.add(1,1, 1);

      expect(sum).toBe(3);
   });
});


