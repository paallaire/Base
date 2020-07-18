function getHeightElement($element) {
    let height = 0;
    const $el = $element;

    $el.style.display = 'block'; // Make it visible
    height = `${$element.scrollHeight}px`; // Get it's height
    $el.style.display = ''; //  Hide it again

    return height;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function $(selector, context) {
    return Array.prototype.slice.call(
        (context || document).querySelectorAll(selector),
    );
}

export { getHeightElement, debounce, $ };
