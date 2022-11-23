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
        //Edit
        register_rest_route( 'wcs/v1', '/tickets_edit',[
            'methods'=>'POST',
            'callback'=>[$this, 'edit_tickets'],
            'permission_callback' => [$this, 'edit_tickets_permission']
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


        /**
         * Get current logged in users Id and all info
         */
        register_rest_route( 'wcs/v1', '/uid',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_uid'],
            'permission_callback' => [$this, 'get_uid_permission']
        ] );

        /**-------------------------------------------------------------
         * Fetch conversation from DB
         * http://localhost/wppool/chatbox/wp-json/wcs/v1/conversation
         * 
         */
        register_rest_route( 'wcs/v1', '/conversation',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_conversation'],
            'permission_callback' => [$this, 'get_conversation_permission']
        ] );
        
         /**
         * Add conversation in DB
         */
        register_rest_route( 'wcs/v1', '/conversation',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_conversation'],
            'permission_callback' => [$this, 'save_conversation_permission']
        ] );
    }

    /**-------------------------------------------------------------------------------
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
    public function get_tickets_permission(){return true; } 

   //add tickets------------------------------------------------------------------------------
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

        // $d = array($description);
        // $desc = json_encode($d);

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
    public function save_tickets_permission(){ return current_user_can( 'publish_posts' ); } 

    //delete------------------------------------------------------------------------------
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
    //delete tickets permission
    public function delete_tickets_permission(){return current_user_can( 'publish_posts' );} 

    //Edit---------------------------------------------------------------------------------------------
    public function edit_tickets( $req ){

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
        
        $id = sanitize_text_or_array_field($req ['id'])?? '';
        
        /**
         * Update data show 
         */
        $username = sanitize_text_or_array_field($req ['username'])?? '';
        $title = sanitize_text_or_array_field($req ['title']) ?? '';
        $email = sanitize_text_or_array_field($req ['email'])?? '';
        // $description = sanitize_text_or_array_field($req ['description'])?? '';
        $description = $req ['description']?? '';
        // $d = array($description);
        // $desc = json_encode($d);
        $res_description = $req ['res_description']?? '';

        $file = sanitize_text_or_array_field($req ['file']) ?? '';

        $date = date('Y-m-d H:i:s');
        global $wpdb;
        $table=$wpdb->prefix.'wcs_tickets';
        $data_update = array('user_name' => $username,'title' => $title,'description' => $description,'res_description' => $res_description,'email' => $email,'file' => $file ,'date_created' => $date);
        $data_where = array('id' => $id);
        $update = $wpdb->update($table , $data_update, $data_where);
    
        if($update){
            return rest_ensure_response('successfully Update data'); 
            wp_die();
        }else{
            return rest_ensure_response('Failed update data');
            wp_die();
        }
       
    } 
    //Edit tickets permission
    public function edit_tickets_permission(){return current_user_can( 'publish_posts' );} 

    /**
     * User-------------------------------------------------------
     * get User
     */
    public function get_users(){
        global $wpdb;
        $capabilities_field=$wpdb->prefix.'capabilities';
        $qargs=[
            'role' => ['subscriber'], // subscriber:  use this if you need to query by role at the same time
            'meta_query'=>
                [
                   'relation' => 'OR', // optional if you'll need to select more than
                    [
                       'key' => $capabilities_field,
                       'value' => 'subscriber',
                       'compare' => 'LIKE',
                    ],
                ],
            'number'=> -1 // to select all users
        ];

        $usersQuery=new \WP_User_Query($qargs); // instantiate UserQuery with $qargs

        $users=$usersQuery->get_results();
        
        // foreach ($users as $x => $val){
        //     foreach ($val as $z => $v){
        //         $image= get_avatar_url($v->ID);                
        //     }
        //     return rest_ensure_response([$users,$image]); 
        // }
        
        return rest_ensure_response($users);  
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
            $email = sanitize_text_or_array_field($req ['email'])?? '';
            $n_password = sanitize_text_or_array_field($req ['password'])?? '';
            
            $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
            $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
            $country = sanitize_text_or_array_field($req ['country']) ?? '';
            $address = sanitize_text_or_array_field($req ['address'])?? '';
            $file = sanitize_text_or_array_field($req ['file']) ?? '';
            
            // $password = wp_hash_password($n_password);
            // $password = md5($n_password);
            

            global $wpdb;
            $table=$wpdb->prefix.'users';

            $gmail_found = $wpdb->get_results("SELECT `user_email` FROM $table"); //SELECT `user_email` FROM wp_users 
            // print_r($gmail_found);
            
            $expected = [];
            foreach ($gmail_found as $key=>$obj){
                $expected[] = $obj->user_email; 
            }
            // print_r($expected);
            
            if (!in_array($email, $expected)) {
                $user_name= $username;
                $user_password= $n_password;
                $user_email= $email;
                $user_id = wp_create_user( $user_name, $user_password, $user_email );
                $user = new \WP_User( $user_id );
                $user->set_role( 'subscriber' );

                if($user){
                    return rest_ensure_response(1);  // success
                    wp_die();
                }else{
                    return rest_ensure_response(0); // failed
                    wp_die();
                }

              } else {
                    return rest_ensure_response(3); // email exist
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
        $capabilities_field=$wpdb->prefix.'capabilities';
        $qargs=[
            'role' => ['editor'], // subscriber:  use this if you need to query by role at the same time
            'meta_query'=>
                [
                   'relation' => 'OR', // optional if you'll need to select more than
                    [
                       'key' => $capabilities_field,
                       'value' => 'editor',
                       'compare' => 'LIKE',
                    ],
                ],
            'number'=> -1 // to select all users
        ];

        $editorQuery=new \WP_User_Query($qargs); // instantiate UserQuery with $qargs

        $editor=$editorQuery->get_results();
        
        return rest_ensure_response($editor); 

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
            $email = sanitize_text_or_array_field($req ['email'])?? '';
            $n_password = sanitize_text_or_array_field($req ['password'])?? '';
            
            $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
            $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
            $country = sanitize_text_or_array_field($req ['country']) ?? '';
            $address = sanitize_text_or_array_field($req ['address'])?? '';
            $file = sanitize_text_or_array_field($req ['file']) ?? '';
            
            // $password = wp_hash_password($n_password);
            // $password = md5($n_password);
            

            global $wpdb;
            $table=$wpdb->prefix.'users';

            $gmail_found = $wpdb->get_results("SELECT `user_email` FROM $table"); //SELECT `user_email` FROM wp_users 
            // print_r($gmail_found);
            
            $expected = [];
            foreach ($gmail_found as $key=>$obj){
                $expected[] = $obj->user_email; 
            }
            // print_r($expected);
            
            if (!in_array($email, $expected)) {
                $user_name= $username;
                $user_password= $n_password;
                $user_email= $email;
                $user_id = wp_create_user( $user_name, $user_password, $user_email );
                $user = new \WP_User( $user_id );
                $user->set_role( 'editor' );

                if($user){
                    return rest_ensure_response(1);  // success
                    wp_die();
                }else{
                    return rest_ensure_response(0); // failed
                    wp_die();
                }

              } else {
                    return rest_ensure_response(3); // email exist
                    wp_die();
              }
   
    } 
    // permission
    public function save_staff_permission(){
        // return true;
        return current_user_can( 'publish_posts' );

    } 

    /**
     * Current user UID------------------------------------------------------------------------------
     */
    public function get_uid(){
        $details_info = wp_get_current_user();
        $user_id = $details_info->ID;
        $user_name = $details_info->display_name;
        $image= get_avatar_url( $details_info->ID );
        $user_email = $details_info->user_email;
        $user_role = $details_info->roles[0];

        $uid =array(
           $user_id, $user_name, $image,  $user_email, $user_role,  $details_info
        );
        
        return rest_ensure_response($uid);
    } 
    public function get_uid_permission(){return true; } 

    /**----------------------------------------------------------
     * Conversation
     * get Conversation
     */
    public function get_conversation( \WP_REST_Request $request ){
            $receiverId = $request->get_param('receiverId');
            $logedinId = get_current_user_id();
            global $wpdb;
            $table_name = $wpdb->prefix . 'wcs_conversation';
            $results = $wpdb->get_results("SELECT * FROM $table_name WHERE senderId= $logedinId AND `receiverId` = $receiverId OR `senderId` =$receiverId AND `receiverId` = $logedinId ORDER BY id ASC ");
            return rest_ensure_response($results);
    } 
    public function get_conversation_permission(){return true; } 


    //save conversation -------------------------------------------------------------------
    public function save_conversation( $req ){
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
        
        $senderId = sanitize_text_or_array_field($req ['cuid']) ?? '';
        $receiverId = sanitize_text_or_array_field($req ['currentconversationID'])?? '';
        $message = sanitize_text_or_array_field($req ['chatting']) ?? '';

        global $wpdb;
        $table=$wpdb->prefix.'wcs_conversation';
        $data = array( 'senderId' => $senderId,'receiverId' => $receiverId,'message' => $message);
        $format = array('%s','%s', '%s');
        $wpdb->insert($table,$data,$format);
        $save = $wpdb->insert_id;
        
        return rest_ensure_response('successfully conversation added'); 
        wp_die();
        
    }
    public function save_conversation_permission(){ 
        // return current_user_can( 'publish_posts' ); 
        return true;
    } 

  
}