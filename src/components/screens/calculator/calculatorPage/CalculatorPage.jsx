import CalculatorUI from '../../../calculator/CalculatorUI'
import Breadcrumbs from '../../../ui/breadCrumbs/BreadCrumbs'
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
							Cколько стоит ремонт квартиры
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
					<div className={styles.containerActions}>
						<div className={styles.actionItem}>
							<div className={styles.actionItemTitle}>
								Оставьте заявку на замер и расчет сметы
							</div>
							<div className={styles.actionItemSubtitle}>
								К вам приедет компетентный специалист. Он грамотно снимет замеры
								и проконсультирует по отделке помещений. На следующий день
								направим подробную смету со всеми расчетами.
							</div>
							<div className={styles.containerButton}>
								<button>ВЫЗВАТЬ ЗАМЕРЩИКА</button>
							</div>
						</div>
						<div className={styles.actionItem}>
							<img src='/static/paper.svg' alt='paper' />
							<div className={styles.actionItemTitle}>
								Уже делали расчет в других компаниях?
							</div>
							<div className={styles.actionItemSubtitle}>
								Отправьте нам файл со сметой, и мы сделаем расчет по нашему
								прайсу. А также проведем аудит на ошибки и скрытые работы.
							</div>
							<div className={styles.containerButtonItem}>
								<button>ОТПРАВИТЬ СВОЮ СМЕТУ</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalculatorPage
