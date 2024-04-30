
//As a user I want to visit the web app and see a list of six Cookie Run Kingdom characters when the page loads.
//In this list, I want to see each Cookies character name, rarity, battle position, battle type, and an image of each Cookie.

document.addEventListener("DOMContentLoaded", () => {
    displayCookiesDOM(displayCookies)
});



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



async function displayCookiesDOM(callback) {
    let cookies = await fetchCookies();
    callback(cookies);

}


////////////////////////////////////////////////////////////////


// Grab cookie data from fetch function
// Map array data to point to each data object
// Objects to display = name, image, rarity, position, and type
// Create each html element 
// Declare each html element
// Nest each html element

//////////////////////////////////////////////////////////////

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
    containerCheckbox.appendChild(checkboxDiv);
}
createCheckbox();


//As a user I want to check the checkbox on the page, then see the Cookies displayed in alphabetical order by name.

// Grab data from fetch function
// Add an event listener to listen for the checkbox checked event and change when checked and unchecked
// If checked do this... if uncheck do this...
// Add if/else checked condition to see if checkbox has been checked or unchecked
// itereate through cookie data using the array sort method and compare to order the array of cookie names.
// in case json data is both upper and lower case, add something to ignore case

// display sorted cookies on html page if checkbox is checked
// display no cookies of checkbox is unchecked
// let sortCookies = async () => {
async function sortCookies(callback) {
    let cookies = await fetchCookies();

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
        cookies = cookies;
        callback(cookies);

    } else {
        document.getElementById("display").innerHTML = ''
    }

}
// sortCookies();

let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    sortCookies(displayCookies);

});


////////////////////////////////////////////////////////////////


//As a user I want to search by Cookie names by typing the name into the search/input box.

// Grab data from fetch function
// Add an event listener to listen for keys typed in the input searchbar
// Itereate through data using filter so that filter returns each cookies with the input name

// display sorted cookies on html page if checkbox is checked
// display no cookies of checkbox is unchecked

let search_term = '';

const searchCookies = async (callback) => {
    let cookies = await fetchCookies();

    const cardsContainer = document.getElementById('display');
    // Reset display div to empty
    cardsContainer.innerHTML = '';

    cookies.filter(cookie =>
        cookie.name.toLowerCase().includes(search_term.toLowerCase())
    )

        .forEach(cookie => {
            const div = document.createElement('div');
            const image = document.createElement('img');
            const name = document.createElement('h3');
            const rarity = document.createElement('h3');
            const type = document.createElement('h3');
            const position = document.createElement('h3');

            div.classList = 'card'
            image.classList = 'card-img'
            image.src = cookie.image
            image.classList.add('image');
            name.innerText = `Name: ${cookie.name}`
            rarity.innerText = `Rarity: ${cookie.rarity}`
            type.innerText = `Type: ${cookie.type}`
            position.innerText = `Position: ${cookie.position}`

            div.appendChild(image)
            div.appendChild(name)
            div.appendChild(rarity)
            div.appendChild(type)
            div.appendChild(position)
            cardsContainer.appendChild(div)
        });

};

// searchCookies();

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', e => {
    search_term = e.target.value;
    searchCookies();
});


//////////////////////////////////////////////////////////////


//As a user I want to see three battle position like buttons (Positions: Front, Middle, and Back). I want to click a like button, see the like counter increase by 1 and see the Cookies with the matching battle position.


// fetch cookies data
// grab html buttons and counter text
// iterate through cookies to only find specific positions via filter 
// decalre counters and set initial counter number
// when position like button clicked, then add 1 to the position like counter and display updated count number on page
// display cooresponding cookies on html page when cooresponding position button is clicked

let likeCookies = async () => {
    let cookies = await fetchCookies();

    const likeCountFront = document.getElementById('likeCountFront');
    const likeCountMiddle = document.getElementById('likeCountMiddle');
    const likeCountRear = document.getElementById('likeCountRear');
    const likeButtonFront = document.getElementById('likeButtonFront');
    const likeButtonMiddle = document.getElementById('likeButtonMiddle');
    const likeButtonRear = document.getElementById('likeButtonRear');

    let LikeCount = 0;
    let LikeCount2 = 0;
    let LikeCount3 = 0;

    likeButtonFront.addEventListener('click', () => {
        const filteredCookiesFront = cookies.filter((cookie) => {
            // console.log(data.position)
            return (
                cookie.position.includes('Front')
            );
        });
        LikeCount++;
        likeCountFront.innerText = LikeCount;
        displayCookies(filteredCookiesFront);
    });

    likeButtonMiddle.addEventListener('click', (e) => {
        const filteredCookiesMiddle = cookies.filter((cookie) => {
            console.log(cookie.position)

            return (
                cookie.position.includes('Middle')
            );
        });
        LikeCount2++;
        likeCountMiddle.innerText = LikeCount2;
        displayCookies(filteredCookiesMiddle);
    });

    likeButtonRear.addEventListener('click', (e) => {
        const filteredCookiesRear = cookies.filter((cookie) => {
            console.log(cookie.position)

            return (
                cookie.position.includes('Rear')
            );
        });
        LikeCount3++;
        likeCountRear.innerText = LikeCount3;
        displayCookies(filteredCookiesRear);
    });

};
likeCookies()



async function displayCookies(cookies) {

    const cardsContainer = document.getElementById('display');
    // Reset display div to empty
    cardsContainer.innerHTML = '';
    cookies.forEach(cookie => {

        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h3');
        const rarity = document.createElement('h3');
        const type = document.createElement('h3');
        const position = document.createElement('h3');

        div.classList = 'card'
        image.classList = 'card-img'
        image.src = cookie.image
        image.classList.add('image');
        name.innerText = `Name: ${cookie.name}`
        rarity.innerText = `Rarity: ${cookie.rarity}`
        type.innerText = `Type: ${cookie.type}`
        position.innerText = `Position: ${cookie.position}`

        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(rarity)
        div.appendChild(type)
        div.appendChild(position)
        cardsContainer.appendChild(div)
    });

}
// displayCookies();