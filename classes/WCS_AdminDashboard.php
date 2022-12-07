<?php

namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Admin dashboard created 
 */
class WCS_AdminDashboard{
    function __construct(){
        add_action("admin_menu", array($this, 'add_admin_pages')); 
    }
    public function add_admin_pages(){
        $isProActive = get_option('wcs_pro_options_value');
        $user = wp_get_current_user();
        // $allowed_roles = array( 'editor', 'administrator', 'author','subscriber );
        $allowed_roles = array( 'editor', 'administrator' );
        if ( array_intersect( $allowed_roles, $user->roles ) ) {
        $icon = plugin_dir_url(__FILE__).'../assets/img/white-support_16x16.png';
        $get_pro = plugin_dir_url(__FILE__).'../assets/img/pro-icon.svg';
        add_menu_page( 
            'Customer Support', 
            'Customer Support', 
            'read',  //editor, manage_options, read
            'dashboard_status', 
            array($this, 'wcs_dashboard'),
            $icon,
                2 );
        add_submenu_page(
            'dashboard_status', 'Dashboard', 'Dashboard', 'read', 'dashboard_status', 
            array( $this, 'wcs_dashboard' )
        );
        add_submenu_page(
            'dashboard_status', 'Settings', 'Settings', 'manage_options', 'wcs_setting', 
            array( $this, 'wcs_Setting' )
        );
        add_submenu_page(
            'dashboard_status', 'Documentation', 'Documentation', 'manage_options', 'wcs_documentation', 
            array( $this, 'wcs_Documentation' )
        );
        if( $isProActive == 'inactive' ){
            add_submenu_page('dashboard_status', __('Get PRO - WP Customer Support System', 'wcs'), "<span id='wcs-get-pro-menu'> <img src='".$get_pro."' alt=''>
                    GET <span>PRO </span> </span>", 'manage_options', '#'); // use link in # 
            }
        }
    }
    /**
     * All template loads here
     */
    public function wcs_dashboard()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_dashboard.php';
    }
    public function wcs_Setting()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_setting.php';
    }
    public function wcs_Documentation()
    {
        require_once plugin_dir_path(__FILE__).'../template/documentation.php';
    }

}