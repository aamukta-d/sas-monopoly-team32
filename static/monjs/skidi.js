const image = document.getElementById('floating-skidi');
let stopMovement = false;

// Get a random position within the viewport boundaries
function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - image.width);
    const y = Math.random() * (window.innerHeight - image.height);
    return { x, y };
}

// Move the image smoothly
function moveImage() {
    if (!stopMovement) {
        const { x, y } = getRandomPosition();
        image.style.transform = `translate(${x}px, ${y}px)`;
    }
}

// Randomly stop movement between 15 and 20 seconds
function randomStop() {
    stopMovement = true;
    setTimeout(() => {
        stopMovement = false;
        moveImage(); // Start moving again
        randomStop(); // Set the next stop
    }, (Math.random() * 5 + 15) * 1000); // Random time between 15-20 seconds
}

// Start the movement
moveImage();
setInterval(moveImage, 5000); // Change position every 5 seconds

// Set random stop intervals
randomStop();
