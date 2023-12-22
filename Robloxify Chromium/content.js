// content.js

// Function to add styles to round corners
function roundCorners() {
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.style.borderRadius = '10px';
  });
}

// Function to execute when the DOM is ready
function onDOMReady() {
  roundCorners();
  // Periodically check for new elements and round their corners
  setInterval(roundCorners, 250); // Adjust the interval as needed (e.g., every second)
}

// Execute the function when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onDOMReady);
} else {
  onDOMReady();
}
