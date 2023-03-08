import styled from 'styled-components';

const StyledGrid = styled.div`
	width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	gap: 15px;
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: 768px) {
		width: 1500px;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
`;

export { StyledGrid };
