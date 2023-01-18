import QuickLink from './QuickLink';

import { AiOutlineClose } from 'react-icons/ai'

import { MdComputer , MdPhoneAndroid , MdSmartToy } from 'react-icons/md';
import { SlScreenDesktop } from 'react-icons/sl';
import { BsSmartwatch , BsMouse , BsKeyboard } from 'react-icons/bs';
import { BiWebcam , BiDumbbell } from 'react-icons/bi';
import { FaPlaystation } from 'react-icons/fa';
import { RiInkBottleFill } from 'react-icons/ri'
import { CgGames } from 'react-icons/cg';
import { memo } from 'react';

const ProductsAside = memo(function ({ className , handleClose }) {
	return (
		<aside className={className}>
			<button className='d-md-none btn btn-sm position-absolute'
			style={{top: '1rem', right: '1rem'}} onClick={handleClose}>
				<AiOutlineClose size="1.5em" color='#555' />
			</button>
			<ul className='quick-links-menu list-unstyled border rounded-3'>
				<QuickLink
					title='Computers'
					target="#computers"
					icon={<MdComputer size='1.2em' />}
				/>
				<QuickLink
					title='Phones'
					target="#phones"
					icon={<MdPhoneAndroid size='1.2em' />}
				/>
				<QuickLink
					title='TV'
					target="#tv"
					icon={<SlScreenDesktop size='1.2em' />}
				/>
				<QuickLink
					title='Watches'
					target="#watches"
					icon={<BsSmartwatch size='1.2em' />}
				/>
				<QuickLink
					title='Mouses'
					target="#mouses"
					icon={<BsMouse size='1.2em' />}
				/>
				<QuickLink
					title='Keyboards'
					target="#keyboards"
					icon={<BsKeyboard size='1.2em' />}
				/>
				<QuickLink
					title='Cameras'
					target="#cameras"
					icon={<BiWebcam size='1.2em' />}
				/>
				<QuickLink
					title='Gym'
					target="#gym"
					icon={<BiDumbbell size='1.2em' />}
				/>
				<QuickLink
					title='Playstations'
					target="#playstation"
					icon={<FaPlaystation size='1.2em' />}
				/>
				<QuickLink
					title='Beauty'
					target="#beauty"
					icon={<RiInkBottleFill size='1.2em' />}
				/>
				<QuickLink
					title='Games'
					target="#games"
					icon={<CgGames size='1.2em' />}
				/>
				<QuickLink
					title='Anime'
					target="#anime"
					icon={<MdSmartToy size='1.2em' />}
				/>
			</ul>
		</aside>
	);
})

export default ProductsAside;
