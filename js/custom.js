$(document).ready(function() {
    $('.product').slick({
        dots: true,
        infinite: false,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }


        ]
    });
})
let menutoogle = document.querySelector('.menu-bar');
menutoogle.onclick = function() {
    menutoogle.classList.toggle('active')
}

let navtoogle = document.querySelector(".dropdown");
let sidebar = document.querySelector(".button");

navtoogle.addEventListener("click", function() {

    if (navtoogle.firstElementChild.classList.contains("icon-angle-left")) {
        navtoogle.firstElementChild.classList.replace("icon-angle-left", "icon-angle-down");
    } else {
        navtoogle.firstElementChild.classList.replace("icon-angle-down", "icon-angle-left");

    }
    sidebar.classList.toggle("button");

})



var acc = document.getElementsByClassName("question");
let icon = document.getElementsByClassName("icon-plus")
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }



    });

}