document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('click', function () {

        const overlay = document.createElement('div');
        overlay.className = 'lightbox';

        overlay.innerHTML = `
            <span class="close">&times;</span>
            <img src="${this.src}">
        `;

        document.body.appendChild(overlay);

        overlay.onclick = function () {
            overlay.remove();
        };
    });
});
