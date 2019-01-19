Ext.define('MyApp.store.SelectTreeStore', {
    //--Ext.define('KitchenSink.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.SelectTreeStore',
    model: 'MyApp.model.SelectTreeModel',
    proxy: {
        type: 'ajax',
        reader: 'json',
        url: 'http://localhost/ext6/build/examples/KitchenSink/Posts'
    },
    lazyFill: false
});