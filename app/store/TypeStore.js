Ext.define('MyApp.store.TypeStore', {
    extend: 'Ext.data.Store',
    alias: 'store.TypeStore',
    model: 'MyApp.model.TypeModel',
    pageSize: 10000,
    proxy: {
        type: 'ajax',
        api: {
            read: sys_ActionPHP + '?act=typelist',
            update: sys_ActionPHP + '?act=typesave',
            create: sys_ActionPHP + '?act=typenew',
            destroy: sys_ActionPHP + '?act=typedelete'
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
