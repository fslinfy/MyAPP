
Ext.define('MyApp.view.main.tree.CkmcSelectTree', {
    extend: 'Ext.window.Window',
    xtype: 'selectCkmcWindow',
    reference: 'popupSelectCkmcWindow',
    itemId: 'selectCkmcWindow',
    title: '确定仓库',
    width: 400,
    height: 300,
    minWidth: 300,
    minHeight: 300,
    layout: 'fit',
    closeAction: 'destroy',
    modal: true,
    items: [
        {
            xtype: "treepanel",
            reference: "selectCkmcTreePanel",
            itemId: "selectCkmcTreePanel",
            singleExpand: false,
            rootVisible: false,
            draggable: false,
            useArrows: true,
            lines: true,
            expanded: true,
            store: {
                itemId: "selectCkmcTreeStore",
                type: 'tree',

                proxy: {
                    type: 'ajax',
                    api: {
                        read: sys_ActionPHP + '?act=locationselecttreelist'
                    },
                    actionMethods: {
                        read: 'GET'
                    },
                    extraParams: {
                        userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                        p_e_code: sys_enterprise_code,
                        p_l_id: sys_location_id,
                        loc: "lidstring",
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
            bbar: {
                reference: 'bbar',
                items: ['->', {
                    text: '确认',
                    itemId: "btnCkmcTreeAdd",
                    icon: "images/right.gif"//,
                    // disabled: true,
                    //handler: 'onCkmcSelectOkClick'
                }, {
                        text: '放弃',
                        itemId: "btnCkmcTreeEdit",
                        icon: "images/close.gif",
                        //handler: 'onCkmcSelectCanelClick'
                        handler: function () {
                            this.up("window").close();

                        }
                    }]

            },
            listeners: {

                /* load: function (store) {
                     var p = that.recordID;// this.up('#selectCkmcWindow').getViewModel();
                     var str = that.checkedidstring;
                     var tree = that.getView().down("#selectCkmcTreePanel");
                     var nodes = tree.getRootNode().childNodes;
                     for (var j = 0; j < nodes.length; j++) {
                        var node = tree.getRootNode().childNodes[j];
                         if (str.indexOf("," + node.data.id + ",") > -1) {
                             node.data.checked = true;
                         }
                     }
                     
                 },*/
                select: function (node, event) {
                    if (event.data.leaf) {
                        // this.down("#btnCkmcTreeAdd").setDisabled(false);
                    }
                    else {
                        //  this.down("#btnCkmcTreeAdd").setDisabled(true);
                    }

                }
            }
        }
    ]
}
);