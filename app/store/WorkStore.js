Ext.define('MyApp.store.WorkStore', {
    extend: 'Ext.data.Store',
    alias: 'store.WorkStore',
    model: 'MyApp.model.WorkModel',
    pageSize: 10000,
    proxy: {
        type: 'ajax',
        api: {
            read: sys_ActionPHP + '?act=worklist0',
            update: sys_ActionPHP + '?act=worksave',
            create: sys_ActionPHP + '?act=worknew',
            destroy: sys_ActionPHP + '?act=workdelete'
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
