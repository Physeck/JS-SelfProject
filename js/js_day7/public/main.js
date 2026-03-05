const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const people = [
    { name: 'Wes', year: 2020 },
    { name: 'Kait', year: 2026 },
    { name: 'Irv', year: 2007 }, //19 y
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 }, //index 0
    { text: 'Super good', id: 823423 }, //index 1
    { text: 'You are the best', id: 2039842 }, //etc
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }

];

const peopleData = document.getElementById('peopleData');

peopleData.innerHTML = people.map(person => {
    return `
    <tr>
        <td>${person.name}</td>
        <td>${person.year}</td>
    </tr>
    `
}).join('');

const commentsData = document.getElementById('commentsData');

commentsData.innerHTML = comments.map(comment => {
    return `
    <tr>
        <td>${comment.id}</td>
        <td>${comment.text}</td>
    </tr>
    `
}).join('');

// Some and Every Checks
// Array.prototype.some() // is atleast the person 19? -> One or more data returns true
const someData = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({someData});

// Array.prototype.every() // is everyone 19? -> Every data must return true
const everyData = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({everyData});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking or
// find the comment with the ID 823423

const commentFind = comments.find(com => com.id === 823423);
console.log({commentFind});

// Array.prototype.findIndex
// Find the comment with this ID
const commentFindidx = comments.findIndex(com => com.id === 823423);
console.log({commentFindidx});

// delete the comment with the ID 823423
// manually using splice after finding it
comments.splice(commentFindidx, 1);
// console.table(comments);

// splice from array
const newComment = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];