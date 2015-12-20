<?php
/**
 * Plugin Name: Wordpress Image Stats
 * Plugin URI:
 * Description: This plugin adds a piwik page view event when an image is viewed in the Jetpack Carousel
 * Version: 1.0.0
 * Author: Simon Hawketts
 * Author URI: http://simonhawketts.com
 * License: GPL2
 */
 defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function tracking_scripts()
{
    wp_register_script('track', plugins_url('/js/track_images.js', __FILE__), array('jquery'));
    wp_enqueue_script('track');
}

add_action('wp_enqueue_scripts', 'tracking_scripts');
