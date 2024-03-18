import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'
import { advantages } from './dataAdvantage'

const PageServicesComplex = () => {
	return (
		<>
			<section>
				<CoverServices
					category={'Ремонт квартир под ключ'}
					advantages={advantages}
					title={'Комплексный ремонт квартир под ключ'}
					subtitle={
						'Реализуем проекты по кардинальному изменению облика квартир'
					}
				/>
				<WrapperReviews />
				<WrapperServices />
				<FooterQuestion />
			</section>
		</>
	)
}

export default PageServicesComplex
