document.addEventListener('DOMContentLoaded', function () {
    const stack = document.querySelector('.stack');
    let currentTranslateX = 0;
    const moveSpeed = 0.5; // Pixels to move per frame, adjust for speed

    function animate() {
        requestAnimationFrame(animate);

        currentTranslateX -= moveSpeed;
        stack.style.transform = `translateX(${currentTranslateX}px)`;

        // Check if the first icon has completely moved out of view
        if (Math.abs(currentTranslateX) >= stack.firstElementChild.offsetWidth) {
            const firstIcon = stack.firstElementChild;
            stack.appendChild(firstIcon); // Move the first icon to the end
            currentTranslateX += firstIcon.offsetWidth; // Adjust translateX
            stack.style.transform = `translateX(${currentTranslateX}px)`; // Apply the adjusted translation

            // Re-trigger the fade-in animation
            firstIcon.style.animation = 'none'; // Remove the animation
            setTimeout(() => {
                firstIcon.style.animation = ''; // Re-apply the animation
            }, 0);
        }
    }

    animate();
});

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('scrollButton'); // Get the button

    btn.addEventListener('click', function() { // Add click event to the button
        var section = document.getElementById('contact'); // Get the target section

        section.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start' // Align to the start of the viewport
        });
    });
});
