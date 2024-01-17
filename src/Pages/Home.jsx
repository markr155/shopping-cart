import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<img alt='shop image'></img>
			<button>
				<Link to='store'>Shop Now</Link>
			</button>
		</>
	);
}
