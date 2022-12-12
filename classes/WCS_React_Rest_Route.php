<?php
namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * WordPress Rest API and all routing
 */
class WCS_React_Rest_Route{
   
    function __construct(){
        add_action( 'rest_api_init', array( $this, 'create_rest_route' ) ); 
    }
    public function create_rest_route(){
        /**
         * Tickets: GET Method::View tickets
         */
        register_rest_route( 'wcs/v1', '/tickets',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_tickets'],
            'permission_callback' => [$this, 'get_tickets_permission']
        ] );
        /* register_rest_route( 'wcs/v1', '/todays_tickets',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_todays_tickets'],
            'permission_callback' => [$this, 'get_todays_tickets_permission']
        ] ); */

        /* register_rest_route( 'wcs/v1', '/dashboard_tickets',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_dashboard_tickets'],
            'permission_callback' => [$this, 'get_dashboard_tickets_permission']
        ] ); */
        
        /**
         * Tickets POST Method:: Save tickets
         */
        register_rest_route( 'wcs/v1', '/add_tickets',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_tickets'],
            'permission_callback' => [$this, 'save_tickets_permission']
        ] );

        /**
         * Tickets POST Method:: update tickets response from users
         */
        register_rest_route( 'wcs/v1', '/tickets_response_update',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_user_update_tickets_response'],
            'permission_callback' => [$this, 'save_user_update_tickets_response_permission']
        ] );

        /**
         * Tickets: POST Method::Delete Tickets
         */
        register_rest_route( 'wcs/v1', '/tickets_delete',[
            'methods'=>'POST',
            'callback'=>[$this, 'delete_tickets'],
            'permission_callback' => [$this, 'delete_tickets_permission']
        ] );
        /**
         * Tickets: POST Method::EDIT Tickets
         */
        register_rest_route( 'wcs/v1', '/tickets_edit',[
            'methods'=>'POST',
            'callback'=>[$this, 'edit_tickets'],
            'permission_callback' => [$this, 'edit_tickets_permission']
        ] );

         /**
         * Tickets Status: POST Method::Status of the Tickets
         */
        register_rest_route( 'wcs/v1', '/tickets_status',[
            'methods'=>'POST',
            'callback'=>[$this, 'status_tickets'],
            'permission_callback' => [$this, 'status_tickets_permission']
        ] );

        /**--------------------------------------------------------------
         * USER: GET Method::View Users
         */
        register_rest_route( 'wcs/v1', '/users',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_users'],
            'permission_callback' => [$this, 'get_users_permission']
        ] );
        /* register_rest_route( 'wcs/v1', '/dashboard_users',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_dashboard_users'],
            'permission_callback' => [$this, 'get_dashboard_users_permission']
        ] ); */
        /**
         * USER: POST Method::SAVE Users
         */
        register_rest_route( 'wcs/v1', '/users',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_users'],
            'permission_callback' => [$this, 'save_users_permission']
        ] );
        /**--------------------------------------------------------------
         * STAFF/SUPPORT Agent: GET Method::View staff
         */
        register_rest_route( 'wcs/v1', '/staff',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_staff'],
            'permission_callback' => [$this, 'get_staff_permission']
        ] );
        /* register_rest_route( 'wcs/v1', '/dashboard_staff',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_dashboard_staff'],
            'permission_callback' => [$this, 'get_dashboard_staff_permission']
        ] ); */
        /**
         * STAFF/SUPPORT Agent: POST Method::SAVE staff
         */
        register_rest_route( 'wcs/v1', '/add_staff',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_staff'],
            'permission_callback' => [$this, 'save_staff_permission']
        ] );
        /**LOGGED IN USER
         * Get current logged in users Id and all information
         */
        register_rest_route( 'wcs/v1', '/uid',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_uid'],
            'permission_callback' => [$this, 'get_uid_permission']
        ] );
        /**-------------------------------------------------------------
         * Tickets: GET Method:: View Conversation
         * Conversation
         */
        register_rest_route( 'wcs/v1', '/conversation',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_conversation'],
            'permission_callback' => [$this, 'get_conversation_permission']
        ] );
        /**
         * Tickets: POST Method:: SAVE Conversation
         * Conversation
         */
        register_rest_route( 'wcs/v1', '/conversation',[
            'methods'=>'POST',
            'callback'=>[$this, 'save_conversation'],
            'permission_callback' => [$this, 'save_conversation_permission']
        ] );

        register_rest_route( 'wcs/v1', '/chat_users',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_chat_users'],
            'permission_callback' => [$this, 'get_chat_users_permission']
        ] );

        /**
         * Check If pro activate
         */
        register_rest_route( 'wcs/v1', '/wcs_pro_active',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_wcs_pro_active'],
            'permission_callback' => [$this, 'get_wcs_pro_active_permission']
        ] );

        register_rest_route( 'wcs/v1', '/wcs_mail_active',[
            'methods'=>'GET',
            'callback'=>[$this, 'get_wcs_mail_active'],
            'permission_callback' => [$this, 'get_wcs_mail_active_permission']
        ] );
        register_rest_route( 'wcs/v1', '/wcs_mail_infosave',[
            'methods'=>'POST',
            'callback'=>[$this, 'get_wcs_mail_infosave'],
            'permission_callback' => [$this, 'get_wcs_mail_infosave_permission']
        ] );

    } 
        /**
         * Routing declaration-------------------------------------------------------------------------------
         */

        /**-------------------------------------------------------------------------------
         * GET Tickets
         */
        public function get_tickets(){
            /**
             * Checking tickets view permission
             */
            $details_info = wp_get_current_user();
            $user_id = $details_info->ID;
            $user_role = $details_info->roles[0];
            $email = $details_info->user_email;

            $allowed_roles = array( 'editor', 'administrator' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                global $wpdb;
                $table_name = $wpdb->prefix . 'wcs_tickets';
                // $results = $wpdb->get_results("SELECT * FROM $table_name ORDER BY id DESC");
                $results = $wpdb->get_results("SELECT * FROM $table_name ORDER BY $table_name.`status` ASC");
                return rest_ensure_response($results);
                wp_die();
            }else if( $user_role == 'subscriber'){
                global $wpdb;
                $table_name = $wpdb->prefix . 'wcs_tickets';
                $results = $wpdb->get_results("SELECT * FROM $table_name WHERE email = '$email' ORDER BY id DESC");
                return rest_ensure_response($results);
                wp_die();
            }
        } 
        public function get_tickets_permission(){return true; } 

        public function get_todays_tickets(){
            global $wpdb;
            $table_name = $wpdb->prefix . 'wcs_tickets';
            $results = $wpdb->get_results("SELECT * FROM $table_name WHERE DATE(`date_created`) = CURDATE()");
            return rest_ensure_response($results);
            wp_die();
            
        } 
        public function get_todays_tickets_permission(){return true; } 

        public function get_dashboard_tickets(){
            global $wpdb;
            $table_name = $wpdb->prefix . 'wcs_tickets';
            $results = $wpdb->get_results("SELECT * FROM $table_name"); //ORDER BY date_field ASC | DESC
            return rest_ensure_response($results);
            wp_die();
            
        } 
        public function get_dashboard_tickets_permission(){return true; } 


        /**
         * Add tickets from the frontend
         */
        public function save_tickets( $req ){
            /**
             * Sanitization array and string
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
            /**
             * Request collect
             */
            $username = sanitize_text_or_array_field($req ['username'])?? '';
            $title = sanitize_text_or_array_field($req ['title']) ?? '';
            $email = sanitize_text_or_array_field($req ['email'])?? '';
            $description = $req ['description']?? '';
            $file = sanitize_text_or_array_field($req ['file']) ?? '';
            /**
             * Check user 
             */
            $details_info = wp_get_current_user();
            $user_id = $details_info->ID;
            $user_role = $details_info->roles[0];
            $subs_user_name = $details_info->display_name;
            $image= get_avatar_url( $details_info->ID );
            $subs_usr_email = $details_info->user_email;
            $allowed_roles = array( 'editor', 'administrator' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                
                $date = date('Y-m-d H:i:s');
                global $wpdb;
                $table=$wpdb->prefix.'wcs_tickets';
                $data = array( 'user_name' => $username,'title' => $title,'description' => $description,'email' => $email,'file' => $file ,'date_created' => $date);
                $format = array('%s','%s','%s','%s','%s','%s');
                $wpdb->insert($table,$data,$format);
                $save = $wpdb->insert_id;
                
            }else if( $user_role == 'subscriber'){
                $date = date('Y-m-d H:i:s');
                global $wpdb;
                $table=$wpdb->prefix.'wcs_tickets';
                $data = array( 'user_name' => $subs_user_name,'title' => $title,'description' => $description,'email' => $subs_usr_email,'file' => $file ,'date_created' => $date);
                $format = array('%s','%s','%s','%s','%s','%s');
                $wpdb->insert($table,$data,$format);
                $save = $wpdb->insert_id;
            }
            /**
             * Confirmation
             */
            if($save){
                return rest_ensure_response('successfully inserted data'); 
                wp_die();
            }else{
                return rest_ensure_response('Failed inserted data');
                wp_die();
            }
        } 
        //Tickets permission
        public function save_tickets_permission(){ 
              // return current_user_can( 'publish_posts' ); //edit_posts
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 

         /**
         *  Tickets response status update
         */
        public function save_user_update_tickets_response( $req ){
            /**
             * Sanitization
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
            /**
             * Get status value
             */
                $id = sanitize_text_or_array_field($req ['id'])?? '';
                $description = $req ['description']?? '';
                $res_description = $req ['res_description']?? '';

                $details_info = wp_get_current_user();
                $allowed_roles_admin = array( 'editor', 'administrator');
                $allowed_roles_subs = array( 'subscriber' );

                $allowed_roles = array( 'editor', 'administrator' );
                if ( array_intersect( $allowed_roles_admin, $details_info->roles ) ) {
                    global $wpdb;
                    $table=$wpdb->prefix.'wcs_tickets';
                    $data_update = array('res_description' => $res_description);
                    $data_where = array('id' => $id);
                    $update = $wpdb->update($table , $data_update, $data_where);
                    
                }elseif(array_intersect( $allowed_roles_subs, $details_info->roles )){
                    global $wpdb;
                    $table=$wpdb->prefix.'wcs_tickets';
                    $data_update = array('description' => $description);
                    $data_where = array('id' => $id);
                    $update = $wpdb->update($table , $data_update, $data_where);
                }

                /**
                 * Confirmation
                 */
                if($update){
                    return rest_ensure_response(1); 
                    wp_die();
                }else{
                    return rest_ensure_response(0);
                    wp_die();
                }
        } 
        //response tickets permission
        public function save_user_update_tickets_response_permission(){
            // return true;
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 

        /**
         * Delete tickets from the frontend
         */
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
        public function delete_tickets_permission(){
            // return current_user_can( 'publish_posts' );
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 
        /**
         * Edit tickets
         */
        public function edit_tickets( $req ){
            /**
             * Sanitization
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
            /**
             * Get the updated value
             */
            $id = sanitize_text_or_array_field($req ['id'])?? '';
            $username = sanitize_text_or_array_field($req ['username'])?? '';
            $title = sanitize_text_or_array_field($req ['title']) ?? '';
            $email = sanitize_text_or_array_field($req ['email'])?? '';
            $description = $req ['description']?? '';
            $res_description = $req ['res_description']?? '';
            $file = sanitize_text_or_array_field($req ['file']) ?? '';
            $date = date('Y-m-d H:i:s');

                global $wpdb;
                $table=$wpdb->prefix.'wcs_tickets';
                $data_update = array('user_name' => $username,'title' => $title,'description' => $description,'res_description' => $res_description,'email' => $email,'file' => $file ,'date_created' => $date);
                $data_where = array('id' => $id);
                $update = $wpdb->update($table , $data_update, $data_where);

                /**
                 * Confirmation
                 */
                if($update){
                    return rest_ensure_response(1); 
                    wp_die();
                }else{
                    return rest_ensure_response(0);
                    wp_die();
                }
        } 
        //Edit tickets permission
        public function edit_tickets_permission(){
            // return current_user_can( 'publish_posts' );
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 

        /**
         * Status tickets
         */
        public function status_tickets( $req ){
            /**
             * Sanitization
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
            /**
             * Get status value
             */
            $id = sanitize_text_or_array_field($req ['id'])?? '';
            $status = sanitize_text_or_array_field($req ['status'])?? '';
            $agent = sanitize_text_or_array_field($req ['agent'])?? '';
            $group = sanitize_text_or_array_field($req ['group'])?? '';
            $priority = sanitize_text_or_array_field($req ['priority'])?? '';
                global $wpdb;
                $table=$wpdb->prefix.'wcs_tickets';
                $data_update = array('staff_id' => $agent,'status' => $status,'groups' => $group,'priority' => $priority);
                $data_where = array('id' => $id);
                $update = $wpdb->update($table , $data_update, $data_where);  
        
                /**
                 * Confirmation
                 */
                if($update){
                    return rest_ensure_response(1); 
                    wp_die();
                }else{
                    return rest_ensure_response(0);
                    wp_die();
                }
        } 
        //Edit tickets permission
        public function status_tickets_permission(){
            // return current_user_can( 'publish_posts' );
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 

        /**
         * User------------------------------------------------------------------------------------
         * Get User
         */
        public function get_users(){
           
            global $wpdb;
            $capabilities_field=$wpdb->prefix.'capabilities';
            $qargs=[
                'role' => ['subscriber'], //,'administrator','editor'
                // 'role' => ["$capabilitiesId"], 
                'meta_query'=>
                    [
                    'relation' => 'OR', // optional if you'll need to select more than
                        [
                        'key' => $capabilities_field,
                           'value' => 'subscriber',
                        // 'value' => "$capabilitiesId",
                        'compare' => 'LIKE',
                        ],
                    ],
                'number'=> -1 
            ];
            /**
             * Instantiate UserQuery with $qargs
             */
            $usersQuery=new \WP_User_Query($qargs); 
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

        public function get_dashboard_users(){
           
            global $wpdb;
            $capabilities_field=$wpdb->prefix.'capabilities';
            $qargs=[
                'role' => ['subscriber'],
                'meta_query'=>
                    [
                    'relation' => 'OR', 
                        [
                        'key' => $capabilities_field,
                           'value' => 'subscriber',
                        'compare' => 'LIKE',
                        ],
                    ],
                'number'=> -1 
            ];
            $usersQuery=new \WP_User_Query($qargs); 
            $users=$usersQuery->get_results();
            return rest_ensure_response($users);              
        } 
        public function get_dashboard_users_permission(){ return true;} 

        /**
         * Add/Save users
         */
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
                //Requesting information collect
                $username = sanitize_text_or_array_field($req ['username'])?? '';
                $email = sanitize_text_or_array_field($req ['email'])?? '';
                $n_password = sanitize_text_or_array_field($req ['password'])?? '';
                $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
                $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
                $country = sanitize_text_or_array_field($req ['country']) ?? '';
                $address = sanitize_text_or_array_field($req ['address'])?? '';
                $file = sanitize_text_or_array_field($req ['file']) ?? '';
                /**
                 * Saving to db
                 */
                global $wpdb;
                $table=$wpdb->prefix.'users';
                /**
                 * Gmail check If exist or not
                 */
                $gmail_found = $wpdb->get_results("SELECT `user_email` FROM $table");
                $expected = [];
                foreach ($gmail_found as $key=>$obj){
                    $expected[] = $obj->user_email; 
                }
                /**
                 * If not found then save
                 */
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
            return current_user_can( 'publish_posts' );
        } 

        /**--------------------------------------------------------------------------------
         * Staff
         * GET Staff
         */
        public function get_staff(){        
            global $wpdb;
            $capabilities_field=$wpdb->prefix.'capabilities';
            $qargs=[
                'role' => ['editor'],
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
            /**
             * instantiate UserQuery with $qargs
             */
            $editorQuery=new \WP_User_Query($qargs);
            $editor=$editorQuery->get_results();
            return rest_ensure_response($editor); 
        } 
        //set permission for fetch
        public function get_staff_permission(){
            return true;
        } 

        public function get_dashboard_staff(){        
            global $wpdb;
            $capabilities_field=$wpdb->prefix.'capabilities';
            $qargs=[
                'role' => ['editor'],
                'meta_query'=>
                    [
                    'relation' => 'OR',
                        [
                        'key' => $capabilities_field,
                        'value' => 'editor',
                        'compare' => 'LIKE',
                        ],
                    ],
                'number'=> -1 
            ];

            $editorQuery=new \WP_User_Query($qargs);
            $editor=$editorQuery->get_results();
            return rest_ensure_response($editor); 
        } 
        public function get_dashboard_staff_permission(){  return true; }


        /**
         * Add Staff to DB
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
                //Requesting information collect
                $username = sanitize_text_or_array_field($req ['username'])?? '';
                $email = sanitize_text_or_array_field($req ['email'])?? '';
                $n_password = sanitize_text_or_array_field($req ['password'])?? '';
                $fullname = sanitize_text_or_array_field($req ['fullname']) ?? '';
                $mobile = sanitize_text_or_array_field($req ['mobile']) ?? '';
                $country = sanitize_text_or_array_field($req ['country']) ?? '';
                $address = sanitize_text_or_array_field($req ['address'])?? '';
                $file = sanitize_text_or_array_field($req ['file']) ?? '';
                /**
                 * Query
                 */
                global $wpdb;
                $table=$wpdb->prefix.'users';
                $gmail_found = $wpdb->get_results("SELECT `user_email` FROM $table"); //SELECT `user_email` FROM wp_users 
                $expected = [];
                foreach ($gmail_found as $key=>$obj){
                    $expected[] = $obj->user_email; 
                }                
                if (!in_array($email, $expected)) {
                    $user_name= $username;
                    $user_password= $n_password;
                    $user_email= $email;
                    $user_id = wp_create_user( $user_name, $user_password, $user_email );
                    $user = new \WP_User( $user_id );
                    $user->set_role( 'editor' );
                    /**
                     * Confirmation
                     */
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
         * Current logged in user UID and all information getting
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
         * Get Conversation
         */
        public function get_conversation( \WP_REST_Request $request ){
                $receiverId = $request->get_param('receiverId');
                $logedinId = get_current_user_id();
                global $wpdb;
                $table_name = $wpdb->prefix . 'wcs_conversation';
                // $results = $wpdb->get_results("SELECT * FROM $table_name WHERE senderId= $logedinId AND `receiverId` = $receiverId OR `senderId` =$receiverId AND `receiverId` = $logedinId ORDER BY id ASC ");
                $results = $wpdb->get_results("SELECT * FROM $table_name WHERE senderId= $logedinId AND `receiverId` = $receiverId OR `senderId` =$receiverId AND `receiverId` = $logedinId ORDER BY id DESC ");
                return rest_ensure_response($results);
        } 
        public function get_conversation_permission(){return true; } 
        /**
         * save conversation
         */
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
            /**
             * Collect all request and sanitize
             */
            $senderId = sanitize_text_or_array_field($req ['cuid']) ?? '';
            $receiverId = sanitize_text_or_array_field($req ['currentconversationID'])?? '';
            $message = sanitize_text_or_array_field($req ['chatting']) ?? '';
            /**
             * QUERY
             */
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
            // return true;
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }
        } 

        /**
         * CHAT User------------------------------------------------------------------------------------
         * Get CHAT User
         */
        public function get_chat_users(\WP_REST_Request $request ){
            /**
             * Check capabilities to show only needed conversation
             */
            
            $details_info = wp_get_current_user();
            $user_id = $details_info->ID;
            $user_role = $details_info->roles[0];
            $subs_user_name = $details_info->display_name;
            $image= get_avatar_url( $details_info->ID );
            $subs_usr_email = $details_info->user_email;
            $allowed_roles = array( 'editor', 'administrator' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                
                $capabilitiesId = $request->get_param('capabilitiesId') ?? 'subscriber';
                global $wpdb;
                $capabilities_field=$wpdb->prefix.'capabilities';
                $qargs=[
                    // 'role' => ['subscriber'],'administrator','editor'
                    'role' => ["$capabilitiesId"], 
                    'meta_query'=>
                        [
                        'relation' => 'OR', // optional if you'll need to select more than
                            [
                            'key' => $capabilities_field,
                            //    'value' => 'subscriber',
                            'value' => "$capabilitiesId",
                            'compare' => 'LIKE',
                            ],
                        ],
                    'number'=> -1 
                ];
                /**
                 * Instantiate UserQuery with $qargs
                 */
                $usersQuery=new \WP_User_Query($qargs); 
                $users=$usersQuery->get_results();
                
                // foreach ($users as $x => $val){
                //     foreach ($val as $z => $v){
                //         $image= get_avatar_url($v->ID);                
                //     }
                //     return rest_ensure_response([$users,$image]); 
                // }
                return rest_ensure_response($users); 
                
            }else if( $user_role == 'subscriber'){
                global $wpdb;
                $capabilities_field=$wpdb->prefix.'capabilities';
                $qargs=[
                    'role' => ["editor"], 
                    'meta_query'=>
                        [
                        'relation' => 'OR', // optional if you'll need to select more than
                            [
                            'key' => $capabilities_field,
                               'value' => 'editor',
                            'compare' => 'LIKE',
                            ],
                        ],
                    'number'=> -1 
                ];
                /**
                 * Instantiate UserQuery with $qargs
                 */
                $usersQuery=new \WP_User_Query($qargs); 
                $users=$usersQuery->get_results();

                return rest_ensure_response($users); 
            }

             
        } 
        //set permission for fetch
        public function get_chat_users_permission(){
            return true;
        }
        
        /**
         * PRO active
         */
        public function get_wcs_pro_active(){
            $isProActive = get_option('wcs_pro_options_value');
            return rest_ensure_response( $isProActive ); 
            wp_die();
        }
        public function get_wcs_pro_active_permission(){
            return true;
        }
        /**
         * Mail get security
         */
        public function get_wcs_mail_active(){
            $isConfigured = get_option('wcs_mail_config');
            $getCreden = json_decode( $isConfigured);
            return rest_ensure_response($getCreden); 
            wp_die();
        }
        public function get_wcs_mail_active_permission(){
            return true;
        }
        /**
         * Mail security store
         */
        public function get_wcs_mail_infosave( $req ){
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
            /**
             * Collect all request and sanitize
             */
            $toogleswitch = sanitize_text_or_array_field($req ['mailactive']) ?? '';
            $username = sanitize_text_or_array_field($req ['username']) ?? '';
            $password = sanitize_text_or_array_field($req ['password'])?? '';
            $host = sanitize_text_or_array_field($req ['host']) ?? '';

            $wcs_mail_configs=array(
                'mailactive'=>$toogleswitch,
                'ownermail'=>$username,
                'username'=>$username,
                'password'=>$password,
                'host'=>$host,
            );

            $isConfig = update_option('wcs_mail_config', json_encode( $wcs_mail_configs ));
            if($isConfig){
                return rest_ensure_response(1); 
                wp_die();
            }else{
                return rest_ensure_response(2); 
                wp_die();
            }
        }
        public function get_wcs_mail_infosave_permission(){
            $details_info = wp_get_current_user();
            $allowed_roles = array( 'editor', 'administrator','subscriber' );
            if ( array_intersect( $allowed_roles, $details_info->roles ) ) {
                return true;
            }else {
                 return false;
            }

        }

}