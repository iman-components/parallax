/**
 * Simple Parallax Scrolling
 */

module.exports = parallax;

// el = element name, name of class
// top = distance from top of parent on page load
// speed = speed relative to page the element will scroll
//  * 1 will stick to the page
//  * positive values will scroll down the page, faster than the page
//  * negative values will scroll up the page
// delay = pixels from the top before starting the effect

function parallax(el, top, speed, delay) {
  if (el) {
    window.addEventListener('scroll', function () {
        var posFromTop = (document.documentElement.scrollTop || document.body.scrollTop); //FF compatibility
        var calcTop = 0;
        if (delay < posFromTop) {
          calcTop = (posFromTop - delay) * speed + top;
        }
        el.setAttribute('style', 'top:' + calcTop + "px");
      }
    );
  }
}

