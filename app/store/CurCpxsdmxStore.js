Ext.define('MyApp.store.CurCpxsdmxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.CurCpxsdmxStore',
    model: 'MyApp.model.CpxsdmxModel',
    proxy: {
        type: 'localstorage',
        id: 'CurCpxsdmxModel'
    }//,
    //autoLoad: true
});
