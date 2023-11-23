window.onscroll = function() {
    var button = document.getElementById('back-to-top');
    if (window.pageYOffset > 200) { // Show back-to-top button after scrolling down 200px
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo(0, 0);
});