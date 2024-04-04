import FooterQuestion from '../../../footer/footerQuestion/FooterQuestion'
import WrapperReviews from '../../../wrapperReviews/WrapperReviews'
import WrapperServices from '../../../wrapperServices/WrapperServices'
import CoverServices from '../coverServices/CoverServices'
import { advantages } from './dataAdvantage'

const PageRenovationNewBuilding = () => {
	return (
		<>
			<section>
				<CoverServices
					category={'Ремонт в новостройке'}
					advantages={advantages}
					title={'Ремонт в новостройке'}
					subtitle={'Ремонт в новостройке под ключ'}
					objectID={['1', '2']}
				/>
				<WrapperReviews />
				<WrapperServices />
				<FooterQuestion />
			</section>
		</>
	)
}

export default PageRenovationNewBuilding
