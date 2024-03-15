import CalculatorUI from '../../../calculator/CalculatorUI'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
import FeedbackEstimate from '../../../wrappers/feedbackEstimate/FeedbackEstimate'
import styles from './CalculatorPage.module.scss'
import { dataText } from './DataText'

const CalculatorPage = () => {
	return (
		<div className={styles.calculatorPage}>
			<div className={styles.container}>
				<div className={styles.containerBlock}>
					<div className={styles.containerBreadCrumbs}>
						<Breadcrumbs
							breadcrumbs={[
								{ name: 'Главная', url: '/' },
								{ name: 'Категория', url: '/category' },
								{ name: 'Страница', url: '/page' }
							]}
						/>
					</div>
					<div className={styles.containerHeader}>
						<div className={styles.contentHeaderTitle}>
							Калькулятор расчета ремонта
						</div>
						<div className={styles.contentHeaderSubtitle}>
							Рассчитайте примерную стоимость работ по ремонту вашей квартиры
						</div>
					</div>
					<div className={styles.containerDescription}>
						<div className={styles.descriptionItem}>{dataText.textO1}</div>
						<div className={styles.descriptionItem}>{dataText.textO2}</div>
					</div>
					<div className={styles.containerCalculator}>
						<CalculatorUI />
					</div>
					<FeedbackEstimate />
				</div>
			</div>
		</div>
	)
}

export default CalculatorPage
