
Ext.define('MyApp.model.CpjkdmxViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.CpjkdmxViewModel',
    stores: {
        // Define a store of Customer records that links to the Session.
        CpjkdmxStores: {
            model: 'MyApp.model.CurCpjkdmxModel',
            autoLoad: true,
            session: true
        }
    }
});

