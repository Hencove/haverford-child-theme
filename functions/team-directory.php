<?php

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Main shortcode function
function hav_team_directory_shortcode( $atts ) {


	// Parse attributes
	$atts = shortcode_atts( array(
		'title' => '',
		'posts_per_page' => -1
	), $atts );

	// Query team members
	$post_query = new WP_Query( array(
		'post_type' => 'avada_portfolio',
		'meta_key' => 'team_last_name',
		'orderby' => 'meta_value',
		'order' => 'ASC',
		'posts_per_page' => intval( $atts['posts_per_page'] ),
		'no_found_rows' => true,
		'update_post_meta_cache' => false,
		'update_post_term_cache' => false
	) );

	if ( ! $post_query->have_posts() ) {
		wp_reset_postdata();
		return '<p>No team members found.</p>';
	}

	ob_start();

	// Optional title
	if ( ! empty( $atts['title'] ) ) {
		echo '<h3>' . esc_html( $atts['title'] ) . '</h3>';
	}

	echo '<div class="hav-team-dir">';

	$current_letter = '';

	while ( $post_query->have_posts() ) {
		$post_query->the_post();

		$last_name = get_field('team_last_name');
		$first_letter = $last_name ? strtoupper( $last_name[0] ) : '';

		if ( $first_letter && $first_letter !== $current_letter ) {
			$current_letter = $first_letter;
			echo '<div class="hav-team-dir__letter">' . esc_html( $current_letter ) . '</div>';
		}

		$thumbnail_url = get_the_post_thumbnail_url( get_the_ID(), 'medium' );
		$role = get_field('role_search');
		?>

		<a class="hav-team-dir__link" href="<?php echo esc_url( get_permalink() ); ?>">
			<div class="hav-team-dir__item">
				<div class="hav-team-dir__image" 
					 style="background-image: url(<?php echo esc_url( $thumbnail_url ); ?>)">
				</div>
				<div class="hav-team-dir__text">
					<p class="hav-team-dir__name"><?php echo esc_html( get_the_title() ); ?></p>
					<?php if ( $role ) : ?>
						<p class="hav-team-dir__title"><?php echo esc_html( $role ); ?></p>
					<?php endif; ?>
				</div>
			</div>
		</a>

		<?php
	}

	echo '</div>';

	wp_reset_postdata();

	return ob_get_clean();
}

// Register shortcode
add_shortcode( 'team_directory', 'hav_team_directory_shortcode' );
