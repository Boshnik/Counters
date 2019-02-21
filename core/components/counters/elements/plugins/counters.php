<?php
/** @var modX $modx */
if($modx->event->name == 'OnWebPageInit') {
    $modx->addPackage('counters', MODX_CORE_PATH . 'components/counters/model/');
    $query = $modx->newQuery('CountersItem');
    $query->select($modx->getSelectColumns('CountersItem', 'CountersItem', '', '', false));
    $query->prepare();
    $query->stmt->execute();
    $counters = $query->stmt->fetchAll(PDO::FETCH_ASSOC);
    
    foreach($counters as $counter) {
        if($counter['active'] && $modx->context->key == $counter['context']) {
            $code = $counter['content'];
            if($counter['position'] == 'Head') {
                $modx->regClientStartupHTMLBlock($code);
            } else {
                $modx->regClientHTMLBlock($code);
            }
        }
    }
}