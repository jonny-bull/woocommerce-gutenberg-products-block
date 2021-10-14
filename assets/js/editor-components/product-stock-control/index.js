/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * A pre-configured SelectControl for product stock settings.
 *
 * @param {Object} props Incoming props for the component.
 * @param {string} props.value
 * @param {function(any):any} props.setAttributes Setter for block attributes.
 */
const ProductStockControl = ( { value, setAttributes } ) => {
	return (
		<SelectControl
			label={ __(
				'Products with the stock level:',
				'woo-gutenberg-products-block'
			) }
			value={ value }
			options={ [
				{
					label: __(
						'All stock levels',
						'woo-gutenberg-products-block'
					),
					value: 'any',
				},
				{
					label: __( 'In stock', 'woo-gutenberg-products-block' ),
					value: 'instock',
				},
				{
					label: __( 'Out of stock', 'woo-gutenberg-products-block' ),
					value: 'outofstock',
				},
				{
					label: __( 'On backorder', 'woo-gutenberg-products-block' ),
					value: 'onbackorder',
				},
			] }
			onChange={ ( stockStatus ) => setAttributes( { stockStatus } ) }
		/>
	);
};

ProductStockControl.propTypes = {
	/**
	 * Callback to update the stock status setting.
	 */
	setAttributes: PropTypes.func.isRequired,
	/**
	 * The selected stock status setting.
	 */
	value: PropTypes.string.isRequired,
};

export default ProductStockControl;
