
Array.prototype.bubbleSort = function bubbleSort() {
  while (true) {
    let sorted = true;
    for (let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        const temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  return this;
};

console.log(
  [10,15,20,11,8,0,1,2,3].bubbleSort()
);
String.prototype.subString = function subString() {
  const subStrings = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j <= this.length; j++) {
      subStrings.push(this.slice(i,j));
    }
  }
  return subStrings;
};

console.log('Hello'.subString());
