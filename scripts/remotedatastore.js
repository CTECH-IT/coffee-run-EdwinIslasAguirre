(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window,jQuery;
    function RemoteDataStore(url) {
        if (!url) {
            throw new error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        // Call jQuery's $.post method to send the value to the serverUrl
        // When the server responds, call an anonymous function with serverResponse
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App
    
})(window);