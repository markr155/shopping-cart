import { useOutletContext } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

export default function Store() {
	const [cart, setCart] = useOutletContext();
	fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
	return (
		<>
			<h1>Store Page</h1>
		</>
	);
}
