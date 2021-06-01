function loginscreenon() {
    document.getElementById("overlay-login").style.display = "block";
}

function loginscreenoff() {
    document.getElementById("overlay-login").style.display = "none";
}

var x = 1;

document.getElementById('num').innerHTML = x;

function incrementValue() {
    document.getElementById('num').innerHTML = ++x;
}

function decrementValue() {
    document.getElementById('num').innerHTML = --x;
}

function filteroverlayOn() {
    document.getElementById("filter-overlay-content").style.display = "block";
}

function filteroverlayOff() {
    document.getElementById("filter-overlay-content").style.display = "none";
}

function openSearch() {
    document.getElementById("overlay-search-box").style.display = "block";
}

function closeSearch() {
    document.getElementById("overlay-search-box").style.display = "none";
}

$('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});