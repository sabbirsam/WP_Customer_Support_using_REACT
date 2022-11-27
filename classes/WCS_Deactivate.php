<?php

namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Deactivated plugin
 */
class WCS_Deactivate{
    public static function WCS_deactivate(){ 
        global $wpdb;
        $the_page_title = get_option( "wcs_customer_support_system_title" );
        $the_page_name = get_option( "wcs_customer_support_system_name" );
        //  the id of our page...
        $the_page_id = get_option( 'wcs_customer_support_system_id' );
        if( $the_page_id ) {
            wp_delete_post( $the_page_id ); // this will trash insted of delete
        }
        delete_option("wcs_customer_support_system_title");
        delete_option("wcs_customer_support_system_name");
        delete_option("wcs_customer_support_system_id");        
        flush_rewrite_rules();
    }
}