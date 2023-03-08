import {
	StyledCardContainer,
	StyledName,
	StyledPersonalInfo,
	StyledPersonalPhoto,
	StyledPosition,
	StyledPrincipalText,
	StyledSpanContainer,
	StyledSubText
} from './styles';

const Card = ({
	bgcolor,
	img,
	color,
	subcolor,
	id,
	name,
	work,
	description,
	subdescription,
	border,
	columnstart,
	columnend,
	rowstart,
	rowend,
	after
}) => {
	return (
		<StyledCardContainer
			bgcolor={bgcolor}
			color={color}
			columnstart={columnstart}
			columnend={columnend}
			rowstart={rowstart}
			rowend={rowend}
			after={after}
		>
			<StyledPersonalInfo>
				<StyledPersonalPhoto border={border} src={img} alt='' />
				<StyledSpanContainer>
					<StyledName color={color}>{name}</StyledName>
					<StyledPosition subcolor={subcolor}>{work}</StyledPosition>
				</StyledSpanContainer>
			</StyledPersonalInfo>
			<StyledPrincipalText color={color}>{description}</StyledPrincipalText>
			<StyledSubText subcolor={subcolor}>{subdescription}</StyledSubText>
		</StyledCardContainer>
	);
};

export default Card;
