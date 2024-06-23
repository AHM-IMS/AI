//Example JavaScript code
console.log("Script loaded!");

// Function to change header text
function changeHeader() {
    const header = document.querySelector('header h1');
    header.textContent = "Hello, World!";
}

// Event listener example
document.addEventListener('DOMContentLoaded', function() {
    // Call changeHeader function when DOM is fully loaded
    changeHeader();
});
