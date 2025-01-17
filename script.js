    // Function to preload images
function preloadImages() {
    return new Promise((resolve) => {
        const images = document.querySelectorAll('img');
        const totalImages = images.length;
        let loadedImages = 0;

        // If no images, resolve immediately
        if (totalImages === 0) {
            resolve();
        }

        // Load each image
        images.forEach(img => {
            if (img.complete) {
                loadedImages++;
                if (loadedImages === totalImages) {
                    resolve();
                }
            } else {
                img.addEventListener('load', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        resolve();
                    }
                });
                img.addEventListener('error', () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        resolve();
                    }
                });
            }
        });
    });
}

// Initialize animation after preloading
async function initAnimation() {
    // Wait for images to load
    await preloadImages();
    
    // Add 2 second delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    let tl = gsap.timeline({ delay: 0 });

    tl.to(".col", {
        top: 0,
        duration: 3,
        ease: "power4.inOut"
    });

    tl.to(".c-1 .item", {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
    }, "-=2");

    tl.to(".c-2 .item", {
        top: 0,
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut"
    }, "-=4");

    tl.to(".c-3 .item", {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
    }, "-=4");

    tl.to(".c-4 .item", {
        top: 0,
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut"
    }, "-=4");

    tl.to(".c-5 .item", {
        top: 0,
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
    }, "-=4");

    tl.to(".container", {
        scale: 6,
        duration: 4,
        ease: "power4.inOut"
    }, "-=2");

    // Group the nav items and title animation together
    tl.to(".nav-item a, .title p", {
        top: 0,
        stagger: 0.075,
        duration: 1,
        ease: "power3.out"
    }, "-=1.5");

    // Separate animation for slide number and preview images if needed
    tl.to(".slide-num p, .preview img", {
        top: 0,
        stagger: 0.075,
        duration: 1,
        ease: "power3.out"
    }, "<");

    tl.to(".icon ion-icon, .icon-2 ion-icon", {
        scale: 1,
        stagger: 0.05,
        ease: "power3.out"
    }, "-=1");
}

initAnimation();