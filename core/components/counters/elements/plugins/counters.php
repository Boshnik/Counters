<?php
/** @var modX $modx */
if($modx->event->name == 'OnWebPageInit') {
    $modx->addPackage('counters', MODX_CORE_PATH . 'components/counters/model/');
    $counters = $modx->getCollection('CountersItem');
    foreach($counters as $counter) {
        $counter = $counter->toArray();
        if($counter['active'] && ($counter['all_context'] || $modx->context->key == $counter['context'])) {
            $code = $counter['content'];
            if($counter['position'] == 'Head') {
                $modx->regClientStartupHTMLBlock($code);
            } else {
                $modx->regClientHTMLBlock($code);
            }
        }
    }
}