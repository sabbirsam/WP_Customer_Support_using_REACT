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
        add_menu_page( 
            'Customer Support', 
            'Customer Support', 
            'manage_options', 
            'dashboard_status', 
            array($this, 'wcs_dashboard'),
            $icon,
                2 );
        add_submenu_page(
            'dashboard_status', 'Staff', 'Staff', 'manage_options', 'wcs_staff', 
            array( $this, 'wcs_staff' )
        );
        add_submenu_page(
            'dashboard_status', 'Department', 'Department', 'manage_options', 'wcs_department', 
            array( $this, 'wcs_department' )
        );
        add_submenu_page(
            'dashboard_status', 'Product', 'Product', 'manage_options', 'wcs_product', 
            array( $this, 'wcs_Product' )
        );
    
        add_submenu_page(
            'dashboard_status', 'Tickets', 'Tickets', 'manage_options', 'wcs_tickets', 
            array( $this, 'wcs_Tickets' )
        );
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
    public function wcs_Tickets()
    {
        require_once plugin_dir_path(__FILE__).'../template/wcs_tickets.php';
    }

}