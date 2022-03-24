(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        if(!selector) {
            throw new Error('No selector provided!');
        }
    }

    // find the "selector" in the DOM using jQuery and assign it to this.formElement
    this.$formElement = $(element);
    if (this.$formElement.length == 0) {
        throw new error('Could not find Element with selector:' + selector);
    }
    
    App.FormHandler = FormHandler;
    window.App = App;

})(window);