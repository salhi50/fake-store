import { Link } from 'react-router-dom';

import { memo, useEffect } from 'react';
import useCount from '../hooks/useCount';

const CartProduct = memo(function ({ product, quantity, deleteFunc , updateFunc}) {

	const {
		product_id:id,
		product_photos:thumbnail,
		product_title:title,
		offer:{price}
	} = product;

	const [
		productQuantity, setProductQuantity,
		increaseCount, decreaseCount
	] = useCount(quantity, 1); // params: initailValue, minCount, maxCount

	const updateCount = (value) => {
		var num = Number(value);
		if(num >= 1) updateFunc(id, parseInt(num, 10));
		else updateFunc(id, 1);
	}

	const handleChange = (e) => {
		setProductQuantity(e.target.value);
		updateCount(e.target.value);
	}


	useEffect(() => {
		updateCount(productQuantity);
	}, [id, productQuantity]);

	return (
			<div className='box row p-3 border-bottom'>
				<Link to={'/'+id} className='box-image col-lg-3 col-4 p-2 d-flex justify-content-center'>
					<img src={thumbnail[0]} className='img-fluid' alt={title} />
				</Link>
				<div className='box-details col-lg-9 col-8'>
					<Link to={'/'+id} className='text-decoration-none text-black cart-product-title'>
						<h6 className='line-length-2' title={title}>
							{title}
						</h6>
					</Link>
					<p className='fs-4 fw-bold m-0'>{price}</p>
					<div className='quantity d-flex align-items-center my-3'>
						<span className='text-secondary'>Quantity: </span>
						<div className='input-group input-group-sm ms-3'>
							<button className='btn btn-light border' onClick={decreaseCount}>-</button>
							<input className='form-control text-center' value={productQuantity} type='number' onChange={handleChange} />
							<button className='btn btn-light border' onClick={increaseCount}>+</button>
						</div>
					</div>
					<div className="delete-from-cart d-flex justify-content-end">
						<button className='btn border btn-sm text-primary' onClick={() => deleteFunc(id)}>Delete</button>
					</div>
				</div>
			</div>
	);
})

export default CartProduct;
