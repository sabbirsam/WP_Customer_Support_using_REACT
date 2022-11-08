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

        $sql_table = "CREATE TABLE ".$ticket_table." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `user_name` VARCHAR(255) DEFAULT NULL,
            `file` text ,
            `email` VARCHAR(255) DEFAULT NULL,
            `title` text NOT NULL,
            `description` text NOT NULL,
            `customer_id` int(30) NOT NULL,
            `staff_id` int(30) NOT NULL,
            `admin_id` int(30) NOT NULL,
            `status` tinyint(1) NOT NULL COMMENT '0=Pending,1=On Going,2= Resolved',
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";

        /**
         * User 
         */
        $users_table=$wpdb->prefix. 'wcs_users';

        $sql_users = "CREATE TABLE ".$users_table." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `user_name` VARCHAR(255) NOT NULL,
            `full_name` VARCHAR(255) NOT NULL,
            `mobile_number` varchar(100),
            `email` VARCHAR(255) NOT NULL,
            `address` text,
            `country` varchar(500),
            `password` text NOT NULL,
            `status` tinyint(1) COMMENT '0=inactive,1=active',
            `file` text ,
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";

        /**
         * Staff 
         */
        $users_staff=$wpdb->prefix. 'wcs_staff';

        $sql_staff = "CREATE TABLE ".$users_staff." (
            `id` INT(255) NOT NULL AUTO_INCREMENT,
            `user_name` VARCHAR(255) NOT NULL,
            `full_name` VARCHAR(255) NOT NULL,
            `mobile_number` varchar(100),
            `email` VARCHAR(255) NOT NULL,
            `address` text,
            `country` varchar(500),
            `password` text NOT NULL,
            `status` tinyint(1) COMMENT '0=inactive,1=active',
            `file` text ,
            `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB ".$collate."";


		require_once ABSPATH."wp-admin/includes/upgrade.php";
        dbDelta($sql_table);
        dbDelta($sql_users);
        dbDelta($sql_staff);
        
    }

}
        