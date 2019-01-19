
Ext.define('MyApp.view.main.EnterpriseEdit', {
    extend: 'Ext.window.Window',
    //xtype: 'EnterpriseEdit',
    xtype: 'form-contact-window',

    reference: 'popupWindow',
    title: 'Resize Me',
    width: 500,
    height: 300,
    minWidth: 300,
    minHeight: 220,
    layout: 'fit',

    closeAction: 'destroy',
    //controller: 'EnterpriseCtrl',
    bodyPadding: 20,
    plain: true,
    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        fieldDefaults: {
            labelWidth: 40

            //frame:true  

        },
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        bodyPadding: 5,
        border: false,
        items: [{
            fieldLabel: '代码',
            regex: /(^[0-9A-Z]{1,3}$)/,
            //width:20,  
            //maxLength:5,  
            allowBank: false,
            name: 'E_code'
        }, {
            fieldLabel: '名称',
            allowBank: false,
            name: 'E_name'
        }, {
            fieldLabel: '地址',
            name: 'Address'
        }, {
            fieldLabel: '电话',
            name: 'Tel'
        }
        ]
    }],
    buttons: [{
        text: 'Send',
        itemId: 'Send'
    }, {
        text: 'Cancel',
        itemId: 'Cancel'
    }]
});