const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});

const people = [
    { first: 'Silas', last: 'Vance', year: 1902, passed: 1985 },
    { first: 'Florence', last: 'Nightingale', year: 1820, passed: 1910 },
    { first: 'Arthur', last: 'Conan', year: 1859, passed: 1930 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Thaddeus', last: 'Blackwood', year: 1874, passed: 1955 },
    { first: 'Clara', last: 'Barton', year: 1821, passed: 1912 },
    { first: 'Gideon', last: 'Holloway', year: 1910, passed: 1992 },
    { first: 'Beatrix', last: 'Potter', year: 1866, passed: 1943 },
    { first: 'Victor', last: 'Hugo', year: 1802, passed: 1885 },
    { first: 'Edith', last: 'Wharton', year: 1862, passed: 1937 },
    { first: 'Jasper', last: 'Sterling', year: 1895, passed: 1970 },
    { first: 'Hattie', last: 'McDaniel', year: 1893, passed: 1952 },
    { first: 'Orville', last: 'Wright', year: 1871, passed: 1948 },
    { first: 'Rosalind', last: 'Franklin', year: 1920, passed: 1958 },
    { first: 'Leopold', last: 'Fitz', year: 1845, passed: 1918 },
    { first: 'Mildred', last: 'Ratched', year: 1908, passed: 1976 },
    { first: 'Cyrus', last: 'McCormick', year: 1809, passed: 1884 },
    { first: 'Emmeline', last: 'Pankhurst', year: 1858, passed: 1928 },
    { first: 'Otis', last: 'Redding', year: 1941, passed: 1967 },
    { first: 'Zelda', last: 'Fitzgerald', year: 1900, passed: 1948 },
    { first: 'Bram', last: 'Stoker', year: 1847, passed: 1912 },
    { first: 'Sojourner', last: 'Truth', year: 1797, passed: 1883 },
    { first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Langston', last: 'Hughes', year: 1901, passed: 1967 },
    { first: 'Greta', last: 'Garbo', year: 1905, passed: 1990 },
    { first: 'Wilfred', last: 'Owen', year: 1893, passed: 1918 },
    { first: 'Hypatia', last: 'Alexandria', year: 350, passed: 415 },
    { first: 'Dante', last: 'Alighieri', year: 1265, passed: 1321 },
    { first: 'Simone', last: 'de Beauvoir', year: 1908, passed: 1986 }
];
const peopleData = document.getElementById("peopleData");

const peoplesData = people.map(person=>{
    return person;
});
console.log(peoplesData);

//Array Data call const
peopleData.innerHTML = people.map(person => {
    const ages = person.passed - person.year;
    return `
    <tr>
        <td>${person.first}</td>
        <td>${person.last}</td>
        <td class="text-center">${person.year}</td>
        <td class="text-center">${person.passed}</td>
        <td class="text-center">${ages}</td>
    </tr>
    `
}).join("");


const names = [
    'Liam, Smith', 'Olivia, Johnson', 'Noah, Williams', 'Emma, Brown',
    'Oliver, Jones', 'Ava, Garcia', 'Elijah, Miller', 'Charlotte, Davis',
    'William, Rodriguez', 'Sophia, Martinez', 'James, Hernandez', 'Amelia, Lopez',
    'Benjamin, Gonzalez', 'Isabella, Wilson', 'Lucas, Anderson', 'Mia, Thomas',
    'Henry, Taylor', 'Evelyn, Moore', 'Alexander, Jackson', 'Harper, Martin',
    'Sebastian, Lee', 'Luna, Perez', 'Jack, Thompson', 'Ella, White',
    'Owen, Harris', 'Aria, Sanchez', 'Samuel, Clark', 'Scarlett, Ramirez',
    'Matthew, Lewis', 'Victoria, Robinson'
];

const reducedPpl = names.reduce((total,person) =>{
    return total + person;
});
// console.log("test",reducedPpl);


const nameData = document.getElementById("nameData");

//Single Data call const
/*
// names.forEach(value => {
//     const row = document.createElement("tr");
//     const cell = document.createElement("td");

//     cell.textContent = value;
//     row.appendChild(cell);
//     nameData.appendChild(row);
// });
*/

//Split map & trim space
nameData.innerHTML = names.map(fullName => {
    const [firstName, lastName] = fullName.split(", ").map(name => name.trim());

    return `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
        </tr>
    `;
}).join("");

// =================================================
// Array.prototype.filter()
// 1. Filter array list based on selected value and constraint
const filt = people.filter(person =>
    person.year >= 1200 && person.year < 1800
);
// console.table(filt);

// Array.prototype.map()
// 2. Gives array combined into a const
const fullNames = people.map(person => `${person.first} ${person.last}`);
// console.log(fullNames)

// Array.prototype.sort()
// 3. Sorts given array
// -> people included to var a and b, 
// then subtract a-b 
// (ex 1900 a, 1800 b), then 1900-1800 -> 100 (positive) means moving a after b 
// if swapped instead (1800 - 1900) -> -100 (negative), it doesnt sort the order, 
// else if the result is 0, nothing changes
const sortedPeople = people.sort((a, b) => a.year - b.year);
// console.table(sortedPeople)

// Array.prototype.reduce()
// combines all age of peoples
const totalYears = people.reduce((total, person) => {
    return total + (person.passed - person.year);
}, 0);
// console.log(totalYears);
//reduce has 3 different defined value for a in reduce(a,b) 
// =>{return}, 0); -> for numbers
// =>{return}, {}); -> for object
// =>{return}, []); -> for array

//sort people by years lived
const yearsLived = people.sort((a, b) => {
    const lastPerson = a.passed - a.year;
    const nextPerson = b.passed - b.year;
    return lastPerson > nextPerson ? 1 : -1
});
// console.table(yearsLived);

//turning const into array
// const multiData = document.querySelector('.many-datas');
// const listedArray = Array.from(multiData.querySelector('a')); //example taking all the <a> elements

//sort people name alphabetically by first name
const lastNameSorted = names.sort((a, b) => {
    const [aFirst, aLast] = a.split(", ");
    const [bFirst, bLast] = b.split(", ");
    return aFirst > bFirst ? 1 : -1; // a > b, if a is bigger than b (true) that means swap is true, else no swap (false)
});
// console.table(lastNameSorted);


//sum similar data totals
const simData = ['car', 'truck', 'bus',
    'car', 'truck', 'bus',
    'car', 'bus',
    'car', 'bus',
    'car', 'truck', 'bus',
    'car', 'bus',
    'car', 'truck',
    'car', 'truck', 'bus',];
//manual = 8 car, 5 truck, 7 bus

const sumData = simData.reduce((totalData, summed) => {
    totalData[summed] = (totalData[summed] || 0 ) + 1;
    return totalData;
}, {});
// console.log(sumData);