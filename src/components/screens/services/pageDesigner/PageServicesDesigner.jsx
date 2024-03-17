import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'

const PageServicesDesigner = () => {
	return (
		<>
			<section>
				<CoverServices
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
