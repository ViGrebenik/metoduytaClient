/* eslint-disable react/prop-types */
import { mockData } from '../mocData'
//
import SliderMain from '../sliderMain/SliderMain'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ portfolioPage = false, objectID }) => {
	const { type, price, area, location } = mockData.find(
		item => item.id === +objectID
	)
	const priceConverter = price.toLocaleString('en', {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	})
	return (
		<>
			<div className={styles.mainItemBlockSlider}>
				<SliderMain objectID={objectID} portfolioPage={portfolioPage} />
			</div>
			<div className={styles.mainItemContent}>
				<div className={styles.contentItemTitle}>
					<div
						className={`${styles.titleService} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						{type}
					</div>
					<div
						className={`${styles.titleCheck} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						<img src='/static/slider/geolocated.svg' alt='geolocatedIcon' />
						{location}
					</div>
				</div>
				<div className={styles.contentItemSubtitle}>
					<div
						className={`${styles.subtitleQuadrature} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						{area} м²
					</div>
					<div
						className={`${styles.subtitleAddress} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						{priceConverter} т.р
					</div>
				</div>
			</div>
		</>
	)
}

export default PortfolioCart
