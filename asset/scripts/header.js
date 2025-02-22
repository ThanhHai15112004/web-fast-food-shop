document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname;
    
    let menuLinks = document.querySelectorAll(".header_container ul li a");
    
    menuLinks.forEach(link => {
        let linkPath = link.getAttribute("href");
        
        if (currentPath.includes(linkPath.replace("..", ""))) {
            menuLinks.forEach(l => l.classList.remove("active"));
            
            link.classList.add("active");
        }
    });
});
