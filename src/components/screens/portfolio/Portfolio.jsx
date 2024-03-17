import WrapperReviews from '../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../wrapperServices/WrapperServices'
import PortfolioScreen from './portfolioScreen/PortfolioScreen'

const Portfolio = () => {
	return (
		<>
			<section>
				<PortfolioScreen />
				<WrapperReviews />
				<WrapperServices />
			</section>
		</>
	)
}

export default Portfolio
