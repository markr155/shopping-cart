import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Cart from './Pages/Cart';

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'store', element: <Store /> },
				{ path: 'about', element: <About /> },
				{ path: 'cart', element: <Cart /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}
