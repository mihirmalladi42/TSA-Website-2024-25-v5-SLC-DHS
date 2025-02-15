document.getElementById("headerMenu").addEventListener("click", function () {
    document.getElementById("dropDivMenu").classList.toggle("open");
});
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let scaleValue = 1 + scrollTop / 2000;
    document.querySelector(".scroll-img").style.transform = `scale(${scaleValue})`;
});