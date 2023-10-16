const emojis = [
    "💵",
    "💵",
    "🎅",
    "🎅",
    "🐺",
    "🐺",
    "👽",
    "👽",
    "😡",
    "😡",
    "😜",
    "😜",
    "💀",
    "💀",
    "🐟",
    "🐟",
];

let openCards = [];

// perimite criar uma ordenação de acordo com alguma regra dentro da função
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); // vai colocar o peso de 2 e -1

for (let i = 0; i < emojis.length; i++) {

    let box = document.createElement("div"); // Cria o elemento dentro do html
    box.className = "item"; // adiciona classe ao elemento criado

    // ira criar os elementos de forma aleatoria no tabuleiro
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

// função para selecionar a carta com o click
function handleClick() {

    // if para verificar se existe mais de duas cartas abertas
    if (openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    }
    
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500)
    }

    console.log(openCards)
}


function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []

    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert('Voce venceu!')
    }
}

function recarregarPagina () {
    window.location.reload()
}

