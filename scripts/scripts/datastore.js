(function (window) {
    'use strict';

    
    let App = Window.App || {};

    function DataStore() {
        console.log('Running the DataStore Function...')
    }

    App.DataStore = DataStore;
    window.App = App;

})(window);