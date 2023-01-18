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

import { toast } from 'react-toastify';



const allProducts = [].concat(
	computers.data,
	phones.data,
	tv.data,
	watches.data,
	mouses.data,
	keyboards.data,
	cameras.data,
	gym.data,
	playstations.data,
	beauty.data,
	games.data,
	anime.data,
);

export const getProductById = (id) => {
	var product = allProducts.find(({ product_id }) => {
		return id === product_id;
	});
	return product;
};

export const notify = (message) => {
	toast.success(message, {
		position: 'top-right',
		autoClose: 500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
};

export const getActiveSectionOnScrolling = (setAsideHidden) => {
	const productSections = [...document.querySelectorAll('.home-wrapper .section')];
	const quickLinks = [...document.querySelectorAll('.quick-link-item a')];
	quickLinks[0].classList.add('active');

	const getFocusedSection = () => {
		var focusedSection = productSections.findIndex((section) => {
			var gap = 1.5 * 15; // The y gap between sections: 1.5rem
			return (
				window.scrollY >= section.offsetTop - gap &&
				window.scrollY <= section.offsetTop + section.clientHeight + gap
			);
		});

		if (focusedSection !== -1) {
			quickLinks.forEach((link) => link.classList.remove('active'));
			quickLinks[focusedSection].classList.add('active');
		}
	};

	window.addEventListener('scroll', getFocusedSection);
	quickLinks.forEach((link) =>
		link.addEventListener('click', () => setAsideHidden(true)),
	);

};
