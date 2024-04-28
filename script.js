
//As a user I want to visit the web app and see a list of six Cookie Run Kingdom characters when the page loads.
//In this list, I want to see each Cookies character name, rarity, battle position, battle type, and an image of each Cookie.

// document.addEventListener('DOMContentLoaded', () => displayCookies());

//Speaking in technical terms about asynchronous JS and fetch
//Server communication (how do you make request, what's returned by FETCH, what's the difference between async (asynchronous) & synchronous code)
//ES6 syntax (destructuring, arrow functions etc.) and how you're using it
//Variable declarations, logical operators, callback functions, scope
//Iterators (forEach, map, filter etc)
//The DOM & how to manipulate the DOM (adding, updating, grabbing content, event listeners)


// The differences between asynchronous and synchronous include: Async is multi-thread, which means operations or programs can run in parallel. Sync is a single-thread, so only one operation or program will run at a time. Async is non-blocking, which means it will send multiple requests to a server

// Function to fetch data from the API
// Using async here since I opted for the try, await, and catch 
// Fetch is async by default
async function fetchCookies() {
    try {
        const response = await fetch('http://localhost:3000/cookies');
        const cookies = await response.json();
        // console.log(cookies)

        return cookies;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display JSON data on the HTML page

// Grab cookie data from fetch function
// Map array data to point to each data object
// Objects to display = name, image, rarity, position, and type
// Create each html element 
// Declare each html element
// Nest each html element

let displayCookies = async () => {
    const cookies = await fetchCookies();

    const cardsContainer = document.getElementById('display');

    cookies.forEach(cookie => {

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
};

displayCookies();
//As a user I want to check the checkbox on the page, then see the Cookies displayed in alphabetical order by name.

// Create checkbox html element and render it to the html page
// Add id to link to html and css
let createCheckbox = () => {
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


//As a user I want to check the checkbox on the page, then see the Cookies displayed in alphabetical order by name.

// Grab data from fetch function
// Add an event listener to listen for the checkbox checked event and change when checked and unchecked
// If checked do this... if uncheck do this...
// Add if/else checked condition to see if checkbox has been checked or unchecked
// itereate through cookie data using the array sort method alongside the compare function to order the array of cookie names.
// in case json data is both upper and lower case, add something to ignore case

// display sorted cookies on html page if checkbox is checked
// display no cookies of checkbox is unchecked
let sortCookies = async () => {
    const cookies = await fetchCookies();
    console.log(cookies)

    let checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            cookies.sort((a, b) => {
                // a = The first element for comparison
                // b = The second element for comparison

                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                // toUpperCase = ignore upper and lowercase

                if (nameA < nameB) {
                    // A negative value indicates that a should come before b.
                    return -1;
                }
                if (nameA > nameB) {
                    // A positive value indicates that a should come after b.
                    return 1;
                }
                // Zero or NaN indicates that a and b are considered equal.
                return 0;
            });
            displayed = "Yes"
            console.log(cookies)
            displayCookies();

            // let text = ``;
            // cookies.map(cookie => {
            //     document.getElementById("display").innerHTML =
            //         text += `
            //         <div class="card">
            //         <img src='${cookie.image}' class='image imgWrap' />

            //         <h3>${cookie.name} "sort"</h3>
            //         <h3>${cookie.rarity}</h3>
            //         </div>`;
            //     ;
            // });

        } else {
            document.getElementById("display").innerHTML = ''
        }
    });
}
sortCookies();

//As a user I want to search by Cookie names by typing the name into the search/input box.
let searchCookies = async () => {
    const cookies = await fetchCookies();

    const charactersList = document.getElementById('charactersList');
    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        // Define searchString and set value what the user is typing

        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
        // Basic example = const result = words.filter((word) => word.length > 6);

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




// // // JavaScript
// // // const likeButton = document.getElementById('like-button');
// // // const likeCountElement = document.getElementById('like-count');

// // //fetch character names
// // //like by character
// // //each character has like button
// // //each character has like counter
// // //when character like button clicked
// // //then update character like counter

// //As a user I want to see three battle position like buttons (Positions: Front, Middle, and Back). I want to click a like button, see the like counter increase by 1 and see the Cookies with the matching battle position.

let likeCookies = async () => {
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




// // var numbers = [1, 2, 3, 4, 5];
// // let cookies = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// let cookies = [
//     {
//         "name": "Ginger Brave",
//         "rarity": "Common",
//         "type": "Charge",
//         "position": "Rear",
//         "image": "https://static.wikia.nocookie.net/cookierunkingdom/images/c/c1/Brave-cookie.png"
//     },
//     {
//         "name": "Princess Cookie",
//         "rarity": "Rare",
//         "type": "Charge",
//         "position": "Front",
//         "image": "https://static.wikia.nocookie.net/cookierunkingdom/images/4/48/Princess_cookie_alternate.png"
//     }
// ];




// // Define the main function
// function mainFunction(cookie) {
//     // let cookies = fetchCookies();
//     console.log("Performing operation...");
//     // Use Array.forEach to loop through the array of numbers
//     const cardsContainer = document.getElementById('display');

//     cookies.forEach(cookie)


//     console.log(cookies)

// }

// // Define the callback function
// function callbackFunction(cookie) {
//     console.log("Result: " + cookie.name);

// }

// // Call the main function with the callback function
// mainFunction(callbackFunction);

