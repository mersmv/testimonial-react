import { StyledGrid } from './styles';
import { PROFILES_INFO } from '../../constants/profiles';
import Card from '../Card/Card';

const CardContainer = () => {
	return (
		<StyledGrid>
			{PROFILES_INFO.map(card => (
				<Card key={card.id} {...card}></Card>
			))}
		</StyledGrid>
	);
};

export default CardContainer;
