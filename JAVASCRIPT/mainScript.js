function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});
