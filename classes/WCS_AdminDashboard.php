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
        $icon = plugin_dir_url(__FILE__).'../assets/img/white-support_16x16.png';
        $get_pro = plugin_dir_url(__FILE__).'../assets/img/pro-icon.svg';
        add_menu_page( 
            'Customer Support', 
            'Customer Support', 
            'manage_options', 
            'dashboard_status', 
            array($this, 'wcs_dashboard'),
            $icon,
                2 );
        add_submenu_page(
            'dashboard_status', 'Dashboard', 'Dashboard', 'manage_options', 'dashboard_status', 
            array( $this, 'wcs_dashboard' )
        );
        //To show remove 'null' and add 'dashboard_status' 
        add_submenu_page(
            'null', 'Staff', 'Staff', 'manage_options', 'wcs_staff', 
            array( $this, 'wcs_staff' )
        );
        add_submenu_page(
            'null', 'Department', 'Department', 'manage_options', 'wcs_department', 
            array( $this, 'wcs_department' )
        );
        add_submenu_page(
            'null', 'Product', 'Product', 'manage_options', 'wcs_product', 
            array( $this, 'wcs_Product' )
        );
        add_submenu_page(
            'null', 'Customer', 'Customer', 'manage_options', 'wcs_customer', 
            array( $this, 'wcs_customer' )
        );
        add_submenu_page(
            'null', 'Tickets', 'Tickets', 'manage_options', 'wcs_tickets', 
            array( $this, 'wcs_Tickets' )
        );
        add_submenu_page(
            'null', 'Chat', 'Chat', 'manage_options', 'wcs_chat', 
            array( $this, 'wcs_Chat' )
        );
        add_submenu_page(
            'dashboard_status', 'Settings', 'Settings', 'manage_options', 'wcs_setting', 
            array( $this, 'wcs_Setting' )
        );
        add_submenu_page(
            'dashboard_status', 'Documentation', 'Documentation', 'manage_options', 'wcs_documentation', 
            array( $this, 'wcs_Documentation' )
        );
        
        add_submenu_page('dashboard_status', __('Get PRO - WP Customer Support System', 'wcs'), "<span id='wcs-get-pro-menu'> <img src='".$get_pro."' alt=''>
				GET <span>PRO </span> </span>", 'manage_options', '#'); // use link in # 
      
    }
  
    public function wcs_dashboard()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_dashboard.php';
    }
    public function wcs_staff()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_staff.php';
    }
    public function wcs_department()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_department.php';
    }
    public function wcs_Product()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_product.php';
    }
    public function wcs_customer()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_customer.php';
    }
    public function wcs_Tickets()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_tickets.php';
    }
    public function wcs_Chat()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_chat.php';
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