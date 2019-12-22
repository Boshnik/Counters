Counters.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'counters-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('counters_item_create'),
        width: 550,
        autoHeight: true,
        url: Counters.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Counters.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Counters.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('counters_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('counters_item_content'),
            name: 'content',
            id: config.id + '-content',
            height: 250,
            anchor: '99%'
        }, {
            layout: 'column',
            items: [{
                columnWidth: .5,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'modx-combo-context',
                    fieldLabel: _('counters_item_context'),
                    name: 'context',
                    id: config.id + '-context',
                    allowBlank: true,
                    anchor: '99%'
                }]
            }, {
                columnWidth: .5,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'modx-combo',
                    fieldLabel: _('counters_item_position'),
                    name: 'position',
                    id: config.id + '-position',
                    allowBlank: false,
                    store: ['Head','Body'],
                    listeners: {
                        render: function() {
                            if(Ext.isEmpty(this.value)) {
                                this.setValue('Head');    
                            }
                        }
                    }
                }]
            }]
        }, {
            xtype: 'checkboxgroup',
            hideLabel: true,
            name: 'checkboxgroup',
            columns: 2,
            items:[{
                xtype: 'xcheckbox',
                boxLabel: _('counters_item_all_context'),
                name: 'all_context',
                id: config.id + '-all_context',
                anchor: '99%',
                checked: config.record ? config.record.object['all_context'] : false,
            }, {
                xtype: 'xcheckbox',
                boxLabel: _('counters_item_active'),
                name: 'active',
                id: config.id + '-active',
                checked: true,
            }]
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('counters-item-window-create', Counters.window.CreateItem);


Counters.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'counters-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('counters_item_update'),
        width: 550,
        autoHeight: true,
        url: Counters.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Counters.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Counters.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return Counters.window.CreateItem.prototype.getFields.call(this, config)
    },

    loadDropZones: function () {
    }

});
Ext.reg('counters-item-window-update', Counters.window.UpdateItem);