document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Splash UX Preloader Screen Manager
    const preloader = document.getElementById("loading-screen");
    window.addEventListener("load", function() {
        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 400);
    });

    // 2. Navigation Mobile Hamburger Panel Manager
    const hamburgerMenu = document.querySelector(".hamburger");
    const navigationPanel = document.querySelector(".nav-wrapper");
    const textLinks = document.querySelectorAll(".nav-link");

    hamburgerMenu.addEventListener("click", function() {
        hamburgerMenu.classList.toggle("active");
        navigationPanel.classList.toggle("active");
    });

    textLinks.forEach(link => {
        link.addEventListener("click", function() {
            hamburgerMenu.classList.remove("active");
            navigationPanel.classList.remove("active");
            
            textLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Multilingual DOM Translation Bridge (RO/EN Engine)
    const activeRoBtn = document.getElementById("lang-ro-btn");
    const activeEnBtn = document.getElementById("lang-en-btn");
    const docBody = document.body;

    activeRoBtn.addEventListener("click", function() {
        docBody.className = "lang-ro";
        activeRoBtn.classList.add("active");
        activeEnBtn.classList.remove("active");
    });

    activeEnBtn.addEventListener("click", function() {
        docBody.className = "lang-en";
        activeEnBtn.classList.add("active");
        activeRoBtn.classList.remove("active");
    });

    // 4. Performance Metrics Intersection Observer for Scroll Effects
    const dynamicCards = document.querySelectorAll(".scroll-reveal");
    
    const viewportSettings = {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    };

    const targetObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        });
    }, viewportSettings);

    dynamicCards.forEach(card => {
        targetObserver.observe(card);
    });
});
