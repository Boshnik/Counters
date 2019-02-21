<?php

/**
 * The home manager controller for Counters.
 *
 */
class CountersHomeManagerController extends modExtraManagerController
{
    /** @var Counters $Counters */
    public $Counters;


    /**
     *
     */
    public function initialize()
    {
        $this->Counters = $this->modx->getService('Counters', 'Counters', MODX_CORE_PATH . 'components/counters/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['counters:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('counters');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Counters->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/counters.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Counters->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Counters.config = ' . json_encode($this->Counters->config) . ';
        Counters.config.connector_url = "' . $this->Counters->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "counters-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="counters-panel-home-div"></div>';

        return '';
    }
}