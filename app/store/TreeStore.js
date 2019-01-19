Ext.define('MyApp.store.TreeStore',

    {
        extend: 'Ext.data.Store',
        itemId: "selectCkbmTreeStore",
        type: 'tree',
        alias: 'store.TreeStore',
        /* proxy: {
             type: 'ajax',
             api: {
                 read: sys_ActionPHP + '?act=locationselecttreelist'
             },
            // actionMethods: {
            //     read: 'GET'
            // },
           //  extraParams: {
           //      userInfo:  base64encode(Ext.encode(obj2str(sys_userInfo))),
             //    p_e_code: sys_enterprise_code,
               //  displayall: sys_DisplayAll
            // }
         },*/
        proxy: {
            type: 'ajax',
            url: 'HTTP://LOCALHOST/MYSQL_ACTION.PHP?act=locationselecttreelist'
            //url: sys_ActionPHP + '?act=locationselecttreelist'


            //extraParams: {
            //userInfo:  base64encode(Ext.encode(obj2str(sys_userInfo))),
            //p_e_code: sys_enterprise_code,
            //  displayall: ''
            // }
        },

        root: {
            text: '全部',
            id: 'ALL',
            code: "",
            Py_code: "",
            expanded: true,
            draggable: false
        },
        autoLoad: true
    }
);