import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/helper-functions';
import useLocalCart from '../hooks/useLocalCart';

import Header from '../layout/Header';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';

import { AiTwotoneStar } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { memo , useEffect } from 'react';
import NotFoundPage from './NotFound';

const Product = memo(function () {
	const { id } = useParams();
	const [, , methods, properties] = useLocalCart();

	const product = getProductById(id);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

	if (product) {

		const getImages = () => {
			return product.product_photos.map((img, indx) => (
				<figure className='d-flex align-items-center justify-content-center'>
					<img
						key={indx}
						src={img}
						alt={product.product_title}
					/>
				</figure>
			));
		};

		const getRatingStars = () => {
			return [...Array(5)].map((_, indx) => (
				<AiTwotoneStar
					key={indx}
					size='1.1em'
					color='#e79a0e'
				/>
			));
		};

		const getFeatures = () => {
			var features = product.product_attributes;
			return features ? (
				<>
					<h6 className='fw-bold'>Product informations</h6>
					<ul className='list-unstyled menu-info'>
						{Object.keys(features).map((feature, indx) => (
							<li
								key={indx}
								className='d-flex align-items-center justify-content-between border-bottom p-2 flex-wrap'>
								<small className='me-2'>{feature}</small>
								<small className='text-secondary'>{features[feature]}</small>
							</li>
						))}
					</ul>
				</>
			) : null;
		};

		const getSource = () => {
			return (
				<>
					<h6 className='fw-bold'>Product Source</h6>
					<ul>
						<li>
							<a href={product.product_page_url} target='_blank' className='main-link'>
								Original store
							</a>
						</li>
						<li>
							<a href={product.product_offers_page_url} target='_blank' className='main-link'>
								Offers page
							</a>
						</li>
						<li>
							<a href={product.product_specs_page_url} target='_blank' className='main-link'>
								Specs page
							</a>
						</li>
						<li>
							<a href={product.product_reviews_page_url} target='_blank' className='main-link'>
								Reviews page
							</a>
						</li>
					</ul>
				</>
			);
		};

		return (
			<div className='product-wrapper'>
				<Header cartLength={properties.cartLength} />
				<div className='container-xxl'>
					<main className='main-content'>
						<div className='row'>
							{/* Product Images */}
							<div className='col-lg-6 order-lg-2'>
								<section className='section'>
									<SectionTitle>Product Images</SectionTitle>
									<div className='slider-container p-3'>
										<Slider images={getImages()} />
									</div>
								</section>
							</div>
							<div className='col-lg-6'>
								{/* Pricing and order */}
								<section className='section'>
									<SectionTitle>Pricing and order</SectionTitle>
									<div className='pricing-order p-3'>
										<h5>{product.product_title}</h5>
										<div className='rating d-flex align-items-center'>
											{getRatingStars()}(
											<span className='text-secondary'>
												{product.product_num_reviews}
											</span>
											)
										</div>
										<div className='pricing d-flex justify-content-between flex-wrap align-items-center'>
											<strong className='fs-4 my-3 fw-bold me-3'>
												{product.offer.price}
											</strong>
											<button
												className='btn btn-lg btn-primary d-flex align-items-center justify-content-center'
												type='button'
												onClick={() =>
													methods.addProductToCart(product.product_id)
												}>
												<FaCartPlus size='1.2em' />
												<span className='ms-3'>Add to cart</span>
											</button>
										</div>
									</div>
								</section>
								{/* Product details */}
								<section className='section'>
									<SectionTitle>Product Details</SectionTitle>
									<div className='product-details p-3'>
										<h6 className='fw-bold'>Desctiption</h6>
										<p className='fs-6 text-secondary'>
											{product.product_description}
										</p>
										{getFeatures()}
										{getSource()}
									</div>
								</section>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	} else {
		return <NotFoundPage />;
	}
});

export default Product;
