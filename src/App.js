import {HashRouter , Routes , Route } from 'react-router-dom';
import { ToastContainer , Flip } from 'react-toastify';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFoundPage from './pages/NotFound';

import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
	return (
		<>
			<HashRouter basename='/'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/:id' element={<Product />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</HashRouter>
		<ToastContainer transition={Flip} />
		</>
	)
}

export default App;