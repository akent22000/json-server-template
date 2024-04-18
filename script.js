// document.addEventListener('DOMContentLoaded', () => mapCookies());

function getCookies() {
    return fetch('http://localhost:3000/cookies')
        .then((response) => response.json());
}

async function mapCookies() {
    let data = await getCookies();

    let text = ``;
    data.map(function (data) {
        document.getElementById("display").innerHTML =
            text += `<div class="test">${data.name} "map"</div>
                    <p class="test">${data.rarity}</p>`;
    });
}
mapCookies();

function createCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");

    let checkboxP = document.createElement("p");
    checkboxP.textContent = "Click Checkbox to sort Cookie Characters alpabetically"

    document.body.appendChild(checkboxP);
    document.body.appendChild(checkbox);
}
createCheckbox();

async function sortCookies() {
    let data = await getCookies();

    let checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            data.sort((a, b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });

            let text = ``;
            data.map(function (data) {
                document.getElementById("display").innerHTML =
                    text += `<div class="test">${data.name} "sort"</div>
                    <p class="test">${data.rarity}</p>`;
            });

        } else {
            document.getElementById("display").innerHTML = ''
        }
    });
}
sortCookies();


// //The filter() method creates a new array filled with elements that pass a test provided by a function.
// //Return an array of all values in data that are common:

async function filterCookies() {
    let data = await getCookies();
    filterCommon = 'yes'
    filterRare = ''
    filterClear = ''
    if (filterCommon === 'yes') {
        let filteredBookTitles = data
            .filter(data => data.rarity === "Common")
            // first filter (us any criteria here to select only the books you want)
            .map(data => data.name);
        let text = ``;

        document.getElementById("display").innerHTML =
            text += `<div class="test">${filteredBookTitles} "sort"</div>
        <p class="test">${data.rarity}</p>`;

    } else if (filterRare === 'yes') {
        let filteredBookTitles2 = data
            .filter(data => data.rarity === "Rare")           // first filter (us any criteria here to select only the books you want)
            .map(data => data.name);
        let text = ``;

        document.getElementById("display").innerHTML =
            text += `<div class="test">${filteredBookTitles2} "sort"</div>
        <p class="test">${data.rarity}</p>`;
    } else if (filterClear === 'yes') {

        document.getElementById("display").innerHTML = ''
    }
}
filterCookies();



const commonBtn = document.getElementById("commonBtn");
commonBtn.addEventListener("click", (event) => {
    filterRare = 'no'
    filterCommon = 'yes'
    filterCookies();
});

const rareBtn = document.getElementById("rareBtn");
rareBtn.addEventListener("click", (event) => {
    filterCommon = 'no'
    filterRare = 'yes'
    filterCookies();
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", (event) => {
    filterCommon = 'no'
    filterRare = 'no'
    filterClear = 'yes'
    filterCookies();
});






// const fetchData = async () => {
//     const response = await fetch('http://localhost:3000/cookies');
//     const data = await response.json();
//     return data;
// };

async function getCookies() {
    const response = await fetch('http://localhost:3000/cookies')
    data = await response.json();
}

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
// let data = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = data.filter((data) => {
        return (
            data.name.toLowerCase().includes(searchString) ||
            data.type.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});



const displayCharacters = (data) => {
    const htmlString = data
        .map((data) => {
            return `
            <li class="character">
                <h2>${data.name}</h2>
                <p>House: ${data.type}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

getCookies();







//Chaining map, filter, and reduce methods involves applying them sequentially, with each method receiving the output of the previous one.

// const searchPokemon = async () => {

//     data = await fetchData();


//     data.filter(data => data.rarity === "Rare")
//     console.log(data.rarity)

//     data.map(function (data) {
//         console.log(`${data.name}`)
//         console.log(data.name)
//     });

//     // const pokemonList = document.querySelector('.pokemon-list');
//     // const searchQuery = searchInput.value.toLowerCase();

//     function dataData() {

//         data.filter(data => data.rarity === "Rare")
//         console.log(data.rarity)
//     }
//     dataData()

//     function dataDatadata() {

//         data.map(function (data) {
//             console.log(`${data.name}`)
//             console.log(data.name)
//         });
//     }
//     dataDatadata()
//     // const matchingPokemons = data.filter((data) => data.name.includes('Ginger'));

//     // data.filter(data => data.name.includes(searchQuery))



//     //     const matchingPokemons = data.filter((data) => data.name.includes(searchQuery));


//     // if (matchingPokemons.length > 0) {
//     //     // display matching Pokemon

//     //     let text = ``;
//     //     data.map(function (data) {
//     //         document.getElementById("display").innerHTML =
//     //             text += `<div class="test">${data.name} "sort"</div>
//     //                 <p class="test">${data.rarity}</p>`;
//     //     });
//     //     console.log(data + 'working')

//     // } else {
//     //     // display no results message
//     //     document.getElementById("display").innerHTML = ''
//     //     console.log(data + 'NOT working or search was empty')

//     // }
// };

// searchPokemon();



// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('input', searchPokemon);


// //The for loop is an iterative statement that checks for certain conditions and then executes a block of code repeatedly as long as those conditions are met.
// // for (let i = 0; i < data.length; i++) {
// //     console.log(data[i]);
// // }


// //The for...of Loop iterates over iterable objects such as arrays, sets, maps, strings, and so on. It has the same syntax as the for...in loop, but instead of getting the key, it gets the element itself.
// // for (data of data) {
// //     console.log(data);
// // }

// async function forEach() {
//     let data = await getCookies();
//     let text = '';

//     data.forEach(myFunction);
//     function myFunction(data) {

//         document.getElementById("forEach").innerHTML =
//             text += `<div class="item col-sm-4"><h2>${data.character} "forEach"</div>
//         <p class="text-right">${data.rarity}</p>`;
//     }

// }
// forEach();
