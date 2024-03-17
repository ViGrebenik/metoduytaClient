import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'

const PageServicesComplex = () => {
	return (
		<>
			<section>
				<CoverServices
					title={'КАПИТАЛЬНЫЙ РЕМОНТ КВАРТИР'}
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
