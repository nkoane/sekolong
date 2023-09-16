const starch = document.getElementById('starch');
const meat = document.getElementById('meat');

starch.addEventListener('change', function () {
    const cost = document.getElementById('starch_cost');
    cost.value = starch.value;
    calculateGrandTotal();
});

meat.addEventListener('change', function () {
    const cost = document.getElementById('meat_cost');
    cost.value = meat.value;
    calculateGrandTotal();
});

async function getDijo() {
    const dijo = await fetch('dijo.json');
    const stoko = await dijo.json();

    stoko.meat.forEach(function (nama) {
        const option = document.createElement('option');
        option.value = nama.cost;
        option.innerText = nama.type;
        meat.appendChild(option);
    });
}

await getDijo();

function calculateGrandTotal() {
    const subTotals = Array.from(document.getElementsByClassName('sub_total'));
    const total = document.getElementById('total');

    let grandTotal = 0;

    subTotals.forEach(function (sub, index) {
        grandTotal = grandTotal + parseInt(sub.value);
    });

    total.value = grandTotal;
}
