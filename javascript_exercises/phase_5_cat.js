const Cat = function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.name}`);
};

const garfield = new Cat('garfield', 'jeffrey');
const mrBoots = new Cat('Mr. Boots', 'Richard');

garfield.cuteStatement();
mrBoots.cuteStatement();

Cat.prototype.cuteStatement = function () {
  console.log(`Everyone loves ${this.name}`);
};

garfield.cuteStatement();
mrBoots.cuteStatement();

Cat.prototype.meow = function () {
  console.log('meow');
};

garfield.meow();
mrBoots.meow();

garfield.meow = function () {
   console.log("woof");
};

garfield.meow();
mrBoots.meow();
