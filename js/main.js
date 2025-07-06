// js/main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // Function to load a component (header or footer) from an external file
    const loadComponent = (url, elementId) => {
        // fetch() is a modern way to get data from a URL
        return fetch(url)
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok for ' + url);
                }
                return response.text(); // Get the HTML content as text
            })
            .then(data => {
                // Put the loaded HTML content into the placeholder element
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => {
                // If something goes wrong (e.g., file not found), show an error
                console.error(`Error loading ${url}:`, error);
                document.getElementById(elementId).innerHTML = `<p style="color:red; text-align:center;">Error: Could not load ${elementId}. Please check file path.</p>`;
            });
    };

    // Function to highlight the link of the current page
    const setActiveLink = () => {
        // Find all the navigation links inside the loaded header
        const navLinks = document.querySelectorAll('#main-header .nav-link');
        // Get the current page's file name (e.g., 'about.html', 'index.html')
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            // If the link's destination matches the current page, add the 'active' class
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    };

    // --- Main Execution ---

    // 1. Load the header
    loadComponent('header.html', 'main-header').then(() => {
        // 2. After the header is loaded, set the active link
        setActiveLink();
        
        // 3. IMPORTANT: Make the Bootstrap hamburger menu work
        // Since the header is loaded dynamically, we need to tell Bootstrap about it.
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            const collapseElement = document.querySelector(navbarToggler.dataset.bsTarget);
            if (collapseElement) {
                // This initializes the collapse functionality for the mobile menu
                new bootstrap.Collapse(collapseElement, {
                    toggle: false
                });
            }
        }
    });

    // 4. Load the footer
    loadComponent('footer.html', 'main-footer');

});