// Select the cookie policy bar and the close button
const cookiePolicy = document.querySelector('.cookie-policy');
const closeButton = document.querySelector('.close-cookie');

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the cookie policy bar when the button is clicked
  cookiePolicy.style.display = 'none';
});
