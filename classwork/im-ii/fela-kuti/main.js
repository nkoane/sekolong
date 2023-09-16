function sum(a, b) {
    return a + b;
}

function div(a, b) {
    if (b == 0) {
        alert('Error: division by zero');
    } else {
        return a / b;
    }
}

const dipalo = document.querySelector('form#dipalo');

dipalo.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNumber = parseInt(e.target.elements.a.value);
    const secondNumber = parseInt(e.target.elements.b.value);
    //
    e.target.elments.c.value = sum(firstNumber, secondNumber);
});
