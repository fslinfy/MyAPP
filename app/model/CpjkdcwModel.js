Ext.define('MyApp.model.CpjkdcwModel', {
    extend: 'Ext.app.ViewModel',
    extend: 'Ext.data.Model',
    alias: 'viewmodel.CpjkdcwModel',
    fields: [{
        name: 'id'
    },
    {
        name: 'mxdh'
    },
    {
        name: 'cw'
    }, {
        name: 'cpph'
    }, {
        name: 'dw'
    },
    {
        name: 'sm'
    },
    {
        name: 'sl',
        type: 'float'
    },
    {
        name: 'zl',
        type: 'float'
    },
    {
        name: 'czdj',
        type: 'float'
    }
    ]
    /*
        proxy: {
            type: 'localstorage',
            id  : 'cpjkdcwModel'
        }
    
        proxy: {
            type: 'ajax',
            api: {
                read: sys_ActionPHP + '?act=Cpjkdcwlist_pc'
            },
            actionMethods: {
                read: 'GET'
            },
            extraParams: {
                userInfo: sys_userInfo,
                mxdh: "09dc00d8-8837-417c-b38b-53f108a1b2c5"
            },
            reader: {
                type: 'json',
                rootProperty: 'rows'
            }
        }*/
});


