Ext.define('MyApp.store.PackingStore', {
    extend: 'Ext.data.Store',
    alias: 'store.PackingStore',
    pageSize: 10000,
    model: 'MyApp.model.PackingModel',

    proxy: {
        type: 'ajax',
        api: {
            read: sys_ActionPHP + '?act=packinglist0',
            update: sys_ActionPHP + '?act=packingsave',
            create: sys_ActionPHP + '?act=packingnew',
            destroy: sys_ActionPHP + '?act=packingdelete'
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        extraParams: {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_e_code: sys_enterprise_code,
            p_l_id: sys_location_id,
            khid: 0
        },
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'results'
        }
    },
    autoLoad: true
});
