<?php

include get_theme_file_path('/functions/experimental.php');


add_action('fusion_post_cards_shortcode_query_args', function ($args) {

	// only fire this on a team member bio page
	if (is_singular('avada_portfolio')) {

		// determine the current team member's team
		// returns just the IDs of any teams that this team member is assigned to
		global $post;
		// get just the term IDs
		$terms = wp_get_object_terms($post->ID, 'team', array('fields' => 'ids'));
		// exclude the current team member from showing in their own team
		$args['post__not_in'] = [$post->ID];
		// search thru teams
		$args['tax_query'][0]['taxonomy'] = 'team';
		// include this team
		$args['tax_query'][0]['terms'] = $terms;

	}


	return $args;
}, 10, 1);

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
