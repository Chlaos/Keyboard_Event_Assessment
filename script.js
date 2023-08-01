// Create a string of all 26 letters of the alphabet (lowercase).
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Randomly pick one of the 26 letters as a secret letter.
let secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

// Set up a keyboard event on the whole body.
document.body.addEventListener('keypress', function(event) {

    if (event.key === secretKey) {
        let message = document.createElement('li');
        message.textContent = 'SECRET KEY PRESSED: ' + secretKey;
        document.getElementById('event-log').appendChild(message);
        // After the secret key is pressed, randomly pick another secret key
        // and assign it to your secret key variable.
        secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
});
