const createTableButton = document.getElementById("create-table-button");
const tableContainer = document.getElementById("table-container");

createTableButton.addEventListener("click", e => {
    e.preventDefault();
    const numberOfRows = document.getElementById("rows").value;
    const numberOfCols = document.getElementById("cols").value;

    const table = document.createElement("table");
    tableContainer.appendChild(table);
    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
        const row = table.insertRow();
        for (let colNumber = 0; colNumber < numberOfCols; colNumber++) {
            let cell = row.insertCell();
            cell.innerHTML = rowNumber + ", " + colNumber;
        }
    }
})
