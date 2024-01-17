import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return (
		<div>
			<h4>This page doesn't exist!</h4>
			<Link to='/'>Click here to go back to the Home Page</Link>
		</div>
	);
}
