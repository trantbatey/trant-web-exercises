(function () { // IFEE
    "use strict"
    $().ready(function () {
        // Id Selectors
        // 1. Create content in your HTML file using at least the following elements: h1, p, ul, li, div

        // 2. Add several attributes to your elements; you will need both id and class attributes.
        // let content = $('#div1').html()
        // alert(content)

        // 3. Use jQuery to select an element by the id. Alert the contents of the element.
        // content = $('#ul1').html()
        // alert(content)

        // 4. Update the jQuery code to select and alert a different id.
        // content = $('#li1').html()
        // alert(content)

        // 5. Use the same id on 2 elements. How does this change the jQuery selection?
        // content = $('#li1').html()
        // alert(content)

        // 6. Remove the duplicate id. Each id should be unique on that page.

        // Class Selectors
        // 1. Remove your custom jQuery code from previous exercises.

        // 2. Update your code so that at least 3 different elements have the same class named codeup.

        // 3. Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
        // $('.codeup').css('border', '1px red solid')

        // 4. Remove the class from one of the elements. Refresh and test that the border has been removed.

        // 5. Give another element an id of codeup. Does this element get a border now?

        // Element Selectors
        // 1. Remove your custom jQuery code from previous exercises.

        // 2. Using jQuery, set the font-size of all li elements to 20px.
        $('li').css('font-size', '20px')

        // 3. Craft selectors that highlight all the h1, p, and li elements.
        // $('h1').css('background-color', 'yellow')
        // $('p').css('background-color', 'yellow')
        // $('li').css('background-color', 'yellow')

        // 4. Create a jQuery statement to alert the contents of your h1 element(s).
        let h1_content = $('h1').html()
        alert(h1_content)

        // Multiple Selectors
        // 1. Combine your selectors that highlight all the h1, p, and li elements.
        $('h1, p, li').css('background-color', 'yellow')

    });
})();
