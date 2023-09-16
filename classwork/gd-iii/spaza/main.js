/*  
as an excercise, try to get the vegetable element
const vegetable = document.getElementById('vegetable');
*/

/**
 *
 * the are the goods we are selling
 */
const theGoods = ['starch', 'meat'];

/**
 *
 * we are going to use this function to calculate the total cost of the order
 * and we are going to use it to validate the payment
 *
 */
function doTheCosting() {
    // we are calculating the total cost
    const total = parseInt(document.getElementById('meat-cost').value) + parseInt(document.getElementById('starch-cost').value);
    // we are getting the payment
    const payment = parseInt(document.getElementById('paid').value);

    // we are calculating the change
    const change = payment - total;

    document.getElementById('total').value = total;
    document.getElementById('change').value = change;

    /**
     * if the change is less than 0, we are going to disable the submit button
     * and we are going to add the error class to the change input
     */
    if (change < 0) {
        document.getElementById('change').parentElement.classList.add('error');
        document.getElementById('submit-order').disabled = true;
    } else {
        document.getElementById('change').parentElement.classList.remove('error');
        document.getElementById('submit-order').disabled = false;
    }

    /**
     * if the payment is less than 0, we are going to disable the submit button
     * and we are going to add the error class to the payment input
     * else we are going to remove the error class and enable the submit button
     * this is to prevent the user from submitting the form with a negative payment
     * or a payment of 0
     *
     */
    if (payment <= 0) {
        document.getElementById('paid').parentElement.classList.add('error');
        document.getElementById('submit-order').disabled = true;
    } else {
        document.getElementById('paid').parentElement.classList.remove('error');
        document.getElementById('submit-order').disabled = false;
    }
}

/**
 *
 * this function will create the order and add it to the list of orders
 */
function getOrderDone() {
    const dijo = [];

    theGoods.forEach((name) => {
        const thing = document.getElementById(name);
        dijo.push(thing.options[starch.options.selectedIndex].innerText);
    });

    const anOrder = `
            <p class="order-number">${Math.round(Math.random() * 1000)}</p>
            <p class="order-detail">${dijo.join(', ')}</p>
            <p class="order-time">${new Date().toLocaleString()}</p>
            <p><button class="go-button">DONE</button></p>
    `;
    const itemOrder = document.createElement('li');
    itemOrder.innerHTML = anOrder;
    itemOrder.classList.add('order');

    document.getElementById('orders').appendChild(itemOrder);

    itemOrder.querySelector('.go-button').addEventListener('click', function (event) {
        event.preventDefault();
        itemOrder.classList.add('order-done');
        setTimeout(() => {
            itemOrder.remove();
        }, 1000);
    });
}

/**
 * once the page is loaded, we can start adding the event listeners
 *
 */

window.addEventListener('load', () => {
    /**
     * we are going to add the event listeners to the goods, so we can update the cost
     */
    theGoods.forEach((name) => {
        const thing = document.getElementById(name);
        document.getElementById(`${name}-cost`).value = thing.value;
        doTheCosting();

        thing.addEventListener('change', () => {
            document.getElementById(`${name}-cost`).value = thing.value;
            doTheCosting();
        });
    });

    /**
     * we are going to add the event listeners to the payment, so we can update the cost
     * and validate the payment
     * */
    document.getElementById('paid').addEventListener('change', doTheCosting);

    /**
     * we are going to add the event listeners to the form, so we can create the order
     * and reset the form
     */
    const formOrder = document.getElementById('order');
    formOrder.addEventListener('submit', function (event) {
        event.preventDefault();

        getOrderDone();

        formOrder.reset();
    });
});
