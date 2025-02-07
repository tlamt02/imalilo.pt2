// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function updateCountdown() {
    const birthday = new Date("2025-02-13T21:00:00"); // Set your birthday date
    const now = new Date();
    
    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }
    
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
    document.getElementById("countdown").innerHTML = `🎂 ${days}d ${hours}h ${minutes}m ${seconds}s 🎉`;
}

updateCountdown();
setInterval(updateCountdown, 1000);