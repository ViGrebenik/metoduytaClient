import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'
import { advantages } from './dataAdvantage'

const PageRedecorating = () => {
	return (
		<>
			<section>
				<CoverServices
					category={'Косметический ремонт'}
					advantages={advantages}
					title={'Косметический ремонт'}
					subtitle={'Косметический ремонт под ключ'}
					objectID={['6', '9']}
				/>
				<WrapperReviews />
				<WrapperServices />
				<FooterQuestion />
			</section>
		</>
	)
}

export default PageRedecorating
