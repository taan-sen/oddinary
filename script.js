// Function to check if number is odd
function checkOdd() {
  const input = document.getElementById('numberInput').value.trim();
  const responseElement = document.getElementById('response');
  
  // Clear previous response
  responseElement.style.opacity = '0';
  
  // Validate input is numeric
  if (!/^\d+$/.test(input)) {
    setTimeout(() => {
      responseElement.textContent = 'What the bloody hell is this rubbish? That ain\'t a proper fuckin\' number, you daft cunt! Looks like something a diabolical supe would shit out after too many protein shakes. You think I\'m thick enough to accept this absolute wankery? Fuck me, I\'ve seen more valid numbers scrawled on toilet walls in East End pubs. Try again before I ram this invalid garbage so far up your arse you\'ll be coughing up decimal points for a week, yeah?';
      responseElement.style.opacity = '1';
    }, 300);
    return;
  }
  
  // Get the last digit
  const lastDigit = input[input.length - 1];
  
  // Check if odd (last digit is 1, 3, 5, 7, or 9)
  const isOdd = ['1', '3', '5', '7', '9'].includes(lastDigit);
  
  // Display result with a slight delay for animation effect
  setTimeout(() => {
    responseElement.textContent = isOdd ? 'Yeah!! It\'s odd !! ' : 'It\'s a fuckin\' even number, innit? None of that odd number bollocks. Proper divisible by two, like God and the Queen intended.';
    responseElement.style.opacity = '1';
    
    // Add a small visual effect to the background symbols
    addTemporarySymbols(isOdd);
  }, 300);
}

// Function to add temporary additional symbols when answer is shown
function addTemporarySymbols(isOdd) {
  const container = document.querySelector('.background-symbols');
  
  // Create 10 random temporary symbols
  for (let i = 0; i < 10; i++) {
    const symbol = document.createElement('span');
    
    // Set different runic symbols based on odd/even result
    if (isOdd) {
      const oddRunes = ['ᚠ', 'ᚦ', 'ᚱ', 'ᚷ', 'ᚺ', 'ᛋ', 'ᛏ', 'ᛗ', 'ᛢ', 'ᛥ'];
      symbol.textContent = oddRunes[Math.floor(Math.random() * oddRunes.length)];
    } else {
      const evenRunes = ['ᚢ', 'ᚨ', 'ᚲ', 'ᚹ', 'ᛉ', 'ᛒ', 'ᛖ', 'ᛚ', 'ᛟ', 'ᛤ'];
      symbol.textContent = evenRunes[Math.floor(Math.random() * evenRunes.length)];
    }
    
    // Set truly random starting position across the full width
    const left = Math.random() * 90 + 5;
    symbol.style.left = `${left}%`;
    symbol.style.fontSize = '3rem';
    
    // Random animation direction
    const animations = ['floatUpRight', 'floatUpLeft', 'floatDownRight', 'floatDownLeft'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    // Set animation properties
    symbol.style.animationName = randomAnimation;
    symbol.style.animationDuration = (Math.random() * 10 + 15) + 's'; // 15-25 seconds
    symbol.style.animationDelay = '0s';
    symbol.style.animationTimingFunction = 'linear';
    symbol.style.animationIterationCount = 'infinite';
    
    // Color based on odd/even - slightly darker than regular symbols
    symbol.style.color = isOdd ? 'rgba(100, 30, 40, 0.2)' : 'rgba(30, 40, 100, 0.2)';
    
    // Random starting position based on the animation direction
    if (randomAnimation === 'floatUpRight' || randomAnimation === 'floatUpLeft') {
      symbol.style.top = (Math.random() * 50 + 50) + '%'; // 50-100% from top (bottom half)
    } else {
      symbol.style.top = (Math.random() * 50) + '%'; // 0-50% from top (top half)
    }
    
    // Add to container
    container.appendChild(symbol);
    
    // Remove after animation completes
    setTimeout(() => {
      if (symbol.parentNode === container) {
        container.removeChild(symbol);
      }
    }, 15000);
  }
}

// Add event listener for pressing Enter key
document.getElementById('numberInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    checkOdd();
  }
});
