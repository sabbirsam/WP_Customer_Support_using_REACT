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
        /**
         * Conversation response
         */

        $conversation_table=$wpdb->prefix. 'wcs_conversation';
        $sql_conversation_table = "CREATE TABLE ".$conversation_table." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `senderId` VARCHAR(255) NOT NULL,
            `receiverId` VARCHAR(255) NOT NULL,
            `message` text NOT NULL,
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";

		require_once ABSPATH."wp-admin/includes/upgrade.php";
        dbDelta($sql_tickets_table);
        dbDelta($sql_conversation_table);        
    }

}
        