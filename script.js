// script.js

// This function can be used to show alerts when a button is clicked
function showAlert(message) {
    alert(message);
}

// Add event listeners to buttons if needed
document.addEventListener('DOMContentLoaded', function() {
    const joinNowButton = document.querySelector('.hero-text button');
    if (joinNowButton) {
        joinNowButton.addEventListener('click', function() {
            showAlert('Thank you for your interest! Join us today!');
        });
    }

    // Membership plan selection alerts
    const membershipButtons = document.querySelectorAll('.plan button');
    membershipButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.parentElement.querySelector('h3').textContent;
            showAlert(`You selected the ${planName}!`);
        });
    });
});