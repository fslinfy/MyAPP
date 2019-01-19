﻿Ext.define('MyApp.view.main.cpjkdsh.CpjkdcwshView', {
    extend: 'Ext.container.Container',
    xtype: 'CpjkdcwshView',
    requires: [
        'MyApp.view.main.showView.CpjkdListView'
    ],
    controller: 'CpjkdcwshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [{ xtype: "CpjkdListView" }]
});
