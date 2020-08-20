// Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.
//
//     1. Remove your custom jQuery code from previous exercises.
//
//     2. Add jQuery code that will change the background color of an h1 element when clicked.
//
//     3. Make all paragraphs have a font size of 18px when they are double clicked.
//
//     4. Set all li text color to red when the mouse is hovering; reset to black when it is not.


"use strict";

//     2. Add jQuery code that will change the background color of an h1 element when clicked.
$('h1').click(function () {
    $(this).css('background-color', '#ff0')
})

//     3. Make all paragraphs have a font size of 18px when they are double clicked.
function p_dblHandler() {
    $(this).css('font-size', '18px')
}
$('p').dblclick(p_dblHandler)

//     4. Set all li text color to red when the mouse is hovering; reset to black when it is not.
let oldTextColor
$('li').hover(
    function() {
        oldTextColor = $(this).css('color')
        console.log(oldTextColor)
        $(this).css('color', 'red');
    },
    function() {
        console.log(oldTextColor)
        $(this).css('color', oldTextColor);
    }
);

$('li').click(function () { oldTextColor = 'green'})