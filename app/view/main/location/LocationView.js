Ext.define('MyApp.view.main.location.LocationView', {
    extend: 'Ext.grid.Panel',
    xtype: 'LocationView',
    title: 'Location',
    requires: [
        'MyApp.store.LocationStore',
        'MyApp.view.main.QueryToolbarView'
    ],
    id: 'LocationGrid',
    plugins: ['cellediting', 'gridfilters'],
    controller: 'LocationCtrl',
    store: { type: 'LocationStore' },
    closeAction: 'destroy',
    tbar: [{
        xtype: 'container',
        flex: 1,
        layout: 'hbox',
        items: [{
            xtype: 'container',
            flex: 1,
            layout: 'hbox',
            items: [{
                labelWidth: 30,
                xtype: 'triggerfield',
                fieldLabel: '过滤',
                itemId: 'FilterField',
                flex: 1,
                triggerCls: 'x-form-clear-trigger',
                onTriggerClick: function () {
                    this.reset();
                }
            }]
        }, {
            xtype: 'QueryToolbarView'
        }]
    }
    ],

    columns: [{
        text: '仓库代码', width: 80, dataIndex: 'L_code', align: 'left',
        editor: {
            allowBlank: false,
            regex: /(^[0-9A-Z]{1}$)/,
            type: 'string'
        }
    },
    {
        text: '仓库名称', dataIndex: 'L_name', flex: 1, align: 'left',
        filter: {
            type: 'string',
            itemDefaults: {
                emptyText: 'Search for…'
            }
        },
        editor: {
            allowBlank: false,
            type: 'string'
        }

    },
    {
        text: '仓库地址', dataIndex: 'Address', flex: 1, align: 'left',
        filter: {
            type: 'string',
            itemDefaults: {
                emptyText: 'Search for…'
            }
        },
        editor: {
            allowBlank: true,
            type: 'string'
        }

    },
    {
        text: '联系电话', dataIndex: 'Tel', flex: 1, align: 'left',
        editor: {
            allowBlank: true,
            type: 'string'
        }
    },
    {
        xtype: 'checkcolumn',
        width: 90,
        text: '活跃',
        dataIndex: 'Active'
    }

    ],


    /*
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {type: 'LocationStore'},
        dock: 'bottom',
        displayInfo: true,
        pageSize: 30,
        displayMsg: '总记录数 {0} - {1} of {2}',
		emptyMsg: "没有记录"
    }]
    ,  */

    listeners: {
        select: 'onItemSelected'
    }
});
