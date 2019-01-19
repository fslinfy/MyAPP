Ext.define('KitchenSink.view.packing.PackingViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.packingViewModel',
    stores: {
        // Define a store of Customer records that links to the Session.
        customers: {
            model: 'PackingModel',
            autoLoad: true,
            session: true
        }
    }
});