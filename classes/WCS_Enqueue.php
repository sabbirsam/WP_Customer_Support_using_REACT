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

    public function wcs_admin_enqueue(){
        wp_enqueue_style( 'wcs_main_scss_style', $this->plugin_url . 'build/index.css' ); 

        // wp_enqueue_script( 'wcs_min_js', $this->plugin_url .'build/index.js',array('jquery','wp-element'),wp_rand(),true ); 
        wp_enqueue_script( 'wcs_min_js', $this->plugin_url .'build/index.js',array('jquery','wp-element'),1.0,true ); 
        wp_localize_script('wcs_min_js', 'appLocalizer', [
            'apiUrl' => home_url( '/wp-json' ),
            'nonce' => wp_create_nonce( 'wp_rest'),
        ] );
        wp_enqueue_script('wcs_min_js');  
    
    }

    //http://localhost/wppool/chatbox/wp-json/wcs/v1/settings

}
        