Ext.define('MyApp.view.main.worker.WorkerGridView', {
	extend: 'Ext.grid.Panel',
	//xtype : 'WorkerGridView',
	alias: 'widget.WorkerGridView',
	itemId: 'WorkerGridView',
	//id : 'WorkerGrid',    

	closeAction: 'destroy',

	requires: ['MyApp.store.WorkerStore', 'MyApp.view.main.QueryToolbarView'],
	//controller : 'WorkerCtrl',

	plugins: ['cellediting', 'gridfilters'],

	store: {
		type: 'WorkerStore'
	},

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

	columns: [/*{
		text : '类代码',
		width : 80,
		dataIndex : 'Jobs',
		align : 'left'
	}, {
		text : '类名称',
		dataIndex : 'Jobsname',
		flex : 1,
		align : 'left'

	},*/{
			text: '人员姓名',
			dataIndex: 'Name',
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
			text: '电话',
			dataIndex: 'Tel',
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
			text: '活跃',
			dataIndex: 'Active'
		}],/*
	dockedItems : [{
		xtype : 'pagingtoolbar',
		store : {
			type : 'WorkerStore'
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
