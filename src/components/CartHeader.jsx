import { memo } from "react";

const CartHeader = memo(({ totalPrice , deleteAll }) => {
	return (
		<div className='up-cart p-md-3 p-2 position-sticky bg-white fs-4 d-flex justify-content-between align-items-center border-bottom z-3'>
			<div className='total fs-4'>
				<span className='fw-light'>Total price: </span>
				<strong className='text-primary text-wrap'>
					${totalPrice}
				</strong>
			</div>
		<button className='btn btn-sm text-secondary ms-3 flex-shrink-0' onClick={deleteAll}>
			Delete All
		</button>
	</div>
	)
})

export default CartHeader;