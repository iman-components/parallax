parallax
=========

A simple parallax effect


parallax(el, top, speed, delay)

* el = name of element to give parallax effect to
* top = distance from top in px of parent the el sits at when it starts
* speed = how fast the el moves
    * negative values = el will scroll up the page
    * positive value = el will scroll down the page, faster than other elements
* delay = height in px from top before effect stats, useful if you don't want the effect until you scroll to a certain point

##Example usage

This code will cause the example background image to start scrolling slowly up the page after the user scrolls more than 800px down the page.

js

    var parallaxEl = document.querySelector('.js-parallaxScroll');
    if (parallaxEl) {
        new parallax(parallaxEl, 0, -0.3, 800);
    }

html

    <img src="/img/background.jpg" class="js-parallaxScroll" />

