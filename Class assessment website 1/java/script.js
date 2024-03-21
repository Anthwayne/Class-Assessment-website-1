document.addEventListener('DOMContentLoaded', function() {
    var aboutMessage = "Tired of searching for a website to stream your favorite anime? Well, look no further. This site was created with you in mind. We aim to centralize all anime streaming sites for your benefit.";
    var messageElement = document.getElementById('about-message');
    var index = 0;

    function typeWriter() {
        if (index < aboutMessage.length) {
            messageElement.innerHTML += aboutMessage.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (in milliseconds)
        }
    }

    typeWriter();
});
