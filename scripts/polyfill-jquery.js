/**
 * This code is required when using the `onFormSubmitted` callback
 * in the Hubspot form embed code.
 *
 * The solution is adapted from https://www.unstack.com/blog/hubspot-on-form-submit-callbacks-without-jquery
 */

(() => {
    window.jQuery = (nodeOrSelector) => {
        if (typeof nodeOrSelector == "string") {
            return document.querySelector(nodeOrSelector);
        }
        return nodeOrSelector;
    };
})();