import getId from "../utils/getId.js";
import Ninja from "./belongs-to.js"

// // build the class that would have many things
// export class Author {
//   static #allAuthors = []; 
//   #books = [];

//   constructor(name) {
//       this.id = getId();
//       this.name = name; // Array to store books
//       Author.#allAuthors.push(this);
//   };

//   addBook(title, author) {
//     this.#books.push(new Book(title, author));
//   };

//   getBooks(){
//     return [...this.#books];
//   };

//   static getAllAuthors(){
//     return [...Author.#allAuthors];
//   }
// }

export class Village {
  static #allVillages = [];
  #ninjas;

  constructor(name, numberOfResidents, kage) {
    this.name = name;
    this.numberOfResidents = numberOfResidents;
    this.kage = kage;
    this.#ninjas = [];
    Village.#allVillages.push(this);
  }

  addNinja(name, rank) {
    const ninja = new Ninja(name, rank, this.name);
    this.#ninjas.push(ninja);
    return ninja;
  }

  promoteNinjaRank(ninja) {
    const ranks = ["Genin", "Chunin", "Jonin"];
    const currentRankIndex = ranks.indexOf(ninja.rank);

    if (currentRankIndex < ranks.length - 1) {
      ninja.rank = ranks[currentRankIndex + 1];
      console.log(`${ninja.name} has been promoted to ${ninja.rank}.`);
    } else {
      console.log(`${ninja.name} is already at the highest rank.`);
    }
  }

  exileNinja(ninja) {
    const index = this.#ninjas.indexOf(ninja);
    if (index !== -1) {
      this.#ninjas.splice(index, 1);
      console.log(`${ninja.name} has been exiled from ${this.name}.`);
    } else {
      console.log(`${ninja.name} is not part of ${this.name}.`);
    }
  }

  findNinjasByRank(targetRank) {
    return this.#ninjas.filter(ninja => ninja.rank === targetRank);
  }

  static beginChuninExams() {
    console.log("Chunin Exams have begun across all villages.");
  }

  static getAllVillages() {
    return [...Village.#allVillages];
  }

  getAllNinjas() {
    return [...this.#ninjas];
  }
}