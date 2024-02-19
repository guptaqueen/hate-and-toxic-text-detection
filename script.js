const responseElement = document.getElementById('response');
const inputElement = document.getElementById('input');
const formElement = document.getElementById('form');

formElement.addEventListener('submit', event => {
    event.preventDefault(); // prevent the page from reloading

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: inputElement.value
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(res => {
        responseElement.innerText = res[0]?.label === 'POSITIVE' ? 'Positive vibes detected' : 'Negative vibes detected!';
        inputElement.value = '';
    })
    .catch(error => {
        console.error('Error:', error); // Logging the error
        responseElement.innerText = 'Failed to fetch data. Please try again later.';
    });
});


