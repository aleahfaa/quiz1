function navigate(url) {
    window.location.href = url;
}

// Add this function to set the blocked state
function setBlockedState(blocked) {
    const body = document.body;
    if (blocked) {
        body.classList.add('blocked');
    } else {
        body.classList.remove('blocked');
    }
}

// Call this function to start the typewriter effect
function typewritereffect_a() {
    const typewriterText = document.querySelector('.a_typewriter');
    typewriterText.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
}

// Start the typewriter effect when the page loads
window.addEventListener('load', () => {
    typewritereffect_a();
});

// Call this function to start the typewriter effect
function typewritereffect_b() {
    const typewriterText = document.querySelector('.b_typewriter');
    typewriterText.style.animation = 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite';
}

// Start the typewriter effect when the page loads
window.addEventListener('load', () => {
    typewritereffect_b();
});

/*
// Optionally, you can stop the animation when the user clicks the text
document.querySelector('.typewriter').addEventListener('clicked', () => {
    setBlockedState(true); // Set blocked state
    setTimeout(() => {
        setBlockedState(false); // Reset blocked state after a delay
    }, 1000); // Adjust the delay as needed (in milliseconds)
});
*/

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sbnav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sbnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }