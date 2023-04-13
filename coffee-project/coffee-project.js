"use strict"

// Page Element Variables
const coffeesContainer = document.querySelector('#coffees');
const roastSelection = document.querySelector('#roast-selection');
const coffeeSearch = document.querySelector('#coffee-search');

// Initial Coffees list
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// Initial rendering of coffees with full list
coffeesContainer.innerHTML = renderCoffees(coffees);

// Event listeners
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);


//------------------------------------------------ Methods ------------------------------------------------
function renderCoffee(coffee) {
    return `
        <div class="coffee" data-coffee-id="${coffee.id}">
            <div class="coffee-header">
                <div>${coffee.name}</div>
            </div>
            <div class="coffee-body">
                <div>${coffee.roast}</div>
            </div>
        </div>
    `;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function filterByRoast(roast) {
    let coffeeList = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === roast || roast === 'all') {
            coffeeList.push(coffee);
        }
    });
    return coffeeList;
}

function filterBySearch(search, coffeeList) {
    let filteredList = [];
    coffeeList.forEach(function(coffee) {
        if(coffee.name.toLowerCase().includes(search.toLowerCase())) {
            filteredList.push(coffee);
        }
    });
    return filteredList;
}

function updateCoffees(e) {
    e.preventDefault();
    let selectedRoast = roastSelection.value;
    let searchQuery = coffeeSearch.value;
    let filteredCoffees = filterBySearch(searchQuery, filterByRoast(selectedRoast));
    coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
}