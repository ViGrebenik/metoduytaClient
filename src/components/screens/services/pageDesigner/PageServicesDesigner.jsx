import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'
import { advantages } from './dataAdvantage'

const PageServicesDesigner = () => {
	return (
		<>
			<section>
				<CoverServices
					category={'Услуги дизайн интерьера'}
					advantages={advantages}
					title={'ДИЗАЙН ИНТЕРЬЕРА В САНКТ - ПЕТЕРБУРГЕ И МОСКВЕ '}
					subtitle={' Дизайнерский ремонт от А до Я с гарантией качества'}
				/>
				<WrapperReviews />
				<WrapperServices />
				<FooterQuestion />
			</section>
		</>
	)
}

export default PageServicesDesigner
