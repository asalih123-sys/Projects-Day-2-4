
// UpperCase Function
function upperCase() {
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    if (uI !== '') {
        let result = uI.toUpperCase();
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}

// Lower Case Function
function lowerCase() {
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    if (uI !== '') {
        let result = uI.toLowerCase();
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}

// Capitalize Function
function capitalWords() {
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    if (uI !== '') {
        let result = uI.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}

// Remove Spaces Function
function removeSpaces() {
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    let result = uI.trim();
    if (uI !== '') {
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}

// Replace Words Function
function replaceWords() {
    // prompt()
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    if (uI !== '') {
        let replacing = prompt("What word do you want to replace?");
        let replacement = prompt("What is the replacement?");
        let result = uI.replace(replacing, replacement);
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}

// Count Length Function
function countAmount() {
    let uI = document.getElementById("userInput").value;
    let userOutput = document.getElementById('outputText');
    if (uI !== '') {
        let result = uI.length;
        console.log(result);
        let html = ``;
        html += `
        <h3>Formatted Text:</h3>
        <p>${uI}</p>
        <p id="charCount">Character Count: ${result}</p>
        `;
        userOutput.innerHTML = html;

    }

    else {
        alert("Please enter something before trying a format");
    }
}
