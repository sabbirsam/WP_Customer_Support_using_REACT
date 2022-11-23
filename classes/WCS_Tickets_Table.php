<?php
namespace WCS\classes;

defined('ABSPATH') or die('Hey, what are you doing here? You silly human!');
/**
 * All Enqueue here
 */
class WCS_Tickets_Table{

    private $connection;
    private $sql;
    public function __construct() {
        
        global $wpdb;
        $wpdb->hide_errors();
        $collate = $wpdb->get_charset_collate();

        /**
         * Tickets 
         */
        $ticket_table=$wpdb->prefix. 'wcs_tickets';

        $sql_tickets_table = "CREATE TABLE ".$ticket_table." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `user_name` VARCHAR(255) DEFAULT NULL,
            `file` text ,
            `email` VARCHAR(255) DEFAULT NULL,
            `title` text NOT NULL,
            `description` text NOT NULL,
            `res_description` text NOT NULL,
            `note` text,
            `customer_id` int(30) NOT NULL,
            `priority` tinyint(1) NOT NULL COMMENT '0=Low,1=Medium,2=High,3=Urgent',
            `groups` int(255) NOT NULL COMMENT '0=Support,1=Affiliate,2= Facebook,3=Marketing',
            `staff_id` int(30) NOT NULL,
            `admin_id` int(30) NOT NULL,
            `status` tinyint(1) NOT NULL COMMENT '0=Open,1=Pending,2= Resolved,3=Close',
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";

//         SELECT wp_usermeta.umeta_id, wp_usermeta.meta_key='wp_capabilities', wp_usermeta.meta_value, wp_users.ID,wp_users.user_email 
// FROM wp_usermeta 
// INNER JOIN wp_users ON wp_usermeta.umeta_id=wp_users.ID;

        /**
         * Conversation response
         */

        $conversation_table=$wpdb->prefix. 'wcs_conversation';
        // $sql_conversation_table = "CREATE TABLE ".$conversation_table." (
        //     `id` INT(255) NOT NULL AUTO_INCREMENT,
        //     `members` text NOT NULL,
        //     `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     PRIMARY KEY (`id`)
        // ) ENGINE=InnoDB ".$collate."";
        
        $sql_conversation_table = "CREATE TABLE ".$conversation_table." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `senderId` VARCHAR(255) NOT NULL,
            `receiverId` VARCHAR(255) NOT NULL,
            `message` text NOT NULL,
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";

        /**
         * Message response
         */

        // $message_table=$wpdb->prefix. 'wcs_message';
        // $sql_message_table = "CREATE TABLE ".$message_table." (
        //     `id` INT(255) NOT NULL AUTO_INCREMENT,
        //     `conversationId` VARCHAR(255) NOT NULL,
        //     `senderId` VARCHAR(255) NOT NULL,
        //     `message` text NOT NULL,
        //     PRIMARY KEY (`id`)
        // ) ENGINE=InnoDB ".$collate."";
        

        // $ticket_table=$wpdb->prefix. 'wcs_tickets_response';

        // $sql_table = "CREATE TABLE ".$ticket_table." (
        //     `id` INT(255) NOT NULL AUTO_INCREMENT,
        //     `description` text NOT NULL,
        //     `note` text,
        //     `file` text ,
        //     `customer_id` int(30) NOT NULL,
        //     `ticket_id` int(30) NOT NULL,
        //     `user_type` tinyint(1) COMMENT '1= admin, 2= staff,3= customer',
        //     `staff_id` int(30),
        //     `admin_id` int(30),
        //     `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     PRIMARY KEY (`id`)
        // ) ENGINE=InnoDB ".$collate."";

        /**
         * User 
         */
        // $users_table=$wpdb->prefix. 'wcs_users';

        // $sql_users = "CREATE TABLE ".$users_table." (
        //     `id` INT(255) NOT NULL AUTO_INCREMENT,
        //     `user_name` VARCHAR(255) NOT NULL,
        //     `full_name` VARCHAR(255) NOT NULL,
        //     `mobile_number` varchar(100),
        //     `email` VARCHAR(255) NOT NULL,
        //     `address` text,
        //     `country` varchar(500),
        //     `password` text NOT NULL,
        //     `status` tinyint(1) COMMENT '0=inactive,1=active',
        //     `file` text ,
        //     `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     PRIMARY KEY (`id`)
        // ) ENGINE=InnoDB ".$collate."";

        /**
         * Staff 
         */
        // $users_staff=$wpdb->prefix. 'wcs_staff';

        // $sql_staff = "CREATE TABLE ".$users_staff." (
        //     `id` INT(255) NOT NULL AUTO_INCREMENT,
        //     `user_name` VARCHAR(255) NOT NULL,
        //     `full_name` VARCHAR(255) NOT NULL,
        //     `mobile_number` varchar(100),
        //     `email` VARCHAR(255) NOT NULL,
        //     `address` text,
        //     `country` varchar(500),
        //     `password` text NOT NULL,
        //     `status` tinyint(1) COMMENT '0=inactive,1=active',
        //     `file` text ,
        //     `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        //     PRIMARY KEY (`id`)
        // ) ENGINE=InnoDB ".$collate."";


		require_once ABSPATH."wp-admin/includes/upgrade.php";
        dbDelta($sql_tickets_table);
        dbDelta($sql_conversation_table);
        
        // dbDelta($sql_message_table);
        // dbDelta($sql_users);
        // dbDelta($sql_staff);
        
    }

}
        