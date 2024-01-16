import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div>
			<h1>Store Name</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='store'>Store</Link>
				</li>
				<li>
					<Link to='about'>About</Link>
				</li>
			</ul>
		</div>
	);
}
