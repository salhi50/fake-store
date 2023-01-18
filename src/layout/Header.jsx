import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Header({ cartLength, handleClick }) {
	var length = Number(cartLength) > 99 ? '+99' : cartLength;

	return (
		<header className='header-page p-3 sticky-top'>
			<div className='container-xxl d-flex align-items-center justify-content-between'>
				{/* Header left */}
				<div className='header-left d-flex align-items-center'>
					{handleClick ? (
						<button
							className='btn my-0 p-0 ms-0 me-3 d-md-none header-icon'
							onClick={handleClick}>
							<HiOutlineMenuAlt2
								size='1.5em'
								className='text-white'
							/>
						</button>
					) : null}
					<Link
						to='/'
						className='text-decoration-none text-white'>
						<h3 className='m-0'>Ecoweb</h3>
					</Link>
				</div>
				{/* Header right */}
				<div className='header-right d-flex align-items-center'>
					<Link
						to='/cart'
						className='text-white text-decoration-none d-flex align-items-center position-relative header-icon'>
						<AiOutlineShoppingCart
							size='1.5em'
							className='ms-3'
						/>
						<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary'>
							{length}
							<span className='visually-hidden'>Cart</span>
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
