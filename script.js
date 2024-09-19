// Optional: You can add smooth scrolling functionality or any interactive elements
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
