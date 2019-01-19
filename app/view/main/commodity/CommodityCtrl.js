var p_ct_id = 0;
Ext.define('MyApp.view.main.commodity.CommodityCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CommodityCtrl',
    requires: [
        'MyApp.view.main.commodity.CommodityView'
    ],
    onBtnQueryClick: function (button, e, options) {
        this.getView().down("#CommodityGridView").getStore().load();
        return false;
    },
    onItemSelected: function (sender, record) {
        var tool = this.getView().down("#QueryToolbarView");
        tool.down('#btnEdit').setDisabled(false);
        tool.down('#btnDelete').setDisabled(false);
        return false;
    },
    onBtnNewClick: function () {
        console.log(p_ct_id);
        if (p_ct_id > 0) {
            var store = this.getView().down("#CommodityGridView").getStore();
            store.addSorted([{ E_code: sys_enterprise_code, CT_id: p_ct_id }]);
        }
        return false;
    },
    onBtnDeleteClick: function (button, e, options) {
        var store = this.getView().down("#CommodityGridView").getStore();
        var grid =  this.getView().down("#CommodityGridView");//Ext.getCmp('CommodityGrid');
        return storeBtnDeleteClick(this, grid, store);
    },
    onBtnHelpClick: function (button, e, options) {
       // console.log("help")
        return false;
    },
    onBtnSaveClick: function (button, e, options) {
        var store = this.getView().down("#CommodityGridView").getStore();
        return storeBtnSaveClick(this, store);
    },
    onBtnUndoClick: function (button, e, options) {
    //    this.getView().getStore().down("#CommodityGridView").rejectChanges();
        var store = this.getView().down("#CommodityGridView").getStore();
        store.rejectChanges();
        return false;
    },
    onBeforeReload: function (store, records, options) {
        var store = this.getView().down("#CommodityGridView").getStore();
        return storeBeforeReload(this, store);
    },
    onBtnCancelClick: function (button, e, options) {
        var win = this.lookupReference('popupWindow');
        win.close()
        return false;
    },

    init: function () {
          var tool = this.getView().down("#QueryToolbarView");
        tool.down('#btnNew').setHidden(false);
        tool.down('#btnSave').setHidden(false);
        tool.down('#btnDelete').setHidden(false);
        tool.down('#btnUndo').setHidden(false);
        this.control({
            "#btnQuery": {
                click: this.onBtnQueryClick
            },
            "#button1": {
                click: this.onButtonAddClick
            },
            "#btnNew": {
                click: this.onBtnNewClick
            },
            "#btnSave": {
                click: this.onBtnSaveClick
            },

            "#btnDelete": {
                click: this.onBtnDeleteClick
            },
            "#btnHelp": {
                click: this.onBtnHelpClick
            },
            "#btnUndo": {
                click: this.onBtnUndoClick
            }
            ,
            "#Cancel": {
                click: this.onBtnCancelClick
            },
            "#FilterField": {
                change: this.onFilterChange
            },
            "#LeftTree": {
                itemclick: this.onTreeSelected
            }
        });
        var store = this.getView().down("#CommodityGridView").getStore();
        store.on('beforeload', this.onBeforeReload, this);
    },
    onFilterChange: function (v) {
        //  return storeFilter(this.getView().down("#CommodityGridView").getStore(), ['S_name','S_code'], v.rawValue);


        var store = this.getView().down("#CommodityGridView").getStore()
        var regExp = new RegExp(".*" + v.rawValue + ".*");
        store.clearFilter();
        store.filterBy(function (record, id) {
            return regExp.test(record.get('S_name')) || regExp.test(record.get('S_code')) || regExp.test(record.get('CT_name'));
        });

    },
    onTreeSelected: function (node, event) {

        this.getView().down("#FilterField").reset();
        var tool = this.getView().down("#QueryToolbarView");
        var store = this.getView().down("#CommodityGridView").getStore();
        store.clearFilter();
       // console.log(event.data);o
        p_ct_id=event.data.id;
        // console.log(node);
        if (event.data.root) {
            store.proxy.extraParams.T_id = 0;
            store.proxy.extraParams.CT_id = 0;
            tool.down('#btnNew').setDisabled(true);
        } else {
            if (event.data.pid == 0) {
                store.proxy.extraParams.T_id = event.data.T_id;
                store.proxy.extraParams.CT_id = 0;
                tool.down('#btnNew').setDisabled(true);
            }
            else {
                store.proxy.extraParams.CT_id = event.data.CT_id;
                store.proxy.extraParams.T_id = 0;
                tool.down('#btnNew').setDisabled(false);
            }
        }
        store.load();

    },
    /*
        onTreeSelected: function (node, event) {
    
            this.getView().down("#FilterField").reset();
            var store = this.getView().down("#CommodityTypeGridView").getStore();
            store.clearFilter();
            store.proxy.extraParams.T_id = event.data.id;
            store.load();
    
        },*/

    onTreeAddClick: function () {
        //  this.createDialog({});
        var obj = {};
        var panel = this.getView().down('#LeftTree'),
            sm = panel.getSelectionModel(),
            node;

        if (sm.hasSelection()) {
            node = sm.getSelection()[0];
            // console.log("node",node.data);

            obj["Active"] = true;
            obj["hiddenactive"] = true;


            obj["pid"] =0;
            if (node.data.root) {

                obj["title"] = "增加大类";

                obj["table"] = "type";
            } else {
                if (node.data.pid == 0) {
                    obj["T_id"] = node.data.T_id;
                     obj["pid"] = node.data.T_id;        
                    obj["title"] = "增加小类";
                    obj["table"] = "commoditytype";
                }
            }
            obj["id"] = 0;
            obj["name"] = "";

        

            this.createDialog(obj);

        }

    },
    onTreeEditClick: function () {

        var obj = {};
        var panel = this.getView().down('#LeftTree'),
            sm = panel.getSelectionModel(),
            node;

        if (sm.hasSelection()) {
            node = sm.getSelection()[0];
         //   console.log("node", node.data);

            obj["id"] = node.data.id;
            obj["code"] = node.data.code;
            obj["name"] = node.data.name;
            obj["Active"] = node.data.Active;
            if (node.data.root) {
                obj = {};
            } else {
                if (node.data.pid == 0) {
                    obj["id"] = node.data.T_id;
                    obj["pid"] = 0;
                    obj["table"] = "type";
                    obj["title"] = "编辑大类：" + node.data.text;
                    obj["leaf"] = node.data.leaf;
                }
                else {
                    obj["id"] = node.data.id;
                    obj["table"] = "commoditytype";
                    obj["leaf"] = true;
                    obj["pid"] = node.data.pid;
                    obj["title"] = "编辑小类：" + node.data.text;
                }
            }
            obj["hiddenactive"] = false;
            this.createDialog(obj);
        }
    },

    createDialog: function (record) {
        //console.log(record);
        var view = this.getView();
        this.isEdit = !!record;
        // console.log(record,this.isEdit);
        this.dialog = view.add({
            xtype: 'formtypewindow',
            viewModel: {
                data: record
            },
            session: true
        });
        this.dialog.show();
        if (record.id == 0) {
            this.lookupReference('Activecheckbox').setDisabled(true);
            this.lookupReference('btnDeleteButton').setDisabled(true);
        } else {
          //  console.log(record.pid, record.leaf);
            this.lookupReference('Activecheckbox').setDisabled(false);
            if (record.pid == 0) {
                if (record.leaf ==false) {
                    this.lookupReference('btnDeleteButton').setDisabled(true);
                }
            }

        }

    },
    onFormCancel: function (event) {
        this.lookupReference('windowForm').getForm().reset();
        this.lookupReference('popupWindow').hide();
    },
    dataSave:function (obj) 
    {
            Ext.Ajax.request({
                method: 'POST',
                url: sys_ActionPHP + '?act=commoditytypeupdate',
                scope: this,
                params: obj,
                success: function (response) {
                    var result = Ext.decode(response.responseText);
                 //   console.log(result);
                    if (result.success) {
                        //console.log(result.data);
                         //this.up("#LeftTree").getStore().reload();
                         this.getView().down("#LeftTree").getStore().reload();
       
                    }
                    else {
                        console.log('错误', '数据保存失败！');
                    }


                },
                failure: function () {
                    console.log('错误', '发生错误！');
                }
            });



    },
    onFormDelete:function () {
        var formPanel = this.lookupReference('windowForm'),
         form = formPanel.getForm();
        var record = form.getValues();
        var obj={};
        obj["update"]="delete" ;
        obj["id"]=record['id']; 
        obj["table"]=record['table']; 
      //  console.log(obj);
        this.dataSave(obj);
        form.reset();
        this.lookupReference('popupWindow').hide();

    },
    onFormSubmit: function () {



        var formPanel = this.lookupReference('windowForm'),
            form = formPanel.getForm();



        if (form.isValid()) {

            var record = form.getValues();
            record["E_code"] = sys_enterprise_code;
            var obj=record;
         
            obj["id"]=record['id']; 
            obj["table"]=record['table']; 
            obj["update"]="";
            console.log(obj);
            this.dataSave(obj);
            form.reset();
            this.lookupReference('popupWindow').hide();
        }
    }
    /*

onTreeRefresh:function(node,event)
    {  // console.log("tree1");
        //this.getView().down("#LeftTree").loader();
        var store=this.getView().down("#LeftTree").getStore();
       //  console.log("tree2");
        
        store.reload();
       //  console.log("tree3");
}*/



});
