let expenseObject = [

];

function addExpense() {
    let name = document.getElementById('expenseName').value.trim();
    let amount = Number(document.getElementById('expenseAmount').value);
    let category = document.getElementById('expenseCategory').value;
    if (name !== "" && amount >= 0)
        expenseObject.unshift({
            name,
            amount,
            category
        });

    else {
        alert("Name must be written && Amount must be greater than 0");
    }
    displayExpenses()
}

function displayExpenses()
{
    let output = document.getElementById('expense-table');
    let html = ``;
    for (let i = 0; i < expenseObject.length; i++) {
        html +=
            `
            <tr>
                <th>Expense Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Action</th>
            </tr>

            <tr>
                <td>${expenseObject[i].name}</td>
                <td>$${expenseObject[i].amount}</td>
                <td>${expenseObject[i].category}</td>
                <td><button onClick="editExpense(${i})">Edit</button> <button onClick="deleteExpense(${i})">Delete</button></td>
            </tr>
            `;
    }
    output.innerHTML = html;
}

function editExpense(index) {
    const newName = prompt("Expense Name: ", expenseObject[index].name);
    const newAmount = prompt("Expense Amount:", expenseObject[index].amount);
    const newCategory = prompt("Category: ", expenseObject[index].category);
        expenseObject[index].name = newName;
        expenseObject[index].amount = newAmount;
        expenseObject[index].category = newCategory;
        displayExpenses();
}

function deleteExpense(index) {
    expenseObject.splice(index,1);
    displayExpenses();
}
