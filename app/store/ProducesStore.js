Ext.define('MyApp.store.ProducesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ProducesStore',
    model: 'MyApp.model.ProducesModel',
    pageSize: 10000,
    proxy: {
        type: 'ajax',
        api: {
            read: sys_ActionPHP + '?act=produceslist',
            update: sys_ActionPHP + '?act=producessave',
            create: sys_ActionPHP + '?act=producesnew',
            destroy: sys_ActionPHP + '?act=producesdelete'
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
