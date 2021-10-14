/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, SelectControl } from '@wordpress/components';
import { getSetting } from '@woocommerce/settings';

export const getSharedContentControls = ( attributes, setAttributes ) => {
	const { contentVisibility } = attributes;
	return (
		<ToggleControl
			label={ __(
				'Show Sorting Dropdown',
				'woo-gutenberg-products-block'
			) }
			checked={ contentVisibility.orderBy }
			onChange={ () =>
				setAttributes( {
					contentVisibility: {
						...contentVisibility,
						orderBy: ! contentVisibility.orderBy,
					},
				} )
			}
		/>
	);
};

export const getSharedListControls = ( attributes, setAttributes ) => {
	return (
		<div>
			<SelectControl
				label={ __(
					'Order Products By',
					'woo-gutenberg-products-block'
				) }
				value={ attributes.orderby }
				options={ [
					{
						label: __(
							'Default sorting (menu order)',
							'woo-gutenberg-products-block'
						),
						value: 'menu_order',
					},
					{
						label: __(
							'Popularity',
							'woo-gutenberg-products-block'
						),
						value: 'popularity',
					},
					{
						label: __(
							'Average rating',
							'woo-gutenberg-products-block'
						),
						value: 'rating',
					},
					{
						label: __( 'Latest', 'woo-gutenberg-products-block' ),
						value: 'date',
					},
					{
						label: __(
							'Price: low to high',
							'woo-gutenberg-products-block'
						),
						value: 'price',
					},
					{
						label: __(
							'Price: high to low',
							'woo-gutenberg-products-block'
						),
						value: 'price-desc',
					},
				] }
				onChange={ ( orderby ) => setAttributes( { orderby } ) }
			/>
			{ getSetting( 'hide_out_of_stock' ) !== 'yes' && (
				<SelectControl
					label={ __(
						'Products with the stock level:',
						'woo-gutenberg-products-block'
					) }
					value={ attributes.stockStatus }
					options={ [
						{
							label: __(
								'All stock levels',
								'woo-gutenberg-products-block'
							),
							value: 'any',
						},
						{
							label: __(
								'In stock',
								'woo-gutenberg-products-block'
							),
							value: 'instock',
						},
						{
							label: __(
								'Out of stock',
								'woo-gutenberg-products-block'
							),
							value: 'outofstock',
						},
						{
							label: __(
								'On backorder',
								'woo-gutenberg-products-block'
							),
							value: 'onbackorder',
						},
					] }
					onChange={ ( stockStatus ) =>
						setAttributes( { stockStatus } )
					}
				/>
			) }
		</div>
	);
};
