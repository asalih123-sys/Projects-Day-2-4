// JavaScript 2/19/2026
let books = ["The Great Gatsby", "The Lord of Flies", "The New Jim Crow", "Just Mercy"];
displayBooks(books);
function addtoFront() {
    let input = document.getElementById("bookInput").value.trim();
    books.unshift(input);
    displayBooks(books);
}

function addtoEnd() {
    let input = document.getElementById("bookInput").value.trim();
    books.push(input);
    displayBooks(books);
}

function removefromFront() {
    let input = document.getElementById("bookInput").value.trim();
    books.shift(input);
    displayBooks(books);
}

function removefromEnd() {
    let input = document.getElementById("bookInput").value.trim();
    books.pop(input);
    displayBooks(books);
}


function displayBooks(n) {
    let output = document.getElementById('frontShelf');
    let html = ``;

    for (let i = 0; i < n.length; i++) {
        html += `
            <li>${n[i]}</li>
        `;
    }
    output.innerHTML = html;
}
