const cf = document.getElementById('currency-form');

cf.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = document.getElementById('query');
    const result = document.getElementById('result');
    const selector = document.getElementById('selector');

    // test if it is a number
    if (isNaN(query.value)) {
        alert('Please enter a number');
        cf.reset();
    } else {
        result.value = selector.options[selector.selectedIndex].value * query.value;
    }

    /*
    if (selector.selectedIndex == 0) {
        result.value = query.value * 15;
    } else if (selector.selectedIndex == 1) {
        result.value = query.value * 25;
    } else if (selector.selectedIndex == 2) {
        result.value = query.value * 20;
    }
    */
});
