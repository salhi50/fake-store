import SectionTitle from '../components/SectionTitle';
import Products from '../components/Products';

// Products
import computers from '../data/products/pc.json';
import phones from '../data/products/phone.json';
import tv from '../data/products/tv.json';
import watches from '../data/products/watch.json';
import mouses from '../data/products/mouse.json';
import keyboards from '../data/products/keyboard.json';
import cameras from '../data/products/camera.json';
import gym from '../data/products/gym.json';
import playstations from '../data/products/playstation.json';
import beauty from '../data/products/beauty.json';
import games from '../data/products/games.json';
import anime from '../data/products/anime.json';
import { memo } from 'react';

const AllProducts = memo(function ({ addProductToCart }) {
	return (
		<div className='all-products col-md-9 col-xl-10'>
			{/* Computers section */}
			<section
				className='section'
				id='computers'>
				<SectionTitle>Computers</SectionTitle>
				<Products products={computers.data} addProductToCart={addProductToCart} />
			</section>
			{/* Phones section */}
			<section
				className='section'
				id='phones'>
				<SectionTitle>Phones</SectionTitle>
				<Products products={phones.data} addProductToCart={addProductToCart} />
			</section>
			{/* TV section */}
			<section
				className='section'
				id='tv'>
				<SectionTitle>TV</SectionTitle>
				<Products products={tv.data} addProductToCart={addProductToCart} />
			</section>
			{/* Watches section */}
			<section
				className='section'
				id='watches'>
				<SectionTitle>Watches</SectionTitle>
				<Products products={watches.data} addProductToCart={addProductToCart} />
			</section>
			{/* Mouses section */}
			<section
				className='section'
				id='mouses'>
				<SectionTitle>Mouses</SectionTitle>
				<Products products={mouses.data} addProductToCart={addProductToCart} />
			</section>
			{/* Keyboards section */}
			<section
				className='section'
				id='keyboards'>
				<SectionTitle>Keyboards</SectionTitle>
				<Products products={keyboards.data} addProductToCart={addProductToCart} />
			</section>
			{/* Cameras section */}
			<section
				className='section'
				id='cameras'>
				<SectionTitle>Cameras</SectionTitle>
				<Products products={cameras.data} addProductToCart={addProductToCart} />
			</section>
			{/* Gym section */}
			<section
				className='section'
				id='gym'>
				<SectionTitle>Gym</SectionTitle>
				<Products products={gym.data} addProductToCart={addProductToCart} />
			</section>
			{/* Playstations section */}
			<section
				className='section'
				id='playstation'>
				<SectionTitle>Playstations</SectionTitle>
				<Products products={playstations.data} addProductToCart={addProductToCart} />
			</section>
			{/* Beauty section */}
			<section
				className='section'
				id='beauty'>
				<SectionTitle>Beauty</SectionTitle>
				<Products products={beauty.data} addProductToCart={addProductToCart} />
			</section>
			{/* Games section */}
			<section
				className='section'
				id='games'>
				<SectionTitle>Games</SectionTitle>
				<Products products={games.data} addProductToCart={addProductToCart} />
			</section>
			{/* Anime section */}
			<section
				className='section'
				id='anime'>
				<SectionTitle>Anime</SectionTitle>
				<Products products={anime.data} addProductToCart={addProductToCart} />
			</section>
		</div>
	);
})

export default AllProducts;
