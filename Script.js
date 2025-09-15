// This is a simple confirmation page, so JavaScript might not be strictly
// necessary for the core display. However, you might use it for:
// - Dynamically loading order details if needed.
// - Triggering a redirect after a delay.
// - Adding interactive elements.

// Example: Add a slight animation or visual feedback on load
document.addEventListener('DOMContentLoaded', () => {
    const confirmationContainer = document.querySelector('.confirmation-container');
    confirmationContainer.style.transform = 'scale(1.05)';
    confirmationContainer.style.opacity = '0.9';

    setTimeout(() => {
        confirmationContainer.style.transform = 'scale(1)';
        confirmationContainer.style.opacity = '1';
    }, 200); // Slight bounce effect on load
});
