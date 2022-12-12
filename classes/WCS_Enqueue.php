<?php

namespace WCS\classes;

use \WCS\classes\WCS_BaseController;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * All Enqueue here
 */
class WCS_Enqueue extends WCS_BaseController{

    /**
     * Register all the enqueue scripts
     */
    function register(){
        add_action( 'admin_enqueue_scripts', array( $this, 'wcs_admin_enqueue' ) ); 
        add_action( 'wp_enqueue_scripts', array( $this, 'wcs_frondend_enqueue' ) ); 
    }
    /**
     * Admin Enqueue
     */
    public function wcs_admin_enqueue(){
        wp_enqueue_style( 'wcs_main_scss_style', $this->plugin_url . 'build/index.css' ); 
        wp_enqueue_script( 'wcs_smtp_js', $this->plugin_url .'assets/JS/smtp.js',array('jquery'),1.0,true );
        // wp_enqueue_script( 'wcs_min_js', $this->plugin_url .'build/index.js',array('jquery','wp-element'),wp_rand(),true ); 
        wp_enqueue_script( 'wcs_min_js', $this->plugin_url .'build/index.js',array('jquery','wp-element'),1.0,true ); 
        wp_localize_script('wcs_min_js', 'appLocalizer', [
            'apiUrl' => home_url( '/wp-json' ),
            'nonce' => wp_create_nonce( 'wp_rest'),
        ] );
        wp_enqueue_script('wcs_min_js');      
    }
    /**
     *  Public/Frontend Enqueue
     */
    public function wcs_frondend_enqueue(){
        $user = wp_get_current_user();
        $allowed_roles = array( 'editor', 'administrator','subscriber' );
        if (is_page( 'Get Support' ) ){
            if ( array_intersect( $allowed_roles, $user->roles ) ) {
                wp_enqueue_script( 'wcs_fr_smtp_js', $this->plugin_url .'assets/JS/smtp.js',array('jquery'),1.0,true );
                wp_enqueue_style( 'wcs_fr_scss_style', $this->plugin_url . 'build/index.css' ); 
                wp_enqueue_script( 'wcs_fr_js', $this->plugin_url .'build/index.js',array('jquery','wp-element'),1.0,true ); 
                wp_localize_script('wcs_fr_js', 'appLocalizer', [
                    'apiUrl' => home_url( '/wp-json' ),
                    'nonce' => wp_create_nonce( 'wp_rest'),
                ] );
                wp_enqueue_script('wcs_fr_js');  
            }
        }
    }
}    