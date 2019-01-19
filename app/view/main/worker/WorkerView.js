Ext.define('MyApp.view.main.worker.WorkerView', {
	extend: 'Ext.panel.Panel',
	xtype: 'WorkerView',
	requires: ['MyApp.view.main.worker.WorkerGridView'],
	controller: 'WorkerCtrl',
	closeAction: 'destroy',
	items: [{
		xtype: 'panel',
		frame: true,

		layout: 'border',

		defaults: {
			collapsible: true,
			split: true,
			border: 1
		},

		items: [{

			title: '分类',
			region: 'west',
			itemId: "LeftTree",
			width: 125,
			singleExpand: true,
			minWidth: 100,
			maxWidth: 250,
			xtype: 'treepanel',
			rootVisible: false,
			draggable: false,
			lines: true,
			useArrows: true,

			root: {
				text: '全部',
				children: [{
					text: '搬运',
					id: 1,
					leaf: true
				}, {
					text: '机械',
					id: 2,
					leaf: true
				}, {
					text: '其它',
					id: 3,
					leaf: true
				}],
				expanded: true
			}
			/*
						listeners : {
							load:function(node){
								node.firstChild.select();
			
							}
							//'itemclick':this.onTreeSelected
							
							'itemclick':function tree_event(node,event)  
							{  
							   var id=event.data.id;
							   //console.log(id);  
							   //Ext.Msg.show({  
								 //     title:'提示',  
								   //   msg:'你单击了'+id  
							   //});  
							}  
						}
			*/
		}, {
			xtype: 'WorkerGridView',
			collapsible: false,
			region: 'center'
		}]

	}]
});
