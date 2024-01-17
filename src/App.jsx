import NavBar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}
