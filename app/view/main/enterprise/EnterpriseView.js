Ext.define('MyApp.view.main.enterprise.EnterpriseView', {
    extend: 'Ext.grid.Panel',
    xtype: 'EnterpriseView',
    title: 'Enterprise',
    requires: [
        'MyApp.store.EnterpriseStore',
        'MyApp.view.main.QueryToolbarView'
    ],
    id: 'EnterpriseGrid',
    plugins: ['cellediting', 'gridfilters'],
    controller: 'EnterpriseCtrl',
    store: { type: 'EnterpriseStore' },
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
        text: '公司代码', width: 80, dataIndex: 'E_code', align: 'left',
        editor: {
            allowBlank: false,
            regex: /(^[0-9A-Z]{1,5}$)/,
            type: 'string'
        }
    },
    {
        text: '公司名称', dataIndex: 'E_name', flex: 1, align: 'left',
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
        text: '公司地址', dataIndex: 'Address', flex: 1, align: 'left',
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
        store: {type: 'EnterpriseStore'},
        dock: 'bottom',
        displayInfo: true,
        pageSize: 30,
        displayMsg: '总记录数 {0} - {1} of {2}',
		emptyMsg: "没有记录"
    }]
      
    ,*/
    listeners: {
        select: 'onItemSelected'
    }
});
