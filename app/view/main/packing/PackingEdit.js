Ext.define('MyApp.view.main.packing.PackingEdit', {
    extend: 'Ext.window.Window',
    xtype: 'formwindow',
    reference: 'popupWindow',
    bind: {
        title: '{title}'
    },
    //    title: '编辑资料',
    width: 300,
    height: 300,
    minWidth: 200,
    minHeight: 120,
    layout: 'fit',
    closeAction: 'destroy',
    bodyPadding: 20,
    plain: true,
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
                //name: 'PS_id',
                visiable: false,
                hidden: true,
                bind: '{id}'
            }
            ,
            {
                fieldLabel: '代码',
                regex: /(^[0-9A-Z]{1,5}$)/,
                width: 20,
                maxLength: 5,
                allowBank: false,
                name: 'PS_code',
                reference: 'PS_code',
                // msgTarget: 'side',
                bind: '{PS_code}'
            }, {
                fieldLabel: '名称',
                allowBank: false,
                name: 'Ps_name',
                reference: 'PS_name',
                bind: '{PS_name}'
            },
            {
                xtype: 'checkbox',
                fieldLabel: '活跃',
                //name: 'Active'
                bind: '{Active}'
                //reference: 'Active'
            }
        ]
    }],
    buttons: [{
        text: '保存',
        // itemId:'Send',
        icon: "images/right.gif",
        handler: 'onFormSubmit'
    }, {
        text: '放弃',
        icon: "images/close.gif",
        // itemId: 'Cancel',
        handler: 'onFormCancel'
    }]
});