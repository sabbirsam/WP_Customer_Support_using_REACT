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
        //Delete
        register_rest_route( 'wcs/v1', '/tickets_delete',[
            'methods'=>'POST',
            'callback'=>[$this, 'delete_tickets'],
            'permission_callback' => [$this, 'delete_tickets_permission']
        ] );
        
        /**--------------------------------------------------------------
         * Fetch User from DB
         */
        register_rest_route( 'wcs/v1', '/users',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_users'],
            'permission_callback' => [$this, 'get_users_permission']
        ] );
        /**
         * Add user in DB
         */
        register_rest_route( 'wcs/v1', '/users',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_users'],
            'permission_callback' => [$this, 'save_users_permission']
        ] );

        /**--------------------------------------------------------------
         * Fetch Staff from DB
         */
        register_rest_route( 'wcs/v1', '/staff',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_staff'],
            'permission_callback' => [$this, 'get_staff_permission']
        ] );
        /**
         * Add staff in DB
         */
        register_rest_route( 'wcs/v1', '/staff',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_staff'],
            'permission_callback' => [$this, 'save_staff_permission']
        ] );

       
    }

    /**----------------------------------------------------------
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
        function sanitize_text_or_array_field($array_or_string) {
            if( is_string($array_or_string) ){
                $array_or_string = sanitize_text_field($array_or_string);
            }elseif( is_array($array_or_string) ){
                foreach ( $array_or_string as $key => &$value ) {
                    if ( is_array( $value ) ) {
                        $value = sanitize_text_or_array_field($value);
                    }
                    else {
                        $value = sanitize_text_field( $value );
                    }
                }
            } 
            return $array_or_string;
        }
        // save to db 
        // then 
        $username = sanitize_text_or_array_field($req ['username'])?? '';
        $title = sanitize_text_or_array_field($req ['title']) ?? '';
        $email = sanitize_text_or_array_field($req ['email'])?? '';
        // $description = sanitize_text_or_array_field($req ['description'])?? '';
        $description = $req ['description']?? '';
        $file = sanitize_text_or_array_field($req ['file']) ?? '';

        $date = date('Y-m-d H:i:s');
        global $wpdb;
        $table=$wpdb->prefix.'wcs_tickets';
        $data = array( 'user_name' => $username,'title' => $title,'description' => $description,'email' => $email,'file' => $file ,'date_created' => $date);
        $format = array('%s','%s','%s','%s','%s','%s');
        $wpdb->insert($table,$data,$format);
        $save = $wpdb->insert_id;
    
        if($save){
            return rest_ensure_response('successfully inserted data'); 
            wp_die();
        }else{
            return rest_ensure_response('Failed inserted data');
            wp_die();
        }
       
    } 
    //add tickets permission
    public function save_tickets_permission(){
        // return true;
        return current_user_can( 'publish_posts' );
  
    } 

    //delete
    public function delete_tickets( $req ){

        $id = $req ['id']?? '';
        global $wpdb;
        $table= $wpdb->prefix.'wcs_tickets';
        $where = array( 'id' => $id); 
        $where_id = array( '%d');
        $del = $wpdb->delete( $table, $where, $where_id );
    
        if($del){
            return rest_ensure_response('successfully inserted data'); 
            wp_die();
        }else{
            return rest_ensure_response('Failed deleted data');
            wp_die();
        }
       
    } 
    //add tickets permission
    public function delete_tickets_permission(){
        // return true;
        return current_user_can( 'publish_posts' );
  
    } 

    /**
     * User-------------------------------------------------------
     * get User
     */
    public function get_users(){
        global $wpdb;
        $table_name = $wpdb->prefix . 'wcs_users';
        $results = $wpdb->get_results("SELECT * FROM $table_name");
        return rest_ensure_response($results);
    } 
    //set permission for fetch
    public function get_users_permission(){
        return true;
    } 
    //add Users-----
    public function save_users( $req ){
            /**
             * Sanitize function for array || object from the admin drag and drop data
             */
            function sanitize_text_or_array_field($array_or_string) {
                if( is_string($array_or_string) ){
                    $array_or_string = sanitize_text_field($array_or_string);
                }elseif( is_array($array_or_string) ){
                    foreach ( $array_or_string as $key => &$value ) {
                        if ( is_array( $value ) ) {
                            $value = sanitize_text_or_array_field($value);
                        }
                        else {
                            $value = sanitize_text_field( $value );
                        }
                    }
                } 
                return $array_or_string;
            }

            //
            $username = sanitize_text_or_array_field($req ['username'])?? '';
            $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
            $email = sanitize_text_or_array_field($req ['email'])?? '';
            $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
            $country = sanitize_text_or_array_field($req ['country']) ?? '';
            $address = sanitize_text_or_array_field($req ['address'])?? '';
            $password = sanitize_text_or_array_field($req ['password'])?? '';
            $file = sanitize_text_or_array_field($req ['file']) ?? '';

            $date = date('Y-m-d H:i:s');
            global $wpdb;
            $table=$wpdb->prefix. 'wcs_users';
            $data = array( 'full_name' => $fullname, 'mobile_number' => $mobile,'address' => $address,'email' => $email,'user_name' => $username,'password' => $password,'country' => $country,'file' => $file ,'date_created' => $date);
            $format = array('%s','%s','%s','%s','%s','%s','%s','%s','%s');
            $wpdb->insert($table,$data,$format);
            $save = $wpdb->insert_id;
        
            if($save){
                return rest_ensure_response('successfully inserted data'); 
                wp_die();
            }else{
                return rest_ensure_response('Failed inserted data');
                wp_die();
            }
       
    } 
    //add users permission
    public function save_users_permission(){
        // return true;
        return current_user_can( 'publish_posts' );
  
    } 

    /**-----------------------------------------------------
     * Staff
     * get Staff
     */
    public function get_staff(){
        global $wpdb;
        $table_name = $wpdb->prefix . 'wcs_staff';
        $results = $wpdb->get_results("SELECT * FROM $table_name");
        return rest_ensure_response($results);
    } 
    //set permission for fetch
    public function get_staff_permission(){
        return true;
    } 

    /**
     * Add Staff 
     */
    
    public function save_staff( $req ){
        /**
         * Sanitize function for array || object from the admin drag and drop data
         */
        function sanitize_text_or_array_field($array_or_string) {
            if( is_string($array_or_string) ){
                $array_or_string = sanitize_text_field($array_or_string);
            }elseif( is_array($array_or_string) ){
                foreach ( $array_or_string as $key => &$value ) {
                    if ( is_array( $value ) ) {
                        $value = sanitize_text_or_array_field($value);
                    }
                    else {
                        $value = sanitize_text_field( $value );
                    }
                }
            } 
            return $array_or_string;
        }

        //
        $username = sanitize_text_or_array_field($req ['username'])?? '';
        $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
        $email = sanitize_text_or_array_field($req ['email'])?? '';
        $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
        $country = sanitize_text_or_array_field($req ['country']) ?? '';
        $address = sanitize_text_or_array_field($req ['address'])?? '';
        $password = sanitize_text_or_array_field($req ['password'])?? '';
        $file = sanitize_text_or_array_field($req ['file']) ?? '';

         // $user_id = get_the_author_meta($email);
        // $getImg=  get_avatar($user_id);
        // $user_email = get_the_author_meta( $email );  
        // $url = 'http://gravatar.com/avatar/' . md5( $user_email );
        // $file = sanitize_text_or_array_field($req ['file']) ?? $url;


        $date = date('Y-m-d H:i:s');
        global $wpdb;
        $table=$wpdb->prefix. 'wcs_staff';
        $data = array( 'full_name' => $fullname, 'mobile_number' => $mobile,'address' => $address,'email' => $email,'user_name' => $username,'password' => $password,'country' => $country,'file' => $file ,'date_created' => $date);
        $format = array('%s','%s','%s','%s','%s','%s','%s','%s','%s');
        $wpdb->insert($table,$data,$format);
        $save = $wpdb->insert_id;
    
        if($save){
            return rest_ensure_response('successfully inserted data'); 
            wp_die();
        }else{
            return rest_ensure_response('Failed inserted data');
            wp_die();
        }
   
    } 
    // permission
    public function save_staff_permission(){
        // return true;
        return current_user_can( 'publish_posts' );

    } 
  
    

}