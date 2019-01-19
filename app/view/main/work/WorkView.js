Ext.define('MyApp.view.main.work.WorkView', {
	extend: 'Ext.grid.Panel',
	xtype: 'WorkView',
	title: 'Work',
	requires: ['MyApp.store.WorkStore', 'MyApp.view.main.QueryToolbarView'],
	id: 'WorkGrid',
	plugins: ['cellediting', 'gridfilters'],
	controller: 'WorkCtrl',

	store: {
		type: 'WorkStore'
	},
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
	}],

	columns: [{
		text: '项目代码',
		width: 80,
		dataIndex: 'Jobs',
		align: 'left',
		editor: {
			allowBlank: false,
			regex: /(^[0-9A-Z]{1,5}$)/,
			type: 'string'
		}
	}, {
		text: '项目名称',
		dataIndex: 'Jobsname',
		flex: 1,
		align: 'left',
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

	}, {
		xtype: 'checkcolumn',
		width: 90,
		text: '按重量核算',
		dataIndex: 'Weight_status'
	}, {
		xtype: 'checkcolumn',
		width: 90,
		text: '输入计量值',
		dataIndex: 'Quantity_in'
	},
	{
		xtype: 'checkcolumn',
		width: 90,
		text: '可修改单价',
		dataIndex: 'Price_in'
	},
	{
		xtype: 'checkcolumn',
		width: 90,
		text: '活跃',
		dataIndex: 'Active'
	}],/*
	dockedItems : [{
		xtype : 'pagingtoolbar',
		store : {
			type : 'WorkStore'
		},
		dock : 'bottom',
		displayInfo : true,
		pageSize : 3,
		displayMsg : '总记录数 {0} - {1} of {2}',
		emptyMsg : "没有记录"
	}],*/
	listeners: {
		select: 'onItemSelected'
	}
});
