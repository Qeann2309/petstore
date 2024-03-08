// JavaScript Document
$(document).ready(function(){
	$(".btn-menu").click(function(){
		$(".menu").slideToggle()
	})
})
$('#banner').owlCarousel({
    loop:true,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
   /* nav:true,*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#goods').owlCarousel({
    loop:true,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
   /* nav:true,*/
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#banner-shop').owlCarousel({
    loop:true,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
   /* nav:true,*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})