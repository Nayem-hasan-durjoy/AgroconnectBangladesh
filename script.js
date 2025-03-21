document.addEventListener("DOMContentLoaded", function () {
    // Search functionality
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", function () {
        let query = searchInput.value.trim();
        if (query) {
            alert("Searching for: " + query);
            // Implement search logic here
        }
    });

    // Sign-in alert
    const signInButton = document.querySelector(".nav-signin");
    signInButton.addEventListener("click", function () {
        alert("Redirecting to Sign-in page...");
        // You can implement actual redirection here
    });

    // Back to Top functionality
    const backToTop = document.querySelector(".foot-pannel1");
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
