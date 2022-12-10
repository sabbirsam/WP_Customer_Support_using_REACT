<?php
namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Activate class here
 */
class WCS_Activate{
    /**
     * Activation hook- and It create support pages with shortcode
     */
    public static function WCS_activate(){ 
        global $wpdb;
        $the_page_title = 'Get Support';
        $the_page_name = 'support';
        // the menu entry...
        delete_option("wcs_customer_support_system_title");
        add_option("wcs_customer_support_system_title", $the_page_title, '', 'yes');
        // the slug...
        delete_option("wcs_customer_support_system_name");
        add_option("wcs_customer_support_system_name", $the_page_name, '', 'yes');
        // the id...
        delete_option("wcs_customer_support_system_id");
        add_option("wcs_customer_support_system_id", '0', '', 'yes');
        $the_page = get_page_by_title( $the_page_title );
        
        if ( ! $the_page ) {
            // Create post object
            $_p = array();
            $_p['post_title'] = $the_page_title;
            $_p['post_content'] = "[wcs_customer_support_system]";
            $_p['post_status'] = 'publish';
            $_p['post_type'] = 'page';
            $_p['comment_status'] = 'closed';
            $_p['ping_status'] = 'closed';
            $_p['post_category'] = array(1);
            // Insert the post into the database
            $the_page_id = wp_insert_post( $_p );
        }
        else {
            // the plugin may have been previously active and the page may just be trashed...
            $the_page_id = $the_page->ID;
            //make sure the page is not trashed...
            $the_page->post_status = 'publish';
            $the_page_id = wp_update_post( $the_page );
        }

        delete_option( 'wcs_customer_support_system_id' );
        add_option( 'wcs_customer_support_system_id', $the_page_id );

        add_option( 'wcs_mail_config', "", '', 'yes' );

        add_option( 'wcs_pro_options_value', "inactive", '', 'yes' );
        update_option( 'wcs_pro_options_value', "inactive",'', 'yes'); 
        
        flush_rewrite_rules();
    }
}