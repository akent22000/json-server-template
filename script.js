function getCookies() {
    return fetch('http://localhost:3000/cookies')
        .then((response) => response.json());
}

const fetchedCookies = getCookies();

async function displayCookies(cookies = fetchedCookies) {

    const cardsContainer = document.getElementById('cards-container');

    cookies.map(cookie => {
        const div = document.createElement('div');
        const name = document.createElement('h3');

        div.classList = 'card'
        name.innerText = `Name: ${cookie.name}`

        div.appendChild(name)
        cardsContainer.appendChild(div)
    });
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
    let cookies = await getCookies();

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
            // console.log(data)
            // document.getElementById("display").innerHTML = 'test'
            displayCookies(cookies);
        } else {
            document.getElementById("display").innerHTML = ''
        }
    });
};
sortCookies()


