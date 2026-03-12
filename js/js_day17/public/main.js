const typed = new Typed("#mainHeader", {
    strings: ["Physeck"],
    startDelay: 500,
    typeSpeed: 77,
    backSpeed: 60,
    loop: true
});


// -----
const article = [
    "Neon Horizon",
    "The Static Pulse",
    "Crimson Echo",
    "A Silver Riot",
    "Velvet Signal"
];

function strip(data) {
    return data.replace(/^(a |the |an )/i, '').trim();
}

const sortedArticle = article.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const container = document.querySelector('.list-container');
const ul = container.querySelector('ul');

sortedArticle.forEach(title => {
    const li = document.createElement('li');
    li.textContent = title;
    ul.appendChild(li);
});

// ul.innerHTML = sortedArticle
//     .map(data => `<li>${data}</li>`)
//     .join("");