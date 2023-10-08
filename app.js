// Data in the form of JavaScript objects
const students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Alice Smith', age: 22, grade: 'B' },
    { id: 3, name: 'Bob Johnson', age: 19, grade: 'A-' },
];



// script.js

// Function to populate the table with student data
function populateTable() {
    const tableBody = document.querySelector('#student-table tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table
populateTable();