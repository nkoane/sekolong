async function getStoko() {
    const data = await fetch('./stoko.json');
    const stoko = await data.json();

    const dijo = Object.keys(stoko);

    let listOfGroups = '';

    dijo.forEach((foodGroup) => {
        let listOfItems = '';

        stoko[foodGroup].forEach((foodItem) => {
            if (foodItem.available === true) {
                const itemHTML = `
                <li>
                    <h3 class="name">${foodItem.name}</h3>
                    <a href="#starch-rice" class="picture"> 
                        <img src="${foodItem.picture}" width="200px" height="200px" /> 
                    </a>
                    <span class="price">R${foodItem.price}</span>
                    <span class="quantity">${foodItem.weight}g</span>
                </li>
                `;
                listOfItems += itemHTML;
            }
        });

        const groupHTML = `
            <div class="food-group">
                <ul>
                ${listOfItems}
                </ul>
            </div>
            `;

        console.log(foodGroup, groupHTML);
        listOfGroups += groupHTML;
    });

    const cupboard = document.querySelector('#stoko');
    cupboard.innerHTML = listOfGroups;

    cupboard.classList.remove('ping');
}

window.addEventListener('DOMContentLoaded', (event) => {
    getStoko();
});
