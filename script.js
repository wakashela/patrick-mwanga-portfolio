document.addEventListener('DOMContentLoaded', () => {

    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        var windowHeight = window.innerHeight;
        var elementVisible = 150;

        reveals.forEach(element => {
            var elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    
    // Trigger once on load
    reveal();

    // Smooth scroll for nav links (if any issues with css scroll-behavior)
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Highlight active link
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile menu stub (you would expand this to show a dropdown)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Toggle menu logic goes here
            alert("Mobile menu opened! Implement dropdown here.");
        });
    }

    // Optional parallax effect on blobs
    document.addEventListener("mousemove", (e) => {
        const ax = -(window.innerWidth / 2 - e.pageX) / 50;
        const ay = -(window.innerHeight / 2 - e.pageY) / 50;
        
        const pinkBlob = document.querySelector('.pink-blob');
        const blueBlob = document.querySelector('.blue-blob');
        
        if (pinkBlob && blueBlob) {
            pinkBlob.style.transform = `translate(${ax}px, ${ay}px)`;
            blueBlob.style.transform = `translate(${-ax*1.5}px, ${-ay*1.5}px)`;
        }
    });

});
