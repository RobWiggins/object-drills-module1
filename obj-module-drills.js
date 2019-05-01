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

console.log(people);





// EXERCISE 5 -----------------------------------------------------------

  



