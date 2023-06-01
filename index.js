class Tree {
  constructor(species) {
    this.species = species;
  }

  static definition() {
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
  }
}

class Deciduous extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return super.definition() + " Deciduous trees shed their leaves annually.";
  }
}

class Evergreen extends Tree {
  constructor(species, name) {
    super(species);
    this.name = name;
  }

  static definition() {
    return super.definition() + " Evergreens keep their leaves all year round.";
  }
}

// Testing the classes
const deciduousTree = new Deciduous("Oak", "Oak Tree");
console.log(deciduousTree.definition());  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
console.log(deciduousTree.species);  // Output: Oak
console.log(deciduousTree.name);  // Output: Oak Tree

const evergreenTree = new Evergreen("Pine", "Pine Tree");
console.log(evergreenTree.definition());  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
console.log(evergreenTree.species);  // Output: Pine
console.log(evergreenTree.name);  // Output: Pine Tree
