import WrapperReviews from '../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../wrapperServices/WrapperServices'
import AboutUsPage from './aboutUsPage/AboutUsPage'

const AboutUs = () => {
	return (
		<section>
			<AboutUsPage />
			<WrapperReviews />
			<WrapperServices />
		</section>
	)
}

export default AboutUs
