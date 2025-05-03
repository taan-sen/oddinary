// Function to check if number is odd
function checkOdd() {
  const input = document.getElementById('numberInput').value.trim();
  const responseElement = document.getElementById('response');
  
  // Clear previous response
  responseElement.style.opacity = '0';
  
  // Remove any previous classes
  responseElement.classList.remove('odd-response', 'even-response', 'error-response');
  
  // Validate input is numeric
  if (!/^\d+$/.test(input)) {
    setTimeout(() => {
      responseElement.textContent = 'What the bloody hell is this rubbish? That ain\'t a proper fuckin\' number, you daft cunt! Looks like something a diabolical supe would shit out after too many protein shakes. You think I\'m thick enough to accept this absolute wankery? Fuck me, I\'ve seen more valid numbers scrawled on toilet walls in East End pubs. Try again before I ram this invalid garbage so far up your arse you\'ll be coughing up decimal points for a week, yeah?';
      responseElement.classList.add('error-response'); // Add error class for red text
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
    
    // Add appropriate class based on odd/even
    if (isOdd) {
      responseElement.classList.add('odd-response'); // Green for odd
    } else {
      responseElement.classList.add('even-response'); // Red for even
    }
    
    responseElement.style.opacity = '1';
    
    // Add a small visual effect to the background symbols
    addTemporarySymbols(isOdd);
  }, 300);
}

// UPDATED: Function to add temporary additional symbols when answer is shown
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
    // Distribute evenly to avoid clumping on mobile
    const left = 5 + ((i * 9) % 90) + (Math.random() * 5);
    symbol.style.left = `${left}%`;
    
    // Adjust font size based on screen width
    const isMobile = window.innerWidth <= 600;
    symbol.style.fontSize = isMobile ? '2rem' : '3rem';
    
    // UPDATED: Strictly vertical animations - alternating up and down
    const isUpward = i % 2 === 0;
    const animation = isUpward ? 'floatUp' : 'floatDown';
    
    // Set animation properties
    symbol.style.animationName = animation;
    symbol.style.animationDuration = (Math.random() * 10 + 15) + 's'; // 15-25 seconds
    symbol.style.animationDelay = '0s';
    symbol.style.animationTimingFunction = 'linear';
    symbol.style.animationIterationCount = 'infinite';
    
    // Color based on odd/even - slightly darker than regular symbols
    symbol.style.color = isOdd ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)'; // Green for odd, Red for even
    
    // Set starting position based on animation direction
    if (isUpward) {
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

// ADDED: Listen for window resize to adjust rune sizing
window.addEventListener('resize', function() {
  const symbols = document.querySelectorAll('.background-symbols span');
  const isMobile = window.innerWidth <= 600;
  
  symbols.forEach(symbol => {
    symbol.style.fontSize = isMobile ? '1.8rem' : '2.5rem';
  });
});