<?php

namespace WCS\classes;

use \WCS\classes\WCS_BaseController;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Shortcodes
 */
class WCS_Shortcode extends WCS_BaseController{
    function __construct(){
        add_shortcode("wcs_customer_support_system", array($this, 'wcs_shortcode'));
    }

    /**
     * Shortcdoe functionality
     */
    public function wcs_shortcode (){
        $user = wp_get_current_user();
        $allowed_roles = array( 'editor', 'administrator','subscriber' );
        if ( array_intersect( $allowed_roles, $user->roles ) ) {
        ob_start(); 
        ?>
<div id="wcs_dashboard">

</div>
<?php
    $module_content = ob_get_contents();
    ob_end_clean();
    return $module_content;
        }
        else{
            echo "Please login first....";
        }
    }
}