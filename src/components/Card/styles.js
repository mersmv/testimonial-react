import styled, { css } from 'styled-components';

const StyledCardContainer = styled.div`
	background-color: ${({ bgcolor }) => bgcolor};
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	position: relative;
	color: ${({ color }) => color};
	padding: 15px;

	&::after {
		${({ after }) =>
			after &&
			css`
				content: '';
				position: absolute;
				top: 0;
				right: 100px;
				width: 100px;
				height: 100px;
				background-image: url('/public/images/after.png');
				background-size: cover;
				background-repeat: no-repeat;
			`}
	}

	@media screen and (min-width: 768px) {
		grid-column-start: ${({ columnstart }) => columnstart};
		grid-column-end: ${({ columnend }) => columnend};
		grid-row-start: ${({ rowstart }) => rowstart};
		grid-row-end: ${({ rowend }) => rowend};
	}
`;

const StyledPersonalInfo = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`;

const StyledPersonalPhoto = styled.img`
	border-radius: 50%;
	border: solid 1px ${({ border }) => border};
`;

const StyledSpanContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-left: 10px;
`;

const StyledName = styled.h2`
	color: ${({ color }) => color};
	margin: 0;

	font-size: 0.8rem;
	font-weight: 400;
`;

const StyledPosition = styled.h3`
	color: ${({ subcolor }) => subcolor};
	margin: 0;

	font-size: 0.7rem;
	font-weight: 400;
`;

const StyledPrincipalText = styled.p`
	color: ${({ color }) => color};
	font-size: 1.4rem;
	font-weight: 600;
`;

const StyledSubText = styled.p`
	color: ${({ subcolor }) => subcolor};
	font-size: 1.2rem;
	font-weight: 400;
`;

export {
	StyledCardContainer,
	StyledPersonalInfo,
	StyledPersonalPhoto,
	StyledSpanContainer,
	StyledName,
	StyledPosition,
	StyledPrincipalText,
	StyledSubText
};
