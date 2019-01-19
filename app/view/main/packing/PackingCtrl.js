
Ext.define('MyApp.view.main.packing.PackingCtrl', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.PackingCtrl',
    requires: [
        'MyApp.view.main.packing.PackingView'

    ],
    onBtnQueryClick: function (button, e, options) {
        this.getView().getStore().load();
        return false;
    },
    onItemSelected: function (sender, record) {
        var tool = this.getView().down("#QueryToolbarView");
        tool.down('#btnEdit').setDisabled(false);
        tool.down('#btnDelete').setDisabled(false);
        return false;
    },
    onBtnNewClick: function (rs) {
        this.getView().getStore().addSorted([{ E_code: sys_enterprise_code }]);
        return false;
    },
    onBtnDeleteClick: function (button, e, options) {
        var store = this.getView().getStore();
        var grid = Ext.getCmp('PackingGrid');
        return storeBtnDeleteClick(this, grid, store);
    },
    onBtnHelpClick: function (button, e, options) {
        console.log("Packing help")
        return false;
    },
    onBtnSaveClick: function (button, e, options) {
        var store = this.getView().getStore();
        return storeBtnSaveClick(this, store);
    },
    onBtnUndoClick: function (button, e, options) {
        this.getView().getStore().rejectChanges();
        return false;
    },
    onBeforeReload: function (store, records, options) {
        var store = this.getView().getStore();
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
            }
        });
        var store = this.getView().getStore();
        store.on('beforeload', this.onBeforeReload, this);
    },
    onFilterChange: function (v) {
        //return storeFilter(this.getView().getStore(),'PS_name',v.rawValue);
        var store = this.getView().getStore()
        var regExp = new RegExp(".*" + v.rawValue + ".*");
        store.clearFilter();
        store.filterBy(function (record, id) {
            return regExp.test(record.get('PS_name')) || regExp.test(record.get('PS_code'));
        });
    },
    onEditCustomerClick: function (button) {
        this.createDialog(button.getWidgetRecord());
        // console.log(button.getWidgetRecord());
    },
    createDialog: function (record) {
        var view = this.getView();
        this.isEdit = !!record;
         console.log('record');
         console.log(record);
        this.dialog = view.add({
            xtype: 'formwindow',
            viewModel: {
                data:record.data// {
                   // title: record ? 'Edit: ' + record.get('PS_name') : 'Add Customer',
                  //  PS_code:record.get('PS_code') ,
                  //  PS_name:record.get('PS_name') ,
                  //  Active:record.get('Active') ,
                   // id:record.get('id') 
               // }
                /*
                links: {
                    theCustomer: record || {
                        type: 'PackingStore',
                        create: true
                    }
                }*/

            },
            session: true
        });
        //console.log(record.get('PS_name'),theCustomer.PS_code);
        //console.log(theCustomer);
        //this.lookupReference('windowForm').getStore().reload(record),
        this.dialog.show();
    },
    onSaveClick: function () {
        // Save the changes pending in the dialog's child session back to the
        // parent session.
          console.log("save");
        var dialog = this.dialog,
            form = this.lookupReference('windowForm'),
            isEdit = this.isEdit,
            id;
          
 //console.log(dialog);
 //console.log(form);
        if (form.isValid()) {
            if (!isEdit) {
                // Since we're not editing, we have a newly inserted record. Grab the id of
                // that record that exists in the child session
               // id = dialog.getViewModel().get('theCustomer').id;
            }
           // console.log(dialog);
           // console.log(dialog.getSession());
             dialog.getSession().save();
            if (!isEdit) {
                // Use the id of that child record to find the phantom in the parent session, 
                // we can then use it to insert the record into our store
                //this.getStore('customers').add(this.getSession().getRecord('Customer', id));
            }
            this.onCancelClick();
        }
    },

    onCancelClick: function () {
        this.dialog = Ext.destroy(this.dialog);
    }

})
