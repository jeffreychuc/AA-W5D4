
Array.prototype.myEach = function myEach(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

console.log(
  [0,1,2,3].myEach( (el) => console.log(el) )
);


// Array.prototype.myMap = function myMap(cb) {
//   return this.myEach(cb);
// };
Array.prototype.myMap = function myMap(cb) {
  const result = new Array();
  function map(el)  {
    result.push(cb(el));
  }
  this.myEach(map);
  return result;
};

console.log(
  [0,1,2,3].myMap( (el) => el+5 )
);

Array.prototype.myReduce = function myReduce(cb, acc)  {
  let result = acc || 0;
  function accumulate(el) {
    result = cb(result, el);
  }
  this.myEach(accumulate);

  return result;
};


console.log(
  [0,1,2,3].myReduce( (acc, el) => el+acc )
);
