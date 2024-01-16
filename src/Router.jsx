import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Store from './Pages/Store';
import NavBar from './Components/Navbar';

export default function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/store',
			element: <Store />,
		},
		{
			path: '/about',
			element: <About />,
		},
	]);

	return <RouterProvider router={router} />;
}
