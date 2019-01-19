pExt.define('MyApp.view.main.cpjkdsh.CpjkdCtrlFunction', {
    extend: 'Ext.Mixin'
});
function SelectWorkerView(button) {
    var rec = button.getWidgetRecord();
    if (rec.data.jeid == 0) {
        return;
    }
    that.recordID = rec;
    var view = that.getView();
    that.dialog = view.add({
        xtype: 'selectWorkerWindow',
        session: true
    });
    that.dialog.show();
};
function WorkerSelectOkClick() {
    var names = [];
    var by = [];
    var gs = [];
    var cg = [];
    var records = that.getView().down("#selectWorkerTreePanel").getChecked();
    Ext.Array.each(records, function (rec) {
        names.push(rec.get('text'));
        switch (rec.get('pname')) {
            case '机械':
                gs.push(rec.get('text'));
                break;
            case '搬运':
                by.push(rec.get('text'));
                break;
            default:
                cg.push(rec.get('text'));
                break;
        }
    });
    records = that.getView().down("#selectWorkerTreePanel1").getChecked();
    Ext.Array.each(records, function (rec) {
        names.push(rec.get('text'));
        switch (rec.get('pname')) {
            case '机械':
                gs.push(rec.get('text'));
                break;
            case '搬运':
                by.push(rec.get('text'));
                break;
            default:
                cg.push(rec.get('text'));
                break;
        }
    });
    records = that.getView().down("#selectWorkerTreePanel2").getChecked();
    Ext.Array.each(records, function (rec) {
        names.push(rec.get('text'));
        switch (rec.get('pname')) {
            case '机械':
                gs.push(rec.get('text'));
                break;
            case '搬运':
                by.push(rec.get('text'));
                break;
            default:
                cg.push(rec.get('text'));
                break;
        }
    });
    var selection = that.recordID;
    if (selection != undefined) {
        selection.set('gs', gs.join(';'));
        selection.set('byg', by.join(';'));
        selection.set('cg', cg.join(';'));

        that.getView().down("#selectWorkerWindow").close();
    }
};


function imagesload(id) {
    var p = that.lookupReference('popupCpjkdWindow').getViewModel();
    var id = p.data.('jkid');
    Ext.Ajax.request({
        method: 'GET',
        url: sys_ActionPHP,
        params: {
            act: 'imagesload',
            userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
            dhlb: 'cpjkd',
            dhid: id
        },
        scope: that,
        success: function (req) {
            var data = req.responseText;
            var cnote = "";

            data = data.substring(1);
            var obj = JSON.parse(data);
            // console.log(obj);
            if (obj.results > 0) {
                //console.log(obj.rows);
                var arrrec = obj.rows;

                that.lookupReference('popupCpjkdWindow').down("#imageShow").removeAll();
                arrrec.forEach(function (rec) {
                    cnote = trim(rec.imgnote);
                    if (cnote.length > 0) {
                        var cnote = Ext.decode(base64decode(cnote));
                    }
                    //  console.log("rec",rec);
                    //that.creatOneImage(rec.id, rec.filename, rec.fileguid, cnote, rec.w, rec.h, true);
                    creatOneImage(rec.id, rec.filename, rec.fileguid, cnote, rec.w, rec.h, true);
                })
            }
        },
        failure: function () {
            Ext.MessageBox.alert('错误!', '发生错误！');
        }
    });
};
function creatOneImage(id, title, pjg, cnote, w, h, delbz) {
    //  console.log(title,pjg);
    if (w > 400) {
        h = h * 400 / w;
        w = 400;
    }
    if (h > 300) {
        w = w * 300 / h;
        h = 300;
    }

    var s = that.lookupReference('popupCpjkdWindow').down("#imageShow");
    //console.log(title,pjg,s);
    var boximage = Ext.create('Ext.container.Container', {
        items: [
            {
                xtype: "panel",
                title: title,
                margin: "10,10,10,10 ",
                layout: {
                    type: 'hbox', align: 'stretch'
                },
                border: 1,
                tools: [
                    {
                        xtype: "button", text: '',
                        icon: "images/delete.gif",
                        hidden: (!delbz),
                        handler: function () {
                            // console.log("handler");
                            //that.imagesdelete(id, pjg);
                            imagesdelete(id, pjg);
                        }

                    }
                ],
                items: [
                    {
                        xtype: "panel",

                        height: 300,
                        width: 400,
                        border: 1,
                        items: [
                            {
                                xtype: 'box',
                                height: h,
                                width: w,
                                //margin: "10,10,10,10 ",
                                title: "box",
                                autoEl: {
                                    tag: 'img',
                                    src: 'uploadFiles//' + pjg
                                }
                            }]
                    },
                    {
                        xtype: "panel",
                        flex: 1,
                        layout: 'fit',
                        border: 1,
                        html: cnote
                    }
                ]
            }
        ]
    });
    s.add(boximage)
    return;
};
function imagesdelete(imgid, imgfile) {
    // console.log(imgid, imgfile);
    var abc = Ext.Msg.confirm("注意！ ", "真的删除此图片吗？", function (e) {
        if (e == 'yes') {

            Ext.Ajax.request({
                method: 'GET',
                url: "upload.php",
                params: {
                    act: 'imgdelete',
                    imgid: imgid,
                    imgfile: imgfile
                },
                scope: that,
                success: function (f, a) {
                    var result = Ext.decode(f.responseText)
                    if (result.success) {
                        imagesload();
                    }
                    else {
                        Ext.Msg.alert("注意", result.msg);
                    }
                    return;
                },
                failure: function (f, a) {
                    Ext.Msg.alert("失败", a.result.msg);
                }

            });
        }
    })
};

