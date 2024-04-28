
document.addEventListener('DOMContentLoaded', () => displayCookies());

// Function to fetch data from the API
async function fetchCookies() {
    try {
        const response = await fetch('http://localhost:3000/cookies');
        const cookies = await response.json();
        return cookies;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function displayCookies() {
    const cookies = await fetchCookies();

    console.log(cookies)
    const cardsContainer = document.getElementById('display');

    cookies.map(cookie => {
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
        image.src = cookie.image
        image.classList.add('image');
        name.innerText = `Name: ${cookie.name}`
        rarity.innerText = `Rarity: ${cookie.rarity}`
        type.innerText = `Type: ${cookie.type}`
        position.innerText = `Position: ${cookie.position}`
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
    const cookies = await fetchCookies();

    console.log(cookies)
    let checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            cookies.sort((a, b) => {

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

            // displayCookies(cookies);

            let text = ``;
            cookies.map(cookie => {

                console.log(cookies)

                document.getElementById("display").innerHTML =
                    text += `
                    <div class="card">
                    <img src='${cookie.image}' class='image imgWrap' />

                    <h3>${cookie.name} "sort"</h3>
                    <h3>${cookie.rarity}</h3>
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
    const cookies = await fetchCookies();

    const charactersList = document.getElementById('charactersList');
    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredCharacters = cookies.filter((cookie) => {
            return (
                cookie.name.toLowerCase().includes(searchString)
                //  ||
                // // data.type.toLowerCase().includes(searchString)
            );
        });
        // displayCookies();
        displayCharacters(filteredCharacters);
    });

    const displayCharacters = (cookies) => {
        const htmlString = cookies
            .map(cookie => {
                return `
            <div class="card">
            <img src='${cookie.image}' class='image imgWrap' />
            <h3>${cookie.name} "sort"</h3>
            <h3>${cookie.rarity}</h3>
            </div>
        `;
            })
            .join('');
        display.innerHTML = htmlString;
    };
}
// fetchCookies();
searchCookies();




// // JavaScript
// // const likeButton = document.getElementById('like-button');
// // const likeCountElement = document.getElementById('like-count');

// //fetch character names
// //like by character
// //each character has like button
// //each character has like counter
// //when character like button clicked
// //then update character like counter

async function likeCookies() {
    const cookies = await fetchCookies();

    const charactersList1 = document.getElementById('like-count');
    const charactersList2 = document.getElementById('like-count2');
    const likeButton = document.getElementById('like-button');
    const likeButton2 = document.getElementById('like-button2');

    // let data = [];
    let LikeCount = 0;
    let LikeCount2 = 0;

    likeButton.addEventListener('click', (e) => {

        const filteredCharacters = cookies.filter((cookie) => {
            // console.log(data.position)
            return (
                cookie.position.includes('Front')
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

        const filteredCharacters = cookies.filter((cookie) => {
            console.log(cookie.position)

            return (
                cookie.position.includes('Rear')
            );
        });
        LikeCount2++;
        charactersList2.innerText = LikeCount2;
        displayCharacters1(filteredCharacters);
        console.log(filteredCharacters)


    });




    const displayCharacters1 = (cookies) => {
        // LikeCount++;
        // charactersList.innerText = LikeCount;

        // charactersList2.innerText = LikeCount;
        const htmlString = cookies

            .map((cookie) => {
                return `
            <div class="card">
            <img src='${cookie.image}' class='image imgWrap' />
            <h3>${cookie.name} "sort"</h3>
            <h3>${cookie.rarity}</h3>
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
