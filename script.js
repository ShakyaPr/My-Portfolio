$(document).ready(function(){
    $(window).scroll(function(){         //change the color of navbar when scroll, not applied
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
})

// typing text animation script
var typed = new Typed(".typing",{
    strings: ["I'm an engineering undergrad", "of University of Moratuwa","in ENTC department"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
})
var typed = new Typed(".typing2", {
    strings: ["a tech enthusiast", "an Amateur Developer", "a traveller"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});