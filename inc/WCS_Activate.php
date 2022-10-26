<?php
/**
 * 
 */
namespace WCS\Inc;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Activate class here
 */
class WCS_Activate{

    public static function WCS_activate(){ //make it static so I can call it direct on a function
        flush_rewrite_rules();
    }
}