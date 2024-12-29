"use strict";

$(document).ready(function () {
    /* Video Lightbox */
    if (!!$.prototype.simpleLightboxVideo) {
        $('.video').simpleLightboxVideo();
    }

    /* ScrollUp */
    if (!!$.prototype.scrollUp) {
        $.scrollUp();
    }

    /* Responsive Navigation */
    $("#nav-mobile").html($("#nav-main").html()); // Duplikasi menu utama ke menu mobile

    // Default state of mobile menu should be closed
    $("nav#nav-mobile ul").removeClass("expanded").hide(); // Menu starts closed
    $("#nav-trigger").removeClass("open"); // Ensure hamburger is in its default state

    $("#nav-trigger").on("click", function () {
        const $navMobile = $("nav#nav-mobile ul");

        if ($navMobile.hasClass("expanded")) {
            $navMobile.removeClass("expanded").slideUp(250); // Tutup menu dengan efek slide
            $(this).removeClass("open"); // Hapus animasi trigger
        } else {
            $navMobile.addClass("expanded").slideDown(250); // Buka menu dengan efek slide
            $(this).addClass("open"); // Tambahkan animasi trigger
        }
    });

    /* Tutup Menu Mobile Setelah Klik Link */
    $("#nav-mobile ul a").on("click", function () {
        const $navMobile = $("nav#nav-mobile ul");

        if ($navMobile.hasClass("expanded")) {
            $navMobile.removeClass("expanded").slideUp(250); // Tutup menu setelah klik
            $("#nav-trigger").removeClass("open"); // Reset animasi trigger
        }
    });

    /* Sticky Navigation */
    if (!!$.prototype.stickyNavbar) {
        $('#header').stickyNavbar();
    }

    /* Navigasi Solid saat Scroll */
    $('#content').waypoint(function (direction) {
        if (direction === 'down') {
            $('#header').addClass('nav-solid fadeInDown');
        } else {
            $('#header').removeClass('nav-solid fadeInDown');
        }
    });
});

/* Preloader and Animations */
$(window).on('load', function () { // Pastikan seluruh elemen dimuat
    $('#status').fadeOut(); // Menghilangkan animasi loading
    $('#preloader').delay(350).fadeOut('slow'); // Menghilangkan overlay preloader
    $('body').delay(350).css({ 'overflow-y': 'visible' });

    /* WOW Elements */
    if (typeof WOW === 'function') {
        new WOW().init();
    }

    /* Parallax Effects */
    if (!!$.prototype.enllax) {
        $(window).enllax();
    }
});
