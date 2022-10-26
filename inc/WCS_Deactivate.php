<?php

namespace WCS\Inc;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Deactivated plugin
 */
class WCS_Deactivate{

    public static function WCS_deactivate(){ 
        flush_rewrite_rules();
    }
}