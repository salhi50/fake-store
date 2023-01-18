import Header from '../layout/Header';
import SectionTitle from '../components/SectionTitle';
import CartEmpty from '../components/CartEmpty';
import CartProduct from '../components/CartProduct';
import CartHeader from '../components/CartHeader';

import useLocalCart from '../hooks/useLocalCart';

import { getProductById} from '../utils/helper-functions';
import { memo } from 'react';

const Cart = memo(function () {

	const [cart, , methods, properties] = useLocalCart();

	const getAllCartProducts  = () => {
		return (
			cart.map(({ id }) => getProductById(id))
				.map((product, indx) => (
					<CartProduct
						key={indx}
						product={product}
						quantity={cart[indx].qty}
						deleteFunc={methods.deleteById}
						updateFunc={methods.updateProductQuantity}
					/>
				))
		)
	}

	return (
		<div className='cart-wrapper'>
			<Header cartLength={properties.cartLength} />
			<main className='main-content'>
				<div className='container-xxl'>
					<section className='section'>
						<SectionTitle>Cart</SectionTitle>
						{properties.cartLength > 0 ? (
							<>
								<div className='cart-products p-3'>
									<CartHeader 
										totalPrice={properties.totalPrice} 
										deleteAll={methods.deleteAll}
									/>
									{ getAllCartProducts() }
								</div>
							</>
						) : <CartEmpty />}
					</section>
				</div>
			</main>
		</div>
	);
})

export default Cart;
