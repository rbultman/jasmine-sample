var add = function() {
   var sum = 0;

   function sumParameter(p) {
      if (Array.isArray(p)) {
         for(var i=0; i<p.length; i++) {
            sum = add(p[i], sum);
         }
      } else {
         if (typeof(p) === 'number') {
            sum += p;
         }
      }
   }

   for (var i=0; i<arguments.length; i++) {
      sumParameter(arguments[i]);
   }

   return sum;
}

module.exports = {
   add: add
};
