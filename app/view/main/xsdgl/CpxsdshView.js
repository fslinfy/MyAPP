﻿Ext.define('MyApp.view.main.xsdgl.CpxsdshView', {
    extend: 'Ext.container.Container',
    xtype: 'CpxsdshView',
    requires: [
        'MyApp.view.main.showView.CpxsdListView'
    ],
    controller: 'CpxsdshCtrl',
    layout: 'fit',
    closeAction: 'destroy',
    items: [{ xtype: "CpxsdListView" }]

});
