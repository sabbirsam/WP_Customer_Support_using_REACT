<?php
/**
 * Plugin Name: WP Customer Support System
 *
 * @author            Sabbir Sam, devsabbirahmed
 * @copyright         2022- devsabbirahmed
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: WP Customer Support System
 * Plugin URI: 
 * Description: WP Customer Support System is mainly used to easily chat via own local store which is connected local/server database without using any third party application/API, Its quick conversation plugin between customer/vendor and admin.
 * Version:           1.0.0
 * Requires at least: 5.9 or higher
 * Requires PHP:      5.4 or higher
 * Author:            SABBIRSAM
 * Author URI:        https://github.com/sabbirsam/
 * Text Domain:       wcs
 * Domain Path: /languages/
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * 
 */
defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
if (file_exists(dirname(__FILE__).'/vendor/autoload.php')) {
    require_once dirname(__FILE__).'/vendor/autoload.php';
}
/**
 * All Namespace 
 */
use WCS\classes\WCS_Activate;
use WCS\classes\WCS_BaseController;
use WCS\classes\WCS_Enqueue;
use WCS\classes\WCS_AdminDashboard;
use WCS\classes\WCS_Deactivate;
use WCS\classes\WCS_Tickets_Table;
use WCS\classes\WCS_React_Rest_Route;
use WCS\classes\WCS_Shortcode;

/**
 * Main Class
 */
if(!class_exists('WCS_WPCustomerSupport')){
    class WCS_WPCustomerSupport{
        public $wp_customer_support;
        public function __construct(){
            $this->classesludes();
            $this->wp_customer_support = plugin_basename(__FILE__); 
        }
        /**
         * Register
         */
        function register(){
            add_action("plugins_loaded", array( $this, 'WCS_load' )); 
            add_action("activated_plugin", array( $this, 'WCS_plugin_activation' )); 
        }
        /**
         * Language load
         */
        function WCS_load(){
            load_plugin_textdomain('wcs', false,dirname(__FILE__)."languages");
        }
        /**
         * Classes 
         */
        public function classesludes() {
           /**
            * Admin dashboard
            */
            new WCS_AdminDashboard();
            $enqueue= new WCS_Enqueue();
            $enqueue->register();  
            new WCS_BaseController();
            new WCS_Tickets_Table();
            new WCS_React_Rest_Route();
            new WCS_Shortcode();
        }
        /**
         * Redirection
         */
        function WCS_plugin_activation($plugin){
            if (plugin_basename(__FILE__) == $plugin) {
                wp_redirect(admin_url('admin.php?page=dashboard_status'));
                die();
            }
        }
        /**
         * Activation Hook
         */
        function wcs_activate(){   
            WCS_Activate::wcs_activate();
        }
        /**
         * Deactivation Hook
         */
        function wcs_deactivate(){ 
            WCS_Deactivate::wcs_deactivate(); 
        }
    }
    /**
     * Instantiate an Object Class 
     */
    $wcs = new WCS_WPCustomerSupport;
    $wcs ->register();
    register_activation_hook (__FILE__, array( $wcs, 'wcs_activate' ) );
    register_deactivation_hook (__FILE__, array( $wcs, 'wcs_deactivate' ) );
}