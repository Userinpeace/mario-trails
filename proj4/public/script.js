document.addEventListener("DOMContentLoaded", () => {
    const mario = document.getElementById('mario');
    if (!mario) {
        console.error('Mario element not found');
        return;
    }

    let lastMove = 0;
    const debounceTime = 10; // milliseconds

    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastMove < debounceTime) return;
        lastMove = now;

        const marioWidth = mario.offsetWidth;
        const marioHeight = mario.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate new position
        let newX = e.pageX;
        let newY = e.pageY;

        // Boundary checks for all sides
        if (newX + marioWidth > windowWidth) {
            newX = windowWidth - marioWidth;
        }
        if (newY + marioHeight > windowHeight) {
            newY = windowHeight - marioHeight;
        }
        if (newX < 0) {
            newX = 0;
        }
        if (newY < 0) {
            newY = 0;
        }

        mario.style.left = newX + 'px';
        mario.style.top = newY + 'px';
    });

    // Add event listener for the "Click on me" button
    const clickMeButton = document.getElementById('clickMeButton');
    clickMeButton.addEventListener('click', () => {
        window.location.href = 'newpage.html'; // Redirect to new page immediately
    });
});
