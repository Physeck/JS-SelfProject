const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----

// Devtools
// Break on -> Attribute modification (on HTML to find which JS function corresponds)

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'green';
    p.style.fontSize = '2rem';
}

//regular logging (console)
console.log("Hello from JS!");

//interpolated
console.log('Hello, I am a %s Student', 'Computer Science'); //old before `` ES6

const varSt = "Hard Working"; //modern ver
console.log(`Hello, I'm a ${varSt} Student`);

//styled
console.log('%c Big Text', 'font-size:50px; background:red;');

//warning
console.warn('Warning: Be careful');

//error
console.error('Omg Error!')

//info
console.info('FYI bro!');

//testing (assert)
console.assert(1 === 2, 'this is false'); //if the value check is false, it fires the msg
const p = document.querySelector('p');
console.assert(p.classList.contains('makeRed'), 'theres no class named "makeRed"');

//clearing
console.clear();

//viewing DOM elements
console.log(p); //shows the element selected 
console.dir(p); //breaks down properties and methods from element

//grouping together (for list to be clean and not messy)
const dogs = [{ name: "Tilly", age: 5 }, { name: "Silky", age: 2 }];

dogs.forEach(dog => {
    //console.group -> encapsulate the list on groups
    //console.groupCollapsed -> same but just collapsed
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} y.o`);
    console.groupEnd(`${dog.name}`);
    //ending must have console.groupEnd (like brackets {})
});

console.clear();
//counting
console.count("Justin");
console.count("Justin");
console.count("Timo");
console.count("Justin");
console.count("Timo");
console.count("Justin");

//timing
console.time('fetching data'); //starts timer
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); //ends timer and shows time duration
        console.log(data);
    });
;

//table logging
console.table(dogs);