function onImagesAdd() {
    var p = that.lookupReference('popupCpjkdWindow').getViewModel();
    var jkid = p.get('jkid');
    uploadFile('cpjkd', jkid, uploadCallBack);

    return false;
};
function SelectKhbmView(record) {
    treeSelect('khmc', that, '', that.viewname, true);
    return false;
};



function SelectCkbmView(record) {
    treeSelect('ckmc', that, '', that.viewname, true);
    return false;
};


function uploadCallBack(rec) {
    var cnote = trim(rec.imgnote);
    if (cnote.length > 0) {
        var cnote = Ext.decode(base64decode(cnote));
    }
    creatOneImage(rec.id, rec.filename, rec.fileguid, cnote, rec.w, rec.h, true);
};
function onPrintCpjkd() {

    var p = that.lookupReference('popupCpjkdWindow').getViewModel();
    var jkid = p.get('jkid');
    if (jkid == 0) {
        return;
    }
   // PrintCpjkdJkid(jkid);
   // return;

    var cpjkdmx_store = that.lookupReference('CpjkdmxGrid').getStore();
    var mxrec = [];
    var gsbyrec = {};
    var i = 0;
    var sumsl = 0, sumzl = 0, sumje = 0, sumxjje = 0;
    cpjkdmx_store.each(function (rec) {
        sumje = sumje + rec.data.jcje;
        sumxjje = sumxjje + rec.data.xjje;
        if (rec.data.jeid == 0) {
            sumsl = sumsl + rec.data.jcsl;
            sumzl = sumzl + rec.data.jczl;

        }

        mxrec.push(rec.data);
        i = i + 1
        // }
    })
    gsbyrec = {};
    gsbyrec["cpmc"] = "";
    gsbyrec["bzmc"] = "";
    gsbyrec["cpgg"] = "";
    gsbyrec["jldw"] = "";
    gsbyrec["jcsl"] = 0;
    gsbyrec["jczl"] = 0;
    gsbyrec["czdj"] = 0;
    gsbyrec["jcje"] = 0;
    gsbyrec["xjje"] = 0;
    gsbyrec["cpph"] = "";
    mxrec.push(gsbyrec);

    for (var j = i; j < 5; j++) {
        gsbyrec = {};
        gsbyrec["cpmc"] = "";
        gsbyrec["bzmc"] = "";
        gsbyrec["cpgg"] = "";
        gsbyrec["jldw"] = "";
        gsbyrec["jcsl"] = 0;
        gsbyrec["jczl"] = 0;
        gsbyrec["czdj"] = 0;
        gsbyrec["jcje"] = 0;
        gsbyrec["jcje"] = 0;
        gsbyrec["cpph"] = "";
        mxrec.push(gsbyrec);
    }

    var jkd = {};
    jkd["jkid"] = p.get('jkid');
    jkd["khmc"] = trim(p.get('khmc'));
    jkd["jkdh"] = p.get('jkdh');
    jkd["jkrq"] = Ext.Date.format(p.get('jkrq'), 'Y-m-d');
    jkd["czrq"] = Ext.Date.format(p.get('czrq'), 'Y-m-d');
    jkd["sfdh"] = p.get('sfdh');
    jkd["cphm"] = p.get('cphm');
    jkd["cpph"] = p.get('cpph');
    jkd["sfr"] = p.get('sfr');
    jkd["czy"] = p.get('czy');
    jkd["shr"] = p.get('shr');
    jkd["cwsh"] = p.get('cwsh');
    jkd["cgy"] = p.get('cgy');
    jkd["address"] = p.get('address');
    jkd["ckmc"] = p.get('ckmc');
    jkd["cnote"] = p.get('cnote');
    jkd["mxrec"] = mxrec;
    jkd["jcje"] = sumje;
    jkd["xjje"] = sumxjje;
    jkd["jcsl"] = sumsl;
    jkd["jczl"] = sumzl;

    printcpjkd(jkd);
}

