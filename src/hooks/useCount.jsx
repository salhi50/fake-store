import { useState } from 'react';

function useCount(initialValue, min = null, max = null) {
	const [count, setCount] = useState(initialValue);

	const increaseCount = () => {
		if (max) {
			if (Number(count) + 1 > max) setCount(max);
			else setCount(Number(count));
		} else {
			setCount((count) => Number(count) + 1);
		}
	};

	const decreaseCount = () => {
		if (min) {
			if (Number(count) - 1 < min) setCount(min);
			else setCount(count => Number(count) - 1);
		} else {
			setCount((count) => Number(count) - 1);
		}
	};

	return [count, setCount, increaseCount, decreaseCount];
}

export default useCount;
