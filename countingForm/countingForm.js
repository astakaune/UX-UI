let input = document.getElementById('number');

function calculate() {
    document.getElementById('square').innerHTML = square(input.value);
    document.getElementById('cube').innerHTML = cube(input.value);
}

function square(number) {
    return number * number;
}

function cube(number) {
    return number * number * number;
}