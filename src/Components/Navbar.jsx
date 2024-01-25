import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NavContainer = styled.ul`
	display: flex;
	list-style: none;
`;

const Links = styled.li`
	padding-right: 8px;
	
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

const Heading = styled.h1`
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const NavBar = ({ cart }) => {
	return (
		<Container>
			<Heading>FakeStore 92</Heading>
			<NavContainer>
				<Links>
					<Link to='/'>Home</Link>
				</Links>
				<Links>
					<Link to='store'>Store</Link>
				</Links>
				<Links>
					<Link to='about'>About</Link>
				</Links>
				<Links>
					<Link to='cart'>
						Cart{cart.length > 0 ? `(${cart.length})` : null}
					</Link>
				</Links>
			</NavContainer>
		</Container>
	);

	NavBar.PropTypes = {
		cart: PropTypes.array.isRequired,
	};
};

export default NavBar;
