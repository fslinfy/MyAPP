Ext.define('MyApp.store.CurCpckdmxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.CurCpckdmxStore',
    model: 'MyApp.model.CpckdmxModel',
    proxy: {
        type: 'localstorage',
        id: 'CurCpckdmxModel'
    },
    autoLoad: true

});
