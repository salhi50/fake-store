import { memo, useEffect, useState } from 'react';
import useLocalCart from '../hooks/useLocalCart';

import Header from '../layout/Header';
import ProductsAside from '../components/ProductsAside';
import AllProducts from '../components/AllProducts';

import { getActiveSectionOnScrolling } from '../utils/helper-functions';

const Home = memo(function () {
	const [asideHidden, setAsideHidden] = useState(true); // On mobiles screens

	const [, , methods, properties] = useLocalCart();

	useEffect(() => {
		// hide aside on mobiles when we click on a link on aside
		getActiveSectionOnScrolling(setAsideHidden);
	}, []);

	return (
		<div className='home-wrapper'>
			<Header
				cartLength={properties.cartLength}
				handleClick={() => setAsideHidden(false)}
			/>
			<main
				className='main-content'
				data-asidehidden={asideHidden}>
				<div className='overlay'></div>
				<div className='container-xxl'>
					<div className='row'>
						<ProductsAside
							className='col-md-3 col-xl-2 d-md-block position-sticky align-self-start'
							handleClose={() => setAsideHidden(true)}
						/>
						<AllProducts addProductToCart={methods.addProductToCart} />
					</div>
				</div>
			</main>
		</div>
	);
})

export default Home;
