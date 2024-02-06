import getId from "../utils/getId.js";

// // build the class that would belong to the things that has many things
// class Book {
//   constructor(title, author) {
//       this.id = getId();
//       this.title = title;
//       this.author = author;
//   }
// }

// export default Book;

class Ninja {
  #jutsus
  static allNinjas = [];

  constructor(name, rank, village) {
    this.name = name;
    this.rank = rank;
    this.village = village;
    this.#jutsus = [];
    Ninja.allNinjas.push(this);
  }

  performRandomJutsu() {
    if (this.#jutsus.length === 0) {
      console.log("No jutsus available for this ninja.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.#jutsus.length);
    const randomJutsu = this.#jutsus[randomIndex];
    console.log(`${this.name} performed ${randomJutsu} jutsu.`);
  }

  completeMission() {
    console.log(`${this.name} completed a mission as a ${this.rank} ninja from ${this.village}.`);
  }

  static getRandomNinja() {
    if (Ninja.allNinjas.length === 0) {
      console.log("No ninjas available.");
      return null;
    }

    const randomNinjaIndex = Math.floor(Math.random() * Ninja.allNinjas.length);
    return Ninja.allNinjas[randomNinjaIndex];
  }
}

export default Ninja;
