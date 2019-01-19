Ext.define('MyApp.store.CurCpjkdStore', {
    extend: 'Ext.data.Store',
    alias: 'store.CurCpjkdStore',
    model: 'MyApp.model.CpjkdModel',
    // itemId:"CurCpjkdStore",
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'CurCpjkdModel'
    }
});
