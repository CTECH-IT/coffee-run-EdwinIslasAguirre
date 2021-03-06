(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length == 0) {
            throw new Error('Could not find the element with selector: ' + selector);
        }
    }

    // The method that adds a new row to the checklist
    CheckList.prototype.addRow = function (coffeeOrder) {
        // Create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        // Add the new row instance's $element prototype to the checklist
        this.$element.append(rowElement.$element);
    };

    // Each row is one Outstanding Order
    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        let description = coffeeOrder.size + ' ';

        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;

    }

    // Add the Checklist to the App namespace
    App.CheckList = CheckList;
    window.App = App;

})(window);