/*
function PrintCpjkdJkid(jkid) {

    if (jkid == 0) {
        return;
    }


    prtmxStore = Ext.create('Ext.data.Store', {
        alias: 'store.cpjkdmxStore',
        model: 'MyApp.model.CpjkdmxModel',
        proxy: {
            type: 'ajax',
            api: {
                read: sys_ActionPHP + '?act=Cpjkdmxlist_pc'
            },
            actionMethods: {
                read: 'GET'
            },
            extraParams: {
                loc: "cpjkdmxloc",
                userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                jkid: jkid,
                p_e_code: sys_enterprise_code,
                p_l_id: sys_location_id
            },
            reader: {
                type: 'json',
                rootProperty: 'rows'
            }
        }
    });
    prtStore = Ext.create('Ext.data.Store', {
        alias: 'store.cpjkdStore',
        model: 'MyApp.model.CpjkdModel',
        proxy: {
            type: 'ajax',
            api: {
                read: sys_ActionPHP + '?act=Cpjkdlist_pc'
            },
            actionMethods: {
                read: 'GET'
            },
            extraParams: {
                loc: "cpjkdmxloc",
                userInfo: base64encode(Ext.encode(obj2str(sys_userInfo))),
                jkid: jkid,
                p_e_code: sys_enterprise_code,
                p_l_id: sys_location_id
            },
            reader: {
                type: 'json',
                rootProperty: 'rows'
            }
        }
    });

    prtmxStore.on("load", function () {
        prtstore.load();
    });
    prtStore.on("load", function () {
        prtjcd(prtStore, prtmxStore);
    });
    prtmxstore.load();

}

function Prtjcd(prtStore, prtmxStore) {




    var mxrec = [];
    var gsbyrec = {};
    var i = 0;
    prtStore.each(function (p) {

        var sumsl = 0, sumzl = 0, sumje = 0, sumxjje = 0;
        prtmxStore.each(function (rec) {
            sumje = sumje + rec.data.jcje;
            sumxjje = sumxjje + rec.data.xjje;
            if (rec.data.jeid == 0) {
                sumsl = sumsl + rec.data.jcsl;
                sumzl = sumzl + rec.data.jczl;

            }
            mxrec.push(rec.data);
            i = i + 1
            // }
        })
        gsbyrec = {};
        gsbyrec["cpmc"] = "";
        gsbyrec["bzmc"] = "";
        gsbyrec["cpgg"] = "";
        gsbyrec["jldw"] = "";
        gsbyrec["jcsl"] = 0;
        gsbyrec["jczl"] = 0;
        gsbyrec["czdj"] = 0;
        gsbyrec["jcje"] = 0;
        gsbyrec["xjje"] = 0;
        gsbyrec["cpph"] = "";
        mxrec.push(gsbyrec);

        for (var j = i; j < 5; j++) {
            gsbyrec = {};
            gsbyrec["cpmc"] = "";
            gsbyrec["bzmc"] = "";
            gsbyrec["cpgg"] = "";
            gsbyrec["jldw"] = "";
            gsbyrec["jcsl"] = 0;
            gsbyrec["jczl"] = 0;
            gsbyrec["czdj"] = 0;
            gsbyrec["jcje"] = 0;
            gsbyrec["jcje"] = 0;
            gsbyrec["cpph"] = "";
            mxrec.push(gsbyrec);
        }

        var jkd = {};
        jkd["jkid"] = p.data.jkid;
        jkd["khmc"] = trim(p.data.khmc);
        jkd["jkdh"] = p.data.jkdh;
        jkd["jkrq"] = Ext.Date.format(p.data.jkrq, 'Y-m-d');
        jkd["czrq"] = Ext.Date.format(p.data.czrq, 'Y-m-d');
        jkd["sfdh"] = p.data.sfdh;
        jkd["cphm"] = p.data.cphm;
        jkd["cpph"] = p.data.cpph;
        jkd["sfr"] = p.data.sfr;
        jkd["czy"] = p.data.czy;
        jkd["shr"] = p.data.shr;
        jkd["cwsh"] = p.data.cwsh;
        jkd["cgy"] = p.data.cgy;
        jkd["address"] = p.data.address;
        jkd["ckmc"] = p.data.ckmc;
        jkd["cnote"] = p.data.cnote;
        jkd["mxrec"] = mxrec;
        jkd["jcje"] = sumje;
        jkd["xjje"] = sumxjje;
        jkd["jcsl"] = sumsl;
        jkd["jczl"] = sumzl;
        printcpjkd(jkd);
    })
}*/


