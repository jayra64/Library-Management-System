document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    
    if (title && author && year) {
        addBookToList(title, author, year);
        clearFormFields();
    }
});

// Function to add a book to the table
function addBookToList(title, author, year) {
    const table = document.getElementById('book-table').getElementsByTagName('tbody')[0];
    
    // Create a new row and cells for the book data
    const row = table.insertRow();
    row.insertCell(0).textContent = title;
    row.insertCell(1).textContent = author;
    row.insertCell(2).textContent = year;
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        row.remove();
    };
    
    // Add delete button to the row
    row.insertCell(3).appendChild(deleteButton);
}

// Function to clear the input fields after adding a book
function clearFormFields() {
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
}