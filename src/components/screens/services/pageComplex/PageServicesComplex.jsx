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
					category={'Комплексный ремонт'}
					advantages={advantages}
					title={'Комплексный ремонт квартир под ключ'}
					subtitle={
						'Реализуем проекты по кардинальному изменению облика квартир'
					}
					objectID={['4', '7']}
				/>
				<WrapperReviews />
				<WrapperServices />
				<FooterQuestion />
			</section>
		</>
	)
}

export default PageServicesComplex
