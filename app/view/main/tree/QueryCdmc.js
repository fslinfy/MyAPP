Ext.define('MyApp.view.main.tree.QueryCdmc', {
  extend: 'Ext.container.Container',
  alias: 'widget.QueryCdmc',
  itemId: 'QueryCdmc',
  layout: 'hbox',
  defaults:
  {
    border: 0,
    cls: 'x-btn-text-icon details',
    disabled: false
  },
  items: [
    {
      labelWidth: 60,
      xtype: 'triggerfield',
      fieldLabel: '产地名称',
      name: 'cdmc',
      itemId: 'textQueryCdmc',
      bind: '{cdmc}',
      margin: '1 0 1 10',
      flex: 1,
      triggerCls: 'x-form-clear-trigger',
      onTriggerClick: function () {
        this.reset();
        this.up("gridpanel").getViewModel().set('cdid', 0);
        that.cdmcTriggerClick();

      }
    },
    {
      xtype: 'button',
      itemId: 'btnQueryCdmc',
      margin: '1 5 1 0',
      text: '...',
      width: 30
    },
    {
      xtype: 'textfield',
      name: 'cdid',
      hidden: true,
      width: 40,
      itemId: 'textQueryCdid',
      bind: '{cdid}'
    }

  ]

});