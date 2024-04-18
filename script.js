// document.addEventListener('DOMContentLoaded', () => mapCookies());

function getCookies() {
    return fetch('http://localhost:3000/cookies')
        .then((response) => response.json());
}


async function getCookies2() {
    const response = await fetch('http://localhost:3000/cookies')
    data = await response.json();
}




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



const charactersListSearch = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = data.filter((data) => {
        return (
            data.name.toLowerCase().includes(searchString)
            // || data.type.toLowerCase().includes(searchString)
        );
    });
    displayCharactersSearch(filteredCharacters);
});



const displayCharactersSearch = (data) => {
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


// async function mapCookies() {
//     let data = await getCookies();

//     let text = ``;
//     data.map(function (data) {
//         document.getElementById("display").innerHTML =
//             text += `<div class="test">${data.name} "map"</div>
//                     <p class="test">${data.rarity}</p>`;
//     });
// }
// mapCookies();


//fetch character names
//like by character
//each character has like button
//each character has like counter
//when character like button clicked
//then update character like counter




// //The filter() method creates a new array filled with elements that pass a test provided by a function.
// //Return an array of all values in data that are common:


const charactersList = document.getElementById('like-count');
const charactersList2 = document.getElementById('like-count2');
const likeButton = document.getElementById('like-button');
const likeButton2 = document.getElementById('like-button2');

// let data = [];
let LikeCount = 0;
let LikeCount2 = 0;

likeButton.addEventListener('click', (e) => {

    const filteredCharacters = data.filter((data) => {
        // console.log(data.position)
        return (
            data.position.includes('Front')
        );
    });
    LikeCount++;
    charactersList.innerText = LikeCount;
    displayCharacters(filteredCharacters);
    console.log(filteredCharacters)

});

// if (filteredCharacters === "Rear") {
//     console.log("dd")
//     LikeCount++;
// }


likeButton2.addEventListener('click', (e) => {

    const filteredCharacters = data.filter((data) => {
        console.log(data.position)

        return (
            data.position.includes('Rear')
        );
    });
    LikeCount2++;
    charactersList2.innerText = LikeCount2;
    displayCharacters(filteredCharacters);
    console.log(filteredCharacters)


});




const displayCharacters = (data) => {
    // LikeCount++;
    // charactersList.innerText = LikeCount;

    // charactersList2.innerText = LikeCount;
    const htmlString = data
        .map((data) => {
            return `
            <div id="display">${data.name} "like"</div>
            <p class="test">${data.type}</p>
        `;
        })
        .join('');
    display.innerHTML = htmlString;
    console.log(data)
    console.log(htmlString)

};


getCookies2();










