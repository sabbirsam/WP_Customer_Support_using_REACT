<?php

namespace WCS\Inc;

use \WCS\Inc\WCS_BaseController;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * All Enqueue here
 */
class WCS_Enqueue extends WCS_BaseController{

    function register(){
        add_action( 'admin_enqueue_scripts', array( $this, 'wcs_admin_enqueue' ) ); 
    }

    public function wcs_admin_enqueue($screen){
        wp_enqueue_script( 'wcs_bootstrap_min_js', $this->plugin_url .'assets/library/bootstrap.min.js',array('jquery'),1.0,true );
        wp_enqueue_style( 'wcs_bootstrap_min)style', $this->plugin_url . 'assets/library/bootstrap.min.css' );  
        wp_enqueue_style( 'wcs_dashboard_style', $this->plugin_url . 'assets/admin/css/style.css' );  
    
    }

}
        