Counters.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'counters-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('counters') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('counters_items'),
                layout: 'anchor',
                items: [{
                    html: _('counters_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'counters-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Counters.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Counters.panel.Home, MODx.Panel);
Ext.reg('counters-panel-home', Counters.panel.Home);
