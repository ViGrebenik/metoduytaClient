/* eslint-disable react/prop-types */
import SliderMain from '../sliderMain/SliderMain'
import styles from './PortfolioCart.module.scss'

const PortfolioCart = ({ portfolioPage = false }) => {
	return (
		<>
			<div className={styles.mainItemBlockSlider}>
				<SliderMain portfolioPage={portfolioPage} />
			</div>
			<div className={styles.mainItemContent}>
				<div className={styles.contentItemTitle}>
					<div
						className={`${styles.titleService} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						КАПИТАЛЬНЫЙ РЕМОНТ
					</div>
					<div
						className={`${styles.titleCheck} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						<img src='/static/slider/geolocated.svg' alt='geolocatedIcon' />
						Ул.Cавушкина 12к3
					</div>
				</div>
				<div className={styles.contentItemSubtitle}>
					<div
						className={`${styles.subtitleQuadrature} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						74 м²
					</div>
					<div
						className={`${styles.subtitleAddress} ${
							portfolioPage ? styles.portfolioPage : ''
						}`}
					>
						710 000 т.р
					</div>
				</div>
			</div>
		</>
	)
}

export default PortfolioCart
