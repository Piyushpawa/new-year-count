// Function to update countdown values
function updateCountdown() {
  let dayBox = document.getElementById("day-box");
  let hrBox = document.getElementById("hr-box");
  let minBox = document.getElementById("min-box");
  let secBox = document.getElementById("sec-box");

  let endDate = new Date("January 1, 2024 00:00:00").getTime();
  let now = new Date().getTime();
  let remainingTime = endDate - now;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    // Display confetti popup when the countdown expires
    displayConfettiPopup();
  } else {
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    dayBox.textContent = days.toString().padStart(2, '0');
    hrBox.textContent = hours.toString().padStart(2, '0');
    minBox.textContent = minutes.toString().padStart(2, '0');
    secBox.textContent = seconds.toString().padStart(2, '0');
  }
}

// Call updateCountdown function initially to avoid initial delay
updateCountdown();

// Update countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

// Function to display confetti popup
function displayConfettiPopup() {
  // Use Confetti.js library to create a confetti animation
  // Configure the confetti animation as desired
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  function confettiPopupLoop() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return;
    }

    const randomAngle = randomInRange(0, 2 * Math.PI);
    const randomVelocity = randomInRange(0.5, 1.5);
    
    confetti({
      particleCount: 1,
      angle: randomAngle,
      spread: randomInRange(10, 50),
      velocity: randomVelocity,
      ticks: 60,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0000', '#00ff00', '#0000ff'] // Customize confetti colors
    });

    requestAnimationFrame(confettiPopupLoop);
  }

  // Start the confetti animation loop
  confettiPopupLoop();
  
  // Display a message in the popup (you can customize this part)
  alert("Happy New Year! 🎉🥳");
}
