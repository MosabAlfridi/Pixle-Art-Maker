




const color = document.querySelector('#colorPicker');
const rows = document.querySelector('#inputHeight');
const cells = document.querySelector('#inputWidth');
const canves = document.querySelector('#pixelCanvas');
const form = document.querySelector('#sizePicker');


form.addEventListener('submit', function(event) {
    canves.innerHTML = '';
    event.preventDefault();
    event = makeGrid();
});


canves.addEventListener('click', function(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colors = '#';
    for (var i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}



function makeGrid() {

    for (let i = 0; i < rows.value; i++) {
        const rows = canves.insertRow(0);

        for (let j = 0; j < cells.value; j++)
            rows.insertCell(0);
    }
};

makeGrid();


  