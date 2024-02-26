document.addEventListener('DOMContentLoaded', function () {
    // Function to change the text when the button is clicked
    function changeText() {
        const paragraph = document.querySelector('p');
        paragraph.textContent = 'Text changed!';
    }

    // Event listener for the button click
    const button = document.getElementById('changeTextBtn');
    button.addEventListener('click', changeText);
});
