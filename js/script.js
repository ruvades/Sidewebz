    document.addEventListener('DOMContentLoaded', function() {
        // Zoek alle afbeeldingen in artikelen
        const images = document.querySelectorAll('.article img');

        // Loop door elke afbeelding en voeg willekeurige clipping toe
        images.forEach(function(img) {
            const randomClip = Math.floor(Math.random() * 4) + 1; // Kies een nummer tussen 1 en 4
            img.classList.add('random-clip-' + randomClip);
        });
    });