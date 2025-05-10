document.addEventListener("DOMContentLoaded", function () {
    const effects = ["fade-up", "fade-down", "fade-left", "fade-right", "zoom-in", "zoom-in-up", "zoom-in-down"];
    const images = document.querySelectorAll(".article img");

    // Stap 1: Eerst ALLE data en classes toekennen
    images.forEach((img) => {
        const effect = effects[Math.floor(Math.random() * effects.length)];
        img.setAttribute("data-aos", effect);

        const randomClip = Math.floor(Math.random() * 4) + 1;
        img.classList.add("random-clip-" + randomClip);
    });

    // Stap 2: Pas NA alle aanpassingen AOS initialiseren
    setTimeout(() => {
        AOS.init({
            duration: 900,
            easing: 'ease-in-out',
            once: true,
            offset: 120,
        });

        // Handmatig triggeren voor elementen die al in viewport zijn
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
            if (inViewport) {
                img.classList.add("aos-animate");
            }
        });
    }, 100); // kleine vertraging zodat DOM echt klaar is
});
