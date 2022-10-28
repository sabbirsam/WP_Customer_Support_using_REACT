<?php

namespace WCS\classes;

use \WCS\classes\WCS_BaseController;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * All Enqueue here
 */
class WCS_Enqueue extends WCS_BaseController{

    function register(){
        add_action( 'admin_enqueue_scripts', array( $this, 'wcs_admin_enqueue' ) ); 
    }

    public function wcs_admin_enqueue($screen){
        wp_enqueue_style( 'wcs_main_style', $this->plugin_url . 'build/index.css' ); 
         
        wp_enqueue_script( 'wcs_min_js', $this->plugin_url .'build/index.js',array('wp-element'),1.0,true ); 
    
    }

}
        