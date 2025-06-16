<?php

include get_theme_file_path('/functions/experimental.php');

function theme_enqueue_styles()
{
	wp_register_style(
		'child-styles',
		get_stylesheet_directory_uri() . '/_build/css/styles.css',
		array(),
		filemtime(get_stylesheet_directory() . '/_build/css/styles.css')
	);
	// 
	wp_enqueue_style('select2-css');
	wp_enqueue_style('child-styles');


	wp_register_script(
		'child-scripts',
		get_stylesheet_directory_uri() . '/_build/js/scripts.js',
		array(),
		filemtime(get_stylesheet_directory() . '/_build/js/scripts.js'),
		true,
	);
	// 
	wp_enqueue_script('child-scripts');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 20);


function avada_lang_setup()
{
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain('Avada', $lang);
}
add_action('after_setup_theme', 'avada_lang_setup');


add_action('wp_head', function () {

	echo '<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />';
	echo '<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>';
}, 10, 1);

// Include team directory functionality
require_once get_stylesheet_directory() . '/functions/team-directory.php';
