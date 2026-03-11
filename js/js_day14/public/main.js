const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----

//start with strings, numbers, and booleans
let age = 100;
let age2 = age;
// console.log(age, age2);
age2 = 200;
// console.log(age, age2);

let name = 'Jus';
let name2 = name;
// console.log(name,name2);
name2 = 'Tin';
// console.log(name,name2);


//array ex
const players = ['Edw', 'Tim', 'Jer', 'Mat'];

//call team
const team = players;
// console.log(players,team);

//if we change index of team, it changes value of players too (calling)
// team[2] = 'Tes';
// console.log(players,team);

//FIX -> Copy using slice or [].concat or [...] (spread) or Array.from
// if we change one of the value of team 2, players wont change 
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
// console.log(team2);
// team2[3] = 'Tes';
// console.log(team2,players)


//-- Objects --
const person = {
    name: 'Justin',
    age: 21
};
// console.log(person);

//this makes the object person also changes
const personCopy = person;
// personCopy.age = 22;
// console.log(personCopy);

// Copy using Object.assign or spread
const person2 = Object.assign({}, person, { n: 22, age: 24 });
// console.log(person2);
const person3 = { ...person };
console.log(person3);

//NOTE : Object.assign only takes 1 level (cannot work in nested object). 
// to avoid this, using JSON is preferable (Deepclone)


const justin = {
    name: 'justin',
    age: 22,
    socials: {
        facebook: 'physeck',
        ig: 'physeck'
    }
};

console.clear();
// console.log(justin);

const jt = JSON.parse(JSON.stringify(justin));