import { useOutletContext } from "react-router-dom";

export default function Store() {
	const [cart, setCart] = useOutletContext();

	return (
		<>
			<h1>Store Page</h1>
		</>
	);
}
