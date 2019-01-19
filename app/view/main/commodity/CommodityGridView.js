Ext.define('MyApp.view.main.commodity.CommodityGridView', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.CommodityGridView',
	itemId: 'CommodityGridView',
	requires: ['MyApp.store.CommodityStore', 'MyApp.view.main.QueryToolbarView'],

	plugins: ['cellediting', 'gridfilters'],
	//	controller : 'CommodityCtrl',
	store: {
		type: 'CommodityStore'
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
		text: '商品代码',
		width: 80,
		dataIndex: 'S_code',
		align: 'left',
		editor: {
			allowBlank: false,
			regex: /(^[0-9A-Z]{1,10}$)/,
			type: 'string'
		}
	}, {
		text: '商品名称',
		dataIndex: 'S_name',
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
			type : 'CommodityStore'
		},
		dock : 'bottom',
		displayInfo : true,
		pageSize : 30,
		displayMsg : '总记录数 {0} - {1} of {2}',
		emptyMsg : "没有记录"
	}],*/
	listeners: {
		select: 'onItemSelected'
	}
});
