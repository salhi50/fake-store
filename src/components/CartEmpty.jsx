import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { memo } from 'react';

const CartEmpty = memo(function () {
	return (
		<div className='cart-empty p-3'>
			<p className='mb-1'>Your cart is empty</p>
            <Link to="/" className='text-decoration-none'>
                <button className='btn btn-sm p-0 main-link'>
                    <span>Explore products</span>
                    <BsArrowRight className='ms-1' />
                </button>
            </Link>
		</div>
	);
})

export default CartEmpty;
