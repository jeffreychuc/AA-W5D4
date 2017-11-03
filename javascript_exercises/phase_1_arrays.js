Array.prototype.uniq = function uniq() {
  const uniqueValues = [];
  for (let i = 0; i < this.length; i++) {
    if (uniqueValues.indexOf(this[i]) === -1) {
      uniqueValues.push(this[i]);
    }
  }
  return uniqueValues;
};

console.log([1,2,3,3,5,6,6,3].uniq());

Array.prototype.twoSum = function twoSum() {
  const twoSums = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        twoSums.push([i,j]);
      }
    }
  }
  return twoSums;
};

console.log([1,2,-3,3,5,-6,6,-3].twoSum());

Array.prototype.transpose = function transpose() {
  const transposedArray = [];
  for (let i = 0; i < this[0].length; i++) {
    transposedArray.push([]);
    for (let j = 0; j < this.length; j++) {
      transposedArray[i].push(this[j][i]);
    }
  }
  return transposedArray;
};

console.log([[0,1,2,3],[0,1,2,3],[0,1,2,3]].transpose());
