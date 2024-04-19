// document.addEventListener('DOMContentLoaded', () => mapCookies());

function getCookies() {
    return fetch('http://localhost:3000/cookies')
        .then((response) => response.json());
}


async function getCookies2() {
    const response = await fetch('http://localhost:3000/cookies')
    data = await response.json();
}
// const pokemonName = document.getElementById("pokemonName").value;
const cardsContainer = document.getElementById('cards-container');


// function getCookies() {
//     fetch('http://localhost:3000/cookies')
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(function (data) {
//                 console.log(data)
//                 // console.log(test2)

//                 const div = document.createElement('div');
//                 const name = document.createElement('h3');

//                 div.classList = 'card'
//                 name.innerText = `Name: ${data.name}`

//                 div.appendChild(name)
//                 cardsContainer.appendChild(div)
//             })
//         });
// };
// getCookies()

async function mapCookies() {
    data = await getCookies();

    data.map(data => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const rarity = document.createElement('h3');
        const type = document.createElement('h3');
        const position = document.createElement('h3');


        const like = document.createElement('button');
        div.classList = 'card'
        image.classList = 'card-img'
        like.classList = 'empty'
        image.src = data.image
        image.classList.add('image');
        name.innerText = `Name: ${data.name}`
        rarity.innerText = `Rarity: ${data.rarity}`
        type.innerText = `Type: ${data.type}`
        position.innerText = `Position: ${data.position}`
        like.textContent = 'like'

        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(rarity)
        div.appendChild(type)
        div.appendChild(position)
        div.appendChild(like)
        cardsContainer.appendChild(div)
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

function sortCookies() {
    let data = getCookies();

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
                console.log(data)

                document.getElementById("display").innerHTML =
                    text += `<div class="test">${data.name} "sort"</div>
                    <p class="test">${data.rarity}</p>
                    <img src='${data.image}' class='image imgWrap' />`;
                ;
            });

        } else {
            document.getElementById("display").innerHTML = ''
        }
    });
}
sortCookies();



// // const charactersListSearch = document.getElementById('display');
// const searchBar = document.getElementById('searchBar');

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredCharacters = data.filter((data) => {
//         return (
//             data.name.toLowerCase().includes(searchString)
//             // || data.type.toLowerCase().includes(searchString)
//         );
//     });
//     displayCharactersSearch(filteredCharacters);
// });

// const displayCharactersSearch = (data) => {
//     const htmlString = data
//         .map((data) => {
//             return `
//             <div id="display">${data.name} "search"</div>
//             <p class="test">${data.type}</p>
//             <img src='${data.image}' class='image imgWrap' />
//         `;
//         })
//         .join('');
//     display.innerHTML = htmlString;
// };

// getCookies();



// // //fetch character names
// // //like by character
// // //each character has like button
// // //each character has like counter
// // //when character like button clicked
// // //then update character like counter

// // // //The filter() method creates a new array filled with elements that pass a test provided by a function.
// // // //Return an array of all values in data that are common:


// const charactersList = document.getElementById('display');
// const charactersList2 = document.getElementById('like-count2');
// const likeButton = document.getElementById('like-button');
// const likeButton2 = document.getElementById('like-button2');

// // let data = [];
// let LikeCount = 0;
// let LikeCount2 = 0;

// likeButton.addEventListener('click', (e) => {

//     const filteredCharacters = data.filter((data) => {
//         // console.log(data.position)
//         return (
//             data.position.includes('Front')
//         );
//     });
//     LikeCount++;
//     charactersList.innerText = LikeCount;
//     displayCharacters(filteredCharacters);
//     console.log(filteredCharacters)

// });

// // if (filteredCharacters === "Rear") {
// //     console.log("dd")
// //     LikeCount++;
// // }


// likeButton2.addEventListener('click', (e) => {

//     const filteredCharacters = data.filter((data) => {
//         console.log(data.position)

//         return (
//             data.position.includes('Rear')
//         );
//     });
//     LikeCount2++;
//     charactersList2.innerText = LikeCount2;
//     displayCharacters(filteredCharacters);
//     console.log(filteredCharacters)


// });




// const displayCharacters = (data) => {
//     // LikeCount++;
//     // charactersList.innerText = LikeCount;

//     // charactersList2.innerText = LikeCount;
//     const htmlString = data

//         .map((data) => {
//             return `
//             <div id="test">${data.name} "like"</div>
//             <p class="test">${data.type}</p>
//         `;
//         })
//         .join('');
//     document.getElementById("display").innerHTML = htmlString

//     // display.innerHTML = htmlString;
//     // console.log(data)
//     // console.log(htmlString)

// };


// getCookies2();










