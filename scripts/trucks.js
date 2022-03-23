(function (window) {
    'use strict';

    let App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for' + order.emailAdress);
        this.db.add(order.emailAdress, order);
    }

    Truck.prototype.delieverOrder = function (customerId) {
        console.log('Delievering order for' + customerId);
        this.db.remove(customerId);
    }

    App.Truck = Truck;
    Window.App = App;

})(window);