﻿Ext.define('MyApp.view.main.cpckgl.CpckdcwshView', {
    extend: 'Ext.container.Container',
    xtype: 'CpckdcwshView',
    requires: [
        'MyApp.view.main.showView.CpckdListView'
    ],
    controller: 'CpckdcwshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [{ xtype: "CpckdListView" }]
});
