document.getElementById('recipe-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault(); 
    
    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    const imageFile = document.getElementById('recipe-image').files[0];
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('ingredients', ingredients);
    formData.append('instructions', instructions);
    formData.append('image', imageFile);
    
    // Send the recipe data to the backend server using AJAX or Fetch API
    fetch('/upload-recipe', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Recipe uploaded successfully
            console.log('Recipe uploaded successfully');
        } else {
            // Handle errors
            console.error('Error uploading recipe');
        }
    })
    .catch(error => {
        console.error('Error uploading recipe:', error);
    });
});