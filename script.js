const notesUp = [ 
    "d3UP", "c3UP", 
    "b2UP", "a2UP", "g2UP", "f2UP", "e2UP", "d2UP", "c2UP",
    "b1UP", "a1UP", "g1UP", "f1UP", "e1UP", "d1UP", "c1UP",
    "b0UP", "b0UP", "g0UP", 
];
const notesDown = [
    "f1DOWN", "e1DOWN", "d1DOWN", "c1DOWN",
    "b0DOWN", "a0DOWN", "g0DOWN", "f0DOWN", "e0DOWN", "d0DOWN", "c0DOWN",
    "B0DOWN", "A0DOWN", "G0DOWN", "F0DOWN", "E0DOWN", "D0DOWN", "C0DOWN",
    "B1DOWN",
];

const notesbox = [
    notesUp,
    notesDown,
]

const note = document.querySelector('#note');
const right = document.getElementById("right");
const wrong = document.getElementById("wrong");
const answer = document.getElementById("answer");
const changeShow = document.getElementById('changeShow');
const changeMode = document.getElementById('changeMode');
const whiteKeyName = document.querySelectorAll('.keyDownName');
const whiteKey = document.querySelectorAll('.keyDown');
const bassKeys = document.querySelectorAll('.bass');
const trebleKeys = document.querySelectorAll('.treble');

let mode = 2;   // 0: treble, 1: bass, 2: all

changeShow.addEventListener('click', () => {
    whiteKeyName.forEach(key => {
        key.hidden = key.hidden ? false : true
    });
});

changeMode.addEventListener('click', () => {
    mode++;
    if (mode > 2) mode = 0;
    let bassColor;
    let trebleColor;

    switch (mode) { 
        case 0:
            bassColor = 'grey';
            trebleColor = 'white';
            break;
        case 1:
            bassColor = 'white';
            trebleColor = 'grey';
            break;
        case 2:
            bassColor = trebleColor = 'white';
            break;
    }

    bassKeys.forEach(key => {
        key.style.backgroundColor = bassColor;
    });
    trebleKeys.forEach(key => {
        key.style.backgroundColor = trebleColor;
    });
    note.className = refresh()
})

whiteKey.forEach(key => {
    key.addEventListener('click', () => {
        let noteString = note.className
        let pressedKey = key.childNodes[0].innerHTML;
        let noteName = noteString.substr(0, 2);

        answer.innerHTML = noteName = noteName[1] == 0 ? noteName[0] : noteName;

        if (pressedKey == noteName) {
            // right
            wrong.style.display = "none"
            right.style.display = "";
            note.className = refresh()
        } else {
            // wrong
            wrong.style.display = ""
            right.style.display = "none";
        }

        tips.className = "";
    });
})

function randomInt(num) {
    return Math.floor(Math.random() * num);
}

function refresh() {
    let area;
    area = mode != 2 ? mode : randomInt(2);
    return notesbox[area][randomInt(19)]
}
