
Ext.define('MyApp.view.main.customer.PackingEditView', {
    extend: 'Ext.window.Window',
    xtype: 'formpackingwindow',
    reference: 'popuppackingWindow',
    itemId: "PackingEditView",
    bind: {
        title: '{title}'
    },
    width: '95%',
    height: 700,
    minWidth: 600,
    minHeight: 400,
    layout: 'fit',
    closeAction: 'destroy',
    bodyPadding: 5,
    plain: true,
    maximizable: true,
    modal: true,
    items: [{
        xtype: 'form',
        reference: 'windowForm',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        autoScroll: true,
        border: false,
        items: [
            {
                xtype: 'grid',
                flex: 1,
                border: 1,
                store: { type: 'PackingStore' },
                reference: 'packingmxGrid',
                plugins: ['cellediting'],
                enableHdMenu: false,
                enableColumnHide: false,
                collapsible: false,
                columnLines: true,
                animCollapse: false,
                itemId: 'packingmxGrid',
                margin: '0 0 0 0',
                columns: [
                    {
                        text: '代码', width: 50, dataIndex: 'PS_code', align: 'left', sortable: false
                    },
                    {
                        text: '包装名称', dataIndex: 'PS_name', flex: 3, align: 'left', sortable: false
                    }
                    ,
                    {
                        text: '数量单位', dataIndex: 'Quantity_Unit', flex: 1, align: 'left', sortable: false
                    },
                    {
                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                        text: '转换系数', dataIndex: 'Rate', flex: 1, align: 'left', sortable: false
                    },
                    {
                        text: '重量单位', dataIndex: 'Weight_Unit', flex: 1, align: 'left', sortable: false
                    },
                    {
                        text: '临时仓仓租单价',
                        columns: [
                            {
                                text: '180天内',
                                columns: [

                                    {
                                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                                        text: '不分批号', dataIndex: 'Czdj', flex: 1, align: 'left', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 3,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 9999.99
                                        }
                                    },

                                    {
                                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                                        text: '分批号', dataIndex: 'Phdj', flex: 1, align: 'left', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 3,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 9999.99
                                        }
                                    }]
                            },


                            {
                                text: '180天以后',
                                columns: [

                                    {
                                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                                        text: '不分批号', dataIndex: 'Czdj2', flex: 1, align: 'left', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 3,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 9999.99
                                        }
                                    },

                                    {
                                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                                        text: '分批号', dataIndex: 'Phdj2', flex: 1, align: 'left', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 3,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 9999.99
                                        }
                                    }]
                            },

                            {
                                text: '最小',
                                columns: [
                                    {
                                        xtype: "numbercolumn",
                                        align: 'center',
                                        format: '00',
                                        text: '天数', dataIndex: 'mints',
                                        width: 50, align: 'center', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 0,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 999
                                        }
                                    }]
                            }





                        ]
                    },
                    {
                        text: '固定仓',
                        columns: [
                            {
                                text: '每月平方',
                                columns: [
                                    {
                                        xtype: "numbercolumn", align: 'right', format: '00000.00',
                                        width: 70,
                                        text: '单   价', dataIndex: 'Pfdj', align: 'left', sortable: false,
                                        editor: {
                                            type: 'numberfield',
                                            decimalPrecision: 3,
                                            align: 'right',
                                            allowBlank: true,
                                            minValue: 0,
                                            maxValue: 9999.99
                                        }
                                    }
                                ]
                            }]
                    },
                    {
                        text: '其它费用单价',
                        columns: [
                            {
                                xtype: "numbercolumn", align: 'right', format: '00000.00',
                                text: '装卸', dataIndex: 'Bydj', width: 70, align: 'left', sortable: false,
                                editor: {
                                    type: 'numberfield',
                                    decimalPrecision: 3,
                                    align: 'right',
                                    allowBlank: true,
                                    minValue: 0,
                                    maxValue: 9999.99
                                }
                            },

                            {
                                xtype: "numbercolumn", align: 'right', format: '00000.00',
                                text: '破包修复', dataIndex: 'Pbdj', flex: 1, align: 'left', sortable: false,
                                editor: {
                                    type: 'numberfield',
                                    decimalPrecision: 3,
                                    align: 'right',
                                    allowBlank: true,
                                    minValue: 0,
                                    maxValue: 9999.99
                                }
                            },
                            {
                                xtype: "numbercolumn", align: 'right', format: '00000.00',
                                text: '过户', dataIndex: 'Ghdj', width: 70, align: 'left', sortable: false,
                                editor: {
                                    type: 'numberfield',
                                    decimalPrecision: 3,
                                    align: 'right',
                                    allowBlank: true,
                                    minValue: 0,
                                    maxValue: 9999.99
                                }
                            }]
                    },
                    {
                        //xtype: 'checkcolumn',
                        flex: 1,
                        text: '重量核算', sortable: false,
                        dataIndex: 'Weight_Status',
                        renderer: function (val) {
                            if (val) {
                                return '重量核算';
                            } else {
                                return ""
                            }

                        }
                    }
                    /*,
                    {
                    
                        flex: 1,
                        text: '状态', sortable: false,
                        dataIndex: 'Active',
                        renderer: function (val) {
                            if (val) {
                                return '';
                            } else {
                                return "禁用"
                            }

                        }
                    }*/
                ]
            }
        ]
    }],
    buttons: [
        "->",
        {
            text: '保 存',
            icon: "images/right.gif",
            //  hidden: true,
            itemId: 'btnpackingSave'/*,
            handler: function () {
                var th = this;
             //   var store = this.up('#packingmxGrid').getStore();
                                var store = that.lookupReference('packingmxGrid').getStore();
                store.sync({
                    success: function (batch, options) {
                        th.up("window").hide();
                    },
                    failure: function (batch, options) {
                        Ext.Msg.alert('提示信息', '添加失败!');
                    },
                    scope: that
                });

            }*/

        },
        {
            text: '放 弃',
            icon: "images/close.gif",
            handler: function () {
                this.up("window").hide();
            }
        }]
});