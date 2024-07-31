document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage('user', userInput);
        document.getElementById('user-input').value = '';
        getResponse(userInput);
    }
}

function addMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = sender === 'user' ? 'user-message' : 'bot-message';
    message.innerText = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'block';

    setTimeout(() => {
        let response = 'I don\'t understand that.';
        const lowerInput = input.toLowerCase();

        // Responses about space exploration
        if (lowerInput.includes('space')) {
            response = 'It is the collection of eight planets and their moons in orbit round the sun, together with smaller bodies in the form of asteroids, meteoroids, and comets. The planets of the solar system are (in order of distance from the sun) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune';
        } else if (lowerInput.includes('planet')) {
            response = 'A planet is a large celestial body that revolves around the sun in fixed orbits. There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.';
        } else if (lowerInput.includes('star')) {
            response = 'Stars are massive, luminous spheres of plasma. The closest star to Earth is the Sun.';
        } else if (lowerInput.includes('missions')) {
            response = 'Some famous space missions include Apollo 11, which landed the first humans on the Moon, and the Mars Rover missions.';
        } else if (lowerInput.includes('moon')) {
            response = 'The Moon is Earth’s only natural satellite and was first visited by humans in 1969 during the Apollo 11 mission.';
        } else if (lowerInput.includes('sun')) {
            response = 'Sun is a 4.5 billion-year-old yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system.';
        } else if (lowerInput.includes('mars')) {
            response = 'Mars is the fourth planet from the Sun and has been explored by rovers like Curiosity and Perseverance.';
        } else if (lowerInput.includes('earth')) {
            response = 'Earth is the third planet from the Sun and the fifth largest planet in the solar system in terms of size and mass.';
        } else if (lowerInput.includes('jupiter')) {
            response = 'Jupiter is the largest planet in our solar system and is known for its Great Red Spot, a giant storm.';
        } else if (lowerInput.includes('black hole')) {
            response = 'A black hole is a region of space where the gravitational pull is so strong that not even light can escape from it.';
        } else if (lowerInput.includes('galaxy')) {
            response = 'A galaxy is a massive collection of stars, gas, dust, and dark matter, bound together by gravity. Our galaxy is called the Milky Way.';
        } else if (lowerInput.includes('universe')) {
            response = 'The universe is all of space and time, including all forms of matter and energy. It is vast and still largely unknown.';
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            response = 'Hello! How can I help you today? Do you have any questions?';
        } else if (lowerInput.includes('how are you')) {
            response = 'I\'m just a bot, but I\'m doing great! How about you?';
        } else if (lowerInput.includes('fine')) {
            response = 'Great! Do you want to talk about space?';
        } else if (lowerInput.includes('yes')) {
            response = 'Great.. Space exploration is fascinating! Do you have any questions about space exploration?';
        } else if (lowerInput.includes('bye')) {
            response = 'Goodbye! Have a great day!';
        }

        addMessage('bot', response);
        typingIndicator.style.display = 'none';
    }, 1500);
}
