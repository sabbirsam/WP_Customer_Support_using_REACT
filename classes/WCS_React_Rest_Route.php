<?php
namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * Admin dashboard created 
 */
class WCS_React_Rest_Route{
    function __construct(){
        add_action( 'rest_api_init', array( $this, 'create_rest_route' ) ); 
    }

    public function create_rest_route(){
        /**
         * Fetch Tickets from DB
         */
        register_rest_route( 'wcs/v1', '/tickets',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_tickets'],
            'permission_callback' => [$this, 'get_tickets_permission']
        ] );

        /**
         * Add tickets in DB
         */
        register_rest_route( 'wcs/v1', '/tickets',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_tickets'],
            'permission_callback' => [$this, 'save_tickets_permission']
        ] );
    }

    /**
     * Tickets
     * get Tickets
     */
    public function get_tickets(){
        global $wpdb;
        $table_name = $wpdb->prefix . 'wcs_tickets';
        $results = $wpdb->get_results("SELECT * FROM $table_name");
        return rest_ensure_response($results);
    } 
    //set permission for fetch
    public function get_tickets_permission(){
        
        return true;
    } 
   //add tickets
    public function save_tickets( $req ){
        $test = sanitize_text_field( $req['id'] );
        $tests = sanitize_text_field( $req['user_name'] );
        // save to db 
        // then 
        return rest_ensure_response('successfully inserted data'); 
       
    } 
    //add tickets permission
    public function save_tickets_permission(){
        // return true;
        return current_user_can( 'publish_posts' );
  
    } 
     /**
     * 
     */
  
    

}