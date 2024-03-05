import WrapperAdvantage from '../../landingPage/wrapperAdvantage/WrapperAdvantage'
import WrapperFAQ from '../../landingPage/wrapperFAQ/WrapperFAQ'
import WrapperStagesWork from '../../landingPage/wrapperStageWork/WrapperStagesWork'
import WrapperTeam from '../../landingPage/wrapperTeam/WrapperTeam'
import WrapperPortfolio from '../../wraperPortfolio/WrapperPortfolio'
import WrapperReviews from '../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../wrapperServices/WrapperServices'
import HomeBanner from '../../wrappers/banner/HomeBanner'

const Home = () => {
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
			<section>
				<WrapperStagesWork />
			</section>
			<section>
				<WrapperTeam />
			</section>
			<section>
				<WrapperFAQ />
			</section>
		</>
	)
}

export default Home
