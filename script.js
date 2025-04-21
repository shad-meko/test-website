// Initialize dataLayer
window.dataLayer = window.dataLayer || [];

// Function to handle CTA button click
document.addEventListener('DOMContentLoaded', function () {
    // Check if CTA button exists on this page
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            console.log('CTA button clicked');
            // Push event to dataLayer for GTM
            dataLayer.push({
                'event': 'cta_click',
                'eventCategory': 'User Engagement',
                'eventAction': 'Button Click',
                'eventLabel': 'Homepage CTA'
            });
        });
    }
});

// Function to handle product view
function viewProduct(productName) {
    console.log('Product viewed:', productName);
    // Push product view event to dataLayer for GTM
    dataLayer.push({
        'event': 'product_click',
        'eventCategory': 'Product Interaction',
        'eventAction': 'Product View',
        'eventLabel': productName
    });
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (nameField && emailField && messageField) {
        const name = nameField.value;
        const email = emailField.value;

        console.log('Form submitted by:', name, email);

        // Push form submission event to dataLayer for GTM
        dataLayer.push({
            'event': 'form_submission',
            'eventCategory': 'Forms',
            'eventAction': 'Submit',
            'eventLabel': 'Contact Form'
        });

        // Show success message
        alert('Thank you for your message! This is a test form - no data has been sent.');

        // Reset form
        document.getElementById('contact-form').reset();
    }
}

// Track page views
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Push page view event to dataLayer for GTM
    dataLayer.push({
        'event': 'page_view',
        'page': currentPage,
        'pageTitle': document.title
    });

    console.log('Page view tracked:', currentPage);
});