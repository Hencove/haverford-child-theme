<?php

include get_theme_file_path('/functions/experimental.php');


function theme_enqueue_styles()
{
	// wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', [] );
	wp_enqueue_style('child-styles', get_stylesheet_directory_uri() . '/_build/css/styles.css', []);
	wp_enqueue_script('child-scripts', get_stylesheet_directory_uri() . '/_build/js/scripts.js', []);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 20);


function avada_lang_setup()
{
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain('Avada', $lang);
}
add_action('after_setup_theme', 'avada_lang_setup');
