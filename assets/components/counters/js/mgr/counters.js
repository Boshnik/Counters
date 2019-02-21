var Counters = function (config) {
    config = config || {};
    Counters.superclass.constructor.call(this, config);
};
Ext.extend(Counters, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('counters', Counters);

Counters = new Counters();