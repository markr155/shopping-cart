import { Link } from 'react-router-dom';

export default function NavBar({ cart }) {
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
				<li>
					<Link to='cart'>
						Cart{cart.length > 0 ? `(${cart.length})` : null}
					</Link>
				</li>
			</ul>
		</div>
	);
}
