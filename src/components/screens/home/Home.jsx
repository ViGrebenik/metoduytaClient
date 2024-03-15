import { useMediaQuery } from 'react-responsive'
import FooterQuestion from '../../footer/footerQuestion/FooterQuestion'
import WrapperAdvantage from '../../landingPage/wrapperAdvantage/WrapperAdvantage'
import WrapperFAQ from '../../landingPage/wrapperFAQ/WrapperFAQ'
import WrapperStagesWork from '../../landingPage/wrapperStageWork/WrapperStagesWork'
import WrapperTeam from '../../landingPage/wrapperTeam/WrapperTeam'
import WrapperPortfolio from '../../wraperPortfolio/WrapperPortfolio'
import WrapperReviews from '../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../wrapperServices/WrapperServices'
import HomeBanner from '../../wrappers/banner/HomeBanner'

const Home = () => {
	const isMobile = useMediaQuery({ maxWidth: 724 })
	return (
		<>
			<section>
				<HomeBanner />
			</section>
			<section>
				<WrapperPortfolio />
			</section>
			<section>
				<WrapperReviews />
			</section>
			<section>
				<WrapperServices />
			</section>
			<section>
				<WrapperAdvantage />
			</section>
			{!isMobile && (
				<section>
					<WrapperStagesWork />
				</section>
			)}
			<section>
				<WrapperTeam />
			</section>
			<section>
				<WrapperFAQ />
			</section>
			<section>
				<FooterQuestion />
			</section>
		</>
	)
}

export default Home
