import useLocalStorage from './useLocalStorage';

import { getProductById , notify } from '../utils/helper-functions';

/**
 * @param {Array} cart
 */

function useLocalCart() {
	const [cart, setCart] = useLocalStorage('cart', []);

	const addProductToCart = (id) => {
        var arr = [].concat(cart);
		var indx = arr.findIndex((product) => {
			return product.id === id;
		});

		// if product alredy exist in cart
		if (indx !== -1) {
			arr[indx].qty++;
		} else
			arr.push({ id , qty: 1,});

		setCart(arr);
		notify('Product added to cart');
	};

	// handle Deleting products
	const deleteById = (id) => {
		var newProducts = cart.filter((product) => {
			return product.id !== id;
		});
		setCart(newProducts);
		notify('Product successfully deleted.');
	};

	const deleteAll = () => {
		setCart([]);
		notify('All products have been successfully deleted.');
	};

	const updateProductQuantity = (id, value) => {
        var arr = [].concat(cart);
		var indx = arr.findIndex((pr) => pr.id === id);
		arr[indx].qty = value;
		setCart(arr);
	};

	const getTotalPrice = () => {
		var reg = /[$,]/g;
		var total = cart.reduce((a, b) => {
			var price = getProductById(b.id).offer.price;
			var num =
				Number(b.qty) *
				parseFloat(price.replace(reg, (s) => ''),10)
                .toFixed(2); // Quantity * price
			return a + num;
		}, 0);
		return new Intl.NumberFormat().format(total);
	};

    const methods = {
        addProductToCart,
        deleteById,
        deleteAll,
        updateProductQuantity,
    }

    const properties = {
        cartLength: cart.reduce((a, b) => a + parseInt(b.qty), 0),
        totalPrice: getTotalPrice()
    }

    return [cart, setCart, methods, properties]
}

export default useLocalCart;
