(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

    // let's make sure we only have one of these each:
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    // the remote database where we store orders
    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', remoteDS);
    window.myTruck = myTruck;

    let checkList = new CheckList(CHECKLIST_SELECTOR);

    let formHandler = new FormHandler(FORM_SELECTOR);

    // when the submit button is called, create the order and add a checkbox
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    // add the email validator to the email input field
    formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);