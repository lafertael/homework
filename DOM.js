/**
 * Created by Vzhak on 23.06.2017.
 */

------------------------------------------------------------------------------------------------------------------------
    function next(element) {
        this.element = element;
        if ($(element).nextElementSibling === null) {
            console.log("Это последний элемент.");
            return $(element);
        } else {
            console.log($(element).nextElementSibling);
        }
    }


------------------------------------------------------------------------------------------------------------------------

    function hasClass(node, className) {
        var classExistence = $(node).classList.contains(className);

        if (classExistence) {
            return true;
        } else {
            return false;
        }
    }