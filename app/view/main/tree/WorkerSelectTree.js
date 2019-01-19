
Ext.define('MyApp.view.main.tree.WorkerSelectTree', {
    extend: 'Ext.window.Window',
    xtype: 'selectWorkerWindow',
    reference: 'popupSelectWorkerWindow',
    itemId: 'selectWorkerWindow',
    title: '选择人员',
    width: 600,
    height: 500,
    minWidth: 300,
    minHeight: 300,
    layout: 'fit',
    closeAction: 'destroy',
    modal: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    defaults: {
        xtype: "treepanel",
        singleExpand: false,
        rootVisible: false,
        draggable: false,
        useArrows: true,
        lines: true,
        border: 1,

        expanded: true,
        flex: 1
    },
    //bodyPadding: 5,
    border: false,
    items: [
        {
            reference: "selectWorkerTreePanel",
            itemId: "selectWorkerTreePanel",
            store: {
                itemId: "selectWorkerTreeStore",
                type: 'tree',

                proxy: {
                    type: 'ajax',
                    api: {
                        read: sys_ActionPHP + '?act=workerselecttreelist'
                    },
                    actionMethods: {
                        read: 'GET'
                    },
                    extraParams: {
                        userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                        p_e_code: sys_enterprise_code,
                        p_l_id: sys_location_id,
                        jobs: 1,
                        displayall: sys_DisplayAll
                    }
                },
                root: {
                    text: '全部',
                    id: 'ALL',
                    code: "",
                    checked: false,
                    expanded: true,
                    draggable: false
                },
                autoLoad: true
            },
            /*            tbar: [{
                            labelWidth: 40,
                            xtype: 'triggerfield',
                            fieldLabel: '过滤',
                            flex: 1,
                            triggerCls: 'x-form-clear-trigger',
                            onTriggerClick: function () {
                                // Will trigger the change listener
                                this.reset();
                            },
                            listeners: {
                                change: function () {
                                    var tree = this.up('treepanel'),
                                        v,
                                        matches = 0;
                                    //try {
                                    v = new RegExp(this.getValue(), 'i');
                                    Ext.suspendLayouts();
                                    tree.store.filter({
                                        filterFn: function (node) {
                                            var children = node.childNodes,
                                                len = children && children.length,
                                                visible = node.isLeaf() ? (v.test(node.get('text')) || v.test(node.get('py_code')) || v.test(node.get('code'))) : false,
                                                i;
                                            for (i = 0; i < len && !(visible = children[i].get('visible')); i++);
                                            if (visible && node.isLeaf()) {
                                                matches++;
                                            }
                                            return visible;
                                        },
                                        id: 'titleFilter'
                                    });
                                    Ext.resumeLayouts(true);
                                },
                                buffer: 250
                            }
                        }],*/
            /*   bbar: {
                   reference: 'bbar',
                   items: ['->', {
                       text: '确认',
                       itemId: "btnWorkerTreeAdd",
                       icon: "images/right.gif",
                      // disabled: true,
                       handler: 'onWorkerSelectOkClick'
                   }, {
                           text: '放弃',
                           itemId: "btnWorkerTreeEdit",
                           icon: "images/close.gif",
                           //handler: 'onWorkerSelectCanelClick'
                           handler:function()
                           {
                               this.up("window").close(); 
   
                           }
                       }]
   
               }*/
        },

        {

            reference: "selectWorkerTreePanel1",
            itemId: "selectWorkerTreePanel1",
            margin: '0 5 0 5',
            store: {
                itemId: "selectWorkerTreeStore1",
                type: 'tree',

                proxy: {
                    type: 'ajax',
                    api: {
                        read: sys_ActionPHP + '?act=workerselecttreelist'
                    },
                    actionMethods: {
                        read: 'GET'
                    },
                    extraParams: {
                        userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                        p_e_code: sys_enterprise_code,
                        p_l_id: sys_location_id,
                        jobs: 2,
                        displayall: sys_DisplayAll
                    }
                },
                root: {
                    text: '全部',
                    id: 'ALL',
                    code: "",
                    checked: false,
                    expanded: true,
                    draggable: false
                },
                autoLoad: true
            },
            /*   bbar: {
                   reference: 'bbar',
                   items: ['->', {
                       text: '确认',
                       itemId: "btnWorkerTreeAdd",
                       icon: "images/right.gif",
                      // disabled: true,
                       handler: 'onWorkerSelectOkClick'
                   }, {
                           text: '放弃',
                           itemId: "btnWorkerTreeEdit",
                           icon: "images/close.gif",
                           //handler: 'onWorkerSelectCanelClick'
                           handler:function()
                           {
                               this.up("window").close(); 
   
                           }
                       }]
   
               }*/
        }

        ,

        {
            reference: "selectWorkerTreePanel2",
            itemId: "selectWorkerTreePanel2",
            store: {
                itemId: "selectWorkerTreeStore2",
                type: 'tree',

                proxy: {
                    type: 'ajax',
                    api: {
                        read: sys_ActionPHP + '?act=workerselecttreelist'
                    },
                    actionMethods: {
                        read: 'GET'
                    },
                    extraParams: {
                        userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                        p_e_code: sys_enterprise_code,
                        p_l_id: sys_location_id,
                        jobs: 3,
                        displayall: sys_DisplayAll
                    }
                },
                root: {
                    text: '全部',
                    id: 'ALL',
                    code: "",
                    checked: false,
                    expanded: true,
                    draggable: false
                },
                autoLoad: true
            }
        }
    ],
    buttons: [
        "->",
        {
            text: '确认',
            itemId: "btnWorkerTreeAdd",
            icon: "images/right.gif",
            handler: 'onWorkerSelectOkClick'
        }, {
            text: '放弃',
            icon: "images/close.gif",
            handler: function () {
                this.up("#selectWorkerWindow").close();

            }
        }
    ]

}
);