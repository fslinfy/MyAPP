
Ext.define('MyApp.view.main.cptzdgl.CptzdShowView', {
    extend: 'Ext.window.Window',
    xtype: 'formcptzdwindow',
    reference: 'popupmxShowWindow',
    bind: {
        title: '{title}'
    },
    //title: '商品调账单',
    itemId: "cptzdshowview",
    width: "95%",
    height: 610,
    minWidth: 600,
    minHeight: 500,
    layout: 'fit',
    maximizable: true,
    closeAction: 'destroy',
    bodyPadding: 10,
    modal: true,
    items: [
        {
            xtype: 'form',
            reference: 'windowShowFormmx',
            itemId: 'windowShowFormmx',
            layout: {
                type: 'vbox', align: 'stretch'
            },
            // autoScroll: true,
            border: false,
            items: [
                {
                    height: 86,
                    border: false,
                    margin: '0 0 0 0',
                    defaults: {
                        flex: 1,
                        xtype: 'fieldcontainer',
                        msgTarget: 'side',
                        readOnly: true,
                        defaultType: 'textfield'
                    },
                    layout: {
                        type: 'vbox', align: 'stretch'
                    },
                    items: [
                        {
                            fieldDefaults: {
                                labelWidth: 60,
                                flex: 1,
                                frame: true
                            },
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'khid',
                                    fieldLabel: 'id',
                                    hidden: true,
                                    bind: "{khid}"
                                },
                                {
                                    name: 'khmc',
                                    fieldLabel: '客户名称',
                                    flex: 3,
                                    readOnly: true,
                                    bind: "{khmc}",
                                    margin: '0 10 0 0'
                                },
                                {
                                    xtype: 'numberfield',
                                    name: 'ckid',
                                    fieldLabel: 'id',
                                    hidden: true,
                                    bind: "{ckid}"
                                },
                                {
                                    name: 'ckmc',
                                    fieldLabel: '调账仓库',
                                    flex: 3,
                                    readOnly: true,
                                    bind: "{ckmc}",
                                    margin: '0 10 0 0'
                                },
                                {
                                    name: 'tzdh',
                                    fieldLabel: '调账单号',
                                    //width: 200,
                                    flex: 3,
                                    readOnly: true,
                                    bind: "{tzdh}"
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'tzrq',
                                    flex: 2,
                                    //width: 200,
                                    bind: "{tzrq}",
                                    format: 'Y-m-d',
                                    fieldLabel: '调账日期',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            fieldDefaults: {
                                labelWidth: 60,
                                readOnly: true,
                                frame: true
                            },
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'newkhid',
                                    fieldLabel: 'id',
                                    hidden: true,
                                    bind: "{newkhid}"
                                },
                                {
                                    name: 'newkhmc',
                                    fieldLabel: '调入客户',
                                    flex: 2,
                                    readOnly: true,
                                    bind: "{newkhmc}",
                                    margin: '0 0 0 0'
                                },
                                {
                                    xtype: 'button',
                                    text: '...',
                                    width: 30,
                                    margin: '0 10 0 0',
                                    handler: 'onSelectKhbmView'
                                },
                                {
                                    xtype: "numberfield",
                                    name: 'tzsl',
                                    fieldLabel: '调账数量',
                                    bind: "{tzsl}",
                                    hideTrigger: true,
                                    readOnly: true,
                                    flex: 1,
                                    margin: '0 10 0 0',
                                    decimalPrecision: 3

                                }, {
                                    xtype: "numberfield",
                                    name: 'tzzl',
                                    fieldLabel: '调账重量',
                                    flex: 1,
                                    bind: "{tzzl}",
                                    hideTrigger: true,
                                    readOnly: true,
                                    decimalPrecision: 3,
                                    margin: '0 10 0 0'
                                }, {
                                    xtype: "numberfield",
                                    name: 'tzje',
                                    fieldLabel: '调账费用',
                                    flex: 1,
                                    bind: "{tzje}",
                                    hideTrigger: true,
                                    readOnly: true,
                                    enabled: false,
                                    decimalPrecision: 2,
                                    margin: '0 5 0 0'
                                },

                                {
                                    xtype: 'checkbox',
                                    fieldLabel: '调入客户付费',
                                    name: 'jekh',
                                    labelWidth: 90,
                                    flex: 1,
                                    margin: '0 5 0 10',
                                    bind: "{jekh}"
                                }
                            ]
                        }
                    ]

                },
                {
                    margin: '0 0 0 0',
                    // height: 400,
                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelWidth: 40,
                        frame: true
                    },
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [

                        {
                            xtype: 'grid',
                            //flex: 1,
                            border: 1,
                            height: 300,
                            reference: 'cptzdmxShowGrid',
                            itemId: 'cptzdmxShowGrid',
                            columnLines: true,
                            enableColumnHide: false,
                            store: { type: 'CptzdmxStore' },

                            columns: [

                                {
                                    text: '商品名称',
                                    dataIndex: 'cpmc', sortable: false,
                                    width: 180
                                },
                                {
                                    text: '产地名称',
                                    dataIndex: 'cdmc', sortable: false,
                                    width: 100
                                }
                                ,
                                {
                                    text: '包装',
                                    dataIndex: 'bzmc', sortable: false,
                                    width: 170
                                },
                                {
                                    text: '规格型号',
                                    dataIndex: 'cpgg', sortable: false,
                                    width: 80
                                },
                                {
                                    text: '单位',
                                    dataIndex: 'jldw', sortable: false,
                                    width: 60
                                },
                                {
                                    xtype: 'numbercolumn',
                                    text: '单价', sortable: false,
                                    width: 60,
                                    dataIndex: 'czdj',
                                    renderer: jerenderer
                                },
                                {
                                    xtype: 'datecolumn',
                                    text: '起租日期', sortable: false,
                                    width: 90,
                                    format: 'y-m-d',
                                    dataIndex: 'czrq'
                                },
                                {
                                    text: '区',
                                    dataIndex: 'area',
                                    hidden: true, sortable: false,
                                    width: 35
                                },
                                {
                                    text: '仓位', sortable: false,
                                    dataIndex: 'cw',
                                    width: 60
                                },
                                {
                                    text: '商品批号',
                                    dataIndex: 'cpph', sortable: false,
                                    width: 100
                                },
                                {
                                    text: '仓位说明',
                                    sortable: false,
                                    dataIndex: 'sm',
                                    width: 100
                                },

                                {
                                    text: '调入内容',
                                    //    flex: 4,
                                    columns: [

                                        {
                                            xtype: 'numbercolumn',
                                            text: '调账数量',
                                            dataIndex: 'tzsl', sortable: false,
                                            width: 100,
                                            renderer: zlrenderer

                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            text: '调账重量',
                                            dataIndex: 'tzzl', sortable: false,
                                            width: 100,
                                            renderer: zlrenderer


                                        },
                                        {
                                            text: '仓位', sortable: false,
                                            dataIndex: 'newcw',
                                            width: 60
                                        },
                                        {
                                            text: '批号', sortable: false,
                                            dataIndex: 'newcpph',
                                            width: 100
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            text: '单价', sortable: false,
                                            dataIndex: 'czdj',
                                            hidden:true,
                                            width: 80,
                                            renderer: jerenderer
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            text: '起租日期', sortable: false,
                                            dataIndex: 'newczrq',
                                            width: 90,
                                            //formatter: 'date("Y-m-d")',
                                            format: 'y-m-d'
                                        },
                                        {
                                            text: '说明', sortable: false,
                                            dataIndex: 'newsm',
                                            width: 100
                                        }

                                    ]
                                },
                                {
                                    text: '作业资料',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            text: '金额',
                                            dataIndex: 'tzje',
                                            width: 80, sortable: false,
                                            renderer: jerenderer
                                        },

                                        {
                                            text: '机械',
                                            width: 70, sortable: false,
                                            dataIndex: 'gs'
                                        }
                                        ,
                                        {
                                            text: '搬运',
                                            width: 70, sortable: false,
                                            dataIndex: 'byg'
                                        }
                                        ,
                                        {
                                            text: '仓管',
                                            width: 70, sortable: false,
                                            dataIndex: 'cg'
                                        },
                                        {
                                            xtype: 'widgetcolumn',
                                            width: 0,
                                            bind: {
                                                width: "{w}"
                                            },
                                            sortable: false,
                                            widget: {
                                                xtype: 'button',
                                                text: '...',
                                                bind: {
                                                    hidden: "{gsop}"
                                                },
                                                handler: 'onSelectWorkerView'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    height: 100,
                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelWidth: 40,
                        frame: true
                    },
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            msgTarget: 'side',
                            defaultType: 'textfield',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            defaults: {
                                flex: 1,
                                labelWidth: 60,
                                readOnly: true,
                                margin: '3 10 0 0'
                            },
                            items: [{
                                name: 'czy',
                                fieldLabel: '操作员',
                                bind: "{czy}"

                            }, {
                                name: 'shr',
                                fieldLabel: '审核员',
                                bind: "{shr}"
                            }, {
                                name: 'cwr',
                                fieldLabel: '财务出纳',
                                bind: "{cwr}"
                            }, {
                                name: 'cgy',
                                fieldLabel: '仓库管理',
                                bind: "{cgy}",
                                margin: '3 0 0 0'
                            }]
                        },
                        {
                            xtype: 'fieldcontainer',
                            msgTarget: 'side',
                            defaultType: 'textfield',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            defaults: {
                                flex: 1,
                                labelWidth: 60,
                                margin: '3 10 0 0'
                            },
                            items: [{
                                name: 'cnote',
                                fieldLabel: '备注',
                                readOnly: true,
                                bind: "{cnote}"


                            }]
                        }
                    ]

                }

            ]
        }],
    buttons: [
        {
            text: '删除此调账单',
            icon: "images/right.gif",
            hidden: true,
            itemId: 'btnCptzdDeleteSave'

        },
        {
            text: '此单已删除!!',
            bind: {
                hidden: "{!delbz}"
            }
        },
        "->",
        {
            text: '通过审核',
            icon: "images/right.gif",
            hidden: true,
            itemId: 'btnCptzdOkSave'

        }, 
         {
            text: '打印此单',
            icon: "images/print.gif",
             disabled:(!LODOP), 
            itemId: 'btnPrintCptzd'
        },
        {
            text: '取消上步审核',
            icon: "images/unDo.gif",
            hidden: true,
            itemId: 'btnCptzdCancel'
        },
        {
            text: '放弃',
            icon: "images/close.gif",
            handler: function () {

                this.up("window").close();

            }
        }
    ]
});