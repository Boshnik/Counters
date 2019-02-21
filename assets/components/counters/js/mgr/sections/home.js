Counters.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'counters-panel-home',
            renderTo: 'counters-panel-home-div'
        }]
    });
    Counters.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Counters.page.Home, MODx.Component);
Ext.reg('counters-page-home', Counters.page.Home);