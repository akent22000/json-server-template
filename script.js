
document.addEventListener('DOMContentLoaded', () => getCookies());


async function filterCookies() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};


async function getCookies() {
    fetch('http://localhost:3000/cookies')
        .then((res) => res.json())
        .then((data) => {

            const container = document.querySelector('#myTable');

            data.forEach(function (data) {
                const card = document.createElement('tr');
                card.classList.add('tr');

                // const image = document.createElement('td');
                // image.textContent = data.image;

                const name = document.createElement('td');
                name.textContent = data.character;
                name.classList.add('hover');
                name.setAttribute('id', 'hover');

                const rarity = document.createElement('td');
                rarity.textContent = data.rarity;

                const type = document.createElement('td');
                type.textContent = data.type;

                const position = document.createElement('td');
                position.textContent = data.position;

                const toppings = document.createElement('td');
                toppings.textContent = data.toppings;

                card.appendChild(name);
                card.appendChild(rarity);
                card.appendChild(type);
                card.appendChild(position);
                card.appendChild(toppings);
                container.appendChild(card);

                name.addEventListener('mouseover', (event) => {
                    document.getElementById('popup').innerHTML = `<img src='${data.image}' class='image imgWrap' /> ${data.character} `;
                });

                name.addEventListener('mouseout', (event) => {
                    document.getElementById('popup').innerHTML = "";
                });

            });
        });
};


const userNameInput = document.querySelector("#myInput");

userNameInput.addEventListener("keyup", (event) => {
    const inputValue = event.target.value;
    filterCookies();
});