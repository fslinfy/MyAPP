
Ext.define('MyApp.view.main.commodity.CommodityTypeEdit', {
    extend: 'Ext.window.Window',
    xtype: 'formtypewindow',
    reference: 'popupWindow',
    bind: {
        title: '{title}'
    },
    title: '编辑资料',
    width: 300,
    height: 250,
    minWidth: 200,
    minHeight: 120,
    layout: 'fit',
    closeAction: 'destroy',
    bodyPadding: 20,
    plain: true,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'windowForm',
        defaultType: 'textfield',
        fieldDefaults: {
            labelWidth: 40,
            frame: true
        },
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        bodyPadding: 5,
        border: false,
        items: [
            {
                fieldLabel: 'id',
                name: 'id',
                hidden: true,
                bind: '{id}'
            },
            {
                fieldLabel: 'T_id',
                name: 'T_id',
                hidden: true,
                bind: '{T_id}'
            }
            , {
                fieldLabel: 'table',

                name: 'table',
                hidden: true,
                bind: '{table}'
            }

            ,
            {
                fieldLabel: '代码',
                regex: /(^[0-9A-Za-z]{1,5}$)/,
                width: 20,
                maxLength: 5,
                allowBank: false,
                name: 'code',
                bind: '{code}'
            }, {
                fieldLabel: '名称',
                allowBank: false,
                name: 'name',
                bind: '{name}'
            },
            {
                xtype: 'checkbox',
                fieldLabel: '活跃',
                name: 'Active',
                bind: '{Active}',
                reference: "Activecheckbox"
                //bind:{
                // hidden:'{id}==0'    
                //} 

            }
        ]
    }],
    buttons: [{
        text: '保存',
        // itemId:'Send',
        icon: "images/right.gif",
        handler: 'onFormSubmit'
    }, {
        text: '删除',
        icon: "images/delete.gif",
        reference: 'btnDeleteButton',
        handler: 'onFormDelete'
    }, {
        text: '放弃',
        icon: "images/close.gif",
        // itemId: 'Cancel',
        handler: 'onFormCancel'
    }]
});