Ext.define('MyApp.store.LocationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.LocationStore',
    model: 'MyApp.model.LocationModel',
    pageSize: 10000,
    proxy: {
        type: 'ajax',
        api: {
            read: sys_ActionPHP + '?act=locationlist',
            update: sys_ActionPHP + '?act=locationsave',
            create: sys_ActionPHP + '?act=locationnew',
            destroy: sys_ActionPHP + '?act=locationdelete'
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        extraParams: {
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            p_e_code: sys_enterprise_code
        },
        reader: {
            type: 'json',
            rootProperty: 'rows'
        }
    },
    autoLoad: true
});
