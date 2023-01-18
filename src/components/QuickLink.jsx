import { memo } from "react";

const QuickLink = memo(function ({ title, icon , target}) {
	return (
		<li className='quick-link-item'>
			<a href={target} className='text-center py-2 px-3 border-bottom text-decoration-none text-secondary d-flex align-items-center quick-link'>
				{ icon }
				<span className='ms-3'>{title}</span>
			</a>
		</li>
	);
})

export default QuickLink;
