document.addEventListener('DOMContentLoaded', () => {
    // Retrieve saved items from localStorage
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const saveButtons = document.querySelectorAll('.save-later-btn');
    const savedItemsList = document.getElementById('saved-items-list');

    // Function to display saved items
    function displaySavedItems() {
        savedItemsList.innerHTML = ''; // Clear the existing items
        savedItems.forEach((itemData, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${itemData.imageUrl}" alt="${itemData.item}" class="saved-image">
                <span>${itemData.item}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            savedItemsList.appendChild(li);
        });
    }

    // Save an item when the save button is clicked
    saveButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const parentDiv = button.parentElement; // Get the parent container
            const img = parentDiv.querySelector('img'); // Find the associated image
            const imageUrl = img.getAttribute('src'); // Get the image URL
            const item = button.getAttribute('data-item'); // Get the item name

            const itemData = { item, imageUrl }; // Create a structured item object

            // Avoid duplicates
            if (!savedItems.some(savedItem => savedItem.item === item)) {
                savedItems.push(itemData);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
                alert(`${item} has been saved!`);
                displaySavedItems(); // Refresh the list
            } else {
                alert(`${item} is already saved.`);
            }
        });
    });

    // Handle item deletion
    savedItemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            savedItems.splice(index, 1); // Remove the item from the array
            localStorage.setItem('savedItems', JSON.stringify(savedItems)); // Update localStorage
            displaySavedItems(); // Refresh the list
        }
    });

    // Initial display of saved items
    displaySavedItems();
});

