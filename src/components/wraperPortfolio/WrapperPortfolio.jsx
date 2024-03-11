import Button from '../ui/button/Button'
import styles from './WrapperPortfolio.module.scss'
import PortfolioCart from './portfolioCart/PortfolioCart'

const WrapperPortfolio = () => {
	return (
		<div className={styles.wrapperPortfolio}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerHeader}>
						<div className={styles.containerContent}>
							<div className={styles.contentHeaderTitle}>
								ЧАСТЬ ВЫПОЛНЕННЫХ РАБОТ
							</div>
							<div className={styles.contentHeaderSubtitle}>
								Хороший ремонт – это реальность.
							</div>
						</div>
						<Button
							title={'ПОСМОТРЕТЬ ВСЕ РАБОТЫ'}
							fontSize={'16px'}
							redirectTo={'/portfolio'}
							pd={'20px 20px'}
						/>
					</div>
					<div className={styles.containerMain}>
						<div className={styles.containerMainItem}>
							<PortfolioCart />
						</div>
						<div className={styles.containerMainItem}>
							<PortfolioCart />
						</div>
						<div className={styles.containerMainItem}>
							<PortfolioCart />
						</div>
						<div className={styles.containerMainItem}>
							<PortfolioCart />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WrapperPortfolio
