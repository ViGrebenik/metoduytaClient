import { useMediaQuery } from 'react-responsive'
import Button from '../ui/button/Button'
import PortfolioCart from '../ui/portfolioCart/PortfolioCart'
import styles from './WrapperPortfolio.module.scss'

const WrapperPortfolio = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
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
						<div className={styles.containerContent}>
							{!isMobile && (
								<Button
									title={'ПОСМОТРЕТЬ ВСЕ РАБОТЫ'}
									fontSize={'16px'}
									redirectTo={'/portfolio'}
									pd={'20px 20px'}
								/>
							)}
						</div>
					</div>
					<div className={styles.containerMain}>
						<PortfolioCart check={true} objectID={'7'} />
						<PortfolioCart check={true} objectID={'4'} />
						<PortfolioCart check={true} objectID={'3'} />
					</div>
					{isMobile && (
						<Button
							title={'ПОСМОТРЕТЬ ВСЕ РАБОТЫ'}
							fontSize={'16px'}
							redirectTo={'/portfolio'}
							pd={'20px 20px'}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default WrapperPortfolio
