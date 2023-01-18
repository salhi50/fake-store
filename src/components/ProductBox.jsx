import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { memo } from 'react';

const ProductBox = memo(function ({product , addProductToCart}) {
	
	const {
		product_id:id,
		product_title:title,
		product_photos:thumbnail,
		offer:{price, store_name}
	} = product;

    // limit product store text length
    const maxLength = 20;
    const productSource = store_name.length > maxLength
                          ? store_name.slice(0, maxLength) + '...'
                          : store_name;
	return (
		<div className='product-box col'>
			<div className='box d-flex justify-content-between flex-md-column'>
				{/* Box image */}
				<Link to={'/'+id} className='d-block box-image d-flex align-items-center justify-content-center text-decoration-none text-black'>
					<img src={thumbnail[0]} alt={title} loading="lazy" />	
				</Link>
				{/* Details */}
				<div className='box-details p-3 flex-grow-1 d-flex flex-column justify-content-between'>
					<div className='box-details-up'>
						<Link to={'/'+id} className='text-decoration-none text-black'>
							<h6 className='mb-0 line-length-2 box-title text-break' title={title}>{title}</h6>
						</Link>
						<small className='text-secondary d-block line-length-1'title={store_name} >From {productSource}</small>
					</div>
					<div className='box-details-down d-flex align-items-center justify-content-between'>
						<span className='fs-5 fw-bold'>{price}</span>
						<button className='btn btn-primary btn-sm add-cart-btn-sm' onClick={() => addProductToCart(id)}>
							<FaCartPlus size='1.2em' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
})

export default ProductBox;
