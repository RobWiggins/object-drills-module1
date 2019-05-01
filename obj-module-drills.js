'use strict';

// exercise 1

const loaf = {
  flour: 300,
  water: 210
};

console.log(loaf);

loaf.hydration = function() {
  return (this.water / this.flour) * 100;
};

// console.log(loaf.hydration());





// EXERCISE 2 ----------------------------------------------------------
let num = 1;

const obj = {
  foo: num ,
  bar: ++num,
  fum: num++,
  quux: num++,
  spam: num++
};

// for (let prop in obj) {
//   console.log(prop + ' : ' + obj[prop] );
// }




// EXERCISE 3 -----------------------------------------------------------

const mealsOfDay = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

// console.log(mealsOfDay.meals[3]);






// EXERCISE 4 -----------------------------------------------------------

let people = [];

let thing = 1;
for (let i = 0; i < 5; i++) {
  people.push( { 
    name: 'janitor' + ++thing,
    jobTitle: 'super janitor' + ++thing,
    boss: ''
  } );

  if (i === 0) {
    people[0].boss = 'Founder John doesn\'t report to anybody.';
  } else {
    people[i].boss = 'reports to fred';
  }
}

// console.log(people);





// EXERCISE 6 -----------------------------------------------------------

const message = 'craft block argon meter bells brown croon droop';

function decode (code) {
  let output = '';
  const words = code.split(' ');
  const converstion = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };
  for (let i = 0;i < words.length;i++) {
    let x = converstion[words[i].substring(0,1)];
    if (!x) {
      output += " ";
    } else {
      output += words[i].charAt(x - 1);
    }
  }
  return output;

}

// console.log(decode(message));

// EXERCISE 7 -----------------------------------------------------------

function createCharacter (name, nickname, race, origin, attack, defense) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight : function(opponent) {
      if (this.attack > opponent.defense) {
        return `Your opponent takes ${this.attack - opponent.defense} damage and you receive 0 damage`;
      } else {
        return `Your opponent takes 0 damage and you receive ${opponent.attack - this.defense} damage`;
      }

    },
  };
}

let characterUs = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
let characterOpponent = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
// console.log(characterUs.evaluateFight(characterOpponent));
// console.log(characterOpponent.evaluateFight(characterUs));

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 18, 3)
];

// characters.find(function(element) {
//   if (element.nickname === 'aragorn') {
//     element.describe();
//   }
// });

// console.log(characters.filter(element => element.race === 'Hobbit'));
console.log(characters.filter(element => element.attack > 5));
