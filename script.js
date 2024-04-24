// document.addEventListener('DOMContentLoaded', () => mapCookies());
function getCookies() {
    return fetch('http://localhost:3000/cookies')
        .then((response) => response.json());
}
async function getCookies2() {
    const response = await fetch('http://localhost:3000/cookies')
    data = await response.json();
}


async function displayCookies() {
    data = await getCookies();
    const cardsContainer = document.getElementById('display');

    data.map(data => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const rarity = document.createElement('h3');
        const type = document.createElement('h3');
        const position = document.createElement('h3');


        // const like = document.createElement('button');
        div.classList = 'card'
        image.classList = 'card-img'
        // like.classList = 'empty'
        image.src = data.image
        image.classList.add('image');
        name.innerText = `Name: ${data.name}`
        rarity.innerText = `Rarity: ${data.rarity}`
        type.innerText = `Type: ${data.type}`
        position.innerText = `Position: ${data.position}`
        // like.textContent = 'like'

        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(rarity)
        div.appendChild(type)
        div.appendChild(position)
        // div.appendChild(like)
        cardsContainer.appendChild(div)
    });
}
displayCookies();

function createCheckbox() {

    let containerCheckbox = document.getElementById('containerCheckbox');

    let checkboxDiv = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");

    let checkboxP = document.createElement("p");
    checkboxP.textContent = "Click Checkbox to sort Cookie Characters alpabetically"

    checkboxDiv.appendChild(checkboxP);
    checkboxDiv.appendChild(checkbox);
    // checkboxDiv.appendChild(checkboxDiv);
    containerCheckbox.appendChild(checkboxDiv);

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
                    text += `
                    <div class="card">
                    <img src='${data.image}' class='image imgWrap' />

                    <h3>${data.name} "sort"</h3>
                    <h3>${data.rarity}</h3>
                    </div>`;
                ;
            });

        } else {
            document.getElementById("display").innerHTML = ''
        }
    });
}
sortCookies();


async function searchCookies() {

    const charactersList = document.getElementById('charactersList');
    const searchBar = document.getElementById('searchBar');
    // let data = [];

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredCharacters = data.filter((data) => {
            return (
                data.name.toLowerCase().includes(searchString)
                //  ||
                // // data.type.toLowerCase().includes(searchString)
            );
        });
        displayCharacters(filteredCharacters);
    });

    const displayCharacters = (data) => {
        const htmlString = data
            .map((data) => {
                return `
            <div class="card">
            <img src='${data.image}' class='image imgWrap' />
            <h3>${data.name} "sort"</h3>
            <h3>${data.rarity}</h3>
            </div>
        `;
            })
            .join('');
        display.innerHTML = htmlString;
    };
}
getCookies2();
searchCookies();




// JavaScript
// const likeButton = document.getElementById('like-button');
// const likeCountElement = document.getElementById('like-count');

//fetch character names
//like by character
//each character has like button
//each character has like counter
//when character like button clicked
//then update character like counter

async function likeCookies() {

    const charactersList1 = document.getElementById('like-count');
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
        charactersList1.innerText = LikeCount;
        displayCharacters1(filteredCharacters);
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
        displayCharacters1(filteredCharacters);
        console.log(filteredCharacters)


    });




    const displayCharacters1 = (data) => {
        // LikeCount++;
        // charactersList.innerText = LikeCount;

        // charactersList2.innerText = LikeCount;
        const htmlString = data

            .map((data) => {
                return `
            <div class="card">
            <img src='${data.image}' class='image imgWrap' />
            <h3>${data.name} "sort"</h3>
            <h3>${data.rarity}</h3>
            </div>
        `;
            })
            .join('');
        document.getElementById("display").innerHTML = htmlString

        // display.innerHTML = htmlString;
        // console.log(data)
        // console.log(htmlString)

    };
};
likeCookies()
getCookies2();