Ext.define('MyApp.view.main.produces.ProducesView', {
    extend: 'Ext.grid.Panel',
    xtype: 'ProducesView',
    title: 'Produces',
    requires: [
        'MyApp.store.ProducesStore',
        'MyApp.view.main.QueryToolbarView'
    ],
    id: 'ProducesGrid',
    plugins: ['cellediting', 'gridfilters'],
    controller: 'ProducesCtrl',
    store: { type: 'ProducesStore' },
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
        text: '产地代码', width: 80, dataIndex: 'P_code', align: 'left',
        editor: {
            allowBlank: false,
            regex: /(^[0-9A-Z]{1,5}$)/,
            type: 'string'
        }
    },
    {
        text: '产地名称', dataIndex: 'P_name', flex: 1, align: 'left',
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
        text: '拼音码', dataIndex: 'Py_code', flex: 1, align: 'left',
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
        text: '产地地址', dataIndex: 'Address', flex: 1, align: 'left',
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

    ],/*
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: {type: 'ProducesStore'},
        dock: 'bottom',
        displayInfo: true,
        pageSize: 3,
        displayMsg: '总记录数 {0} - {1} of {2}',
		emptyMsg: "没有记录"
    }],*/


    listeners: {
        select: 'onItemSelected'
    }
});
